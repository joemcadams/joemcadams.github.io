import { APP_COLORS } from './App'

export const HOME_STYLES = {
    CONTAINER: {
        minHeight: window.innerWidth > 800 ? '57vh' : '61vh',
        marginTop: window.innerWidth > 800 ? '25vh' : '20vh'
    },
    HEADER: {
        fontSize: window.innerWidth > 800 ? '5em' : '3em',
        marginBottom: '5vh',
        color: APP_COLORS.PRIMARY_COLOR,
        textAlign: 'center'
    },
    SUB_HEADER: {
        fontSize: window.innerWidth > 800 ? '3em' : '2em',
        color: APP_COLORS.ALTERNATE_COLOR,
        textAlign: 'center'
    },
    ICON_WRAPPER: {
        textAlign: 'center'
    },
    ICON: {
        FONT_COLOR: APP_COLORS.PRIMARY_COLOR,
        display: 'inline-block',
    }
}