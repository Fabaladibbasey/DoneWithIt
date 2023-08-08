import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { AppSafeAreaView } from "../components/common";
import { AppForm, AppFormField } from "../components/form";
import AppFormSubmitBtn from "../components/form/AppFormSubmitBtn";
import appStyles from "../config/appStyles";
import * as Yup from "yup";
import { FormikValues } from "formik";
import auth from "../api/auth";
import { useState } from "react";
import AppFormErrorMessage from "../components/form/AppFormErrorMessage";
import useAuth from "../hooks/useAuth";
import useApi from "../hooks/useApi";
import AppActivityIndicator from "../components/common/AppActivityIndicator";

const RegisterScreen = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).label("Password"),
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { logIn } = useAuth();
  const registerApi = useApi({ apiFunc: auth.register });
  const loginApi = useApi({ apiFunc: auth.login });

  const handleRegister = async ({ name, email, password }: FormikValues) => {
    setFormSubmitted(true);
    const response = await registerApi.request(name, email, password);

    if (!response.ok)
      return setErrorMessage((response.data as any).error as string);

    const result = await loginApi.request(email, password);
    if (!result.ok)
      return setErrorMessage(
        "User was created successfully but failed to login user"
      );
    logIn(result.data as string);
  };

  return (
    <AppSafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView>
          <Image
            style={appStyles.logo}
            source={require("../../assets/images/logo-red.png")}
          />
          <AppActivityIndicator
            visible={formSubmitted && (registerApi.loading || loginApi.loading)}
          />
          <AppForm
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleRegister}
          >
            <View style={appStyles.formContainer}>
              <AppFormErrorMessage
                error={errorMessage}
                visible={!!errorMessage}
              />
              <AppFormField
                name="name"
                placeholder="enter name"
                icon="account"
              />
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
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </AppSafeAreaView>
  );
};
export default RegisterScreen;
const styles = StyleSheet.create({});
