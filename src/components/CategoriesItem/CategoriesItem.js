import React from 'react';
import CategoriesContents from '../CategoriesContent';
import './CategoriesItem.css';

const CategoriesItem = ({
  title,
  description,
  contents,
  Svg
}) => (
  <>
    <h2 className='categoriesitem-title'>
      {title}
    </h2>
    <h3 className='categoriesitem-description'>
      {description}
    </h3>
    <section className='categoriesitem-contents'>
      {contents.map((content, index) => (
        <CategoriesContents 
          key={index}
          title={content.title}
          description={content.description}
          path={content.path}
          Svg={Svg}
        />
      ))}
      {new Array(4).fill(0).map((_, index) => (
        <div key={index} className='categoriesitem-contents-empty' />
      ))}
    </section>
  </>
);

export default CategoriesItem;

