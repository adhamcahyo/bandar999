const BASE_URL = 'http://localhost:3000';

const API = {
  login: async (username, password) => {
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed. Please check your credentials.');
      }

      return response.json();
    } catch (error) {
      throw new Error('Failed to connect to the server.');
    }
  },

  register: async (userData) => {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Registration failed. Please try again later.');
      }

      return response.json();
    } catch (error) {
      throw new Error('Failed to connect to the server.');
    }
  },

  deposit: async (amount, paymentMethod) => {
    try {
      const response = await fetch(`${BASE_URL}/deposit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, paymentMethod }),
      });

      if (!response.ok) {
        throw new Error('Deposit failed. Please try again later.');
      }

      return response.json();
    } catch (error) {
      throw new Error('Failed to connect to the server.');
    }
  },

  withdraw: async (amount, paymentMethod) => {
    try {
      const response = await fetch(`${BASE_URL}/withdraw`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, paymentMethod }),
      });

      if (!response.ok) {
        throw new Error('Withdrawal failed. Please try again later.');
      }

      return response.json();
    } catch (error) {
      throw new Error('Failed to connect to the server.');
    }
  },

  getDepositHistory: async () => {
    try {
      const response = await fetch(`${BASE_URL}/deposit-history`);

      if (!response.ok) {
        throw new Error('Failed to fetch deposit history. Please try again later.');
      }

      return response.json();
    } catch (error) {
      throw new Error('Failed to connect to the server.');
    }
  },

  getWithdrawHistory: async () => {
    try {
      const response = await fetch(`${BASE_URL}/withdraw-history`);

      if (!response.ok) {
        throw new Error('Failed to fetch withdraw history. Please try again later.');
      }

      return response.json();
    } catch (error) {
      throw new Error('Failed to connect to the server.');
    }
  },

  getBetHistory: async () => {
    try {
      const response = await fetch(`${BASE_URL}/bet-history`);

      if (!response.ok) {
        throw new Error('Failed to fetch bet history. Please try again later.');
      }

      return response.json();
    } catch (error) {
      throw new Error('Failed to connect to the server.');
    }
  },
};

export default API;
