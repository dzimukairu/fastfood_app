import CustomHeader from "@/components/CustomHeader";
import React from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={[]}
        renderItem={() => <></>}
        contentContainerClassName="pb-28 px-5 pt-5"
        ListHeaderComponent={() => <CustomHeader title="Profile" />}
        ListEmptyComponent={() => <Text>On development</Text>}
      />
    </SafeAreaView>
  );
};

export default Profile;
