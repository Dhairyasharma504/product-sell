import { useState, useEffect } from 'react';
import axios from 'axios';
import randomstring from 'randomstring';

const useFileUploading = () => {
  const [fileName, setFileName] = useState(undefined);
  const [fileType, setFileType] = useState(undefined);
  const [file, setFile] = useState(undefined);
  // const [signFileUpload] = useMutation(signFileUploadMutation);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState(undefined);
  // const signFileUpload = () => console.log('dd');
  const handleUpload = ({ signedUrl, fileUrl }) => {
    const options = {
      headers: {
        'Content-Type': fileType,
      },
    };

    axios
      .put(signedUrl, file, options)
      .then(() => {
        console.log('file uploaded successfully');
        setUploadedFileUrl(fileUrl);
        setTimeout(() => {
          setIsUploading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(async () => {
  //   if (fileName && fileType && file) {
  //     setIsUploading(true);
  //     const res = await signFileUpload({
  //       variables: {
  //         fileName: `${randomstring.generate(3)}-${fileName.replace(/ /g, '')}`,
  //         fileType,
  //       },
  //     });
  //     if (res && res.data && file) {
  //       handleUpload({ ...res.data.signFileUpload });
  //     }
  //   }
  // }, [fileName, fileType, file]);

  return [
    uploadedFileUrl,
    isUploading,
    fileType,
    {
      setFile,
      setFileName,
      setFileType,
      setUploadedFileUrl,
    },
  ];
};

export default useFileUploading;
