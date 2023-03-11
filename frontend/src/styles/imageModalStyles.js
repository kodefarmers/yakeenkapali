import { makeStyles } from 'tss-react/mui'

const imageModalStyles = makeStyles()((theme) => {
    return {
        modalWrapper: {
        },
        modal: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalBox: {
            backgroundColor: '#f2f2f2',
            borderRadius: 14,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            // padding: theme.spacing(1, 1, 1, 1),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            ":focus": {
                outline: 'none'
            },
            width: '60%',
            [theme.breakpoints.down('md')]: {
                width: '70%',
            },
            [theme.breakpoints.down('sm')]: {
                width: '90%',
            },

        },
        iconButton: {
            color: 'black'
        },
        modalImage: {
            width: '23rem',
            margin: theme.spacing(2, 0, 2, 0),
            [theme.breakpoints.down('md')]: {
                width: '19rem',
            },
            [theme.breakpoints.down('sm')]: {
                width: '10rem',
            },
        }
    }
})

export default imageModalStyles
