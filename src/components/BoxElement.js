import React, { useEffect, useRef, useState } from 'react';

const BoxElement = ({ el, index }) => {
    const [isFocused, setIsFocused] = useState(false);
    const focusedElement = useRef()
    const handleFocus = () => {
        setIsFocused(true);
        focusedElement.current.classList.add('is-focused');
    }
    const handleBlur = () => {
        setIsFocused(false);
        focusedElement.current.classList.remove('is-focused');
    }
    useEffect(() => {
        const element = focusedElement.current;
        element.addEventListener('focus', handleFocus);
        element.addEventListener('blur', handleBlur);

        return () => {
            if (element) {
                element.removeEventListener('focus', handleFocus);
                element.removeEventListener('blur', handleBlur);
            }
        };

    }, [focusedElement]);
    const handleChangeBoxElement = (e, x) => {
        const parent = e.target.parentNode;
        const tabindex = parent.tabIndex;
        const nextIndex = tabindex + x;
        const element = parent.parentNode.children[nextIndex];
        if (element) {
            element.tabIndex = nextIndex;
            element.focus();
        }

    }

    return (
        <div ref={focusedElement} tabIndex={index} className="box-element">
            {isFocused && <p onClick={(e) => handleChangeBoxElement(e, -1)} className='arrow'>←</p>}
            <div className="sub-box-element">
                <div>
                    <a href={el.link}>
                        <h3>{el.title.length > 15 ? el.title.slice(0, 15).trimEnd() + "..." : el.title}</h3>
                    </a>
                    {!isFocused ? "" : <input type='button' value='retrecir' />}
                </div>
                <section>
                    <div className="img-container">
                        <img src={el.image} alt={"image " + el.title} />
                    </div>
                    {isFocused && <p className='synopsis'>{el.synopsis}</p>}
                </section>
            </div>
            {isFocused && <p onClick={(e) => handleChangeBoxElement(e, 1)} className="arrow">→</p>}
        </div>
    );
};

export default BoxElement;