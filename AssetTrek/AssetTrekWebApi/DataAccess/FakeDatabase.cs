namespace AssetTrekWebApi.DataAccess;

public static class FakeDatabase
{
    public static Dictionary<string, decimal> Assets { get; set; } = new();
}
