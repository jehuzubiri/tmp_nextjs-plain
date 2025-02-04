import React from 'react'
import { limitParagraphByCount } from '@/utils/Main.helper';

const RichText = ({ richText, limitCount }) => {
  const createMarkup = () => {
    // const textA = `${richText}`;
    // const regexBold = /\*\*(.*?)\*\*/gm;
    // const textB = textA.replace(regexBold, '<strong>$1</strong>');
    // const regexUnderline = /_(.*?)_/g;
    // let html = textB.replace(regexUnderline, '<i>$1</i>');
    let html = `${richText}`
    return {
      __html: limitParagraphByCount
        (html, limitCount)
    };
  };

  return (
    <div className='rich_text_container'>
      {!!richText ?
        <p dangerouslySetInnerHTML={createMarkup()} />
        : <p>-</p>}
    </div>
  );
}

export default RichText