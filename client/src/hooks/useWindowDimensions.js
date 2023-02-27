import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
    const { innerWidth: deviceWidth, innerHeight: deviceHeight } = window;
    return {
        deviceWidth,
        deviceHeight
    };
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default useWindowDimensions;