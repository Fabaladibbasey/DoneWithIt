import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  name: any;
  size?: number;
  color: string;
}

const AppIcon = ({ name, size = 40, color }: Props) => {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
};
export default AppIcon;
const styles = StyleSheet.create({});
