import { instance } from "./instance";
import { AsyncStorage } from "react-native";
import { computed, decorate, observable } from "mobx";
import jwt_decode from "jwt-decode";

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      instance.defaults.headers.common.Authorization = `JWT ${token}`;
      this.user = jwt_decode(token);
      await AsyncStorage.setItem("myToken", token);
    } else {
      delete instance.defaults.headers.common.Authorization;
      this.user = null;
      await AsyncStorage.removeItem("myToken");
    }
  };
  login = async userData => {
    try {
      const res = await instance.post("login/", userData);
      const user = res.data;
      await this.setUser(user.token);
    } catch (err) {
      console.error(err);
    }
  };

  singup = async userData => {
    try {
      await instance.post("register/", userData);
      this.setUser(userData);
    } catch (err) {
      console.error(err);
    }
  };

  logout = async () => {
    await this.setUser();
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const decodedToken = jwt_decode(token);
      if (decodedToken.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.setUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
export default authStore;
