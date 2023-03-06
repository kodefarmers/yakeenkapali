import { makeStyles } from 'tss-react/mui'

const carouselStyles = makeStyles()((theme) => {
    return {
        carousel: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'

        },
        carouselBox: {
            display: 'flex',
            // cursor: 'pointer',
            overflow: 'hidden',
            scrollBehavior: 'smooth',
            // margin: theme.spacing(0, -12, 0, -12)
        },
        carouselImage: {
            width: 'calc(100% / 4)',
            // objectFit: 'cover',
            padding: theme.spacing(1),
            [theme.breakpoints.down('lg')]: {
                width: 'calc(100% / 3)',
                padding: theme.spacing(0),
            },
            [theme.breakpoints.down('md')]: {
                width: 'calc(100% / 2)',
                padding: theme.spacing(0),
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                padding: theme.spacing(0),
            },
        },
        imageList: {
        }
    }
})

export default carouselStyles
