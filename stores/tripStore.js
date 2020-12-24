import { action, makeObservable, observable } from "mobx";

import instance from "./instance";

class TripStore {
  trips = [];
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
tripStore.fetchTrips();
export default tripStore;
