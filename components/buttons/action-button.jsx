import clsx from "clsx";
import React from "react";
import { useTranslation } from "react-i18next";
import { View, ActivityIndicator } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

import { ICONS_NAME } from "../../constants/iconsName";
import COLORS from "../../constants/themeColors";
import Icon from "../icon";
import Typography from "../typography";
import IconButton from "./icon-button";

const ActionButton = ({
    onPress,
    loading,
    disabled = false,
    style,
    iconName,
    title,
    loadingText = "",
    textStyle,
    iconSize = 16,
    loadingIconName,
}) => {
    const { t } = useTranslation();

    const progress = useSharedValue(0);

    React.useEffect(() => {
        progress.value = withRepeat(withTiming(1, { duration: 700, easing: Easing.linear }), -1);
    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${progress.value * 360}deg` }],
        };
    });

    return (
        <IconButton
            className={clsx({
                "py-3 px-7 flex-row items-center justify-center bg-primary rounded-lg": true,
                "space-x-2": !!iconName,
            })}
            onPress={() => onPress?.()}
            style={style}
            disabled={disabled || loading}
        >
            {loading ? (
                loadingIconName ? (
                    <View>
                        <Icon
                            name={loadingIconName ? loadingIconName : ICONS_NAME.dot}
                            color={COLORS.white}
                            size={iconSize}
                        />
                    </View>
                ) : (
                    <Animated.View>
                        <ActivityIndicator size={16} color="white" className="mr-2" />
                    </Animated.View>
                )
            ) : iconName ? (
                <View>
                    <Icon name={iconName} color={COLORS.white} size={iconSize} />
                </View>
            ) : (
                <></>
            )}
            {/* {iconName ? (
                loading ? (
                    <View>
                        <Icon
                            name={loadingIconName ? loadingIconName : ICONS_NAME.dot}
                            color={COLORS.white}
                            size={iconSize}
                        />
                    </View>
                ) : (
                    <View>
                        <Icon name={iconName} color={COLORS.white} size={iconSize} />
                    </View>
                )
            ) : loading ? (
                <Animated.View>
                    <ActivityIndicator size={16} color="white" className="mr-2" />
                </Animated.View>
            ) : (
                <></>
            )} */}
            {loading ? (
                <View>
                    <Typography
                        className={clsx({ "text-ink-invert w-full": true, [textStyle]: !!textStyle })}
                        variant="subtitle2"
                    >
                        {loadingText ? loadingText : t("LOADING")}
                    </Typography>
                </View>
            ) : (
                <View>
                    <Typography
                        className={clsx({ "text-ink-invert w-full": true, [textStyle]: !!textStyle })}
                        variant="subtitle2"
                    >
                        {title}
                    </Typography>
                </View>
            )}
        </IconButton>
    );
};

export default ActionButton;

{
    /* <Animated.View
                    className="w-4 h-4 mr-2 rounded-3xl border-2 border-transparent border-t-white border-l-white"
                    style={[animatedStyle]}
                    entering={FadeIn}
                    exiting={FadeOut}
                /> */
}
