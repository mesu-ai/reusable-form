import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Input = (props) => {
    const { label, name, type, ...rest } = props;
    return (
        <div>
            <label className='block text-start text-lg' htmlFor={name}>{label}</label>
            <Field
                className='w-full px-2 py-2 rounded-lg border-2 border-mercury'
                id={name}
                name={name}
                type={type}
                {...rest}
            />
            <div className='text-start text-red-600'>
            <ErrorMessage  name={name} />
            </div>
            

        </div>
    );
};

export default Input;