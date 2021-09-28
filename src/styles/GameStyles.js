const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
        height: '100vh',
        fontFamily: 'Roboto Mono, monospace',

    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,

    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // necessary for content to be below app bar
    toolbar: {
        display: 'flex',
        height: '80px',
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontSize: '1.5rem',
        "& svg": {
            margin: '0.3rem'
        }
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
    },
    characters: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '5rem 3rem',
        '& img': {
            margin: '1rem',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            [theme.breakpoints.down('xs')]: {
                width: '70px',
                height: '70px',

            },
        },

    },
    gameOver: {
        filter: 'grayscale(100%)'
    }
})
export default styles;