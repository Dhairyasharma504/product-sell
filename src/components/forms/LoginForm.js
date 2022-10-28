import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Input from '../elements/Input';
import Button from '../elements/Button';

// import { Error } from '../atoms';

const formId = 'LoginForm';

const LoginForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleSubmit,
  handleChange,
  handleBlur,
}) => (
  <form onSubmit={handleSubmit} className="mt-6">
    <div className="my-5">
      <Input
        text="username/mobile-no"
        type="text"
        placeholder="username"
        name="username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.username && touched.username ? errors.username : undefined
        }
      />
    </div>
    <div className="mt-5">
      <Input
        text="password"
        type="password"
        placeholder="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.password && touched.password ? errors.password : undefined
        }
      />
      <div className="flex justify-end mt-2 text-xs text-gray-600">
        <Link href="/auth/forgot-password">
          <a className="ml-2 font-bold text-xs text-black cursor-pointer hover:underline">
            Forgot Password ?
          </a>
        </Link>
      </div>
    </div>
    <Button type="submit" disabled={isSubmitting}>
      login
    </Button>
  </form>
);

export default withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required!'),
    password: Yup.string()
      .required('Password is required!')
      .min(4, 'Seems a bit short...'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values).finally(() => {
      setSubmitting(false);
    });
  },
  displayName: formId, // helps with React DevTools
})(LoginForm);
