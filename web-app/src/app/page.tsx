"use client";

import { useState } from "react";
import { useQuery } from "react-query";
import Dashboard from "../components/Dashboard";
import { fetchCryptos, Crypto } from "../lib/APIs";

const Home: React.FC = () => {
  const { data, isLoading, refetch } = useQuery("cryptos", fetchCryptos, {
    staleTime: 60000,
    refetchOnWindowFocus: false,
  });
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCryptos: Crypto[] | undefined = data?.filter(
    (crypto: Crypto) =>
      searchTerm === "" ||
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-[--font-geist-sans]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Cryptocurrency Dashboard
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Real-time cryptocurrency market data
          </p>
        </header>

        <main className="space-y-12">
          <div className="max-w-2xl mx-auto flex gap-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search cryptocurrencies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 text-gray-900"
              />
            </div>
            <button
              onClick={() => refetch()}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-200 font-medium flex items-center gap-2 shadow-lg hover:shadow-blue-200"
            >
              <span>Refresh</span>
            </button>
          </div>

          {isLoading ? (
            <div className="text-center py-16">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading market data...</p>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              {filteredCryptos && (
                <Dashboard filteredCryptos={filteredCryptos} />
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Home;
