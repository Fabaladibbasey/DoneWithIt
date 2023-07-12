import { StyleSheet, Text, View, Image } from "react-native";
import { AppSafeAreaView } from "../components/common";
import { AppForm, AppFormField } from "../components/form";
import AppFormSubmitBtn from "../components/form/AppFormSubmitBtn";
import appStyles from "../config/appStyles";
import * as Yup from "yup";
import AppFormPicker from "../components/form/AppFormPicker";

const ProductFormScreen = () => {
  const categories = [
    "Furniture",
    "Clothing",
    "Camera",
    "Books",
    "Cars",
    "Bikes",
    "Sports",
    "Movies & Music",
    "Games",
    "Other",
  ];

  const validationSchema = Yup.object().shape({
    title: Yup.string().required().label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.string().required().label("Category"),
    description: Yup.string().required().min(1).max(100).label("Description"),
  });
  return (
    <AppSafeAreaView>
      <AppForm
        initialValues={{ title: "", price: "", category: "", description: "" }}
        validationSchema={validationSchema}
      >
        <View style={appStyles.formContainer}>
          <AppFormField name="title" placeholder="Title" />
          <AppFormField
            name="price"
            placeholder="Price"
            keyboardType="number-pad"
          />
          <AppFormPicker options={categories} name="category" />
          <AppFormField
            name="description"
            placeholder="enter description"
            multiline={true}
          />
        </View>
        <AppFormSubmitBtn title="Post" color={appStyles.colors.red} />
      </AppForm>
    </AppSafeAreaView>
  );
};
export default ProductFormScreen;
const styles = StyleSheet.create({});
