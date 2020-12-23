import { action, makeObservable, observable } from "mobx";

import instance from "./instance";

class TripStore {
  trips = [
    {
      id: 1,
      title: "To the beach meditation",
      description: "This is id 1",
      image:
        "https://travel.home.sndimg.com/content/dam/images/travel/stock/2017/1/9/0/GettyImages-127046314_DOELANYann_Maldives.jpg.rend.hgtvcom.966.644.suffix/1491841349407.jpeg",
      owner: "Mshary",
    },
    {
      id: 2,
      title: "CODED macaron",
      description: "This is id 2",
      image:
        "https://travel.home.sndimg.com/content/dam/images/travel/stock/2017/1/9/0/GettyImages-127046314_DOELANYann_Maldives.jpg.rend.hgtvcom.966.644.suffix/1491841349407.jpeg",
      owner: "Lailz",
    },
    {
      id: 3,
      title: "Bug hunting",
      description: "This is id 3",
      image:
        "https://travel.home.sndimg.com/content/dam/images/travel/stock/2017/1/9/0/GettyImages-127046314_DOELANYann_Maldives.jpg.rend.hgtvcom.966.644.suffix/1491841349407.jpeg",
      owner: "Hasan",
    },
  ];
  loading = false;

  constructor() {
    makeObservable(this, {
      trips: observable,
      loading: observable,
      fetchTrips: action,
      createTrip: action,
    });
  }

  fetchTrips = async () => {
    try {
      const response = await instance.get("/trips");
      this.trips = response.data;
      this.loading = false;
    } catch (error) {
      console.error("tripStore -> fetchTrips -> error", error);
    }
  };

  createTrip = (tripData) => {
    try {
      if (this.trips.length == 0) {
        tripData.id = 0;
      } else {
        tripData.id = this.trips[this.trips.length - 1].id + 1;
      }
      this.trips.push(tripData);
      console.log(this.trips);
    } catch (error) {
      console.error("tripStore -> createTrip -> error", error);
    }
  };
}

const tripStore = new TripStore();
// tripStore.fetchTrips();
export default tripStore;
