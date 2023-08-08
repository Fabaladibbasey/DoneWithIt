import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNoticeBar from "./app/components/common/AppNoticeBar";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/context/authContext";
import AppNavigator from "./app/navigation/AppNavigator";
import authStore from "./app/api/store/authStore";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [user, setUser] = useState(undefined);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStore.getUser();
    setUser(user as any);
  };

  if (!isReady) {
    SplashScreen.preventAutoHideAsync()
      .then(() => restoreUser())
      .then(() => setIsReady(true))
      .then(() => SplashScreen.hideAsync())
      .catch((error) => console.log(error));

    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <AppNoticeBar />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
