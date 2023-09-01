﻿namespace AssetTrekWebApi.Responses.ForCandelaResponse
{
    public class GetCandlesResponse
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public byte[] Image { get; set; }
    }
}
