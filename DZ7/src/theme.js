import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
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
    root: {
        padding: theme.spacing(3, 2),
    },
    margin: {
        margin: theme.spacing(1),
    },
}))
