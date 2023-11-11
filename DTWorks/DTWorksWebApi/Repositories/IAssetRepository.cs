using DTWorksWebApi.Handlers.AssetTrek;
using DTWorks.Domain.AssetTrek;

namespace DTWorksWebApi.Repositories;

public interface IAssetRepository
{
    void AddAsset(AssetTransaction domain);
}
