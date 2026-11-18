import axios from 'axios';

const base = axios.create({
  baseURL: 'https://jxmsilmcfzrnzudleptp.supabase.co',
  headers: {
    'apikey': 'sb_publishable__is-ZJeH95PboWhumPZ83A_59Why8_P',
  }
});

const api = axios.create({
    ...base.defaults,
    baseURL: `${base.defaults.baseURL}/rest/v1`
});

export default api;