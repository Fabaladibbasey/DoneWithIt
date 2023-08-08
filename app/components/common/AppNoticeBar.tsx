import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import { useNetInfo } from "@react-native-community/netinfo";
import AppSafeAreaView from "./AppSafeAreaView";

const AppNoticeBar = () => {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <AppSafeAreaView propStyles={styles.container}>
        <Text style={styles.noticeText}>No internet connection</Text>
      </AppSafeAreaView>
    );
  }
  return null;
};
export default AppNoticeBar;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
  },

  noticeText: {
    color: colors.white,
    textTransform: "capitalize",
  },
});
