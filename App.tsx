import React from "react";
import ProductFormScreen from "./app/screens/ProductFormScreen";
import { AppSafeAreaView } from "./app/components/common";
import ImageInputList from "./app/components/form/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = React.useState<string[]>([]);
  const handleAdd = (uri: string) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri: string) => {
    setImageUris([...imageUris.filter((imageUri) => imageUri !== uri)]);
  };
  return <ProductFormScreen />;
}
