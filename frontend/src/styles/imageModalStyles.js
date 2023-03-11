import { makeStyles } from 'tss-react/mui'

const imageModalStyles = makeStyles()((theme) => {
    return {
        modalWrapper: {
        },
        modal: {
        },
        modalBox: {
            backgroundColor: '#f2f2f2',
            borderRadius: 14,
            width: '60%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: theme.spacing(1, 1, 1, 1),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            ":focus": {
                outline: 'none'
            },

        },
        iconButton: {
            color: 'black'
        },
        modalImage: {
            width: '23rem',
            margin: theme.spacing(2, 0, 2, 0),
        }
    }
})

export default imageModalStyles
