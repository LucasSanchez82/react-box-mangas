import React, { useEffect, useRef, useState } from 'react';

const BoxElement = ({ el, index }) => {
    const [isFocused, setIsFocused] = useState(false);
    const focusedElement = useRef()
    const handleFocus = () => {
        setIsFocused(true)
        focusedElement.current.classList.add('is-focused');
        console.log("handleFocus : ");
        console.log(focusedElement.current.classList);
    }
    const handleBlur = () => {
        setIsFocused(false)
        focusedElement.current.classList.remove('is-focused');
        console.log("handleBlur : ");
        console.log(focusedElement.current.classList);
    }
    useEffect(() => {
        focusedElement.current.addEventListener('focus', handleFocus);
        focusedElement.current.addEventListener('blur', handleBlur);

        return () => {
            if (focusedElement.current) {
                focusedElement.current.removeEventListener('focus', handleFocus);
                focusedElement.current.removeEventListener('blur', handleBlur);
            }
        };

    })
    return (
        <div ref={focusedElement} tabIndex={index + 1} className="boxElement">
            <a href={el.link}>
                <h3>{el.title.length > 15 ? el.title.slice(0, 15).trimEnd() + "..." : el.title}</h3>
            </a>
            <section>
                <div className="img-container">
                    <img src={el.image} alt={"image " + el.title} />
                </div>
                {/* <p className='synopsis'>{el.synopsis}</p> */}
            </section>
        </div>
    );
};

export default BoxElement;