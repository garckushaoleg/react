import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default function Form({addTodo}) {

    const classes = useStyles();

    return (
        <div>
            <Formik
                initialValues={{ title: '' }}

                validate={values => {
                    const errors = {};

                    if (!values.title) {
                        errors.name = 'Required';
                    }

                    return errors;
                }}

                onSubmit={(values, { resetForm }) => {
                    addTodo(values);
                    resetForm();
                }}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit} style={formToAddStyle} noValidate autoComplete="off">
                        <TextField
                            type="text"
                            name="title"
                            onChange={handleChange}
                            value={values.title}
                            required
                            id="outlined-required"
                            label="Required"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        {errors.name && touched.name && errors.name}

                        <Button
                            type="submit"
                            variant="contained" 
                            color="primary" 
                            className={classes.button}
                        >
                            Send
                        </Button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

const formToAddStyle = {
    width: '100%',
    maxWidth: '300px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
