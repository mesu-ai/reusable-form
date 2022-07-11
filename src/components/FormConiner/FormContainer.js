import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormControl from './FormControl/FormControl';

const FormContainer = () => {

    const initialValues = {
        name: '',
        email: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Enter your name !'),
        email: Yup.string().email('invalid email !').required('Enter your email !'),

    });

    const onSubmit = (values) => {
        console.log(values);

    };



    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}

        >
            
            {
                formic => (
                    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-md w-full space-y-8 md:p-10 p-4 sm:p-5  border-mercury border-2 rounded-lg">
                       

                        <Form className='p-10 space-y-4'>
                        <p className=''>Loggin </p>
                            
                            <FormControl control='input' type='text' label='Name' name='name' />

                            <FormControl control='input' type='email' label='Email' name='email' />

                            <button className='bg-green-600 py-2 px-4 rounded-md text-white' type="submit">Submit</button>

                        </Form>
                        </div>
                    </div>
                )}

        </Formik>
    );
};

export default FormContainer;