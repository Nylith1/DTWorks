using AssetTrekWebApi.Repositories;
using AssetTrekWebApi.Requests.ForCandela;
using AssetTrekWebApi.Responses.ForCandelaResponse;
using Microsoft.AspNetCore.Mvc;

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
            var candles = repository.GetCandles().Select(x => new GetCandlesResponse() {Id = x.Id, Image = x.Image, Price = x.Price, Name = x.Name }).ToList();
            return candles;
        }

        [HttpDelete]
        [Route("remove-candle/{id}")]
        public void GetCandles(Guid id)
        {
            repository.RemoveCandles(id);
        }
    }
}
