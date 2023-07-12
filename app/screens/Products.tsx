import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import AppSafeAreaView from "../components/common/AppSafeAreaView";
import ProductCard from "../components/product/ProductCard";
import colors from "../config/colors";
import { useState } from "react";

const initialProducts = [
  {
    id: 1,
    title: "Car 1 in great condition",
    subTitle: 100,
    image: require("../../assets/images/car5.jpeg"),
  },
  {
    id: 2,
    title: "Car 2 in great condition",
    subTitle: 1000,
    image: require("../../assets/images/car2.jpeg"),
  },
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

const Products = () => {
  const [refereshing, setRefereshing] = useState(false);
  const [products, setProducts] = useState<any>([]); //product type will be define later

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
          <FlatList
            data={products.length > 0 ? products : initialProducts}
            keyExtractor={(product) => product.id.toString()}
            renderItem={({ item }) => (
              <ProductCard
                title={item.title}
                subTitle={item.subTitle.toString()}
                image={item.image}
              />
            )}
          />
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
