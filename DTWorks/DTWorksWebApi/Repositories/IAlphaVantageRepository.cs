using DTWorksWebApi.Repositories.Dtos;

namespace DTWorksWebApi.Repositories;

public interface IAlphaVantageRepository
{
    Task<IEnumerable<AlphaVantageTickerDto>> GetTickerByTickerPart(string tickerPart);
}