import { View, Text, Pressable, useWindowDimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectAllCats } from "../../store/category/categorySlice";
import Category from "../../components/Category";
import NewsDetail from "../details/NewsDetail";
import NewsList from "../list/NewsList";

const HomeScreen = () => {
  const { height } = useWindowDimensions();
  const { navigate } = useNavigation();
  const categories = useSelector(selectAllCats);

  React.useEffect(() => {
    console.log(categories);
  }, []);
  return (
    <View style={{ backgroundColor: "#00032F", flex: 1 }}>
      <Category data={categories} />
      {/* <View style={{ marginTop: 0.097 * height, paddingHorizontal: 20 }}>
        <NewsList />
      </View> */}
    </View>
  );
};

export default HomeScreen;
