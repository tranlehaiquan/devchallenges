import Compressorjs from 'compressorjs';

// const getQuality = (image: File, maxSize: number) => {
//   const originSize = image.size;
//   const scale = Math.max(Math.min(1, originSize / maxSize));
// }

const defaultOption: Compressorjs.Options = {
  quality: 0.8,
  convertSize: 5000000,
  strict: true,
  checkOrientation: true,
};

const compressImage = async (
  image: File,
  options: Compressorjs.Options = defaultOption
): Promise<File> => {
  return new Promise((rs, rj) => {
    new Compressorjs(image, {
      ...options,
      success(result) {
        rs(new File([result], image.name));
      },
      error(err) {
        rj(err);
      },
    });
  });
};

export default compressImage;