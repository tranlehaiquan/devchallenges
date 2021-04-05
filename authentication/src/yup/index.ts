import pick from 'lodash/pick';
import yup from './sharedYup';

export const validations = {
  password: yup
    .string()
    .min(5, 'Password Too Short!')
    .max(50, 'Password Too Long!')
    .required('Password is required!'),
  email: yup.string().email('Invalid email!').required('Email is required!'),
  passwordConfirm: yup
    .string()
    .required('Confirm password is required!')
    .when('password', {
      is: (val) => !!(val && val.length > 0),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Both password need to be the same!'),
    }),
};

const extractFields = (fields: string[]) => pick(validations, fields);
const getValidationSchema = (values: string[]): yup.ObjectSchema<any> =>
  yup.object().shape(extractFields(values));

export const generateValidationFromSchema = (
  shape
) => yup.object().shape(shape);
export default getValidationSchema;

export { yup };
