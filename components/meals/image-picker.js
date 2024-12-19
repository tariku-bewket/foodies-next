'use client';

import { useRef } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();

  function handlePickImage() {
    inputRef.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type='file'
          accept='image/png, image/jpeg'
          id={name}
          name={name}
          ref={imageInput}
        />
        <button
          className={classes.button}
          type='button'
          onClick={handlePickImage}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
