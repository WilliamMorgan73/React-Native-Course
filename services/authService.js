import { ID } from "react-native-appwrite";
import { account } from "./appwrite";

const authService = {
  // Register User
  async register(email, password) {
    try {
      const response = await account.create(ID.unique(), email, password);
      return response;
    } catch (error) {
      return {
        error: error.message || "Register fail. Please try again",
      };
    }
  },

  // Login user
  async login(email, password) {
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password
      );
      return response;
    } catch (error) {
      return {
        error: error.message || "Login fail. Please check details",
      };
    }
  },

  // Get logged in user
  async getUser() {
    try {
      return await account.get();
    } catch (error) {
      return null;
    }
  },

  // Logout user

  async logout() {
    try {
      await account.deleteSession("current");
    } catch (error) {
      return {
        error: error.message || "Logout fail. Please try again",
      };
    }
  },
};

export default authService;