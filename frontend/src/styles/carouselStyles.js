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
            padding: theme.spacing(10, 0, 0, 0),
        },
        carouselBox: {
            display: 'flex',
            overflow: 'hidden',
        },
        carouselImageBox: {
            display: 'flex',
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
        },
    }
})

export default carouselStyles
