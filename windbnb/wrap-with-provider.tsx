import React from 'react';
import { Provider } from 'react-redux';
import { graphql, StaticQuery } from 'gatsby';

import createStore from './src/store/index';
import { setStays } from './src/store/stays/actions';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  const store = createStore();
  // return <Provider store={store}>{element}</Provider>;
  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={(data: any) => {
        store.dispatch(setStays(data.allStaysJson.nodes));
        return <Provider store={store}>{element}</Provider>;
      }}
    />
  );
};
