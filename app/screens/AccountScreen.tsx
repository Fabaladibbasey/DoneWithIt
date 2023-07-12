import { StyleSheet, View, FlatList } from "react-native";
import AppSafeAreaView from "../components/common/AppSafeAreaView";
import AppListItem from "../components/common/AppListItem";
import AppIcon from "../components/common/AppIcon";
import colors from "../config/colors";
import AppItemSeparator from "../components/common/AppItemSeparator";
const AccountScreen = () => {
  const menuItems = [
    {
      title: "My Listings",
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
          title="Fabala Dibbasey"
          subTitle="fabaladibbasey27@gmail.com"
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
