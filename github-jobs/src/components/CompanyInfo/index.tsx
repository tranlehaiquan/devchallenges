import React from 'react';
import Typo from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import HireLocation from '../HireLocation';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    maxHeight: 50,
    maxWidth: 50,
    marginRight: spacing(2),
    '& img': {
      display: 'block',
      maxHeight: 50,
      maxWidth: 50,
    },
  },
}));

interface CompanyInfoProps {
  company: string;
  companyLogo: string;
  location: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  company,
  companyLogo,
  location,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src={companyLogo} alt={company} />
      </div>
      <div>
        <Typo variant="h6">{company}</Typo>
        <HireLocation location={location} />
      </div>
    </div>
  );
};

export default CompanyInfo;
