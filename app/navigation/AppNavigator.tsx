import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductFormScreen from "../screens/ProductFormScreen";
import AccountNavigator from "./AccountNavigator";
import ProductNavigator from "./ProductNavigator";
import { AppIcon } from "../components/common";
import AddProductBtn from "./AddProductBtn";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="ProductNavigator"
      component={ProductNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AppIcon name="home" size={size} color={color} />
        ),
        title: "Products",
      }}
    />
    <Tab.Screen
      name="ProductForm"
      component={ProductFormScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <AddProductBtn
            onPress={() => navigation.navigate(routes.PRODUCT_FORM)}
          />
        ),
      })}
    />
    <Tab.Screen
      name="AccountNavigator"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <AppIcon name="account" size={size} color={color} />
        ),
        title: "Account",
      }}
    />
  </Tab.Navigator>
);
export default AppNavigator;
