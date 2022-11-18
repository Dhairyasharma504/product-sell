// import 'twin.macro';
// import { withFormik } from 'formik';
// import * as Yup from 'yup';

// import { Input, Button } from '../elements';

// const formId = 'LoginForm';

// const RegisterForm = ({
//   values,
//   touched,
//   errors,
//   isSubmitting,
//   handleSubmit,
//   handleChange,
//   handleBlur,
// }) => (
//   <form onSubmit={handleSubmit} id={formId} className="flex flex-col">
//     <Input
//       label="Name"
//       placeholder="Enter your name"
//       name="name"
//       type="text"
//       value={values.name}
//       onChange={handleChange}
//       onBlur={handleBlur}
//       error={errors.name && touched.name ? errors.name : undefined}
//     />
//     <Input
//       label="Last Name"
//       text="Last name"
//       type="text"
//       placeholder="Last name"
//       name="Lastname"
//       value={values.Lastname}
//       onChange={handleChange}
//       onBlur={handleBlur}
//       error={errors.Lastname && touched.Lastname ? errors.Lastname : undefined}
//     />
//     <Input
//       label="Email"
//       placeholder="Email"
//       name="email"
//       type="text"
//       value={values.email}
//       onChange={handleChange}
//       onBlur={handleBlur}
//       error={errors.email && touched.email ? errors.email : undefined}
//     />

//     <div className ="text-center">
//       <Button type="submit" disabled={isSubmitting}>
//         login
//       </Button>
//     </div>
//   </form>
// );

// export default withFormik({
//   mapPropsToValues: () => ({
//     name: '',
//     email: '',
//   }),
//   validationSchema: Yup.object().shape({
//     name: Yup.string().required('Name is required!'),
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required!'),
//   }),

//   handleSubmit: (values, { setSubmitting, props }) => {
//     props.onSubmit(values).finally(() => {
//       setSubmitting(false);
//     });
//   },
//   displayName: formId, // helps with React DevTools
// })(RegisterForm);
import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import Input from '../elements/Input';
import Button from '../elements/Button';

// import { Error } from '../atoms';

const formId = 'RegisterForm';

const RegisterForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleSubmit,
  handleChange,
  handleBlur,
}) => (
  <form onSubmit={handleSubmit} className="mt-6">
    <div className="">
      <Input
        text="first name"
        label="first name"
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

      <Input
        text="Last name"
        label="Last name"
        type="text"
        placeholder="Last name"
        name="Lastname"
        value={values.Lastname}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.Lastname && touched.Lastname ? errors.Lastname : undefined
        }
      />

      <Input
        text="Address1"
        label="Address 1"
        type="text"
        placeholder="Address1"
        name="address1"
        value={values.address1}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.address1 && touched.address1 ? errors.address1 : undefined
        }
      />

      <Input
        text="Address2"
        label="Address 2"
        type="text"
        placeholder="Address2"
        name="address2"
        value={values.address2}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.address2 && touched.address2 ? errors.address2 : undefined
        }
      />
      <Input
        text="PostalCode"
        label="Postal Code"
        type="text"
        placeholder="PostalCode"
        name="postalcode"
        value={values.postalcode}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.postalcode && touched.postalcode
            ? errors.postalcode
            : undefined
        }
      />

      <Input
        label="Email Address"
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
        label="Password"
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
      <Input
        label="Confirm Password"
        type="text"
        placeholder="ConfirmPassword"
        text="confirm-password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.confirmPassword && touched.confirmPassword
            ? errors.confirmPassword
            : undefined
        }
      />
      <div className="text-center">
        <Button type="submit" disabled={isSubmitting}>
          login
        </Button>
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <a className="flex justify-between  mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
            Already registered?
          </a>
        </Link>
      </div>
    </div>
  </form>
);

export default withFormik({
  mapPropsToValues: () => ({
    firstname: '',
    Lastname: '',
    address1: '',
    address2: '',
    postalcode: '',
    email: '',
    password: '',
    confirmPassword: '',
  }),
  validationSchema: Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('First name is required!'),
    Lastname: Yup.string(),
    address1: Yup.string().required('Address is required!'),
    address2: Yup.string(),
    postalcode: Yup.string().required('Postal-Code is required!'),

    email: Yup.string().email('Invalid email ').required('Email is Required!'),
    password: Yup.string()
      .required('Password is required!')
      .min(8, 'Seems a bit short...'),
    confirmPassword: Yup.string()
      .required('This field is required!')
      .label('Confirm password')
      .test('passwords-match', 'Passwords not matched!', function (values) {
        return this.parent.password === values;
      }),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values).finally(() => {
      setSubmitting(false);
    });
  },
  displayName: formId,
})(RegisterForm);
