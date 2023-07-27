import {
  View,
  ScrollView,
  StyleSheet,
  RefreshControl,
  Text,
} from "react-native";
import AppSafeAreaView from "../components/common/AppSafeAreaView";
import ProductCard from "../components/product/ProductCard";
import colors from "../config/colors";
import { useEffect, useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import listings from "../api/listings";
import { AppButton } from "../components/common";

interface Props {
  navigation: NavigationProp<any>;
}

const Products = ({ navigation }: Props) => {
  const [refereshing, setRefereshing] = useState(false);
  const [products, setProducts] = useState<any>([]); //product type will be define later
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listings.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setProducts(response.data);
  };

  const onRefresh = () => {
    setRefereshing(true);
    const newProducts = [
      {
        id: 3,
        title: "Car 3 in great condition",
        subTitle: 10000,
        image: require("../../assets/images/car3.jpeg"),
      },
      {
        id: 4,
        title: "Car 4 in great condition",
        subTitle: 100000,
        image: require("../../assets/images/car4.jpeg"),
      },
    ];
    setProducts(newProducts);
    setTimeout(() => {
      setRefereshing(false);
    }, 2000);
  };

  return (
    <AppSafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refereshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          {error && (
            <>
              <Text>
                Couldn't retrieve the listings. Please check your internet
                connection.
              </Text>
              <AppButton
                title="Retry"
                onPress={loadListings}
                color={colors.primary}
              />
            </>
          )}
          {products.length > 0 &&
            products.map((product: any) => (
              <ProductCard
                key={product.id}
                title={product.title}
                subTitle={product.price}
                imageUrl={product.images[0].url}
                onPress={() => navigation.navigate("ProductDetails", product)}
              />
            ))}
        </View>
      </ScrollView>
    </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default Products;
