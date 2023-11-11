using DTWorks.Domain.Dtos;

namespace DTWorks.Domain.AssetTrek;

public class AssetTransaction
{
    public string Ticker { get; private set; } = string.Empty;
    public string Name { get; private set; } = string.Empty;
    public decimal BuyPrice { get; private set; }
    public DateTime Date { get; private set; }
    public decimal Quantity { get; private set; }

    private AssetTransaction() { }

    public static AssetTransaction Create(AssetTransactionDomainDto dto)
    {
        Validate(dto);

        return new AssetTransaction { Ticker = dto.Ticker, BuyPrice = dto.BuyPrice, Date = DateTime.Now, Name = dto.Name, Quantity = dto.Quantity };
    }

    private static void Validate(AssetTransactionDomainDto dto)
    {
        if (string.IsNullOrEmpty(dto.Name))
        {
            throw new Exception("Name is mandatory");
        }

        if (string.IsNullOrEmpty(dto.Ticker))
        {
            throw new Exception("Ticker is mandatory");
        }

        if (dto.Quantity == 0)
        {
            throw new Exception("Quantity can not be 0");
        }

        if (dto.BuyPrice <= 0)
        {
            throw new Exception("Buy price can not be 0 or negative");
        }
    }
}
