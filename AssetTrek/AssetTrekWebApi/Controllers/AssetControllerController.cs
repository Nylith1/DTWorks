using AssetTrekWebApi.Repositories;
using AssetTrekWebApi.Requests;
using AssetTrekWebApi.Responses;
using Microsoft.AspNetCore.Mvc;

namespace AssetTrekWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AssetController : ControllerBase
    {
        private readonly IAssetRepository repository;

        public AssetController(IAssetRepository repository)
        {
            this.repository = repository;
        }

        [HttpPost]
        [Route("add")]
        public void Add(AddAssetRequest request)
        {
            repository.AddAsset(request.Name, request.Quantity);
        }

        [HttpGet]
        [Route("get-assets")]
        public List<AssetResponse> Add()
        {
            var value = repository.GetAssets();
            return value.Select(x => new AssetResponse() { Name = x.Key, Quantity = x.Value }).ToList();
        }
    }
}