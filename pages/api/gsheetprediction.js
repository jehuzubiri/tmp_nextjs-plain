import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { reqParam } = JSON.parse(req.body);
    const axiosRes = await axios.post('google-code-here', reqParam, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    res.status(200).json({
      ok: true,
      axiosRes: axiosRes?.data,
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({
      ok: false,
      axiosRes: error,
    });
  }
}
