function sortUp(items, flag, option) {
  if(flag === 'up') {
    items.sort((a, b) => {
      if (a[option].toLowerCase() < b[option].toLowerCase()) {
        return -1;
      }
      if (a[option].toLowerCase() > b[option].toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
}

function sortDown(items, flag, option) {
  if(flag === 'down') {
    items.sort((a, b) => {
      if (a[option].toLowerCase() > b[option].toLowerCase()) {
        return -1;
      }
      if (a[option].toLowerCase() < b[option].toLowerCase()) {
        return 1;
      }
      return 0;
    });
  }
}

export function filterId(items, flag) {
    
  if(flag === 'up') {
    items.sort((a, b) => b.id - a.id);
  }

  if(flag === 'down') {
    items.sort((a, b) => a.id - b.id);
  }
}

export function filterName(items, flag, option = 'name') {
  sortUp(items, flag, option);

  sortDown(items, flag, option);
}

export function filterEmail(items, flag, option = 'email') {
  sortUp(items, flag, option);
  
  sortDown(items, flag, option);
}

export function filterDate(items, flag, option = 'date') {
  sortUp(items, flag, option);

  sortDown(items, flag, option);
}

export function filterStatus(items, flag, option = 'status') {
  sortUp(items, flag, option);
  
  sortDown(items, flag, option);
}