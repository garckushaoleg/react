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

export default function Form({ onSubmitForm }) {

    const classes = useStyles();

    return (
        <div>
            <Formik
                initialValues={{ name: '', email: '', body: '' }}

                validate={values => {
                    const errors = {};

                    if (!values.name) {
                        errors.name = 'Required';
                    } else if (!values.email) {
                        errors.email = 'Required';
                    } else if (!values.body) {
                        errors.body = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }

                    return errors;
                }}

                onSubmit={(values) => {
                    onSubmitForm(values);
                    values = { name: '', email: '', body: '' };
                }}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit} style={formToAddStyle} noValidate autoComplete="off">
                        <TextField
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                            required
                            id="outlined-required"
                            label="Required"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        {errors.name && touched.name && errors.name}

                        <TextField
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            required
                            id="outlined-required"
                            label="Required"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        {errors.email && touched.email && errors.email}

                        <TextField
                            name="body"
                            onChange={handleChange}
                            value={values.body}
                            required
                            id="outlined-multiline-static"
                            label="Required"
                            multiline
                            rows="4"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        {errors.body && touched.body && errors.body}

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
    border: "1px solid black",
    width: '100%',
    maxWidth: '500px',
    height: '450px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative'
}