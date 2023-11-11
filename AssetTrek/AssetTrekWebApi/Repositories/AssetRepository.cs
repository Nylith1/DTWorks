using AssetTrekWebApi.DataAccess;
using AssetTrekWebApi.DataAccess.DataModels;
using DTWorks.Domain.AssetTrek;

namespace AssetTrekWebApi.Repositories;

public class AssetRepository : IAssetRepository
{
    private readonly IDTWorksDb db;

    public AssetRepository(IDTWorksDb db)
    {
        this.db = db;
    }

    public void AddAsset(AssetTransaction domain)
    {
        db.InsertRecords(TableNames.AssetTransactions, new AssetTransactionData() { Name = domain.Name, Quantity = domain.Quantity, Date = domain.Date, Ticker = domain.Ticker, BuyPrice = domain.BuyPrice });
    }
}
