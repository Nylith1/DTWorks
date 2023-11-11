using AssetTrekWebApi.Repositories.Dtos;

namespace AssetTrekWebApi.Repositories;

public interface IAlphaVantageRepository
{
    Task<IEnumerable<AlphaVantageTickerDto>> GetTickerByTickerPart(string tickerPart);
}