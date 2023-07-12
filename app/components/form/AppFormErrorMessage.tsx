import { StyleSheet, Text, View } from "react-native";

interface Props {
  visible: boolean | undefined;
  error: string | undefined;
}

const AppFormErrorMessage = ({ visible, error }: Props) => {
  if (!visible || !error) return null;
  return (
    <View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};
export default AppFormErrorMessage;
const styles = StyleSheet.create({
  error: {
    color: "red",
    padding: 5,
  },
});
