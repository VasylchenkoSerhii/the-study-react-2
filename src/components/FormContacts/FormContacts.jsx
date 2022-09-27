import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

export const FormContacts = () => {
    const initialValues = {
            name: "",
    };
    
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        resetForm()
    };
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            <Form>
                <label>
                    Name
                    <Field type="text" name="name" />
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};