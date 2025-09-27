import { FlatList, View } from "react-native";
import NoteItem from "./noteItem";

const NoteList = ({ notes, onDelete }) => {
  return (
    <View>
      <FlatList
        data={notes}
        // Key extractor uses a function to get the ids from the array
        keyExtractor={(item) => item.$id}
        // Render item gets the text from each item and displays it
        renderItem={({ item }) => <NoteItem note={item} onDelete={onDelete} />}
      />
    </View>
  );
};

export default NoteList;
