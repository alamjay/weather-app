import React from 'react';

interface ArrowProps {
    angle: number;
}

const Arrow: React.FC<ArrowProps> = ({ angle }) => {
    const arrowStyle: React.CSSProperties = {
        transform: `rotate(${angle}deg)`,
        transformOrigin: 'center center',
        transition: 'transform 0.3s ease-in-out',
    };

    return (
        <svg
            width="50"
            height="40"
            viewBox="0 0 80 80"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g style={arrowStyle}>
                <polygon points="50,20 70,60 50,45 30,60" fill="rgb(22 78 99)" />
            </g>
            <text x="50" y="15" text-anchor="middle" font-size="22" fill="#333333">N</text>
        </svg>
    );
};

export default Arrow;
