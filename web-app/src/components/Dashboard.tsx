import React from "react";
import { Crypto } from "../lib/APIs";

interface DashboardProps {
  filteredCryptos: Crypto[];
}

const Dashboard: React.FC<DashboardProps> = ({ filteredCryptos }) => {
  return (
    <div className="w-full rounded-lg border border-gray-200 shadow-sm overflow-x-auto">
      <table className="w-full min-w-max">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">
              Coin
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">
              Symbol
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">
              Price
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 whitespace-nowrap">
              Last Updated
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {filteredCryptos.map((crypto) => (
            <tr
              key={crypto.id}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center gap-3">
                  <img
                    src={crypto.image}
                    alt={crypto.name}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                  />
                  <span className="font-medium text-gray-900">
                    {crypto.name}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                  {crypto.symbol.toUpperCase()}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap font-medium text-gray-900">
                $
                {crypto.current_price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-gray-500">
                {new Date(crypto.last_updated).toLocaleString("en-US", {
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
