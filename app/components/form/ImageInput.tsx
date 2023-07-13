import React, { useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AppIcon } from "../common";
import colors from "../../config/colors";
import { useFormikContext } from "formik";

interface Props {
  imageUri: string;
  onChangeImage: (uri: string) => void;
  name: string;
}

const ImageInput = ({ imageUri, onChangeImage, name }: Props) => {
  const { setFieldTouched } = useFormikContext();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [7, 4],
      quality: 1,
    });

    // console.log(result);
    setFieldTouched(name);
    if (!result.canceled) {
      onChangeImage(result.assets[0].uri);
    }
  };

  const deleteImage = () => {
    Alert.alert("Delete", "Are you sure you want to delete this image?", [
      { text: "Yes", onPress: () => onChangeImage(imageUri) },
      { text: "No" },
    ]);
  };

  return (
    <View style={styles.container}>
      {imageUri ? (
        <TouchableWithoutFeedback onPress={deleteImage}>
          <Image source={{ uri: imageUri }} style={styles.image} />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableOpacity onPress={pickImage}>
          <AppIcon name="camera" size={70} color={colors.medium} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default ImageInput;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 25,
    height: 100,
    justifyContent: "center",
    width: 100,
  },

  image: {
    width: 100,
    height: 100,
  },
});
