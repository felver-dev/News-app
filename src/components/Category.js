import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  Pressable,
  useWindowDimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectAllNews } from "../store/news/newsSlice";
import { FontAwesome5 } from "@expo/vector-icons";

const renderItem = (
  item,
  index,
  activeCat,
  setActiveCat,
  navigate,
  news,
  setNewsToSend,
  setCatName
) => {
  return (
    <Pressable
      style={{
        backgroundColor: activeCat === index ? "#800020" : "#00032F",
        padding: 15,
        borderRadius: 10,
        margin: "auto",
        marginHorizontal: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
      }}
      onPress={() => {
        const newsToSend = news.find((n) => n.id === item.id);
        setNewsToSend(newsToSend);
        setCatName({ id: item?.id, name: item.catName });
        setActiveCat(index);
        console.log(news);
      }}
    >
      <Text>
        {activeCat === index ? (
          <FontAwesome5 name="dot-circle" size={15} color="#fafafa" />
        ) : (
          ""
        )}
      </Text>
      <Text style={{ color: "#fafafa" }}>{item.catName} </Text>
    </Pressable>
  );
};

const Category = ({ data }) => {
  const [activeCat, setActiveCat] = React.useState(0);
  const [newsToSend, setNewsToSend] = React.useState([]);
  const [catName, setCatName] = React.useState({ id: "", name: "" });
  const { width, height } = useWindowDimensions();
  const { navigate } = useNavigation();
  const news = useSelector(selectAllNews);

  const newsPerCat = news.filter((news) => news.catId === catName.id);

  React.useEffect(() => {
    console.log(newsPerCat);
    console.warn(newsPerCat);
  }, []);

  return (
    <View>
      <FlatList
        style={{
          position: "absolute",
          top: height - 0.97 * height,
          width: 0.958 * width,
          alignSelf: "center",
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({ item, index }) =>
          renderItem(
            item,
            index,
            activeCat,
            setActiveCat,
            navigate,
            news,
            setNewsToSend,
            setCatName
          )
        }
      />
      <View style={{ marginTop: 100 }}>
        <Text
          style={{
            color: "#fafafa",
            marginHorizontal: 16,
            fontSize: 20,
            marginBottom: 10,
          }}
        >
          {catName.id === 0 || catName.id === ""
            ? "Toutes les infos"
            : catName.name}
        </Text>

        <FlatList
          ListEmptyComponent={() => {
            return (
              <View style={{ position: "relative" }}>
                <ImageBackground
                  style={{ width: "50", aspectRatio: 1 }}
                  source={require("../../assets/empty/cuate.png")}
                />
                <Text
                  style={{
                    color: "#fafafa",
                    textAlign: "center",
                    fontSize: 18,
                    marginTop: 30,
                    fontWeight: "800",
                  }}
                >
                  Oops, aucune info disponible 🥹
                </Text>
                <View
                  style={{
                    borderWidth: 0.5,
                    borderColor: "#fafafa",
                    marginTop: 5,
                    width: "50%",
                    alignSelf: "center",
                  }}
                ></View>
              </View>
            );
          }}
          data={catName.id === 0 || catName.id === "" ? news : newsPerCat}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  marginHorizontal: 20,
                  backgroundColor: "#fff",
                  marginBottom: 10,
                  paddingVertical: 20,
                  paddingHorizontal: 10,
                  borderRadius: 10,
                }}
              >
                <Text> {item.title}</Text>
                <Text> {item.description} </Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Category;
