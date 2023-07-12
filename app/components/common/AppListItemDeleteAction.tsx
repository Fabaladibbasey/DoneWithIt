import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import { Button } from "@rneui/themed";
import { color } from "@rneui/base";

const AppListItemDeleteAction = () => {
  return (
    <Button
      onPress={() => console.log("Delete")}
      buttonStyle={styles.deleteItemActionBtn}
    >
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={44}
        color={colors.red}
      />
    </Button>
  );
};
export default AppListItemDeleteAction;

const styles = StyleSheet.create({
  deleteItemActionBtn: {
    backgroundColor: colors.white,
    width: "100%",
    minHeight: "100%",
    marginRight: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
