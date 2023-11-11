using AssetTrekWebApi.Handlers.AssetTrek;
using DTWorks.Domain.AssetTrek;

namespace AssetTrekWebApi.Repositories;

public interface IAssetRepository
{
    void AddAsset(AssetTransaction domain);
}
