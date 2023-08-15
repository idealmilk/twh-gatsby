import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

const RichText = (body) => {
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => (
        <div>
          <h5>{children}</h5>
        </div>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData, description } = node.data.target;
        return (
          <GatsbyImage image={getImage(gatsbyImageData)} alt={description} />
        );
      },
      [INLINES.HYPERLINK]: (node) => {
        if (node.data.uri.indexOf('youtube.com/embed') !== -1) {
          return (
            <iframe
              width='100%'
              height='321'
              src={node.data.uri}
              title='YouTube'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullscreen
            ></iframe>
          );
        } else {
          return (
            <a
              href={node.data.uri}
              target={`${
                node.data.uri.startsWith('https://www.newedgestud.io/')
                  ? '_self'
                  : '_blank'
              }`}
              rel={`${
                node.data.uri.startsWith('https://www.newedgestud.io/')
                  ? ''
                  : 'noopener noreferrer'
              }`}
            >
              {node.content[0].value}
            </a>
          );
        }
      },
    },
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return <div>{renderRichText(body, options)}</div>;
};

export default RichText;
