import React from 'react';

const handleScrollToNext = (targetId: string) => {
    const targetSection = document.getElementById(targetId);
    if(targetSection){
        targetSection.scrollIntoView({behavior:'smooth'})
    }
}

export default handleScrollToNext;