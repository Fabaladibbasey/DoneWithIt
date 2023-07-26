import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "../screens/ProductDetails";
import Products from "../screens/Products";

const Stack = createNativeStackNavigator();

const ProductNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Products" component={Products} />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{ presentation: "modal" }}
    />
  </Stack.Navigator>
);

export default ProductNavigator;
