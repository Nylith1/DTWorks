using AssetTrekWebApi.Repositories;
using AssetTrekWebApi.Requests.ForCandela;
using AssetTrekWebApi.Responses.ForCandelaResponse;
using Microsoft.AspNetCore.Mvc;
using System.Reflection.Metadata;

namespace AssetTrekWebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ForCandelaController : ControllerBase
    {
        private readonly IForCandelaRepository repository;

        public ForCandelaController(IForCandelaRepository repository)
        {
            this.repository = repository;
        }

        [HttpPost]
        [Route("add-candle")]
        public void Add(AddCandleRequest request)
        {
            repository.AddCandle(request.Name, request.Price, request.Image);
        }

        [HttpGet]
        [Route("get-candles")]
        public List<GetCandlesResponse> GetCandles()
        {
            var candles = repository.GetCandles().Select(x => new GetCandlesResponse() { Image = x.Value.image, Price = x.Value.price, Name = x.Key }).ToList();

            return candles;
        }
    }
}
