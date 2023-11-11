using AssetTrekWebApi.Handlers.AlphaVantage;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace AssetTrekWebApi.Controllers;

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
    public async Task<ActionResult<IEnumerable<GetAlphaVantageTickersByTickerPartResponse>>> GetAlphaVantageTickersByTickerPart(string tickerPart)
    {
        var result = await mediator.Send(new GetAlphaVantageTickersByTickerPartRequest() { TickerPart = tickerPart });
        return result.ToActionResult();
    }
}

