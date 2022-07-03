import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const FormContainer = () => {

    const initialValues = {}

    const validationSchema = Yup.object({

    });

    const onSubmit = (values) => {

    }



    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formic =>
                    <Form>

                        <button type='submit'>submit</button>


                    </Form>
            }

        </Formik>
    );
};

export default FormContainer;