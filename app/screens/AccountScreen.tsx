import { StyleSheet, View, FlatList } from "react-native";
import AppSafeAreaView from "../components/common/AppSafeAreaView";
import AppListItem from "../components/common/AppListItem";
import AppIcon from "../components/common/AppIcon";
import colors from "../config/colors";
import AppItemSeparator from "../components/common/AppItemSeparator";
import useAuth from "../hooks/useAuth";

interface Props {
  navigation: any;
}

const AccountScreen = ({ navigation }: Props) => {
  const { user, logOut } = useAuth();

  const menuItems = [
    {
      title: "My Products",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
    },
  ];

  return (
    <AppSafeAreaView propStyles={styles.appScreen}>
      <View style={styles.container}>
        <AppListItem
          title={user.name}
          subTitle={user.email}
          image={require("../../assets/images/fabala.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              iconComponent={
                <AppIcon
                  name={item.icon.name}
                  size={40}
                  color={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.title.replace(" ", ""))}
            />
          )}
          ItemSeparatorComponent={() => <AppItemSeparator />}
        />
      </View>
      <View>
        <AppListItem
          title="Log Out"
          iconComponent={
            <AppIcon name="logout" size={40} color={colors.yellow} />
          }
          onPress={logOut}
        />
      </View>
    </AppSafeAreaView>
  );
};
export default AccountScreen;
const styles = StyleSheet.create({
  appScreen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
