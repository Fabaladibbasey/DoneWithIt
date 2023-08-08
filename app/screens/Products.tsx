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
import { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import listings from "../api/listings";
import { AppButton } from "../components/common";
import AppActivityIndicator from "../components/common/AppActivityIndicator";
import useApi from "../hooks/useApi";

interface Props {
  navigation: NavigationProp<any>;
}

const Products = ({ navigation }: Props) => {
  const [refereshing, setRefereshing] = useState(false);
  const {
    data: products,
    error,
    loading,
    request: loadListings,
  } = useApi({ apiFunc: listings.getListings });

  const onRefresh = () => {
    setRefereshing(true);
    loadListings();
    setTimeout(() => {
      setRefereshing(false);
    }, 2000);
  };

  if (loading) {
    return <AppActivityIndicator visible={true} />;
  }

  return (
    <AppSafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refereshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          {error ? (
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
          ) : (
            products.map((product: any) => (
              <ProductCard
                key={product.id}
                title={product.title}
                subTitle={product.price}
                imageUrl={product.images[0]?.url}
                onPress={() => navigation.navigate("ProductDetails", product)}
              />
            ))
          )}
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
