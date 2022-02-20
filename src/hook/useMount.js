import { useState, useEffect } from 'react';

const useMount = (callback) => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const func = async () => {
            await callback()
            setLoader(false)
        }

        func()
    }, [])

    return loader
}

export default useMount
