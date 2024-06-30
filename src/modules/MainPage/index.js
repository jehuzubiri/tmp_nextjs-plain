import { Box } from '@mui/material';
import { useRouter } from 'next/router';

const MainPage = ({ data }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        fontFamily: 'Kumbh Sans',
      }}
    >
      Content Here
    </Box>
  );
};

export default MainPage;
