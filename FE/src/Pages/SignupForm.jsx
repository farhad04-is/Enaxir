import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

 export const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      image: '',
      productName: '',
      price: '',
    },
    validationSchema: Yup.object({
      image: Yup.string()
      
        .required('Required'),
      productName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      price: Yup.number() .required('Required'),
    }),
    onSubmit: values => {
   axios.post('http://localhost:3000/', 
   values
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="image">First Name</label>
      <input
        id="image"
        name="image"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.image}
      />
      {formik.touched.image && formik.errors.image ? (
        <div>{formik.errors.image}</div>
      ) : null}

      <label htmlFor="productName">Last Name</label>
      <input
        id="productName"
        name="productName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.productName}
      />
      {formik.touched.productName && formik.errors.productName ? (
        <div>{formik.errors.productName}</div>
      ) : null}

      <label htmlFor="price">price Address</label>
      <input
        id="price"
        name="price"
        type="price"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.price}
      />
      {formik.touched.price && formik.errors.price ? (
        <div>{formik.errors.price}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};