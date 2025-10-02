import { ID, Query } from "react-native-appwrite";
import databaseService from "./databaseService";

// Appwrite database and table id

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_TABLE_NOTES_ID;

const noteService = {
  // Get notes
  async getNotes(userId) {
    // Check for userID

    if (!userId) {
      console.error("Error, missing userID in getNotes");
      return {
        data: [],
        error: "User ID is missing",
      };
    }
    try {
      const response = await databaseService.listDocuments(dbId, colId, [
        Query.equal("user_id", userId),
      ]);
      return response;
    } catch (error) {
      console.log("Error fetching notes", error.messsage);
      return {
        data: [],
        error: error.message
      }
    }

  },

  // Add Note

  async addNote(text, user_id) {
    if (!text) {
      return {
        error: "Note text cannot be empty",
      };
    }

    const data = {
      text: text,
      user_id: user_id,
    };

    const response = await databaseService.createDocument(
      dbId,
      colId,
      data,
      ID.unique()
    );

    if (response?.error) {
      return { error: response.error };
    }

    return { data: response };
  },

  // Delete Note

  async deleteNote(id) {
    const response = await databaseService.deleteDocument(dbId, colId, id);

    if (response?.error) {
      return { error: response.error };
    }

    return { success: true };
  },

  // Update Note

  async updateNote(id, text) {
    const response = await databaseService.updateDocument(dbId, colId, id, {
      text,
    });

    if (response?.error) {
      return { error: response.error };
    }

    return { data: response };
  },
};

export default noteService;
