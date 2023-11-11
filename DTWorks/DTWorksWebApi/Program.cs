using DTWorksWebApi.DataAccess;
using DTWorksWebApi.Repositories;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

var connectionString =
               builder
               .Configuration
               .GetConnectionString("Default");

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("https://localhost:4200").AllowAnyHeader();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IDTWorksDb>(_ => new DTWorksDb("DBWorks"));
builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));

builder.Services.AddScoped<IAssetRepository, AssetRepository>();
builder.Services.AddScoped<IForCandelaRepository, ForCandelaRepository>();
builder.Services.AddScoped<IAlphaVantageRepository, AlphaVantageRepository>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.Run();
