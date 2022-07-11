
import * as Yup from 'yup';
export const validationSchema = Yup.object({
  name: Yup.string().required('Enter your name !'),
  email: Yup.string().email('invalid email !').required('Enter your email !'),
});

