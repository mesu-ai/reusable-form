import React from 'react';
import { Formik, Form } from 'formik';
import FormControl from '../../components/FormConiner/FormControl/FormControl';
import { validationSchema } from '../../components/FormConiner/validation/validationSchema';


const LoginPage = () => {
	const initialValues = {
		name: '',
		email: '',
	};

	
	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
			{(formic) => (
				<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
					<div className="max-w-md w-full space-y-8 md:p-10 p-4 sm:p-5  border-mercury border-2 rounded-lg">
						<p className="text-3xl font-bold">Login Page </p>

						<Form className=" space-y-4 px-4">
							<FormControl control="input" type="text" label="Name" name="name" />

							<FormControl control="input" type="email" label="Email" name="email" />

							<p className="text-end text-blue-700 text-lg">Forgot Password?</p>

							<button
								className="bg-green-600 w-full py-3 text-xl rounded-lg text-white"
								type="submit"
							>
								Login
							</button>
						</Form>

						<p className="text-xl">
							Have not any account?
							<span className="font-bold ml-1">Register</span>
						</p>
					</div>
				</div>
			)}
		</Formik>
	);
};

export default LoginPage;
