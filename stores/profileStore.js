import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ProfileStore {
  profiles = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  getprofileByuserId = (userId) =>
    this.profiles.find((profile) => profile.userId === userId);

  fetchProfiles = async () => {
    try {
      const response = await instance.get("/profiles");
      this.profiles = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ProfileStore -> fetchProfiles -> error", error);
    }
  };
  updateProfile = async (profileOwner, profileData) => {
    try {
      await instance.put(`/profiles/${profileOwner.id}`, profileData);
      const profile = this.profiles.find((item) => item.id === profileData.id);
      for (const key in profile) profile[key] = profileData[key];
    } catch (error) {
      console.log("ProfileStore -> updateProfile -> error", error);
    }
  };
}
const profileStore = new ProfileStore(); //new instance
profileStore.fetchProfiles();
export default profileStore;
