import { FlatList } from "react-native";
import AppSafeAreaView from "../components/common/AppSafeAreaView";
import { useEffect, useState } from "react";
import AppListItem from "../components/common/AppListItem";

const initialMessages = [
  {
    id: 1,
    title: "Fabala Dibbasey",
    description: "Hey! Is this item still available?",
    image: require("../../assets/images/fabala.jpg"),
  },
  {
    id: 2,
    title: "Fabala Dibbasey",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../../assets/images/fabala.jpg"),
  },
  {
    id: 3,
    title: "Fabala Dibbasey",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../../assets/images/fabala.jpg"),
  },
  {
    id: 4,
    title: "Fabala Dibbasey",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require("../../assets/images/fabala.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState<any>([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    const newMessages = [
      {
        id: 3,
        title: "Fabala Dibbasey",
        description:
          "I'm interested in this item. When will you be able to post it?",
        image: require("../../assets/images/fabala.jpg"),
      },
      {
        id: 4,
        title: "Fabala Dibbasey",
        description:
          "I'm interested in this item. When will you be able to post it?",
        image: require("../../assets/images/fabala.jpg"),
      },
    ];
    setMessages(newMessages);
    setRefreshing(false);
  };

  useEffect(() => {
    setMessages(initialMessages);
  }, []);

  return (
    <AppSafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <AppListItem
            title={item.title}
            subTitle={
              item.description.length > 35
                ? item.description.substring(0, 35) + "..."
                : item.description
            }
            image={item.image}
          />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </AppSafeAreaView>
  );
};

export default MessagesScreen;
