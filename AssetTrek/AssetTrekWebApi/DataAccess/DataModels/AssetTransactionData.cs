using MongoDB.Bson.Serialization.Attributes;

namespace AssetTrekWebApi.DataAccess.DataModels;

public record AssetTransactionData
{
    [BsonId]
    public Guid Id { get; init; }
    public string Ticker { get; init; } = "";
    public string Name { get; init; } = "";
    public decimal BuyPrice { get; init; }
    public DateTime Date { get; init; }
    public decimal Quantity { get; init; }
}
