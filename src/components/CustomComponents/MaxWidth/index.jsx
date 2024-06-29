import { Box, useTheme } from '@mui/material';
import { FLEXBOX } from '@src/constants/Snippet';

const MaxWidth = ({
  children,
  withParent = false,
  sx,
  parentSx,
  parentID,
  component = 'div',
}) => {
  const theme = useTheme();

  const mainElement = () => (
    <Box
      className='maxwidthcontrol'
      sx={{
        width: '100%',
        maxWidth: '75rem',
        ...sx,
      }}
    >
      {children}
    </Box>
  );

  return withParent ? (
    <Box
      sx={{
        background: theme.palette.colors.blacklight,
        padding: '0 0 3rem 0',
        ...FLEXBOX.allCenter,
        ...parentSx,
      }}
      id={parentID}
      component={component}
    >
      {mainElement()}
    </Box>
  ) : (
    mainElement()
  );
};

export default MaxWidth;
