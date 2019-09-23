export const updateObjectInArray = (items, itemId, objPropName, newProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newProps}
        }
        return u;
    })
};