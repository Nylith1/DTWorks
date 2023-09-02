namespace AssetTrekWebApi.DataAccess;

public interface IDTWorksDb
{
    List<T> GetRecords<T>(string table);
    void InsertRecords<T>(string table, T record);
    void RemoveRecords<T>(string table, Guid id);
}
