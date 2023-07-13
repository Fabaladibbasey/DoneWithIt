import { Formik } from "formik";
import { StyleSheet } from "react-native";

interface Props {
  initialValues: any;
  validationSchema: any;
  children: React.ReactNode;
  onSubmit: any;
}

const AppForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: Props) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <>{children}</>}
    </Formik>
  );
};
export default AppForm;
const styles = StyleSheet.create({});
