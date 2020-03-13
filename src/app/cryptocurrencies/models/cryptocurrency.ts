export class Cryptocurrency {
	id: number;
	rank: number;
	symbol: string;
	price: number;
	change24h: number;

	name?: string;
	volume24h?: number;
	marketCap?: number;
	priceBTC?: number;
	change1h?: number;
	change7d?: number;
	totalSupply?: number;
	availableSupply?: number;

	static adaptForList(item: any, fiatCurrency: string): Cryptocurrency {
		const crypto = new Cryptocurrency();
		crypto.id = item.id;
		crypto.rank = item.cmc_rank;
		crypto.symbol = item.symbol;

		crypto.price = item.quote[fiatCurrency].price;
		crypto.change24h = item.quote[fiatCurrency].percent_change_24h;

		return crypto;
	}

	static adaptForDetails(item: any, fiatCurrency: string): Cryptocurrency {
		const crypto = new Cryptocurrency();
		crypto.id = item.id;
		crypto.rank = item.cmc_rank;
		crypto.name = item.name;
		crypto.symbol = item.symbol;
		crypto.totalSupply = item.total_supply;
		crypto.availableSupply = item.circulating_supply;

		crypto.price = item.quote[fiatCurrency].price;
		crypto.volume24h = item.quote[fiatCurrency].volume_24h;
		crypto.marketCap = item.quote[fiatCurrency].market_cap;
		crypto.change1h = item.quote[fiatCurrency].percent_change_1h;
		crypto.change24h = item.quote[fiatCurrency].percent_change_24h;
		crypto.change7d = item.quote[fiatCurrency].percent_change_7d;

		return crypto;
	}
}
