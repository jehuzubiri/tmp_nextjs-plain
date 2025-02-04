export const apiGetPokemon = async ({ endpoint = '', params, signal = undefined }) => {
  const res = await fetch('/api/pokemon', {
    method: 'POST',
    body: JSON.stringify({
      type: 'get',
      endpoint,
      params,
      signal
    }),
  });
  return await res.json();
};

