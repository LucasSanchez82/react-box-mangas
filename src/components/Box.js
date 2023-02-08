import { useEffect, useState } from 'react';

const Box = (props) => {
    //Découpage du tableau
    const [sliceStart, setSliceStart] = useState(0);
    const [sliceEnd, setSliceEnd] = useState(5);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll) };
    }, [])

    const handleScroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setSliceEnd((prevSliceEnd) => prevSliceEnd + 5);
        }
        console.log(sliceEnd)
    };

    return (
        <div className='box'>
            {
                props.data //le tableau
                    .slice(sliceStart, sliceEnd) //je ne prends que les 25 premiers elements du tableau
                    .map((el, index) => (
                        <div key={index} className="box">
                            <a href={el.link}>
                                <h3>{el.title}</h3>
                                <img src={el.image} alt={"image " + el.title} />
                                <p>{el.synopsis}</p>
                            </a>
                        </div>
                    ))
            }
        </div>
    );
};

export default Box;