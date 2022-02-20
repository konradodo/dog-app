import React, {useEffect, useState} from "react";
import {callApiGet} from "../api";
import useMount from "../hook/useMount";
import DogButton from "../component/DogButton";
import DogModal from "../component/DogModal";

const DogList = () => {
    const [list, setList] = useState([])
    const [open, setOpen] = useState(false)
    const [dog, setDog] = useState(null)

    const loader = useMount(async () => {
       const res = await callApiGet('breeds/list/all')
       if (res.success) {
           setList(Object.keys(res.result))
       }
    })

    const handleClick = (dogName) => {
        setOpen(true)
        setDog(dogName)
    }

    const handleClose = () => {
        setOpen(false)
        setDog(null)
    }

    if (loader) return <div>...LOADER</div>

    return (
        <>
            <DogModal dogName={dog} open={open} onClose={handleClose}/>
            <div className="dog-list">
                {
                    list.map(dogName => <div className="dog-list__element" key={dogName} >
                        <DogButton dogName={dogName} onClick={() => handleClick(dogName)} />
                    </div>)
                }
            </div>
        </>
    )
}

export default DogList;
