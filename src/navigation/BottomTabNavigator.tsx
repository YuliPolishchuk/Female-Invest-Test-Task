import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";

import screenNames from "../constants/screenNames";
import MyCourseScreen from "../screens/MyCoursesScreen/MyCoursesScreen";
import CommunityScreen from "../screens/CommunityScreen/CommunityScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../constants/colors";

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: string = "home";

          if (route.name === screenNames.Home) {
            iconName = "home";
          } else if (route.name === screenNames.MyCourse) {
            iconName = focused ? "bookmark" : "bookmark-o";
          } else if (route.name === screenNames.Community) {
            iconName = "users";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.accentPrimaryPink,
        tabBarInactiveTintColor: colors.textSecondary,
      })}>
      <Tab.Screen name={screenNames.Home} component={HomeScreen} />
      <Tab.Screen name={screenNames.MyCourse} component={MyCourseScreen} />
      <Tab.Screen name={screenNames.Community} component={CommunityScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
