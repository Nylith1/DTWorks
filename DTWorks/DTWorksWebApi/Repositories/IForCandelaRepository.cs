using DTWorksWebApi.DataAccess.DataModels;

namespace DTWorksWebApi.Repositories;

public interface IForCandelaRepository
{
    void AddCandle(string name, decimal price, byte[] image);
    List<CandleData> GetCandles();
    void RemoveCandles(Guid id);
}