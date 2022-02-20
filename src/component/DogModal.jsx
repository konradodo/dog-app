import React, {useEffect, useState} from "react";
import {callApiGet} from "../api";
import DogButton from "./DogButton";

const DogModal = ({ open, dogName, onClose }) => {

    const [image, setImage] = useState(null)

    const handleRandom = async () => {
        const res = await callApiGet(`breed/${dogName}/images/random`)
        if (res.success) {
            setImage(res.result)
        } else {
            setImage(null)
            onClose()
        }
    }

    const handlePrevent = (e) => {
        e.stopPropagation()
    }

    useEffect(() => {
        if (open) {
            handleRandom()
        } else {
            setImage(null)
        }
    }, [open, dogName])

    if (!open) return <></>

    return <div className="dog-modal" onClick={onClose}>

        <div className="dog-modal__content" onClick={handlePrevent}>
            <h1 className="dog-modal__header">{ dogName }</h1>
            {image && <img className="dog-modal__image" src={image} />}
            <div className="dog-modal__footer">
                <DogButton dogName="next" onClick={handleRandom}/>
                <DogButton dogName="close" onClick={onClose}/>
            </div>

        </div>
    </div>
}

export default DogModal
