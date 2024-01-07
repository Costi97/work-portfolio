import React from 'react'
import { imagesAttribution } from '../constants';

const Footer = () => {

  const renderJSX = () => {
    return { __html: imagesAttribution.background };
  };

  return (
    <section>
      <div
        dangerouslySetInnerHTML={renderJSX()}
        className='flex text-slate-400 text-xs items-end content-end'
      />
    </section>
  )
}

export default Footer