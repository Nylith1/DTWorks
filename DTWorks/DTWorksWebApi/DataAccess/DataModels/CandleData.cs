using MongoDB.Bson.Serialization.Attributes;

namespace DTWorksWebApi.DataAccess.DataModels;

public class CandleData
{
    [BsonId]
    public Guid Id { get; set; }
    public string Name { get; set; }
    public decimal Price { get; set; }
    public byte[] Image { get; set; }
}
