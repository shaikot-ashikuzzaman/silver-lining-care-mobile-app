import clsx from "clsx";
import React from "react";
import { View } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";
import Animated, {
    FadeInUp,
    FadeOutUp,
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

import Icon from "./icon";
import Row from "./row";
import { ICONS_NAME } from "../constants/iconsName";

const CollapsibleRow = ({ even, HeaderElement, ContentElement, style }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    const pressed = useSharedValue(false);
    const eventHandler = useAnimatedGestureHandler({
        onEnd: (event, ctx) => {
            pressed.value = !pressed.value;
            runOnJS(setCollapsed)(!pressed.value);
        },
    });

    const arrowAnimatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: pressed.value ? withTiming("-180deg") : withTiming("0deg"),
                },
            ],
        };
    });

    return (
        <Row className="p-0" even={even}>
            <View
                className={clsx(
                    "flex-row items-center justify-between p-4",
                    pressed.value ? "border-b border-gray-400" : "",
                )}
            >
                <View className="flex-1 mr-4">{HeaderElement}</View>
                <TapGestureHandler onGestureEvent={eventHandler} hitSlop={18}>
                    <Animated.View
                        style={[arrowAnimatedStyles]}
                        className="p-2 justify-center items-center"
                    >
                        <Icon name={ICONS_NAME["arrow-down"]} size={14} />
                    </Animated.View>
                </TapGestureHandler>
            </View>
            {!collapsed ? (
                <Animated.View entering={FadeInUp} exiting={FadeOutUp} className="flex-grow">
                    {ContentElement}
                </Animated.View>
            ) : (
                <></>
            )}
        </Row>
    );
};

export default CollapsibleRow;
