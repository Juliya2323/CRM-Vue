/* export function filterId(items, flag) {
    return {
        'up': items.sort((a,b) => b.id - a.id),
        'down': items.sort((a,b) => a.id - b.id),
        'down': items.sort((a,b) => a.id > b.id ? 1 : b.id > a.id ? -1 : 0),
        'up': items.sort((a,b) => a.id < b.id ? 1 : b.id < a.id ? -1 : 0) 
    }[flag]
} */

export function filterId(items, flag) {
    
if(flag === 'up') {
  items.sort((a, b) => b.id - a.id);
}

if(flag === 'down') {
  items.sort((a, b) => a.id - b.id);
}
}

export function filterName(items, flag) {
    
  if(flag === 'up') {
    items.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
  
  if(flag === 'down') {
    items.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1;
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
  }