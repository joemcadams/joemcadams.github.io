export const PROJECT_CONTAINER_STYLES = {
    gutterWidth: 10,
    gutterHeight: 10,
    columnWidth: (screenWidth) => {
        if (screenWidth < 800) return screenWidth * .8
        else return (screenWidth * .8) / 3
    },
    animationLength: 1500
}

export const PROJECT_ITEM_STYLES = {
    padding: '1%'
}