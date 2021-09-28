const styles = theme => ({
    dialog: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '500px',

        },
    },
    table: {
        minWidth: 500,
        [theme.breakpoints.down('xs')]: {
            minWidth: 400,

        },
    },
});
export default styles;