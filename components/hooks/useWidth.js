import React, { useEffect, useState } from "react";

export default function useWidth() {
    const [width, setWidth] = useState();

    useEffect(() => {
        function onResize() {
            const tmpWidth = window.innerWidth;
            setWidth(tmpWidth);
        }

        onResize();
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return width;
}
