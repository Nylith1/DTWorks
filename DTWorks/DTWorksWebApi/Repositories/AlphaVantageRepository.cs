using DTWorksWebApi.Repositories.Dtos;
using Newtonsoft.Json;

namespace DTWorksWebApi.Repositories;

public class AlphaVantageRepository : IAlphaVantageRepository
{
    public async Task<IEnumerable<AlphaVantageTickerDto>> GetTickerByTickerPart(string tickerPart)
    {
        string query = $"https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords={tickerPart}&apikey={AppSettings.AlphaVantageApiKey}";

        using HttpClient client = new HttpClient();
        var json = await client.GetStringAsync(query);
        var bestMatches = JsonConvert.DeserializeObject<AlphaVantageTickerBestMatches>(json);

        return bestMatches?.AlphaVantageTickerDto ?? new List<AlphaVantageTickerDto>();
    }
}