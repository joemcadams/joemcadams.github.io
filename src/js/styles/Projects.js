export const CONTAINER_STYLES = {
    gutterWidth: 20,
    gutterHeight: 20,
    columnWidth: (screenWidth) => {
        if (screenWidth < 800) return screenWidth * .8
        else return (screenWidth * .8) / 3
    },
    animationLength: 500
}

export const PROJECT_ITEM_STYLES = {
    padding: '5%'
}