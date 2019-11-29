import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Grid, TextField, Button } from '@material-ui/core';
import { fetchTodos, addTodoToServer } from '../store/todos/actions';
import store from '../store';

const initialValues = {
    title: '',
    isDone: false
};

function renderTitleField({ field, form, meta }) {
    const errorText = meta.error && meta.touched ? meta.error : '';

    return (
        <TextField
            {...field}
            placeholder="Title"
            error={!!errorText}
            helperText={errorText}
            fullWidth
            margin="normal"
        />
    );
}

function validateRequired(value) {
    return !value ? 'Title is required' : false;
}

function TodoForm({ addTodo }) {
    async function onFormSubmit(values, { resetForm }) {

        await addTodoToServer({
            ...values
        });

        store.dispatch(fetchTodos());

        resetForm();
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
            <Form autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <Field name="title" validate={validateRequired}>
                            {renderTitleField}
                        </Field>
                    </Grid>
                    <Grid item xs={2}>
                        <Button type="submit" variant="contained">
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    );
}

export default TodoForm;
