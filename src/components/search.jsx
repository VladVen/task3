import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import searchValidator from "../store/searchValidator";
import style from './search.module.css'


const Search = (props) => {
    return (
        <div>
            <Formik
                initialValues={{name: '', country: ''}}
                validationSchema={searchValidator}
                onSubmit={(values, {setSubmitting}) => {
                    props.getDataThunk(values.name, values.country)
                    setSubmitting(false);
                }}>
                {({isSubmitting}) => (
                    <Form>
                        <label htmlFor={"name"}> Name of University </label>
                        <Field type="name" name="name"/>
                        <ErrorMessage name={'name'} component={'div'} className={style.error} />
                        <div>
                            <label htmlFor={"country"}>Country of University </label>
                            <Field type="country" name="country"/>
                            <ErrorMessage name={'country'} component={'div'}  className={style.error}/>
                        </div>
                        <button type="submit" disabled={isSubmitting}>
                            Search
                        </button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Search