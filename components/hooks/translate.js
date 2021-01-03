import { useEffect, useRef, useState } from "react";

const Translate = ({ children, direction = "up", className = "" }) => {
    const domRef = useRef();

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // In your case there's only one element to observe:
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Not possible to set it back to false like this:
                    setVisible(true);

                    // No need to keep observing:
                    observer.unobserve(domRef.current);
                }
            });
        });

        observer.observe(domRef.current);

        return () => {
            if (observer && observer.unobserve) {
                observer.unobserve(domRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={domRef}
            className={
                isVisible
                    ? direction == `up`
                        ? `${className} translate_up`
                        : `${className} translate_down`
                    : ""
            }
        >
            {children}
        </div>
    );
};

export default Translate;
