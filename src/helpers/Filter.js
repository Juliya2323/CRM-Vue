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

export function filterEmail(items, flag) {

  console.log('email');
    
    if(flag === 'up') {
      items.sort((a, b) => b.email - a.email);
    }
    
    if(flag === 'down') {
      items.sort((a, b) => a.email - b.email);
    }
}

export function filterDate(items, flag) {
    
  console.log('date');

  if(flag === 'up') {
    items.sort((a, b) => b.date - a.date);
  }
  
  if(flag === 'down') {
    items.sort((a, b) => a.date - b.date);
  }
}

export function filterStatus(items, flag) {

  console.log('status');
    
  if(flag === 'up') {
    items.sort((a, b) => b.status - a.status);
  }
  
  if(flag === 'down') {
    items.sort((a, b) => a.status - b.status);
  }
}