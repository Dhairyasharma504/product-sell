/* eslint-disable no-buffer-constructor */
import React, { useRef, useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import Modal from './Modal';
import Button from '../Button';

function ImageCropper(props) {
  const { modalVisible, src, onChange, handleClose, aspectRatio } = props;
  const cropperEl = useRef(null);
  const [image, setImage] = useState(undefined);

  const onCrop = () => {
    const imageElement = cropperEl?.current;
    const cropperData = imageElement?.cropper;
    // image in dataUrl
    const theBlob = cropperData
      .getCroppedCanvas({ maxWidth: 600, maxHeight: 400 })
      .toDataURL();
    const blob = new Buffer(
      theBlob.replace(/^data:image\/\w+;base64,/, ''),
      'base64',
    );
    // console.log('file', blob);
    setImage(blob);
  };

  return (
    <Modal isVisible={modalVisible} onClose={handleClose}>
      <section className="modal-card-body">
        <Cropper
          ref={cropperEl}
          style={{ height: 400, width: '100%' }}
          // zoomTo={0.5}
          initialAspectRatio={aspectRatio || 4 / 3}
          aspectRatio={aspectRatio || 4 / 3}
          // preview=".img-preview"
          src={src}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive
          autoCropArea={1}
          checkOrientation={false}
          // onInitialized={instance => {
          //   setCropper(instance);
          // }}
          crop={onCrop}
          guides
        />
      </section>
      <footer className="text-right mt-8 mb-1 space-x-5">
        <Button variant="tertiary" type="button" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="secondary"
          type="button"
          onClick={() => {
            onChange(image);
          }}
        >
          Done
        </Button>
      </footer>
    </Modal>
  );
}

export default ImageCropper;
