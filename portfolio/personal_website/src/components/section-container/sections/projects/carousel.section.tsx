// inspiration for this 3d carousel comes from https://www.youtube.com/watch?v=RMTdoi_5sAA&t=12s

import { motion } from 'framer-motion';
import { useState } from "react";
import {logo, coffee, walle, temp } from "../../../../assets/index";


const slides = [logo, coffee, walle, temp, temp];
const positions = ['left1', 'left', 'center', 'right', 'right1'];
const imageVariants = {
    center: {x: '0%', scale: 1, zIndex: 5},
    left1: {x: '-50%', scale: 0.7, zIndex: 3},
    left: {x: '-90%', scale: 0.5, zIndex: 2},
    right1: {x: '50%', scale: 0.7, zIndex: 3},
    right: {x: '90%', scale: 0.5, zIndex: 1},
}

const Carousel = () =>{
    const [positionIndexes, setPositionIndexes] = useState([0,1,2,3,4]);
    const handleNext = () =>{
        setPositionIndexes((prevIndex) => {
            const updatePostionIndexes = prevIndex.map((idx => (idx + 1) % 5));
            return updatePostionIndexes;
        })
    }



    return (
        <div className='flex items-center flex-col justify-center bg-black h-screen'>
            {slides.map((image, index) => (
                <motion.img
                    key= {index}
                    src= {image}
                    alt= {image}
                    className="rounded-[12px]"
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{duration: 0.5}}
                    style={{width:'20%', position:'absolute'}}
                />
            ))}
            <button className='text-white mt- [400px] bg-indigo-400 rounded-md py-2 px-4' onClick={handleNext}> Next</button>
        </div>
    )
}


export default Carousel;
