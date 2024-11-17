import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabNavigator";
import CourseDetailScreen from "../screens/CourseDetailScreen/CourseDetailScreen";
import screenNames from "../constants/screenNames";

export type RootStackParamList = {
  MainTabs: undefined;
  CourseDetail: { course: any; lessons: any[] };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screenNames.MainTabs}
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={screenNames.CourseDetail}
        component={CourseDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
