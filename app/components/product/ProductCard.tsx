import * as reactNative from "react-native";
import colors from "../../config/colors";

interface Props {
  title: string;
  subTitle: string;
  imageUrl: string;
  onPress: () => void;
}

const ProductCard = ({ title, subTitle, imageUrl, onPress }: Props) => {
  return (
    <reactNative.TouchableHighlight
      activeOpacity={0.6}
      underlayColor={colors.light}
      onPress={onPress}
      style={styles.container}
    >
      <reactNative.View style={styles.wrapper}>
        <reactNative.Image
          style={styles.bannerImage}
          source={{ uri: imageUrl }}
        />
        <reactNative.Text style={styles.title}>{title}</reactNative.Text>
        <reactNative.Text style={styles.subTitle}>${subTitle}</reactNative.Text>
      </reactNative.View>
    </reactNative.TouchableHighlight>
  );
};
export default ProductCard;

const styles = reactNative.StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 18,
  },

  wrapper: {
    width: "100%",
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    marginBottom: 10,
  },
  bannerImage: {
    height: 300,
    width: "100%",
    borderRadius: 12,
    resizeMode: "cover",
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
