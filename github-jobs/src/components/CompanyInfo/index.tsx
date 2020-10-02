import React from 'react';
import Typo from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

import HireLocation from '../HireLocation';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: spacing(4),
  },
  logo: {
    maxHeight: 70,
    maxWidth: 70,
    marginRight: spacing(2),
    '& img': {
      display: 'block',
      maxHeight: 70,
      maxWidth: 70,
    },
  },
  location: {
    color: palette.grey[500]
  }
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
        <HireLocation location={location} className={classes.location} />
      </div>
    </div>
  );
};

export default CompanyInfo;
