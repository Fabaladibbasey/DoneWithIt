import {
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AppIcon, AppSafeAreaView } from "../common";
import colors from "../../config/colors";
import { useState } from "react";
import { Modal } from "react-native";
import { Button } from "@rneui/themed";
import { Picker } from "@react-native-picker/picker";
import appStyles from "../../config/appStyles";
import { useFormikContext } from "formik";
import AppFormErrorMessage from "./AppFormErrorMessage";

interface Props {
  options: string[];
  name: string;
}

const AppFormPicker = ({ options, name }: Props) => {
  const [modelVisible, setModelVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>();

  const { setFieldValue } = useFormikContext();
  const { errors, touched } = useFormikContext<any>();

  const handlePicker = (itemValue: string) => {
    setSelectedValue(itemValue);
    setFieldValue(name, itemValue);
    setModelVisible(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
        <View style={styles.container}>
          <View style={styles.textInputWrapper}>
            <AppIcon name="apps" color={colors.medium} size={34} />
            <TextInput
              placeholder="Category"
              style={appStyles.textInput}
              editable={false}
              value={selectedValue}
            />
          </View>
          <AppIcon name="chevron-down" color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <AppFormErrorMessage
        visible={touched[name] as boolean}
        error={errors[name] as string}
      />
      <Modal visible={modelVisible} animationType="slide" style={styles.modal}>
        <AppSafeAreaView>
          <Button onPress={() => setModelVisible(false)}>Close</Button>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => handlePicker(itemValue)}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: colors.yellow,
              color: "black",
              display: "flex",
            }}
          >
            {options.map((option) => (
              <Picker.Item
                label={option}
                value={option}
                key={option}
                style={{
                  color: "black",
                }}
              />
            ))}
          </Picker>
        </AppSafeAreaView>
      </Modal>
    </>
  );
};
export default AppFormPicker;
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    marginVertical: 10,
  },

  textInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 25,
    flex: 1,
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
