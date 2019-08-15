const API_IP = process.env.NODE_ENV === 'production'
  ? '' : 'http://localhost:52318';

const autoUpdateTime = 900000; // seconds

export { API_IP, autoUpdateTime };
