export const CONTAINER_STYLES = {
    gutterWidth: 20,
    gutterHeight: 20,
    columnWidth: (screenWidth) => {
        if (screenWidth < 800) return screenWidth * .8
        else return (screenWidth * .8) / 2
    },
    animationLength: 500,
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