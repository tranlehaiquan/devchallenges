import React from 'react';
import Container from '@material-ui/core/Container';

const Footer: React.FC = () => {
  return (
    <Container>
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </Container>
  );
};

export default Footer;
