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
  photoURL: yup.string().url().required(),
  displayName: yup.string().required(),
};

type validationsKey = keyof typeof validations;

const extractFields = (fields: validationsKey[]) => pick(validations, fields);
const getValidationSchema = (values: validationsKey[]): yup.ObjectSchema<any> =>
  yup.object().shape(extractFields(values));

export const generateValidationFromSchema = (shape) =>
  yup.object().shape(shape);
export default getValidationSchema;

export { yup };
