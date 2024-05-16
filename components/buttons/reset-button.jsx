import React from "react";

import { ICONS_NAME } from "../../constants/iconsName";
import Icon from "../icon";
import Typography from "../typography";
import IconButton from "./icon-button";

const ResetButton = ({ onPress, style, buttonText }) => {
    return (
        <IconButton
            className="flex-row bg-[#3F4945] rounded-lg items-center justify-center px-3 flex-1 space-x-2 h-12"
            onPress={onPress}
            style={style}
        >
            <Icon name={ICONS_NAME.reset} size={20} color="white" />
            <Typography className="text-ink-invert" variant="subtitle2">
                {buttonText}
            </Typography>
        </IconButton>
    );
};

export default ResetButton;
