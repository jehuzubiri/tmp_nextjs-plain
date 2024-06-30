export const useCutomStyles = {
  //BUTTONS ...
  button: {
    primary: {
      background: '#FAC50F',
      background:
        'linear-gradient(180deg, rgba(250,197,15,1) 19%, rgba(255,231,150,1) 49%, rgba(250,197,15,0.8799894957983193) 75%)',
      cursor: 'pointer',
      border: 'unset',
      borderRadius: '0.25rem',
      fontWeight: '600',
      padding: '0.75rem 1.5rem',
      transition: 'all 0.3s',
      ['span']: {
        color: 'black',
      },
    },
    secondary: {
      border: `1px solid white`,
      cursor: 'pointer',
      borderRadius: '0.25rem',
      background: 'unset',
      fontWeight: '600',
      transition: 'all 0.3s',
      '&:hover': {
        border: `1px solid #FAC50F`,
        ['span']: {
          color: '#FAC50F !important',
        },
      },
      ['& span']: {
        transition: 'all 0.3s ease',
      },
    },
    text: {
      pointerEvents: 'visible',
      borderBottom: `1px solid white`,
      width: 'fit-content',
      cursor: 'pointer',
      transition: 'all 0.3s',
      '&:hover': {
        color: '#FAC50F',
        borderBottom: `1px solid #FAC50F`,
      },
    },
  },

  //TYPOGRAPHY ...
  typography: {
    textHeader: {
      color: 'white',
      fontSize: '1.75em',
      fontWeight: '700',
      lineHeight: '1.8125em',
      letterSpacing: '0.01em',
    },
    textHeaderSub: {
      color: 'white',
      fontSize: '1.125em',
      fontWeight: '700',
      lineHeight: '1.5625em',
      letterSpacing: '0.02em',
    },
    textHeaderSub2: {
      color: 'white',
      fontSize: '1em',
      fontWeight: '700',
      lineHeight: '1.1875em',
      letterSpacing: '0.01em',
    },
    textParagraph: {
      color: 'white',
      fontSize: '0.875em',
      fontWeight: '400',
      lineHeight: '1.25em',
      letterSpacing: '0.02em',
    },
  },

  //FLEXBOX
  flexBox: {
    allCenter: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    allCenterCol: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
    },
    rowCenter: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowCenterBetween: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rowCenterCenter: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    colBetween: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    colCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  //IMG FILL COVER
  imgStyle: {
    cover: {
      priority: true,
      height: 1000,
      width: 1000,
      style: {
        objectFit: 'cover',
        objectPosition: '0 50%',
        width: '100%',
        height: '100%',
      },
    },
    fill: {
      priority: true,
      height: 1000,
      width: 1000,
      style: {
        objectFit: 'fill',
        objectPosition: '50% 50%',
        width: '100%',
        height: '100%',
      },
    },
  },
};
