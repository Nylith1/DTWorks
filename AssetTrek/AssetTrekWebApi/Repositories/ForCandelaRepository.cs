using AssetTrekWebApi.DataAccess;

namespace AssetTrekWebApi.Repositories
{
    public class ForCandelaRepository : IForCandelaRepository
    {
            public void AddCandle(string name, decimal price, byte[] image)
            {
                if (FakeDatabase.Candles.ContainsKey(name))
                {
                    return;
                }
                else
                {
                    FakeDatabase.Candles.Add(name, (price, image));
                }
            }

            public Dictionary<string, (decimal price, byte[] image)> GetCandles()
            {
                return FakeDatabase.Candles;
            }
    }
}
