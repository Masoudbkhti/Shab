

export const calculateShoppingCart = (cart) => {
    return cart.reduce( (init, current) => init = init + (current.count * current.price), 0)
}