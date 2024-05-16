import clsx from "clsx";
import React from "react";
import { View, TouchableNativeFeedback, TouchableOpacity } from "react-native";

import Typography from "../typography";

import { cn } from "@/utilities/cn";

const SHAPE_VARIANTS = {
    link: "",
    outline: "bg-none border border-violet-600",
    solid: "bg-violet-600",
    text: "bg-none",
};

const TEXT_VARIANTS = {
    link: "",
    outline: "text-violet-600",
    solid: "text-white",
    text: "text-primary dark:text-black",
};

const Button = ({
    fullWidth = false,
    onPress,
    fullHeight = false,
    style,
    title,
    variant = "solid",
    disabled = false,
    className = "",
    titleClassName = "",
}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            className={cn(
                "h-16 w-full items-center justify-center px-4 rounded-3xl",
                SHAPE_VARIANTS[variant],
                fullWidth ? "w-full" : "w-11/12",
                className,
            )}
            onPress={() => onPress?.()}
            disabled={disabled}
        >
            <Typography
                className={cn("leading-snug text-center", TEXT_VARIANTS[variant], titleClassName)}
                variant="subtitle3"
            >
                {title}
            </Typography>
        </TouchableOpacity>
    );
    return (
        <View
            className={clsx({
                "flex-1": fullWidth,
                "self-start": !fullWidth,
                "h-10": !fullHeight,
                "h-full": fullHeight,
                "opacity-70": disabled,
            })}
        >
            <TouchableNativeFeedback onPress={() => onPress?.()} disabled={disabled}>
                <View
                    className={clsx({
                        [`${SHAPE_VARIANTS[variant]} justify-center items-center rounded-md h-full`]: true,
                        "w-full": fullWidth,
                        "px-2": !fullWidth,
                        // "h-full": fullHeight,
                    })}
                    style={style}
                >
                    <Typography className={`${TEXT_VARIANTS[variant]}`}>{title}</Typography>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

export default Button;
