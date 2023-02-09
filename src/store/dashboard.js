import { defineStore } from 'pinia';

export const useDashboardStore = defineStore("dashboard", {
    state: () => {
      return {
        tabs: [
          {
            id: 'first',
            icon: '../../src/assets/icons/heart.svg',
            amount: '178',
            title: 'Save Products'
          },
          {
            id: 'second',
            icon: '../../../src/assets/icons/game.svg',
            amount: '20',
            title: 'Stock Products'
          },
          {
            id: 'third',
            icon: '../../../src/assets/icons/bag.svg',
            amount: '190',
            title: 'Sales Products'
          },
          {
            id: 'fourth',
            icon: '../../../src/assets/icons/work.svg',
            amount: '12',
            title: 'Job Application'
          },
        ],
        orders: [
          {
            id: '#876364',
            img: "../../../src/assets/images/order_1.png",
            name: 'Camera Lens',
            price: '178',
            total: '325',
            amount: '1,46,660'
          },
          {
            id: '#876368',
            img: "../../../src/assets/images/order_2.png",
            name: 'Black Sleep Dress',
            price: '14',
            total: '53',
            amount: '46,660'
          },
          {
            id: '#876412',
            img: "../../../src/assets/images/order_3.png",
            name: 'Argan Oil',
            price: '21',
            total: '78',
            amount: '3,46,676'
          },
          {
            id: '#876621',
            img: "../../../src/assets/images/order_4.png",
            name: 'EAU DE Parfum',
            price: '32',
            total: '98',
            amount: '3,46,981'
          }

        ],
        products: [
          {
            id: '1',
            img: '../../../src/assets/images/nike.jpg',
            name: 'NIKE Shoes Black Pattern',
            rating: '../../../src/assets/icons/four.svg',
            cost: 87
          },
          {
            id: '1',
            img: '../../../src/assets/images/iphone.jpg',
            name: 'NIKE Shoes Black Pattern',
            rating: '../../../src/assets/icons/five.svg',
            cost: 987
          },
        ]
      };
    },
    actions: {
      
    },
  });