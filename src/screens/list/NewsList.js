import {
  View,
  Text,
  useWindowDimensions,
  Pressable,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectAllCats } from "../../store/category/categorySlice";

const NewsList = ({ route }) => {
  const { height } = useWindowDimensions();
  const { navigate } = useNavigation();
  const cats = useSelector(selectAllCats);
  const [cat, setCat] = React.useState({});

  const { data } = route.params;
  const category = cats.find((c) => c.id === data?.id);

  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: "#111",
        flex: 1,
      }}
    >
      <Text style={{ color: "#fafafa", fontSize: 22, marginTop: 20 }}>
        {category?.catName}
      </Text>
    </View>
  );
};

export default NewsList;
