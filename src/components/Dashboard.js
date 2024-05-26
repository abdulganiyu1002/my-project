import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [cryptos, setCryptos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            per_page: 10,
            page: 1,
          },
        });
        setCryptos(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  return 
};

export default Dashboard;
