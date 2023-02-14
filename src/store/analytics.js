import { defineStore } from 'pinia';

export const useAnalyticsStore = defineStore("analytics", {
    state: () => {
        return {
            coworkers: [
                {
                    id: '276364',
                    img: '../../../src/assets/images/coworkers/1.png',
                    name: 'Arrora Gaur',
                    email: 'arroragaur@gmail.com',
                    date: '12 Dec, 2020',
                    status: 'Complete'
                },
                {
                    id: '938123',
                    img: '../../../src/assets/images/coworkers/2.png',
                    name: 'James Mullican',
                    email: 'jamesmullican@gmail.com',
                    date: '12 Dec, 2020',
                    status: 'Pending'
                },
                {
                    id: '380213',
                    img: '../../../src/assets/images/coworkers/3.png',
                    name: 'Robert Bacins',
                    email: 'robertbacins@gmail.com',
                    date: '12 Dec, 2020',
                    status: 'Complete'
                },
                {
                    id: '83687',
                    img: '../../../src/assets/images/coworkers/4.png',
                    name: 'Bethany Jackson',
                    email: 'bethanyjackson@gmail.com',
                    date: '12 Dec, 2020',
                    status: 'Cancel'
                },
                {
                    id: '871345',
                    img: '../../../src/assets/images/coworkers/5.png',
                    name: 'Anne Jacob',
                    email: 'annejacob@gmail.com',
                    date: '12 Dec, 2020',
                    status: 'Complete'
                },
                {
                    id: '029345',
                    img: '../../../src/assets/images/coworkers/6.png',
                    name: 'Jhon Deo',
                    email: 'jhondeo32@gmail.com',
                    date: '12 Dec, 2020',
                    status: 'Pending'
                },
                {
                    id: '485345',
                    img: '../../../src/assets/images/coworkers/7.png',
                    name: 'James Mullican',
                    email: 'jamesmullican@gmail.com',
                    date: '12 Dec, 2020',
                    status: 'Complete'
                },
                {
                    id: '8713745',
                    img: '../../../src/assets/images/coworkers/5.png',
                    name: 'Anne Jacob',
                    email: 'annejacob@gmail.com',
                    date: '12 Dec, 2020',
                    status: 'Complete'
                },
                {
                    id: '876345',
                    img: '../../../src/assets/images/coworkers/6.png',
                    name: 'Jhon Deo',
                    email: 'jhondeo32@gmail.com',
                    date: '12 Dec, 2020',
                    status: 'Pending'
                }
            ],
            selectedItem: '',
        }
    },
    actions: {
      deleteItem(id) {
        const itemIndex = this.coworkers.findIndex(item => item.id === id);
        this.coworkers.splice(itemIndex, 1);
        console.log(itemIndex)
      }
    },
})
      