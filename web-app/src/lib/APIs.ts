import axios from "axios";

const API_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false";

export interface Crypto {
  id: string; // Coin ID
  symbol: string; // Coin symbol
  name: string; // Coin name
  image: string; // Coin image URL
  current_price: number; // Current price in USD
  market_cap: number; // Market cap in USD
  market_cap_rank: number; // Market cap rank
  fully_diluted_valuation: number; // Fully diluted valuation
  total_volume: number; // Total volume in USD
  high_24h: number; // 24h high price
  low_24h: number; // 24h low price
  price_change_24h: number; // Price change in 24h
  price_change_percentage_24h: number; // Price change percentage in 24h
  market_cap_change_24h: number; // Market cap change in 24h
  market_cap_change_percentage_24h: number; // Market cap change percentage in 24h
  circulating_supply: number; // Circulating supply
  total_supply: number; // Total supply
  max_supply: number | null; // Max supply
  ath: number; // All-time high
  ath_change_percentage: number; // All-time high change percentage
  ath_date: string; // All-time high date
  atl: number; // All-time low
  atl_change_percentage: number; // All-time low change percentage
  atl_date: string; // All-time low date
  roi: {
    times: number;
    currency: string;
    percentage: number;
  } | null; // ROI data
  last_updated: string; // Last updated timestamp
}

// Function to fetch top cryptocurrencies
export const fetchCryptos = async (): Promise<Crypto[]> => {
  try {
    const response = await axios.get<Crypto[]>(API_URL);
    console.log(response.data);
    return response.data; // Already typed as Crypto[]
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
    window.alert("An error occurred while fetching cryptocurrencies. Please refresh the page later.");
    return [];
  }
};
