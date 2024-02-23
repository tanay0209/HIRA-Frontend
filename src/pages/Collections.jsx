import React from 'react';
import { useParams } from 'react-router-dom';

function Collections() {
    const { category, style } = useParams();
    return (
        <div className='text-2xl'>
            This is {category} {style} page
        </div>
    );
}

export default Collections;
