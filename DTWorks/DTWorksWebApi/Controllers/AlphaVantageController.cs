using DTWorksWebApi.Handlers.AlphaVantage;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace DTWorksWebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class AlphaVantageController : ControllerBase
{
    private readonly IMediator mediator;

    public AlphaVantageController(IMediator mediator)
    {
        this.mediator = mediator;
    }

    [HttpGet]
    [Route(nameof(GetAlphaVantageTickersByTickerPart) + "/{tickerPart}")]
    public async Task<IEnumerable<GetAlphaVantageTickersByTickerPartResponse>> GetAlphaVantageTickersByTickerPart(string tickerPart)
    {
        var result = await mediator.Send(new GetAlphaVantageTickersByTickerPartRequest() { TickerPart = tickerPart });
        return result;
    }
}

