import { SafeAreaView, StyleSheet } from "react-native";
import constants from "expo-constants";
import { Style } from "nativewind/dist/style-sheet/runtime";

interface Props {
  children: React.ReactNode;
  propStyles?: { [key: string]: number | string | Style };
}

const AppSafeAreaView = ({ propStyles, children }: Props) => {
  return (
    <SafeAreaView style={[styles.container, propStyles]}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: constants.statusBarHeight,
  },
});

export default AppSafeAreaView;
