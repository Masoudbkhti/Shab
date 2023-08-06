

export const findByHistory = (userData, historyId) => {
    return userData.historyCart.filter( cart => cart.id === historyId)[0]
}