export default async function handler(_, res) {
  const defaultVal = `User-agent: * \nDisallow: /`;
  try {
    const resp = "";
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.status(200).send(resp || defaultVal);
  } catch (error) {
    res.status(500).send(defaultVal);
  }
}