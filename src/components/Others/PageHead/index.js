import React from 'react'
import Head from "next/head";
import { limitParagraphByCount } from '@src/utils/string';

const PageHead = ({ title = "EKINGS Euro 2024", desc = "", link = "", meta = [] }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {desc?.length ?
        <meta
          name="description"
          content={limitParagraphByCount(`${desc}`?.replace(/(<([^>]+)>)/ig, ''), 165) || "EKINGS Euro 2024 Description..."}
        /> : null}
      {!!meta?.length ?
        <>
          {meta?.map((item) => {
            const { htag, key, name, content } = item;
            return `<${htag} key="${key}" name="${name}" content="${content}"></${htag}>`;
          })}
        </> : null}
      <link rel='canonical' href={link} />
    </Head>
  )
}

export default PageHead