import React, { useMemo, useRef, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import { IMAGES_TYPES } from 'src/constants';
import { useSnackbar } from 'notistack';

import DialogCrop from './DialogCrop';

interface Props {
  className?: string;
  src: string;
  onChange: (image: File) => void;
  id?: string;
}

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    marginBottom: spacing(1),
    display: 'inline-block',
    position: 'relative',
  },
  label: {
    fontWeight: 400,
    marginBottom: spacing(1),
    display: 'block',
    color: '#4F4F4F',
    fontSize: 16,
  },
  avatar: {
    borderRadius: 50,
    overflow: 'hidden',
    height: 100,
    width: 100,
    cursor: 'pointer',
  },
  editName: {
    position: 'absolute',
    border: '1px solid black',
    borderRadius: spacing(0.4),
    padding: spacing(0.1, 1),
    backgroundColor: palette.common.white,
    bottom: 10,
    right: 0,
  },
}));

const UploadAvatar: React.FC<Props> = ({ src, id, onChange }) => {
  const [uploadAvatar, setUploadAvatar] = useState<File>();
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const elementId = useMemo(() => {
    if (id) return id;
    return `input-upload-${Math.random() * 1000}`;
  }, [id]);

  const handleClose = () => {
    setUploadAvatar(undefined);
    setOpen(false);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { files } = e.target;
    const file = files[0];
    const isValidType = IMAGES_TYPES.includes(file.type);
    console.log(file);

    if (!file || !isValidType) {
      enqueueSnackbar(
        `Please input file type image ${IMAGES_TYPES.join(', ')}`,
        {
          variant: 'error',
        }
      );
      return;
    }

    e.target.value = ''; // this line need for everytime select same file
    setOpen(true);
    setUploadAvatar(file);
  };

  const handleSubmit = (image: File) => {
    onChange(image);
  }

  return (
    <>
      <label className={classes.root} htmlFor={elementId}>
        <img src={src} className={classes.avatar} />

        <input
          hidden
          id={elementId}
          type="file"
          ref={inputRef}
          onChange={onInputChange}
          accept={IMAGES_TYPES.join(',')}
        />

        <Typography variant="caption" className={classes.editName}>
          Edit
        </Typography>
      </label>

      <DialogCrop 
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
        image={uploadAvatar}
      />
    </>
  );
};

export default UploadAvatar;
