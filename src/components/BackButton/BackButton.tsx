import React from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import colors from "../../constants/colors";
import styles from "./BackButton.styles";

type Props = {
  buttonStyle?: StyleProp<ViewStyle>;
};

const BackButton: React.FC<Props> = ({ buttonStyle }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.iconBlock, buttonStyle]} onPress={() => navigation.goBack()}>
      <FontAwesome style={{ color: colors.white }} name={"chevron-left"} size={16} />
    </TouchableOpacity>
  );
};

export default BackButton;
