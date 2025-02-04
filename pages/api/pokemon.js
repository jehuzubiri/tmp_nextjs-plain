import axios from 'axios';
import { getCustomHeaders } from '@/utils/Api.helper';

export default async function handler(req, res) {
  try {
    const apiReqData = ['post', 'put', 'patch'];
    const { type, endpoint, params, signal } = JSON.parse(req.body);

    const api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_HOST,
      headers: getCustomHeaders(),
    });

    //DESC: for cancelation
    const reqOptions = { ...(signal && { signal }) };

    // const default_token = process.env.NEXT_PUBLIC_API_SECRET_KEY;
    // api.defaults.headers.common['Authorization'] = `Bearer ${default_token}`;

    if (params) {
      if (type === 'get') reqOptions.params = params;
      if (apiReqData.includes(type)) reqOptions.data = params;
    }

    const axiosRes = await api[type](endpoint, reqOptions);

    res.status(200).json({
      ok: true,
      axios_response: axiosRes?.data,
    });
  } catch (error) {
    console.error('APP_ERROR/pages/api/pokemon:', error);
    res.status(500).json({
      ok: false,
      axios_response: error,
    });
  }
}