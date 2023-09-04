import React from 'react';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Notiflix from 'notiflix';
import styles from './form.module.css'
export const Form = ({ onSelectedFile }) => {
  const [file, setFile] = useState(null);
  const onDrop = acceptedFiles => {
    if (
      acceptedFiles[0].type === 'image/png' ||
      acceptedFiles[0].type === 'image/jpeg'
    ) {
      setFile(acceptedFiles[0]);
      onSelectedFile(acceptedFiles[0]);
    } else {
        Notiflix.Notify.failure('You can upload only JPEG or PNG files');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
        'image/jpeg': [],
        'image/png': []
      },
    multiple: false,
  });

  return (
    <div >
       <div className={styles.formContainer}>
            <div>
                {'Upload image'}
            </div>
          <div {...getRootProps()} className={styles.browseBtn}>
            <input {...getInputProps()}/>
            <p>Browse</p>
            
          </div>
       </div>
      {file && (
        <div className={styles.imgContainer}>
          <img src={URL.createObjectURL(file)} alt="Uploaded" className={styles.uploadedImg}  />
        </div>
      )}
    </div>
  );
};
