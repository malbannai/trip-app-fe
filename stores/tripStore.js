import instance from "./instance";
import { makeAutoObservable } from "mobx";

class TripStore {
  trips = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
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

  removeTrip = async (tripId) => {
    try {
      await instance.delete(`/trips/${tripId}`);
      this.trips = this.trips.filter((trip) => trip.id !== tripId);
    } catch (error) {
      console.error("tripStore -> removeTrip -> error", error);
    }
  };

  createTrip = async (newTrip) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      const res = await instance.post("/trips", formData);
      this.trips.push(res.data);
    } catch (error) {
      console.log("TripStore -> createTrip -> error", error);
    }
  };

  updateTrip = async (tripData) => {
    try {
      await instance.put(`/trips/${tripData.id}`, tripData);
      const trip = this.trips.find((item) => item.id === tripData.id);
      for (const key in trip) trip[key] = tripData[key];
    } catch (error) {
      console.log("TripStore -> updateTrip -> error", error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
