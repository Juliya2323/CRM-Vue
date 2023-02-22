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

  if(flag === 'up') {
    items.sort((a, b) => {
      if (a.email.toLowerCase() < b.email.toLowerCase()) {
        return -1;
      }
      if (a.email.toLowerCase() > b.email.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
  
  if(flag === 'down') {
    items.sort((a, b) => {
      if (a.email.toLowerCase() > b.email.toLowerCase()) {
        return -1;
      }
      if (a.email.toLowerCase() < b.email.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
}

export function filterDate(items, flag) {
    
  if(flag === 'up') {
    items.sort((a, b) => {
      if (a.date.toLowerCase() < b.date.toLowerCase()) {
        return -1;
      }
      if (a.date.toLowerCase() > b.date.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
  
  if(flag === 'down') {
    items.sort((a, b) => {
      if (a.date.toLowerCase() > b.date.toLowerCase()) {
        return -1;
      }
      if (a.date.toLowerCase() < b.date.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
}

export function filterStatus(items, flag) {

  if(flag === 'up') {
    items.sort((a, b) => {
      if (a.status.toLowerCase() < b.status.toLowerCase()) {
        return -1;
      }
      if (a.status.toLowerCase() > b.status.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
  
  if(flag === 'down') {
    items.sort((a, b) => {
      if (a.status.toLowerCase() > b.status.toLowerCase()) {
        return -1;
      }
      if (a.status.toLowerCase() < b.status.toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
}