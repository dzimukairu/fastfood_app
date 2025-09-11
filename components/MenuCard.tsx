import { MenuItem } from "@/type";
import React from "react";
import { Image, Platform, Text, TouchableOpacity } from "react-native";

const MenuCard = ({ item: { image_url, name, price } }: { item: MenuItem }) => {
  // const imageUrl = `${image_url}?project=${appwriteConfig.projectId}`;
  const imageUrl = `${image_url}&mode=admin`;

  console.log(imageUrl);

  return (
    <TouchableOpacity
      className="menu-card"
      style={[{ height: 250 }, Platform.OS === "android" ? { elevation: 10, shadowColor: "#878787" } : {}]}
    >
      <Image source={{ uri: imageUrl }} className="size-32 absolute -top-10" resizeMode="contain" />
      <Text className="text-center base-bold text-dark-100 mb-2">{name}</Text>
      <Text className="body-regular text-gray-200 mb-4">From ${price}</Text>

      <TouchableOpacity onPress={() => {}}>
        <Text className="paragraph-bold text-primary">Add to Cart +</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default MenuCard;
