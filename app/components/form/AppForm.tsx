import { Formik } from "formik";
import { StyleSheet } from "react-native";

interface Props {
  initialValues: any;
  validationSchema: any;
  children: React.ReactNode;
}

const AppForm = ({ initialValues, validationSchema, children }: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {() => <>{children}</>}
    </Formik>
  );
};
export default AppForm;
const styles = StyleSheet.create({});
