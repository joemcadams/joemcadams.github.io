import {
    blueGrey700, cyan700,
    purpleA200, blueGrey50,
    cyanA200, grey300, grey400, grey500,
    indigoA100, white, fullBlack,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'

export const APP_COLORS = {
    PRIMARY_COLOR: blueGrey700,
    ACCENT_COLOR: purpleA200,
    TEXT_COLOR: white,
    ALTERNATE_COLOR: indigoA100,
    BACKGROUND_COLOR: blueGrey50,
    SHADOW_COLOR: fullBlack
}

export const APP_STYLES = {
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: APP_COLORS.PRIMARY_COLOR,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: APP_COLORS.ACCENT_COLOR,
        accent2Color: cyanA200,
        accent3Color: grey500,
        textColor: APP_COLORS.TEXT_COLOR,
        alternateTextColor: APP_COLORS.ALTERNATE_COLOR,
        canvasColor: APP_COLORS.ALTERNATE_COLOR,
        borderColor: grey300,
        disabledColor: fade(APP_COLORS.TEXT_COLOR, 0.3),
        pickerHeaderColor: APP_COLORS.PRIMARY_COLOR,
        clockCircleColor: fade(APP_COLORS.TEXT_COLOR, 0.07),
        shadowColor: APP_COLORS.SHADOW_COLOR,
    },
}