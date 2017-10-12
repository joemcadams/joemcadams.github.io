export const CONTAINER_STYLES = {
    GUTTER_WIDTH: 20,
    GUTTER_HEIGHT: 20,
    COLUMN_WIDTH: (screenWidth) => {
        if (screenWidth < 800) return screenWidth * .8
        else return (screenWidth * .8) / 3
    },
    ANIMATION_LENGTH: 0
}

export const PROJECT_ITEM_STYLES = {
    padding: '5%',
    TEXT: {
        fontSize: '1.25em'
    }
}