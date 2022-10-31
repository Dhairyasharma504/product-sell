import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Input from '../elements/Input';
import Button from '../elements/Button';

// import { Error } from '../atoms';

const formId = 'Signup';

const Signup = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleSubmit,
  handleChange,
  handleBlur,
}) => (
  // <form onSubmit={handleSubmit} className="mt-6">
  //   <div className="my-5">
  //     <Input
  //       text="first name"
  //       type="text"
  //       placeholder="first name"
  //       name="firstname"
  //       value={values.firstname}
  //       onChange={handleChange}
  //       onBlur={handleBlur}
  //       error={
  //         errors.firstname && touched.firstname ? errors.firstname : undefined
  //       }
  //     />
  //   </div>
  //   <div className="mt-5">
  //     <Input
  //       text="Lastname"
  //       type="text"
  //       placeholder="Lastname"
  //       name="Lastname"
  //       value={values.Lastname}
  //       onChange={handleChange}
  //       onBlur={handleBlur}
  //       error={
  //         errors.Lastname && touched.Lastname ? errors.Lastname : undefined
  //       }
  //     />
  //     <div className="flex justify-end mt-2 text-xs text-gray-600">
  //       <Link href="/auth/forgot-password">
  //         <a className="ml-2 font-bold text-xs text-black cursor-pointer hover:underline">
  //           Forgot Password
  //         </a>
  //       </Link>
  //     </div>
  //   </div>
  //   <Button type="submit" disabled={isSubmitting}>
  //     login
  //   </Button>
  // </form>
  <form onSubmit={handleSubmit} className="mt-6">
    <div className="flex justify-between gap-3">
      <span className="w-1/2">
        <Input
          text="first name"
          type="text"
          placeholder="first name"
          name="firstname"
          value={values.firstname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            errors.firstname && touched.firstname ? errors.firstname : undefined
          }
        />
      </span>
      <span className="w-1/2">
        <Input
          text="Lastname"
          type="text"
          placeholder="Lastname"
          name="Lastname"
          value={values.Lastname}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            errors.Lastname && touched.Lastname ? errors.Lastname : undefined
          }
        />
      </span>
    </div>
    <Input
      text="Email Address"
      type="email"
      placeholder="Email Address"
      name="email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.email && touched.email ? errors.email : undefined}
    />
    <Input
      text="password"
      type="password"
      placeholder="password"
      name="password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      error={errors.password && touched.password ? errors.password : undefined}
    />
    <Input type="text" placeholder="ConfirmPassword" text="confirm-password" />
    <div className="text-center">
      <Button type="submit" disabled={isSubmitting}>
        login
      </Button>
    </div>
    <Link href="/">
      <a className="flex justify-between  mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
        Already registered?
      </a>
    </Link>
  </form>
);

export default withFormik({
  mapPropsToValues: () => ({
    firstname: '',
    Lastname: '',
    email: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('First name is required!'),
    Lastname: Yup.string(),
    email: Yup.string().email('Invalid email ').required('Email is Required!'),
    password: Yup.string()
      .required('Password is required!')
      .min(8, 'Seems a bit short...'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values).finally(() => {
      setSubmitting(false);
    });
  },
  displayName: formId,
})(Signup);
