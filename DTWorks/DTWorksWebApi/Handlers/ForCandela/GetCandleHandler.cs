using DTWorksWebApi.Repositories;
using MediatR;

namespace DTWorksWebApi.Handlers.ForCandela;

public class GetCandleHandler : IRequestHandler<GetCandlesRequest, List<GetCandlesResponse>>
{
    private readonly IForCandelaRepository repository;

    public GetCandleHandler(IForCandelaRepository repository)
    {
        this.repository = repository;
    }

    public async Task<List<GetCandlesResponse>> Handle(GetCandlesRequest request, CancellationToken cancellationToken)
    {
        var candles = repository.GetCandles().Select(x => new GetCandlesResponse() { Id = x.Id, Image = x.Image, Price = x.Price, Name = x.Name }).ToList();
        return await Task.FromResult(candles);
    }
}

public record GetCandlesRequest : IRequest<List<GetCandlesResponse>>
{
}

public record GetCandlesResponse
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public byte[] Image { get; set; }
}
