import {
    blueGrey700, cyan700,
    deepOrange500,
    cyanA200, grey300, grey400, grey500,
    indigoA100, white, fullBlack,
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'

export const AppStyles = {
    spacing: spacing,
    fontFamily: 'Roboto, sans-serif',
    palette: {
        primary1Color: blueGrey700,
        primary2Color: cyan700,
        primary3Color: grey400,
        accent1Color: deepOrange500,
        accent2Color: cyanA200,
        accent3Color: grey500,
        textColor: white,
        alternateTextColor: indigoA100,
        canvasColor: indigoA100,
        borderColor: grey300,
        disabledColor: fade(white, 0.3),
        pickerHeaderColor: blueGrey700,
        clockCircleColor: fade(white, 0.07),
        shadowColor: fullBlack,
    },
}