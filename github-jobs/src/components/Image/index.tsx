import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  className?: string;
  fallback?: string;
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  noImage: {
    backgroundColor: palette.grey[300],
    height: '100%',
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: spacing(0.5),
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
  },
}));

/**
 * Fallback images
 * Show Gif (animation) while images are loading
 * Fallback element if fallback images fail to load
 * Decode before paint
 * Delay rendering until element is visible (lazy rendering/loading)
 */
const Image: React.FC<ImageProps> = ({
  fallback,
  src,
  className,
  ...restProps
}) => {
  const [isError, setIsError] = useState<boolean>(false);
  const classes = useStyles();

  const handleErrorImage = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setIsError(true);
  };

  if (!src) {
    return (
      <div {...restProps} className={clsx(classes.noImage, className)}>
        No Image
      </div>
    );
  }

  if (isError) {
    return (
      <div {...restProps} className={clsx(classes.noImage, className)}>
        {restProps.alt}
      </div>
    );
  }

  return (
    <img
      {...restProps}
      className={className}
      src={src}
      onError={handleErrorImage}
    />
  );
};

export default Image;
