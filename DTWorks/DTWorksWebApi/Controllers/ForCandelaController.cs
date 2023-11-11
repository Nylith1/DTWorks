using DTWorksWebApi.Handlers.ForCandela;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace DTWorksWebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ForCandelaController : ControllerBase
{
    private readonly IMediator mediator;

    public ForCandelaController(IMediator mediator)
    {
        this.mediator = mediator;
    }

    [HttpPost]
    [Route("add-candle")]
    public async Task Add(AddCandleRequest request)
    {
        await mediator.Send(request);
    }

    [HttpGet]
    [Route("get-candles")]
    public async Task<List<GetCandlesResponse>> GetCandles()
    {
        return await mediator.Send(new GetCandlesRequest());
    }

    [HttpDelete]
    [Route("remove-candle/{id}")]
    public async Task GetCandle(Guid id)
    {
        await mediator.Send(new RemoveCandleRequest() { Id = id });
    }
}
