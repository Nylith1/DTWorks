using DTWorksWebApi.Repositories;
using MediatR;

namespace DTWorksWebApi.Handlers.ForCandela;

public class RemoveCandleHandler : IRequestHandler<RemoveCandleRequest, Unit>
{
    private readonly IForCandelaRepository repository;

    public RemoveCandleHandler(IForCandelaRepository repository)
    {
        this.repository = repository;
    }

    public async Task<Unit> Handle(RemoveCandleRequest request, CancellationToken cancellationToken)
    {
        repository.RemoveCandles(request.Id);
        return await Task.FromResult(Unit.Value);
    }
}

public record RemoveCandleRequest : IRequest<Unit>
{
    public Guid Id { get; set; }
}
