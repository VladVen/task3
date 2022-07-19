import React from "react";
import {Field, Form, Formik} from "formik";


const Search = (props) => {
    return (
        <div>
            <Formik
                initialValues={{name: '', country: ''}}
                onSubmit={(values, {setSubmitting}) => {
                    props.getDataThunk(values.name, values.country)
                    setSubmitting(false);
                }}>
                {({isSubmitting}) => (
                    <Form>
                        <label htmlFor={"name"}> Name of University </label>
                        <Field type="name" name="name"/>
                        <div>
                            <label htmlFor={"country"}>Country of University </label>
                            <Field type="country" name="country"/>
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