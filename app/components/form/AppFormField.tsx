import { KeyboardTypeOptions, StyleSheet } from "react-native";
import AppTextInput from "./AppTextInput";
import { useFormikContext } from "formik";
import AppFormErrorMessage from "./AppFormErrorMessage";

interface Props {
  name: string;
  placeholder: string;
  icon?: string;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
}

const AppFormField = ({
  name,
  placeholder,
  icon,
  keyboardType,
  multiline,
}: Props) => {
  const { errors, touched } = useFormikContext<any>();
  return (
    <>
      <AppTextInput
        name={name}
        icon={icon}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
      />
      <AppFormErrorMessage
        visible={touched[name] as boolean}
        error={errors[name] as string}
      />
    </>
  );
};
export default AppFormField;
const styles = StyleSheet.create({});
