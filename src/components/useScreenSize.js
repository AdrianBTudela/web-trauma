import { useState, useEffect } from "react";
const useScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() =>{
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[]);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    console.log("resize");
    return width;
}
export default useScreenSize;