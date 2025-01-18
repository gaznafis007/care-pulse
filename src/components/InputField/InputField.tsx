'use client';
import React from 'react';

const InputField = ({label, labelClass, type, name, register, placeholder, className, handler}) => {
    return (
        <div className='flex flex-col space-y-2 md:space-y-3 lg:space-y-4'>
            <label className={`text-white text-lg ${labelClass}`}>{label}</label>
            <input onChange={handler} type={type} {...register} name={name} placeholder={placeholder} className={`px-6 py-3 rounded-lg border border-indigo-500 text-slate-800 ${className}`} />
        </div>
    );
};

export default InputField;