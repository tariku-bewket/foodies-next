'use client';

import Image from 'next/image';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const [pickedImagePath, setPickedImagePath] = useState();
  const imageInput = useRef();

  function handlePickImage() {
    imageInput.current.click();
  }

  function hadleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImagePath(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImagePath && <p>No Image Picked</p>}
          {pickedImagePath && (
            <Image
              src={pickedImagePath}
              alt='A preview of the picked image'
              fill
            />
          )}
        </div>

        <input
          className={classes.input}
          type='file'
          accept='image/png, image/jpeg'
          id={name}
          name={name}
          ref={imageInput}
          onChange={hadleImageChange}
        />
        <button
          className={classes.button}
          type='button'
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
