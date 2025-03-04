---
title: Crypto Price Tracker Documentation
sidebar_position: 1
---

# Crypto Price Tracker Documentation

## Project Setup Guide

### Prerequisites

- Node.js v18+
- npm v9+
- Git
- CoinGecko API account (free tier)

### Web Application Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/crypto-price-tracker.git
cd crypto-price-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Access the application at:

```bash
http://localhost:3000
```

## API Integration

### Data Flow Architecture

1. Client
   - Requests data from CoinGecko API
2. CoinGecko API
   - Responds with data
3. React Query Cache
   - Stores the response
4. UI Components
   - Display data to the user

### Key Implementation Details

- **API Endpoint**: `https://api.coingecko.com/api/v3/coins/markets`
- **Default Parameters**:
  ```javascript
  {
    vs_currency: 'usd',
    per_page: 5,
    order:'market_cap_desc',
    price_change_percentage: '24h'
  }
  ```
- **Data Fetching**:
  ```typescript
  export const fetchCryptos = async (): Promise<Crypto[]> => {
    try {
      const response = await axios.get<Crypto[]>(API_URL);
      console.log(response.data);
      return response.data; // Already typed as Crypto[]
    } catch (error) {
      console.error("Error fetching cryptocurrencies:", error);
      window.alert(
        "An error occurred while fetching cryptocurrencies. Please refresh the page later."
      );
      return [];
    }
  };
  ```
- **Refresh Mechanism**:
  - Manual refresh via button click
  - Automatic stale-while-revalidate pattern
  - Cache invalidation after 60 seconds

## State Management

In this project, I opted to use React Query for state management due to its powerful capabilities and alignment with the project's requirements. Here’s a detailed explanation of my choice:

### Built-in Caching

The caching mechanism in React Query enhances performance:

1. Stale Data Management: Setting a staleTime of 60 seconds allows the application to serve cached data, reducing unnecessary API calls and improving response times.
2. Automatic Refetching: React Query automatically handles data refetching based on window focus and stale data, ensuring that users always see the most current prices without manual intervention.

### Handling Loading States


Loading Indicators: It allows me to easily display loading spinners while data is being fetched, keeping users informed.


### Implementation Example

```javascript
const { data, isLoading, refetch } = useQuery("cryptos", fetchCryptos, {
  staleTime: 60000,
  refetchOnWindowFocus: false,
});
```

## Challenges & Solutions

### 1. API Rate Limiting

**Challenge**: CoinGecko's free tier  
**Solution**:

- Implemented client-side caching
- Added request debouncing
- Error fallback UI



### 2. UI Design and Consistency

**Challenge**: Responsive table rendering  
**Solution**:

- Use LLM to polish the style of the web page
- Tailwind CSS breakpoints
- Horizontal scroll container
- Fixed header positioning


