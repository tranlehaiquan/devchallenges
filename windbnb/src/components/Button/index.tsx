import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BrandButton = withStyles(({ palette }) => ({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: palette.brand.main,
    borderColor: palette.brand.main,
    color: 'white',
    '&:hover': {
      backgroundColor: palette.brand.main,
      borderColor: palette.brand.main,
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: palette.brand.main,
      borderColor: palette.brand.main,
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem ' + palette.brand.main,
    },
  },
}))(Button);

export default BrandButton;
