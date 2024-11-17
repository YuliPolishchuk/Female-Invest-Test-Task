import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const constants = {
  deviceWidth: width,
  deviceHeight: height,
};

export default constants;
