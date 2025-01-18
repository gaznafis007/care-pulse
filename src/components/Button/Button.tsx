'use client';
import React from 'react';

const Button = ({children, className, handler, params, type}) => {
    return (
        <>
        <button type={type} onClick={params ? () => handler(params) : handler} className={`px-6 py-2 mt-2 md:mt-3 lg:mt-4 rounded-lg text-white bg-indigo-500 ${className}`}>
            {children}
        </button>
        </>
    );
};

export default Button;