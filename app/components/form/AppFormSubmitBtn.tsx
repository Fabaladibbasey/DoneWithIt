import { StyleSheet, Text, View } from "react-native";
import appStyles from "../../config/appStyles";
import { AppButton } from "../common";
import { useFormikContext } from "formik";

interface Props {
  title: string;
  color: string;
}

const AppFromSubmitBtn = ({ title, color }: Props) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} color={color} onPress={handleSubmit} />;
};
export default AppFromSubmitBtn;
const styles = StyleSheet.create({});
