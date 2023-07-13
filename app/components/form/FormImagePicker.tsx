import { StyleSheet, View } from "react-native";
import ImageInputList from "./ImageInputList";
import AppFormErrorMessage from "./AppFormErrorMessage";
import { useFormikContext } from "formik";

interface Props {
  name: string;
}

const FormImagePicker = ({ name }: Props) => {
  const { setFieldValue, values, errors, touched } = useFormikContext<any>();

  const imageUris = values[name];
  const handleAdd = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };
  const handleRemove = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: string) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        name={name}
        imageUris={imageUris}
        onAddImage={(uri: string) => handleAdd(uri)}
        onRemoveImage={(uri: string) => handleRemove(uri)}
      />
      <AppFormErrorMessage
        visible={touched[name] as boolean}
        error={errors[name] as string}
      />
    </>
  );
};
export default FormImagePicker;
const styles = StyleSheet.create({});
