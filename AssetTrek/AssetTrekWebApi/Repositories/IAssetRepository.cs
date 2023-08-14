namespace AssetTrekWebApi.Repositories
{
    public interface IAssetRepository
    {
        void AddAsset(string name, decimal value);
        Dictionary<string, decimal> GetAssets();
        void RemoveAsset(string name);
    }
}
