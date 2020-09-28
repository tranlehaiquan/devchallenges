import { graphql, useStaticQuery } from 'gatsby';

import { Stay } from '../types';

type DataType = {
  allStaysJson: {
    nodes: Stay[];
  };
};

const useStays = (): Stay[] => {
  const data: DataType = useStaticQuery(graphql`
    query {
      allStaysJson(sort: {fields: city}) {
        nodes {
          beds
          type
          title
          superHost
          rating
          photo
          maxGuests
          id
          country
          city
          remoteImage {
            childImageSharp {
              id
              fixed(cropFocus: CENTER, height: 260, width: 400) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);
  return data.allStaysJson.nodes;
};

export default useStays;
