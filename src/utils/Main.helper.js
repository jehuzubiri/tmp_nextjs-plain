import Router from 'next/router';

export const routerPush = (pathname, query = {}, shallow = true, scroll = true) => {
  Router.push(
    {
      pathname,
      query
    },
    undefined,
    {
      //@DESC shallow - true: avoids re-fetching data
      //@DESC shallow - false: re-fetch 
      // getInitialProps, getServerSideProps, or getStaticProps
      shallow,
      scroll
    }
  )
}

export const groupDataBySameKeyVal = (arr, key) => {
  const _ = require('lodash');
  let finalData = {};
  try {
    _.mapValues((finalData = _.groupBy(arr, key)), (listArr) =>
      listArr.map((categ) => _.omit(categ, key))
    );
  } catch (error) { }
  return finalData;
};

export const limitParagraphByCount = (phrase, count) => {
  if (!count) return phrase;
  return phrase?.slice(0, count) + (phrase?.length > count ? "..." : "") || "-";
};