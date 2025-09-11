import CartItem from "@/components/CartItem";
import CustomButton from "@/components/CustomButton";
import CustomHeader from "@/components/CustomHeader";
import { useCartStore } from "@/store/cart.store";
import { PaymentInfoStripeProps } from "@/type";
import cn from "clsx";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PaymentInfoStripe = ({ label, value, labelStyle, valueStyle }: PaymentInfoStripeProps) => (
  <View className="flex-between flex-row my-1">
    <Text className={cn("paragraph-medium text-gray-200", labelStyle)}>{label}</Text>
    <Text className={cn("paragraph-bold text-dark-100", valueStyle)}>{value}</Text>
  </View>
);

const DELIVERY_FEE = 6.0;
const DISCOUNT_FEE = 0.5;

const Cart = () => {
  const { items, getTotalItems, getTotalPrice, clearCart } = useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CartItem item={item} />}
        contentContainerClassName="pb-28 px-5 pt-5"
        ListHeaderComponent={() => <CustomHeader title="Your Cart" />}
        ListEmptyComponent={() => <Text>Cart Empty, add new items</Text>}
        ListFooterComponent={() =>
          totalItems > 0 && (
            <View>
              <CustomButton title="Clear Cart" onPress={clearCart} style="!bg-red-500" />
              <View className="gap-5">
                <View className="mt-6 border-gray-200 p-5 rounded-2xl">
                  <Text className="h3-bold text-dark-100 mb-5">Payment Summary</Text>

                  <PaymentInfoStripe label={`Total Items (${totalItems}`} value={`$ ${totalPrice.toFixed(2)}`} />
                  <PaymentInfoStripe label={"Delivery Fee"} value={`$ ${DELIVERY_FEE.toFixed(2)}`} />
                  <PaymentInfoStripe
                    label={"Discount"}
                    value={`- $ ${DISCOUNT_FEE.toFixed(2)}`}
                    valueStyle="!text-success"
                  />

                  <View className="border-t border-gray-300 my-2" />
                  <PaymentInfoStripe
                    label={`Total`}
                    value={`$ ${(totalPrice + DELIVERY_FEE - DISCOUNT_FEE).toFixed(2)} `}
                    labelStyle="base-bold !text-dark-100"
                    valueStyle="base-bold !text-dark-100 !text-right"
                  />
                </View>

                <CustomButton title={"Order Now"} />
              </View>
            </View>
          )
        }
      />
    </SafeAreaView>
  );
};

export default Cart;
