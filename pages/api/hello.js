// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  try {
    const params = JSON.parse(req.body);
    res.status(200).json({
      ok: true,
      axios_response: {
        name: 'John Doe',
        sent_params: params
      },
    });
  } catch (error) {
    console.error('APP_ERROR/pages/api/hello:', error);
    res.status(500).json({
      ok: false,
      axios_response: error,
    });
  }
}
