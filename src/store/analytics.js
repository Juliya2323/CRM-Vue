import { defineStore } from "pinia";
import { filterId } from "../helpers/Filter.js";
import { filterName } from "../helpers/Filter.js";
import { filterEmail } from "../helpers/Filter.js";
import { filterDate } from "../helpers/Filter.js";
import { filterStatus } from "../helpers/Filter.js";

export const useAnalyticsStore = defineStore("analytics", {
  state: () => {
    return {
      coworkers: [
        {
          id: "264",
          img: "../../../src/assets/images/coworkers/1.png",
          name: "Arrora Gaur",
          email: "arroragaur@gmail.com",
          date: "12 Dec, 2020",
          status: "Complete",
        },
        {
          id: "943",
          img: "../../../src/assets/images/coworkers/2.png",
          name: "James Mullican",
          email: "jamesmullican@gmail.com",
          date: "12 Dec, 2020",
          status: "Pending",
        },
        {
          id: "543",
          img: "../../../src/assets/images/coworkers/3.png",
          name: "Robert Bacins",
          email: "robertbacins@gmail.com",
          date: "12 Dec, 2020",
          status: "Complete",
        },
        {
          id: "379",
          img: "../../../src/assets/images/coworkers/4.png",
          name: "Bethany Jackson",
          email: "bethanyjackson@gmail.com",
          date: "12 Dec, 2020",
          status: "Cancel",
        },
        {
          id: "637",
          img: "../../../src/assets/images/coworkers/5.png",
          name: "Anne Jacob",
          email: "annejacob@gmail.com",
          date: "12 Dec, 2020",
          status: "Complete",
        },
        {
          id: "428",
          img: "../../../src/assets/images/coworkers/6.png",
          name: "Jhon Deo",
          email: "jhondeo32@gmail.com",
          date: "12 Dec, 2020",
          status: "Pending",
        },
        {
          id: "838",
          img: "../../../src/assets/images/coworkers/7.png",
          name: "James Mullican",
          email: "jamesmullican@gmail.com",
          date: "12 Dec, 2020",
          status: "Complete",
        },
        {
          id: "912",
          img: "../../../src/assets/images/coworkers/5.png",
          name: "Anne Jacob",
          email: "annejacob@gmail.com",
          date: "12 Dec, 2020",
          status: "Complete",
        },
        /* {
          id: "785",
          img: "../../../src/assets/images/coworkers/6.png",
          name: "Jhon Deo",
          email: "jhondeo32@gmail.com",
          date: "12 Dec, 2020",
          status: "Pending",
        }, */
      ],
      selectedItem: "",
      filtrations: {
        id: null,
        name: null,
        email: null,
        date: null,
        status: null,
      },
    };
  },
  getters: {
    filteredCoworkers() {
      const coworkers = JSON.parse(JSON.stringify(this.coworkers));

      for (let key in this.filtrations) {
        key === "id" && filterId(coworkers, this.filtrations[key]);

        key === "name" && filterName(coworkers, this.filtrations[key]);

        key === "email" && filterEmail(coworkers, this.filtrations[key]);

        key === "date" && filterDate(coworkers, this.filtrations[key]);

        key === "status" && filterStatus(coworkers, this.filtrations[key]);
      }

      return coworkers;
    },
  },
  actions: {
    deleteItem(id) {
      const itemIndex = this.coworkers.findIndex((item) => item.id === id);
      this.coworkers.splice(itemIndex, 1);
    },
    setFiltration(filterOptions) {
      this.filtrations[filterOptions.name.toLowerCase()] = filterOptions.mode;
    },
    addCoworker(id, img, name, email, date, status) {
      const newCoworker = {
        id: id,
        img: img,
        name: name,
        email: email,
        date: date,
        status: status,
      };

      this.coworkers.push(newCoworker);
      console.log("added!");
    },
  },
});
