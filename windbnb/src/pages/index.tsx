import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store';
import useStays from '../utils/useStays';
import ListStay from '../components/ListStay';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const stays = useStays();
  const location = useSelector((state: RootState) => state.stays.location);
  const guests = useSelector((state: RootState) => state.stays.guests);

  const filtered = stays.filter(stay => {
    if(location && location !== `${stay.city}, ${stay.country}`) return false;
    if(guests.children + guests.adults > stay.maxGuests) return false;
    return true;
  });

  return (
    <Layout>
      <SEO title="Home" />
      <ListStay stays={filtered} />
    </Layout>
  );
};

export default IndexPage;
