namespace AssetTrekWebApi.DataAccess
{
    public static class FakeDatabase
    {
        public static Dictionary<string, decimal> Assets { get; set; } = new();
        public static Dictionary<string, (decimal price, byte[] image)> Candles { get; set; } = new();
    }
}
