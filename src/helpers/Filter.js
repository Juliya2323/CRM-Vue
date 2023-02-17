export function filterId(items, flag) {
    console.log(flag);
    return {
        'down': items.sort((a,b) => a.id - b.id),
        'up': items.sort((a,b) => b.id + a.id)
    }[flag]
}