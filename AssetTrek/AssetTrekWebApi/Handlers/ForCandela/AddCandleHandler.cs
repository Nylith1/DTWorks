using AssetTrekWebApi.Repositories;
using MediatR;

namespace AssetTrekWebApi.Handlers.ForCandela;

public class AddCandleHandler : IRequestHandler<AddCandleRequest, Unit>
{
    private readonly IForCandelaRepository repository;

    public AddCandleHandler(IForCandelaRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Unit> Handle(AddCandleRequest request, CancellationToken cancellationToken)
    {
        repository.AddCandle(request.Name, request.Price, request.Image);
        return await Task.FromResult(Unit.Value);
    }
}

public record AddCandleRequest : IRequest<Unit>
{
    public required string Name { get; init; }
    public required decimal Price { get; init; }
    public required byte[] Image { get; init; }
}
