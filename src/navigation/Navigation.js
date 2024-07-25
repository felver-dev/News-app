import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Platform } from "react-native";
import HomeScreen from "../screens/home/HomeScreen";
import NewsDetail from "../screens/details/NewsDetail";
import NewsList from "../screens/list/NewsList";

const Stack = createNativeStackNavigator();

const StackGroup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accueil" component={HomeScreen} />
      <Stack.Screen name="Details" component={NewsDetail} />
      <Stack.Screen
        name="News"
        component={NewsList}
        options={{
          presentation: "modal",
          headerShown: Platform.OS === "android" ?? false,
        }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <>
      <StackGroup />
    </>
  );
};

export default Navigation;
