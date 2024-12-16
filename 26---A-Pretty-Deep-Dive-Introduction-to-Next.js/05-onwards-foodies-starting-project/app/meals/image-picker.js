"use client";
import { useState } from "react";
import { useRef } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker( { label, name } ) {
    // requires to turn this originally server based comp into a client one, done with "use client";
    const [pickedImage, setPickedImage] = useState(); 
    const imageInput = useRef();

    function handleImageChange(event) {
        const file = event.target.files[0]; /* since multiple attribute not set for <input type="file" ... */
        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };
        fileReader.readAsDataURL(file);
    }

    function handlePickClick() {
        imageInput.current.click(); // do not forget to use .current because of useRef()
    }

    return <div className={classes.picker}>
        <label htmlFor={name}>
            {label}
        </label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No impage picked yet. Empty preview</p>}
                {pickedImage && <Image 
                    src={pickedImage} 
                    alt="The image selected by the user"
                    fill
                />}
            </div>
            <input 
                className={classes.input}
                type="file" 
                id={name}
                accept="image/png, image/jpg" 
                name={name}
                ref={imageInput}
                /* multiple */ 
                onChange={handleImageChange}
                required
            />
            <button 
                className={classes.button}
                type="button"
                onClick={handlePickClick}
            >
                Pick an image
            </button>
        </div>
    </div>
}