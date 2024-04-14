import axios from 'axios';

export default async function handler(req, res) {
  try {
    const api = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_BE_API_URL}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Cache-Control': 'no-store, no-cache',
        'Content-Type': 'application/json',
        'X-Timezone-Offset': String(new Date().getTimezoneOffset() * -1),
      }
    });
    const token = process.env.NEXT_PUBLIC_API_CLIENT_KEY;
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;


    const { path, params, type } = JSON.parse(req.body);
    let reqParam = {};
    if (type === "get") reqParam = { params };
    if (type === "post") reqParam = { data: params };
    const axiosRes = await api[type](path, reqParam);

    res.status(200).json({
      ok: true,
      axiosRes: axiosRes?.data,
    });
  } catch (error) {
    console.error("ERROR_NEXT_API_HANDLER:", error);
    res.status(500).json({
      ok: false,
      axiosRes: error,
    });
  }
}