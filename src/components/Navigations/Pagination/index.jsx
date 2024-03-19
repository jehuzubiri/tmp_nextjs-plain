import React from 'react';
import { Pagination as PaginationMui } from '@mui/material';
import { MaxWidthControl } from '@src/components/GeneralCustom';
import usePaginationStyle from './usePaginationStyle';

const Pagination = (props) => {
  const {
    count = 10,
    size = 'small',
    disabled = false,
    onChange = () => { },
    showLastButton = false,
    showFirstButton = false,
  } = props;
  const style = usePaginationStyle();

  return (
    <MaxWidthControl withParent parentSx={style?.mainContainer} sx={style?.widthControl}>
      <PaginationMui
        size={size}
        sx={style?.mainPagination}
        count={count}
        shape="rounded"
        variant="outlined"
        onChange={onChange}
        disabled={disabled}
        showLastButton={showLastButton}
        showFirstButton={showFirstButton}
      // color='primary' @DESC: Dont remove please -Jehu
      />
    </MaxWidthControl>
  );
};

export default Pagination;
