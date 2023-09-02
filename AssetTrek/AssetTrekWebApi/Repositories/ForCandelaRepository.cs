using AssetTrekWebApi.DataAccess;
using AssetTrekWebApi.DataAccess.DataModels;

namespace AssetTrekWebApi.Repositories;

public class ForCandelaRepository : IForCandelaRepository
{
    private readonly IDTWorksDb db;

    public ForCandelaRepository(IDTWorksDb db)
    {
        this.db = db;
    }

    public void AddCandle(string name, decimal price, byte[] image)
    {
        db.InsertRecords(TableNames.Candles, new CandleData() { Name = name, Price = price, Image = image });
    }

    public List<CandleData> GetCandles()
    {
        return db.GetRecords<CandleData>(TableNames.Candles);
    }

    public void RemoveCandles(Guid id)
    {
        db.RemoveRecords<CandleData>(TableNames.Candles, id);
    }
}
