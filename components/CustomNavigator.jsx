import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import MakeAppointment from "../screens/MakeAppointment";
import Settings from "../screens/Settings";
import UserInfo from "../screens/UserInfo";
const Tab = createBottomTabNavigator();

const FloatingButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        top: -35,
        zIndex: 1,
        height: 70,
        alignItems: "center",
        ...styles.shadow,
      }}
    >
      <View
        style={{
          width: 80,
          position: "absolute",
          height: 80,
          borderRadius: 40,
          bottom: -5,
          backgroundColor: "white",
        }}
      ></View>
      <View style={{ width: 70, height: 70 }}>{children}</View>
    </TouchableOpacity>
  );
};

const CustomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "white",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        component={Home}
        name="Home"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Icon
                name="home"
                size="30"
                color={focused ? icon_colors.focused : icon_colors.default}
              ></Icon>
              <Text
                style={{
                  color: focused ? icon_colors.focused : icon_colors.default,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        component={Contact}
        name="Contact"
        options={{
          title: "Contact",
          tabBarLabel: "Contact",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Icon
                name="contacts"
                size="30"
                type="antdesign"
                color={focused ? icon_colors.focused : icon_colors.default}
              ></Icon>
              <Text
                style={{
                  color: focused ? icon_colors.focused : icon_colors.default,
                }}
              >
                Contact
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        component={MakeAppointment}
        name="Appointment"
        options={{
          title: "Appointment",
          tabBarLabel: "Appointment",
          tabBarIcon: () => (
            <Icon
              name="calendar-plus-o"
              type="font-awesome"
              size="30"
              color="red"
            ></Icon>
          ),
          tabBarButton: (props) => <FloatingButton {...props}></FloatingButton>,
        }}
      ></Tab.Screen>
      <Tab.Screen
        component={Settings}
        name="Settings"
        options={{
          title: "Setting",
          tabBarLabel: "Setting",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Icon
                name="settings"
                size="30"
                color={focused ? icon_colors.focused : icon_colors.default}
              ></Icon>
              <Text
                style={{
                  color: focused ? icon_colors.focused : icon_colors.default,
                }}
              >
                Settings
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        component={UserInfo}
        name="UsersInfo"
        options={{
          title: "User",
          tabBarLabel: "User",
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Icon
                name="user"
                size="30"
                type="feather"
                color={focused ? icon_colors.focused : icon_colors.default}
              ></Icon>
              <Text
                style={{
                  color: focused ? icon_colors.focused : icon_colors.default,
                }}
              >
                Account
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default CustomNavigator;

const icon_colors = {
  default: "#919191",
  focused: "#e0bc02",
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
