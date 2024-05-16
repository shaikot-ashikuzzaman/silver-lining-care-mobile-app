import clsx from "clsx";
import React from "react";
import { TouchableOpacity } from "react-native";

const IconButton = ({
    onPress,
    children,
    style,
    activeOpacity = 0.5,
    disabled = false,
    ...props
}) => {
    return (
        <TouchableOpacity
            className={clsx({
                "rounded-sm": true,
                "opacity-60": disabled,
                "opacity-100": !disabled,
            })}
            style={style}
            onPress={() => onPress?.()}
            activeOpacity={activeOpacity}
            disabled={disabled}
            hitSlop={{ bottom: 20, left: 20, top: 20, right: 20 }}
            {...props}
        >
            {children}
        </TouchableOpacity>
    );
};

export default IconButton;
