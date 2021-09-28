const styles = theme => ({
    root: {
        position: 'absolute',
    },
    items: {
        '& img': {
            width: '100%'
        },
        [theme.breakpoints.down('xl')]: {
            width: 1120,

        },
        [theme.breakpoints.down('md')]: {
            width: 1000,

        },
        [theme.breakpoints.down('sm')]: {
            width: 700,

        },

        '& span': {
            borderRadius: '50%',
            position: 'absolute',
            width: '45px',
            height: '50px',
            fontSize: 0
        }
    }

})
export default styles