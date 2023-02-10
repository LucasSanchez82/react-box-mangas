import { useEffect, useState } from 'react';
import BoxElement from './BoxElement';

const Boxs = (props) => {
    //Découpage du tableau
    const [sliceEnd, setSliceEnd] = useState(25);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll) };
    })

    const handleScroll = () => {
        console.log("scroll");
        console.log("innerHeight : " + window.innerHeight)
        console.log("scrollY : " + window.scrollY);
        console.log("document.offsetHeight : " + document.body.offsetHeight);
        if ((window.innerHeight + window.scrollY + 15) >= document.body.offsetHeight) {
            setSliceEnd((prevSliceEnd) => prevSliceEnd + 10);
        }
    };

    return (
        <div className='box'>
            {
                props.data //le tableau
                    .slice(0, sliceEnd) //je ne prends que les 25 premiers elements du tableau
                    .map((el, index) => (
                        <BoxElement index={index} el={el} key={index} />
                    ))
            }
        </div>
    );
};

export default Boxs;