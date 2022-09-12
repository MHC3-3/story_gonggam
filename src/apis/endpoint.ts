import axios from 'axios';

export default axios.create({
  baseURL: 'https://mhcserver.shop',
  headers: { Accept: 'application/json' },
});
