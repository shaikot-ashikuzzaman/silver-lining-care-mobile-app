import React from "react";
import { View, ActivityIndicator } from "react-native";

import COLORS from "../constants/themeColors";
const Spinner = ({ size = "large", animating = true, style }) => {
    return (
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator className="p-3" size={size} animating={animating} style={style} color={COLORS.primary} />
        </View>
    );
};

export default Spinner;
