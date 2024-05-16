import React from "react";
import { useTranslation } from "react-i18next";

import { ICONS_NAME } from "../../constants/iconsName";
import GradientButton from "../buttons/gradient-button";
import Icon from "../icon";
import TextInputGroup from "./text-input-group";

const DEFAULT_PLACEHOLDER = "SEARCH";

const SearchInput = ({ control, name, placeholder = "SEARCH", variant = "outline", onPress, ...props }) => {
    const { t } = useTranslation();

    return (
        <TextInputGroup className="h-11" {...props}>
            <TextInputGroup.Addon className="w-10">
                <Icon name={ICONS_NAME.search} size={20} />
            </TextInputGroup.Addon>

            <TextInputGroup.TextInput
                textInputClassName="pl-10 pr-[86px]"
                variant={variant}
                name={name}
                placeholder={placeholder || t(DEFAULT_PLACEHOLDER)}
                control={control}
            />

            <TextInputGroup.Addon className="w-[80px] right-0">
                <GradientButton title="Search" className="rounded-l-none" onPress={onPress} fullWidth fullHeight />
            </TextInputGroup.Addon>
        </TextInputGroup>
    );
};

export default SearchInput;
