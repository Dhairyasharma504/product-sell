import React, { useState, useEffect } from 'react';
// import { gql, useMutation } from '@apollo/client';
import { BsFillImageFill } from 'react-icons/bs';
import { CircleToBlockLoading } from 'react-loadingg';

import theme from '../../utils/theme';
// import useFileUploading from '../../hooks/useFileUpload';
// import { Label, Span, Error } from '../atoms';
import TextInputGroup from './Input';

import ImageCropper from './ImageCropper';
import useFileUploading from '../../hooks/useFileUploading';

function UploadImageInput({
  value,
  onChange,
  imageOnly,
  disabled,
  error,
  onBlur,
  aspectRatio,
  toolTipText,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState({});

  const [
    uploadedFileUrl,
    isUploading,
    // fileType,
    { setFile, setFileName, setFileType, setUploadedFileUrl },
  ] = useFileUploading();

  const handleFileSelect = (inputData) => {
    const data = inputData.target.files[0];
    setFileName(data.name);
    setFileType(data.type);
    // eslint-disable-next-line no-undef
    const reader = new FileReader();
    reader.readAsDataURL(data);

    reader.onload = function () {
      const theBlob = reader.result;
      if (data && data.type && data.type.includes('video')) {
        // eslint-disable-next-line no-buffer-constructor
        const blob = new Buffer(
          theBlob.replace(/^data:video\/\w+;base64,/, ''),
          'base64',
        );
        setFile(blob);
      } else {
        setImage(theBlob);
        setModalVisible(true);
      }
    };
  };

  useEffect(() => {
    if (uploadedFileUrl) {
      onChange(uploadedFileUrl);
    }
  }, [uploadedFileUrl]);

  useEffect(() => {
    setUploadedFileUrl(value);
  }, [value]);

  return (
    <>
      <div className="file-wrapper mb-8">
        <label
          className={`${
            uploadedFileUrl ? 'p-0' : 'px-4 pt-10 pb-2'
          } leading-6 w-full max-w-xs mx-auto md:leading-10 font-medium text-sm border border-secondary bg-white flex-col inline-flex flex items-center rounded-xl cursor-pointer mb-0 overflow-hidden relative`}
        >
          {!uploadedFileUrl && (
            <>
              <BsFillImageFill className="h-20 w-20 text-secondary inline-block" />
              <p className="mt-2 text-gray">Upload Image</p>
            </>
          )}
          {uploadedFileUrl && (
            <div>
              <img
                src={uploadedFileUrl}
                className="h-48 w-full rounded-xl"
                alt="thumbnail"
              />
            </div>
          )}

          {isUploading && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80">
              <CircleToBlockLoading color={theme.primary} />
            </div>
          )}
          <div className={uploadedFileUrl && '-mb-4'}>
            <TextInputGroup
              disabled={isUploading || disabled}
              type="file"
              accept={
                imageOnly
                  ? 'image/png, image/jpeg, image/jpg'
                  : 'image/png, image/jpeg, image/jpg, video/mp4'
              }
              name="image"
              onChange={(val) => handleFileSelect(val)}
              onBlur={onBlur}
              className="hidden"
            />
          </div>
        </label>
        {toolTipText && (
          <p className="mt-0 text-gray text-sm">
            <strong>*</strong> {toolTipText} <strong>*</strong>
          </p>
        )}
        {error && <p className="text-red-500 mt-2 text-xs italic">{error}</p>}
      </div>

      {image && modalVisible && (
        <ImageCropper
          aspectRatio={aspectRatio}
          modalVisible={modalVisible}
          src={image}
          onChange={async (croppedUrl) => {
            // setCroppedFile(croppedUrl);
            setModalVisible(false);
            setFile(croppedUrl);
          }}
          handleClose={() => setModalVisible(false)}
        />
      )}
    </>
  );
}

export default UploadImageInput;
