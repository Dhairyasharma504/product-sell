import { useState, useEffect } from 'react';
import randomstring from 'randomstring';

const useFileUploading = () => {
  const [fileName, setFileName] = useState(undefined);

  const [fileType, setFileType] = useState(undefined);
  const [file, setFile] = useState(undefined);
  // const [signFileUpload] = useMutation(signFileUploadMutation);
  const signFileUpload = () => console.log('mutation');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileUrl, setUploadedFileUrl] = useState(undefined);
  const handleUpload = ({ signedUrl, fileUrl }) => {
    const options = {
      headers: {
        'Content-Type': fileType,
      },
    };
    console.log(signedUrl, fileUrl, options);
  };

  useEffect(async () => {
    if (fileName && fileType && file) {
      setIsUploading(true);
      const res = await signFileUpload({
        variables: {
          fileName: `${randomstring.generate(3)}-${fileName.replace(/ /g, '')}`,
          fileType,
        },
      });
      if (res && res.data && file) {
        handleUpload({ ...res.data.signFileUpload });
      }
    }
  }, [fileName, fileType, file]);

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
