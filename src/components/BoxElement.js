import React from 'react';

const BoxElement = ({ el, index }) => {
    return (
        <div tabIndex={index + 1} className="boxElement">
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