export const CONTAINER_STYLES = {
    GUTTER_WIDTH: 20,
    GUTTER_HEIGHT: 20,
    COLUMN_WIDTH: (screenWidth) => {
        if (screenWidth < 800) return screenWidth * .8
        else return (screenWidth * .8) / 2
    },
    ANIMATION_LENGTH: 0,
}

export const ABOUT_ITEM_STYLES = {
    IMAGE: {
        height: 'auto',
        width: '70%',
        marginLeft: '15%'
    },
    IMAGE_MOBILE: {
        height: 'auto',
        width: '100%'
    },
    CONTAINER: {
        padding: '5%'
    }
}