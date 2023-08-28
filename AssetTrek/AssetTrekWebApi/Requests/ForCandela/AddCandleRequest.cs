namespace AssetTrekWebApi.Requests.ForCandela
{
    public record AddCandleRequest
    {
        public required string Name { get; init; }
        public required decimal Price { get; init; }
        public required byte[] Image { get; init; }
    }
}
