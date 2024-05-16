import clsx from "clsx";
import React from "react";
import { TouchableNativeFeedback, View, Text } from "react-native";

import COLORS from "../../constants/themeColors";
import GradientView from "../gradients/gradient-view";
import Typography from "../typography";

const GradientButton = ({
    style,
    colors = [COLORS["blue-darker"], COLORS["blue-lighter"]],
    start = { x: 0, y: 0 },
    end = { x: 1, y: 0 },
    fullWidth = false,
    fullHeight = false,
    title = "",
    buttonClassName = "",
    onPress,
    disabled = false,
    children,
    ...props
}) => {
    return (
        <GradientView
            className={clsx({
                "rounded-md": true,
                "w-full": fullWidth,
                "self-start": !fullWidth,
                "h-10": !fullHeight,
                "h-full": fullHeight,
                "opacity-70": disabled,
            })}
            style={style}
            colors={colors}
            start={start}
            end={end}
        >
            <TouchableNativeFeedback onPress={() => onPress?.()} disabled={disabled}>
                <View
                    className={clsx({
                        "justify-center items-center h-full": true,
                        "w-full": fullWidth,
                        "px-2": !fullWidth,
                    })}
                    style={style}
                >
                    {title ? (
                        <Typography variant="body2" className="text-ink-invert">
                            {title}
                        </Typography>
                    ) : (
                        children
                    )}
                </View>
            </TouchableNativeFeedback>
        </GradientView>
    );
};

export default GradientButton;
