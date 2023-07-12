import { Image, View } from "react-native";
import { AppSafeAreaView } from "../components/common";
import appStyles from "../config/appStyles";
import * as Yup from "yup";
import React from "react";
import { AppForm, AppFormField } from "../components/form";
import AppFormSubmitBtn from "../components/form/AppFormSubmitBtn";
const LoginScreen = () => {
  const validationSchema = Yup.object().shape({
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
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
      >
        <View style={appStyles.formContainer}>
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
        <AppFormSubmitBtn title="Login" color={appStyles.colors.red} />
      </AppForm>
    </AppSafeAreaView>
  );
};

export default LoginScreen;
