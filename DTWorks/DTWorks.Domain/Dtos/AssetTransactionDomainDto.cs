namespace DTWorks.Domain.Dtos;

public record AssetTransactionDomainDto
{
    public string Ticker { get; init; } = string.Empty;
    public string Name { get; init; } = string.Empty;
    public decimal BuyPrice { get; init; }
    public decimal Quantity { get; init; }
}
