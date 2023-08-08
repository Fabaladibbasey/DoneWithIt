import { useContext } from "react";
import AuthContext from "../context/authContext";
import authStore from "../api/store/authStore";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = async () => {
    setUser(null);
    await authStore.removeToken();
  };

  const logIn = async (authToken: string) => {
    const user = jwtDecode(authToken);
    setUser(user);

    authStore.storeToken(authToken);
  };

  return { user, logIn, logOut };
};
export default useAuth;
