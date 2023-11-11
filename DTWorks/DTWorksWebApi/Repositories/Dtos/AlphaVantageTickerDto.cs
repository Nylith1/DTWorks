using Newtonsoft.Json;

namespace DTWorksWebApi.Repositories.Dtos;

public record AlphaVantageTickerDto
{
    [JsonProperty("1. symbol")]
    public required string Ticker { get; init; }

    [JsonProperty("2. name")]
    public required string Name { get; init; }

    [JsonProperty("3. type")]
    public required string Type { get; init; }

    [JsonProperty("8. currency")]
    public required string Currency { get; init; }
}

public record AlphaVantageTickerBestMatches
{
    [JsonProperty("bestMatches")]
    public required IEnumerable<AlphaVantageTickerDto> AlphaVantageTickerDto { get; init; }
}
