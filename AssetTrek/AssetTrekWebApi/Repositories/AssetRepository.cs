using AssetTrekWebApi.DataAccess;

namespace AssetTrekWebApi.Repositories;

public class AssetRepository : IAssetRepository
{
    public void AddAsset(string name, decimal value)
    {
        if (FakeDatabase.Assets.ContainsKey(name))
        {
            FakeDatabase.Assets[name] = FakeDatabase.Assets[name] + value;
        }
        else
        {
            FakeDatabase.Assets.Add(name, value);
        }
    }

    public Dictionary<string, decimal> GetAssets()
    {
        return FakeDatabase.Assets;
    }

    public void RemoveAsset(string name)
    {
        if (FakeDatabase.Assets.ContainsKey(name))
        {
            FakeDatabase.Assets.Remove(name);
        }
    }
}
