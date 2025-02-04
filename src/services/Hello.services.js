
export const apiGetHello = async ({ params }) => {
  const res = await fetch('/api/hello', {
    method: 'POST',
    body: JSON.stringify({
      ...params,
      timezone:
        Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Singapore',
    }),
  });
  return await res.json();
};