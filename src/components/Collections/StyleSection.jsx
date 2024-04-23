import React from 'react'
import background from '../../assets/backgrounds/style.jpg'
import { SectionItem } from '..';
import { styles } from '../../data';



function StyleSection() {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}
            className='w-full h-screen'
        >
            <h2 className='text-4xl lg:text-5xl text-secondary text-center pt-4 mt-4'>
                Shop by Style
            </h2>
            <div className='flex h-2/3 lg:h-3/4 items-center max-w-2xl m-auto justify-center flex-wrap mt-4 gap-3'>
                {styles.map(style => (
                    <SectionItem key={style.title} title={style.title} />
                ))}
            </div>
        </div>
    );
}

export default StyleSection
