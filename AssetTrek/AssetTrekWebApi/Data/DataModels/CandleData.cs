using MongoDB.Bson.Serialization.Attributes;

namespace AssetTrekWebApi.Data.DataModels
{
    public class CandleData
    {
        [BsonId]
        public Guid Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public byte[] Image { get; set; }
    }
}
