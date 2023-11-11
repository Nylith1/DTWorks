using DTWorksWebApi.Repositories;
using DTWorks.Domain.AssetTrek;
using DTWorks.Domain.Dtos;
using MediatR;

namespace DTWorksWebApi.Handlers.AssetTrek;

public class AddAssetRequestHandler : IRequestHandler<AddAssetRequest, Unit>
{
    private readonly IAssetRepository assetRepository;

    public AddAssetRequestHandler(IAssetRepository assetRepository)
    {
        this.assetRepository = assetRepository;
    }

    public async Task<Unit> Handle(AddAssetRequest request, CancellationToken cancellationToken)
    {
        var assetTransaction = AssetTransaction.Create(new AssetTransactionDomainDto { Ticker = request.Ticker, BuyPrice = request.BuyPrice, Name = request.Name, Quantity = request.Quantity });

        assetRepository.AddAsset(assetTransaction);

        return await Task.FromResult(Unit.Value);
    }
}

public record AddAssetRequest : IRequest<Unit>
{
    public required string Ticker { get; init; }
    public required string Name { get; init; }
    public required decimal BuyPrice { get; init; }
    public required decimal Quantity { get; init; }
}
