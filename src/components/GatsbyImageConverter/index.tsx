import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

type GatsbyImageProps = {
  src: any;
};

const GatsbyImageConverter = ({ src }: GatsbyImageProps) => {
  const data = useStaticQuery(graphql`
    query {
      shoe1: file(relativePath: { eq: "shoe1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      shoe2: file(relativePath: { eq: "shoe2.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      shoe3: file(relativePath: { eq: "shoe3.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
      shoe4: file(relativePath: { eq: "shoe4.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 200)
        }
      }
    }
  `);

  return (
    <>
      {src === 1 ? (
        <GatsbyImage image={data.shoe1 && getImage(data.shoe1)} alt='TWH' />
      ) : src === 2 ? (
        <GatsbyImage image={data.shoe2 && getImage(data.shoe2)} alt='TWH' />
      ) : src === 3 ? (
        <GatsbyImage image={data.shoe3 && getImage(data.shoe3)} alt='TWH' />
      ) : (
        <GatsbyImage image={data.shoe4 && getImage(data.shoe4)} alt='TWH' />
      )}
    </>
  );
};

export default GatsbyImageConverter;
