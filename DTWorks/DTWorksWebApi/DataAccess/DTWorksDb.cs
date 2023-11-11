using MongoDB.Bson;
using MongoDB.Driver;

namespace DTWorksWebApi.DataAccess;

public class DTWorksDb : IDTWorksDb
{
    private IMongoDatabase db;

    public DTWorksDb(string database)
    {
        var client = new MongoClient();
        db = client.GetDatabase(database);
    }

    public void InsertRecords<T>(string table, T record)
    {
        var collection = db.GetCollection<T>(table);
        collection.InsertOne(record);
    }

    public List<T> GetRecords<T>(string table)
    {
        var collection = db.GetCollection<T>(table);

        return collection.Find(new BsonDocument()).ToList();
    }

    public void RemoveRecords<T>(string table, Guid id)
    {
        var collection = db.GetCollection<T>(table);
        var filter = Builders<T>.Filter.Eq("Id", id);

        collection.DeleteOne(filter);
    }
}
