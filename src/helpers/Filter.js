export function filterId(items, flag) {
    console.log(flag);
    console.log(items);
    return {
        'down': items.sort((a,b) => a.id + b.id),
        'up': items.sort((a,b) => b.id - a.id),
        /* 'down': items.sort((a,b) => a.id > b.id ? 1 : b.id > a.id ? -1 : 0),
        'up': items.sort((a,b) => a.id < b.id ? 1 : b.id < a.id ? -1 : 0) */
    }[flag]
}