import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import "./AddComponents.scss"

function AddComponents() {
    return (
        <div className='add'>
            <Formik
                initialValues={{ img: '', categories: '', name: '', price: '' }}
                validationSchema={Yup.object({
                    img: Yup.string(),
                    categories: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    name: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    price: Yup.string(),

                })}
                onSubmit={(values) => {
                    axios.post("http://localhost:3003/", values)
                }}
            >
                <Form>
                    <label htmlFor="img">Imge</label>
                    <Field name="img" type="text" />
                    <ErrorMessage name="img" />

                    <label htmlFor="categories">Categories</label>
                    <Field name="categories" type="text" />
                    <ErrorMessage name="categories" />

                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" />

                    <label htmlFor="price">Price</label>
                    <Field name="price" type="number" />
                    <ErrorMessage name="price" />

                    <button type="submit">Add Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddComponents