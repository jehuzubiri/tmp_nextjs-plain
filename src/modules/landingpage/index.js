import { GeneralServices } from '@/services/General.services';
import { HelloServices } from '@/services/Hello.services';

const LandingPage = ({ data }) => {

  return (
    <section>
      <h1>Hello World</h1>
      <p>home page</p>
      <div>
        <button onClick={async () => {
          const { } = await HelloServices({ params: { greet: 'hello Jehu' } });
        }}>Get Hello</button>
        <button onClick={async () => {
          //@DESC: sample path: 'pokemon/ditto' | 'pokemon-species/aegislash'
          const { } = await GeneralServices({
            type: 'pokemon',
            method: 'get',
            path: 'pokemon/ditto'
          });
        }}>Get Pokemon</button>
      </div>
    </section>
  );
};

export default LandingPage;
