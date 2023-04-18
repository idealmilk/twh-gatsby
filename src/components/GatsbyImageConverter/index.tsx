import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

type GatsbyImageProps = {
  src: any;
};

const GatsbyImageConverter = ({ src }: GatsbyImageProps) => {
  const data = useStaticQuery(graphql`
    query {
      item1: file(relativePath: { eq: "temp1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      item2: file(relativePath: { eq: "temp2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      item3: file(relativePath: { eq: "temp1.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      item4: file(relativePath: { eq: "temp2.png" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
    }
  `);

  return (
    <>
      {src === 1 ? (
        <GatsbyImage image={data.item1 && getImage(data.item1)} alt='TWH' />
      ) : src === 2 ? (
        <GatsbyImage image={data.item2 && getImage(data.item2)} alt='TWH' />
      ) : src === 3 ? (
        <GatsbyImage image={data.item3 && getImage(data.item3)} alt='TWH' />
      ) : (
        <GatsbyImage image={data.item4 && getImage(data.item4)} alt='TWH' />
      )}
    </>
  );
};

export default GatsbyImageConverter;
