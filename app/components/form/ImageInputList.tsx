import { StyleSheet, View, ScrollView } from "react-native";
import ImageInput from "./ImageInput";
import { useRef } from "react";

interface Props {
  imageUris: string[];
  onAddImage: (uri: string) => void;
  onRemoveImage: (uri: string) => void;
  name: string;
}

const ImageInputList = ({
  imageUris,
  onAddImage,
  onRemoveImage,
  name,
}: Props) => {
  const scrollView = useRef<ScrollView>(null);
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 10,
      }}
    >
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.container}>
          {imageUris.map((uri: string) => (
            <View
              key={uri}
              style={{
                marginRight: 10,
              }}
            >
              <ImageInput
                name={name}
                imageUri={uri}
                onChangeImage={(uri) => onRemoveImage(uri)}
              />
            </View>
          ))}

          <View
            style={{
              marginRight: 10,
            }}
          >
            <ImageInput
              name={name}
              imageUri=""
              onChangeImage={(uri) => onAddImage(uri)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default ImageInputList;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
});
