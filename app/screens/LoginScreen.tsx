import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { AppSafeAreaView } from "../components/common";
import appStyles from "../config/appStyles";
import * as Yup from "yup";
import React, { useState } from "react";
import { AppForm, AppFormField } from "../components/form";
import AppFormSubmitBtn from "../components/form/AppFormSubmitBtn";
import { FormikValues } from "formik";
import auth from "../api/auth";
import AppFormErrorMessage from "../components/form/AppFormErrorMessage";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const [loginFailed, setLoginFailed] = useState(false);
  const { logIn } = useAuth();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  const handleLogin = async (values: FormikValues) => {
    const result = await auth.login(values.email, values.password);
    if (!result.ok) return setLoginFailed(true);
    logIn(result.data as string);
  };

  return (
    <AppSafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={appStyles.formContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Image
            style={appStyles.logo}
            source={require("../../assets/images/logo-red.png")}
          />
          <AppForm
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
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
              <AppFormErrorMessage
                visible={loginFailed}
                error="Invalid email or password"
              />
            </View>
            <AppFormSubmitBtn title="Login" color={appStyles.colors.red} />
          </AppForm>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </AppSafeAreaView>
  );
};

export default LoginScreen;
