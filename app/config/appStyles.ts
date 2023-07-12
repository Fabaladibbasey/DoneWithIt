import colors from "./colors"
import { Platform } from "react-native"

const textInput = {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
    width: "100%",
    marginLeft: 10,
  }

  const logo = {
    width: 100,
    height: 100,
    alignSelf: "center" as "center",
    marginTop: 50,
    marginBottom: 20,
  }

  const formContainer = {
    padding: 10,
    marginBottom: 24,
  }

const appStyles = {
    textInput,
    colors,
    logo,
    formContainer,
}

export default appStyles