import axios from 'axios';

// Hardcoded API key for testing
const apiKey = 'a093400c-fa5f-47ec-9b6c-e4d97003ae77'; // Replace with your actual API key

// Create an Axios instance with the base URL and API key header
const api = axios.create({
  baseURL: 'https://api.bestinslot.xyz/v3',
  headers: {
    'x-api-key': apiKey,
  },
});

// Export the `api` instance for use in other parts of your application
export default api;