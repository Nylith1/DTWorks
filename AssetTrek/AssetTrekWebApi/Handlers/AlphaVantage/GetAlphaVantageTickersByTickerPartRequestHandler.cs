using AssetTrekWebApi.Repositories;
using MediatR;

namespace AssetTrekWebApi.Handlers.AlphaVantage;

public class GetAlphaVantageTickersByTickerPartRequestHandler : IRequestHandler<GetAlphaVantageTickersByTickerPartRequest, IEnumerable<GetAlphaVantageTickersByTickerPartResponse>>
{
    private readonly IAlphaVantageRepository alphaVantageRepository;

    public GetAlphaVantageTickersByTickerPartRequestHandler(IAlphaVantageRepository alphaVantageRepository)
    {
        this.alphaVantageRepository = alphaVantageRepository;
    }

    public async Task<IEnumerable<GetAlphaVantageTickersByTickerPartResponse>> Handle(GetAlphaVantageTickersByTickerPartRequest request, CancellationToken cancellationToken)
    {
        var tickers = await alphaVantageRepository.GetTickerByTickerPart(request.TickerPart);

        return tickers.Select(x => new GetAlphaVantageTickersByTickerPartResponse() { Ticker = x.Ticker, Currency = x.Currency, Name = x.Name, Type = x.Type });
    }
}

public record GetAlphaVantageTickersByTickerPartRequest : IRequest<IEnumerable<GetAlphaVantageTickersByTickerPartResponse>>
{
    public required string TickerPart { get; init; }
}

public record GetAlphaVantageTickersByTickerPartResponse
{
    public required string Ticker { get; init; }
    public required string Name { get; init; }
    public required string Type { get; init; }
    public required string Currency { get; init; }
}
