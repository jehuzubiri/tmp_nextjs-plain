import { useEffect } from 'react';
import { apiGetHello } from '@/services/Hello.services';
import { apiGetPokemon } from '@/services/Pokemon.services';

const LandingPage = ({ data }) => {
  const getThis = async () => {
    //@DESC: sample endpoints: 'pokemon/ditto' | 'pokemon-species/aegislash'
    const { } = await apiGetHello({ params: { greet: 'hello Jehu' } });
    const { ok, axios_response } = await apiGetPokemon({ endpoint: 'pokemon', params: { limit: 10 } });
    if (ok) console.log(axios_response);
  };

  useEffect(() => {
    getThis();
  }, []);

  return (
    <section>
      <h1>Hello World</h1>
      <p>home page</p>
    </section>
  );
};

export default LandingPage;
