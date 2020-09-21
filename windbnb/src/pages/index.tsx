import React from "react";
import { Link } from "gatsby";
import Stay from '../components/Stay';

import Layout from "../components/Layout";
import Image from "../components/image";
import SEO from "../components/seo";

const fakeData = {
  city: 'Helsinki',
  country: 'Finland',
  superHost: false,
  title: 'Stylist apartment in center of the city',
  rating: 4.4,
  maxGuests: 3,
  type: 'Entire apartment',
  beds: 2,
  photo:
    'https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80',
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Stay {...fakeData}/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage;
