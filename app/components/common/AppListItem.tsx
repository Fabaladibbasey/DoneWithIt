import { Avatar, ListItem } from "@rneui/themed";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageSourcePropType,
} from "react-native";
import colors from "../../config/colors";
import AppListItemDeleteAction from "./AppListItemDeleteAction";

interface Props {
  title: string;
  subTitle?: string;
  image?: ImageSourcePropType;
  iconComponent?: React.ReactComponentElement<any>;
  onPress?: () => void;
}

const AppListItem = ({
  title,
  subTitle,
  image,
  iconComponent,
  onPress,
}: Props) => {
  return (
    <ListItem.Swipeable rightContent={AppListItemDeleteAction}>
      <TouchableHighlight
        underlayColor={colors.lightGrey}
        onPress={onPress}
        style={styles.listItemContainer}
      >
        <View style={styles.listItemContainer}>
          {iconComponent}
          {image && <Avatar size={64} rounded source={image} />}
          <View style={styles.listItem}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </ListItem.Swipeable>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    backgroundColor: colors.white,
  },
  listItem: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  subTitle: {
    fontSize: 14,
    color: "#6e6969",
    marginTop: 4,
  },
});

export default AppListItem;
