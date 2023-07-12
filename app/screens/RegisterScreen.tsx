import { StyleSheet, View, Image } from "react-native";
import { AppSafeAreaView } from "../components/common";
import { AppForm, AppFormField } from "../components/form";
import AppFormSubmitBtn from "../components/form/AppFormSubmitBtn";
import appStyles from "../config/appStyles";
import * as Yup from "yup";

const RegisterScreen = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  return (
    <AppSafeAreaView>
      <Image
        style={appStyles.logo}
        source={require("../../assets/images/logo-red.png")}
      />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
      >
        <View style={appStyles.formContainer}>
          <AppFormField name="name" placeholder="enter name" icon="account" />
          <AppFormField
            name="email"
            placeholder="enter email"
            icon="email"
            keyboardType="email-address"
          />
          <AppFormField
            name="password"
            placeholder="password"
            icon="lock"
            keyboardType="visible-password"
          />
        </View>
        <AppFormSubmitBtn title="Register" color={appStyles.colors.red} />
      </AppForm>
    </AppSafeAreaView>
  );
};
export default RegisterScreen;
const styles = StyleSheet.create({});
