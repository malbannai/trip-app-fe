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
}

const usersStore = new UsersStore();
usersStore.fetchUsers();
export default usersStore;
