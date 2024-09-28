import React from 'react'
import Lottie from '@lottielab/lottie-player/react';

function Loader() {
    return (
        <div className=' h-[200px] w-[200px] flex justify-center items-center pt-[250px]'>
            <Lottie src="https://cdn.lottielab.com/l/BWniAGXXahJWju.json" autoplay />

        </div>
    )
}

export default Loader