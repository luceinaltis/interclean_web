import { useState, useEffect } from "react";

export function useScroll() {
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [scrollY, setScrollY] = useState(bodyOffset.top);
    const [scrollX, setScrollX] = useState(bodyOffset.left);
    const [scrollDirection, setScrollDirection] = useState();
    const [bodyOffset, setBodyOffset] = useState(window.body.getBoundingClientRect());

    const listener = (e) => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setScrollX(bodyOffset.left);
        setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
        setLastScrollTop(-bodyOffset.top);
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    return {
        scrollY,
        scrollX,
        scrollDirection,
    };
}

export default useScroll;
