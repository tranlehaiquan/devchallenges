import React from "react";
import { Link } from "gatsby";
import ListStay from '../components/ListStay';

import Layout from "../components/Layout";
import Image from "../components/image";
import SEO from "../components/seo";

const mockStay = {
  city: 'Helsinki',
  country: 'Finland',
  superHost: false,
  title: 'Stylist apartment in center of the city',
  rating: 4.4,
  maxGuests: 3,
  type: 'Entire apartment apartment apartment apartment',
  beds: 2,
  photo:
    'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80',
};

const mockList = new Array(6).fill(undefined).map((item, index) => ({
  id: index + '',
  ...mockStay,
  superHost: index === 3 && true,
}));

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ListStay stays={mockList}/>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
