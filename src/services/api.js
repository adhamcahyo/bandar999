const BASE_URL = '/';

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
};

export default API;
