import clsx from "clsx";
import React from "react";
import Animated from "react-native-reanimated";

const Row = ({ even = false, children, lighterBg, style, ...props }) => {
    return (
        <Animated.View
            className={clsx(
                "p-4",
                {
                    "bg-slate-300": even && !lighterBg,
                },
                {
                    "bg-white": !even && !lighterBg,
                },
                {
                    "bg-slate-50": even && lighterBg,
                },
                {
                    "bg-slate-100": !even && lighterBg,
                },
            )}
            style={style}
            {...props}
        >
            {children}
        </Animated.View>
    );
};

export default Row;
