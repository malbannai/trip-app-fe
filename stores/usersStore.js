import { makeAutoObservable } from "mobx";
import instance from "./instance";

class UsersStore {
  users = [];
  loading = true;
  constructor() {
    makeAutoObservable(this);
  }

  fetchUsers = async () => {
    try {
      const response = await instance.get("/allusers");
      this.users = response.data;
      this.loading = false;
    } catch (error) {
      console.error("UserStore -> fetchUsers -> error", error);
    }
  };
  updateUser = async (userdata) => {
    try {
      await instance.put(`/allusers`, userdata);
      const user = this.users.find((u) => u.id === userdata.id);
      for (const key in user) user[key] = userdata[key];
    } catch (error) {
      console.log("UserStore -> updateUser -> error", error);
    }
  };
}

const usersStore = new UsersStore();
usersStore.fetchUsers();
export default usersStore;
