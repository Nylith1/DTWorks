using AssetTrekWebApi.Data.DataModels;
using AssetTrekWebApi.DataAccess;

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
        var data = new CandleData()
        {
            Name = name,
            Price = price,
            Image = image
        };


        if (FakeDatabase.Candles.ContainsKey(name))
        {
            return;
        }
        else
        {
            db.InsertRecords<CandleData>("Candles", data);

            FakeDatabase.Candles.Add(name, (price, image));
        }
    }

    public List<CandleData> GetCandles()
    {
        var data = db.GetRecords<CandleData>("Candles");
        return data;
    }

    public void RemoveCandles(Guid id)
    {
        db.RemoveRecords<CandleData>("Candles", id);
    }
}
