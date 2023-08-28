namespace AssetTrekWebApi.Repositories
{
    public interface IForCandelaRepository
    {
        void AddCandle(string name, decimal price, byte[] image);
        Dictionary<string, (decimal price, byte[] image)> GetCandles();
    }
}