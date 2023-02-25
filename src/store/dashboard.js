import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
  state: () => {
    return {
      tabs: [
        {
          id: "first",
          icon: "../../src/assets/icons/heart.svg",
          amount: "178",
          title: "Save Products",
        },
        {
          id: "second",
          icon: "../../../src/assets/icons/game.svg",
          amount: "20",
          title: "Stock Products",
        },
        {
          id: "third",
          icon: "../../../src/assets/icons/bag.svg",
          amount: "190",
          title: "Sales Products",
        },
        {
          id: "fourth",
          icon: "../../../src/assets/icons/work.svg",
          amount: "12",
          title: "Job Application",
        },
      ],
      orders: [
        {
          id: "4197787B",
          img: "../../../src/assets/images/order_1.jpg",
          name: "Black Portrait Dress",
          price: "450",
          total: "1325",
          amount: "1,46,660",
          details: [
            "75% polyester",
            "25% cotton",
            "Dry clean only",
            "Made in China",
            "Model is wearing size US2",
            "Model is 175cm",
            "bust 84cm, waist 60cm, hips 90cm",
          ],
          designed: "Staud",
        },
        {
          id: "LSK05",
          img: "../../../src/assets/images/order_2.jpg",
          name: "Bordeaux Pencil Skirt",
          price: "273",
          total: "953",
          amount: "46,660",
          details: [
            "50% polyester",
            "50% polyurethane",
            "Lining: 100% polyester",
            "Dry clean only",
            "Made in Georgia",
            "Model is wearing size S",
            "Model is 175cm",
            "bust 84cm, waist 60cm, hips 90cm",
          ],
          designed: "Aleksandre Akhalkatsishvili",
        },
        {
          id: "STINTINB",
          img: "../../../src/assets/images/order_3.jpg",
          name: "Black Collar Sweater",
          price: "234",
          total: "758",
          amount: "3,46,676",
          details: [
            "90% wool",
            "10% cashmere",
            "Dry clean only",
            "Made in China",
            "Model is wearing size S",
            "Model is 175cm",
            "bust 84cm, waist 60cm, hips 90cm",
          ],
          designed: "Loulou Studio",
        },
        {
          id: "711DR108",
          img: "../../../src/assets/images/order_4.jpg",
          name: "Army Oversized Blazer",
          price: "500",
          total: "1598",
          amount: "3,46,981",
          details: [
            "60% Viscose",
            "38% Virgin Wool",
            "2% Elastane",
            "Dry clean only",
            "Made in Georgia",
            "Model is wearing size S",
            "Model is 175cm",
            "bust 84cm, waist 60cm, hips 90cm",
          ],
          designed: "0711",
        },
      ],
      products: [
        {
          id: "1",
          img: "../../../src/assets/images/shoes.jpg",
          name: "Thebe Magugu Shoes",
          rating: "../../../src/assets/icons/four.svg",
          cost: 87,
          details: [
            "Regular fit",
            "Lace closure",
            "adidas PRIMEKNIT upper",
            "BOOST midsole",
            "Textile lining",
          ],
        },
        {
          id: "2",
          img: "../../../src/assets/images/iphone.jpg",
          name: "iPhone 14 Pro Max",
          rating: "../../../src/assets/icons/five.svg",
          cost: 987,
          details: [
            "17.00 cm (6.7-inch)",
            "Super Retina XDR display featuring",
            "Always-On and ProMotion",
            "Dynamic Island, a magical new way to interact with iPhone",
            "48MP Main camera for up to 4x greater resolution",
          ],
        },
      ],
      calendarIsOpen: false,
      date: new Date().toLocaleDateString(),
      day: new Date().getDate(),
      orderIsChecked: false,
      orderIndex: "",
      checkedOrder: null,
      productIsChecked: false,
      productIndex: "",
      checkedProduct: null,
    };
  },
  actions: {
    selectOrder(id) {
      this.orderIsChecked = true;
      const index = this.orders.findIndex((item) => item.id === id);
      this.orderIndex = index;
      this.checkedOrder = this.orders[index];
    },
    selectProduct(id) {
      this.productIsChecked = true;
      const index = this.products.findIndex((item) => item.id === id);
      this.productIndex = index;
      this.checkedProduct = this.products[index];
      createConditionalExpression.log(index);
    },
  },
});
