import { makeStyles } from 'tss-react/mui'
import { keyframes } from "@emotion/react"

const marquee = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
`

const carouselStyles = makeStyles()((theme) => {
    return {
        carousel: {
            margin: theme.spacing(5, 0, 5, 0),
        },
        carouselBox: {
            position: 'relative',
            display: 'flex',
            overflow: 'hidden',
        },
        carouselImageBox: {
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            animation: `${marquee} 15s infinite linear`,
            justifyContent: 'space-around',
        },
        carouselImage: {
            display: 'block',
            maxWidth: '15rem',
            cursor: 'pointer',
            // objectFit: 'cover',
            padding: theme.spacing(1),
            [theme.breakpoints.down('lg')]: {
                maxWidth: '13rem',
            },
            [theme.breakpoints.down('md')]: {
                maxWidth: '11rem',
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: '9rem',
            },
        },
    }
})

export default carouselStyles
