import React from 'react';

import './scrollDownIndicator.scss';

export const ScrollDownArrowsIndicator = () => {
    return (
        <div className="scroll-down-arrows col-md-0">
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export const ScrollDownMouseIndicator = () => {
    return (
        <div className="scroll-down-mouse col-md-0"></div>
    );
}