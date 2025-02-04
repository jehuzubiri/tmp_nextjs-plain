import { useDispatch, useSelector } from 'react-redux';
import { stackIsLoggedIn } from '@/redux/slices/Global.slice';
import { useRouter } from 'next/router';

const LoremPage = ({ data }) => {
  // const dispatch = useDispatch();
  // dispatch(stackIsLoggedIn(true));

  return (
    <section>
      <p>Sample Page Content</p>
    </section>
  );
};

export default LoremPage;
