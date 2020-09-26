import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useSelector } from 'react-redux';

import { Stay } from '../types';
import ListStay from '../components/ListStay';
import Layout from '../components/Layout';
import SEO from '../components/seo';

type DataType = {
  allStaysJson: {
    nodes: Stay[];
  };
};

const IndexPage = () => {
  const dataStore: any = useSelector((state) => state);
  const data: DataType = useStaticQuery(graphql`
    query {
      allStaysJson {
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

  return (
    <Layout>{dataStore.count}
      <SEO title="Home" />
      <ListStay stays={data.allStaysJson.nodes} />
    </Layout>
  );
};

export default IndexPage;
