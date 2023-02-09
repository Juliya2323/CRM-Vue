import { defineStore } from 'pinia';

export const useDashboardStore = defineStore("dashboard", {
    state: () => {
      return {
        products: [
          {
            id: 'first',
            icon: '../../src/assets/icons/heart.svg',
            amount: '178',
            title: 'Save Products'
          },
          {
            id: 'second',
            icon: '../../src/assets/icons/game.svg',
            amount: '20',
            title: 'Stock Products'
          },
          {
            id: 'third',
            icon: '../../src/assets/icons/bag.svg',
            amount: '190',
            title: 'Sales Products'
          },
          {
            id: 'fourth',
            icon: '../../src/assets/icons/work.svg',
            amount: '12',
            title: 'Job Application'
          },
        ]
      };
    },
    actions: {
      
    },
  });