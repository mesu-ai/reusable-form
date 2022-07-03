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
        name: Yup.string().required('required'),
        email: Yup.string().email('invalid email').required('required'),

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
                    <div className='my-4  flex justify-center  items-center bg-slate-300 drop-shadow-lg'>
                        <Form className='w-1/2 p-10 space-y-4'>
                            <FormControl control='input' type='text' label='Name' name='name' />

                            <FormControl control='input' type='email' label='Email' name='email' />

                            <button className='bg-green-600 py-2 px-4 rounded-md text-white' type="submit">Submit</button>

                        </Form>
                    </div>
                )}

        </Formik>
    );
};

export default FormContainer;