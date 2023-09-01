using AssetTrekWebApi.Data.DataModels;

namespace AssetTrekWebApi.Repositories
{
    public interface IForCandelaRepository
    {
        void AddCandle(string name, decimal price, byte[] image);
        List<CandleData> GetCandles();
        void RemoveCandles(Guid id);
    }
}