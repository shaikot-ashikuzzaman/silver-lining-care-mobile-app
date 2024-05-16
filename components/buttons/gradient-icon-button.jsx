import React from "react";

import Typography from "../typography";
import GradientButton from "./gradient-button";

const GradientIconButton = ({ fullWidth = false, LeftIcon, RightIcon, title, onPress, disabled, style }) => {
    return (
        <GradientButton
            fullWidth={fullWidth}
            className="self-end flex-row space-x-1"
            style={style}
            onPress={() => onPress?.()}
            disabled={disabled}
        >
            {LeftIcon && LeftIcon}
            {title && (
                <Typography className="text-ink-invert" variant="body2">
                    {title}
                </Typography>
            )}
            {RightIcon && RightIcon}
        </GradientButton>
    );
};

export default GradientIconButton;
