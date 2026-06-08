import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"


const Formik = () => {
    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema:yup.object({
         username:yup.string().min(3,"username cannot be less than 3 characters").max(33,"username is too long").required("username cannot be empty"),
         email:yup.string().email("Invalid email address").required("email cannot be empty"),
         password:yup.string().min(8, "password cannot be less than 8 characters").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/, "Password must contain an uppercase letter, a number, and a special character").required("password cannot be empty")
        }),
        onSubmit:(values)=>{
         console.log(values);
        formik.setValues({
            username:"",
            email:"",
            password:""
        })
        }
    }) 

    console.log(formik.errors);
    console.log(formik.touched);
    console.log(formik.values);
    
    
  return (
    <div>
        <form className='w-50 mx-auto px-3 py-3' onSubmit={formik.handleSubmit} action="">
            <input value={formik.values.username} className='form-control mt-3' name='username' onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" placeholder='Username' />
            <small className='text-danger mt-1'>{formik.values.username && formik.errors.username}</small>
            <input   value={formik.values.email} className='form-control mt-3' name='email' onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" placeholder='Email' />
             <small  className='text-danger mt-1'>{formik.values.email && formik.errors.email}</small>
            <input   value={formik.values.password} className='form-control mt-3' name='password'  onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" placeholder='Password'/>
             <small  className='text-danger mt-1'>{formik.values.password && formik.errors.password}</small>
            <button className='btn btn-dark'>Submit</button>
        </form>
    </div>
  )
}

export default Formik