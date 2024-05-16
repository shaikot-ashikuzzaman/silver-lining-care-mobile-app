import React from "react";
import { useTranslation } from "react-i18next";

import { ICONS_NAME } from "../../constants/iconsName";
import Icon from "../icon";
import Typography from "../typography";
import IconButton from "./icon-button";

const DownloadButton = ({ onPress, loading, disabled = false, style }) => {
    const { t } = useTranslation();

    return (
        <IconButton
            className="py-3 px-7 flex-row items-center bg-blue-100 space-x-2 rounded-lg"
            onPress={() => onPress?.()}
            style={style}
            disabled={disabled}
        >
            {loading ? (
                <Icon name={ICONS_NAME.dot} color="#007AFF" size={16} />
            ) : (
                <Icon name={ICONS_NAME.download} color="#007AFF" size={16} />
            )}
            <Typography className="text-[#007AFF]">{t("DOWNLOAD")}</Typography>
        </IconButton>
    );
};

export default DownloadButton;
