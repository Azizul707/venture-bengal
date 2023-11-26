import React from 'react';

const OverView = () => {
    return (
        <div className='max-w-screen-2xl'>
            <div className="relative">
                <video className='aspect-auto' width='1530' height="450" controls>
                    <source src="https://cdn.pixabay.com/vimeo/755379248/lake-132867.mp4?width=1280&hash=6e87a009d9e113f1d53959a28d9f4cea05c1a3eb" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute md:top-1/3 bg-black bg-opacity-20 md:p-36 md:left-40">
                    <h1 className='text-2xl hadingFont md:text-7xl font-bold text-slate-200'>Best Travel Experiences 2024</h1>
                </div>
            </div>
        </div>
    );
};

export default OverView;