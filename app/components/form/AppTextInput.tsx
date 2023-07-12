import React from "react";
import { KeyboardTypeOptions, TextInput } from "react-native";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import appStyles from "../../config/appStyles";
import { AppIcon } from "../common";
import { useFormikContext } from "formik";

interface Props {
  icon?: string;
  name: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
}

const AppTextInput = ({
  placeholder,
  keyboardType = "default",
  name,
  icon,
}: Props) => {
  const { handleChange, setFieldTouched } = useFormikContext();
  return (
    <View style={styles.inputContainer}>
      {icon && <AppIcon name={icon} size={20} color={colors.medium} />}
      <TextInput
        placeholder={placeholder}
        style={appStyles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        secureTextEntry={name === "password" ? true : false}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => handleChange(name)(text)}
        multiline
      />
    </View>
  );
};
export default AppTextInput;
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
});
