import React, { useCallback, useEffect, useRef, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop';
import pick from 'lodash/pick';

import { getCroppedImg, Crop } from 'src/utils/imageCrop';

interface Props {
  className?: string;
  open: boolean;
  onClose: () => void;
  onSubmit: (image: File) => void;
  image?: File;
}

type CropState = Partial<Crop> & { aspect: number };
const defaultCrop: CropState = { aspect: 1, x: 0, y: 0 };

const DialogCrop: React.FC<Props> = ({ open, onClose, image, onSubmit }) => {
  const [imageURL, setImageURL] = useState<string>();
  const [crop, setCrop] = useState<CropState>(defaultCrop);
  const imageRef = useRef();

  useEffect(() => {
    if (image) {
      setImageURL(URL.createObjectURL(image));
    }
  }, [image]);

  const onLoad = useCallback((img) => {
    imageRef.current = img;
  }, []);

  useEffect(() => {
    return () => {
      if (imageURL) {
        URL.revokeObjectURL(imageURL);
        setImageURL('');
        setCrop(defaultCrop);
      }
    };
  }, [imageURL]);

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = async () => {
    const cropedImage = await getCroppedImg(
      imageRef.current,
      pick(crop, ['x', 'y', 'width', 'height']) as Crop,
      image.name
    );

    onSubmit(cropedImage);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title">
        Resize your avatar:
      </DialogTitle>
      <DialogContent>
        {imageURL && (
          <ReactCrop
            src={imageURL}
            crop={crop}
            onChange={(newCrop) => setCrop(newCrop)}
            ref={imageRef}
            onImageLoaded={onLoad}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          color="primary"
          autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogCrop;
