import { View, Image, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import ListItem from "../components/common/AppListItem";

interface Props {
  route: any;
}

const ProductDetails = ({ route }: Props) => {
  const { images, title, price } = route.params;

  return (
    <>
      <View style={styles.wrapper}>
        <Image style={styles.bannerImage} source={{ uri: images[0]?.url }} />
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.subTitle}>${price}</Text>
      </View>
      <ListItem
        title="Seller"
        subTitle="John Doe"
        image={require("../../assets/images/fabala.jpg")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: colors.white,
    shadowColor: colors.black,
    // shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 10,
  },
  bannerImage: {
    height: 300,
    width: "100%",
    borderRadius: 12,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    padding: 5,
  },
  subTitle: {
    fontSize: 18,
    color: colors.secondary,
    padding: 5,
  },
});

export default ProductDetails;
