using DTWorksWebApi.Handlers.AssetTrek;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace DTWorksWebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class AssetController : ControllerBase
{
    private readonly IMediator mediator;

    public AssetController(IMediator mediator)
    {
        this.mediator = mediator;
    }

    [HttpPost]
    [Route(nameof(AddAsset))]
    public async Task AddAsset(AddAssetRequest request)
    {
        await mediator.Send(request);
    }
}
