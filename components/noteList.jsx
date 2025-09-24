import { FlatList, View } from "react-native";
import NoteItem from "./noteItem";

const NoteList = ({ notes }) => {
  return (
    <View>
      <FlatList
        data={notes}
        // Key extractor uses a function to get the ids from the array
        keyExtractor={(item) => item.id}
        // Render item gets the text from each item and displays it
        renderItem={({ item }) => <NoteItem note={item}/>}
      />
    </View>
  );
};

export default NoteList;
