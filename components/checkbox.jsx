import clsx from "clsx";
import DefaultCheckbox from "expo-checkbox";
import React from "react";
import { Controller } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";

import { ICONS_NAME } from "../constants/iconsName";
import COLORS from "../constants/themeColors";
import Icon from "./icon";
import Typography from "./typography";

const CHECKBOX_LABEL_POSITIONS = {
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left",
};

const Checkbox = ({
    control,
    name,
    required,
    label,
    rules = {},
    style,
    hideDefaultLabel = false,
    disabled = false,
    labelPosition = CHECKBOX_LABEL_POSITIONS.RIGHT,
    onChange,
    ...props
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: { value: required, message: `${label} is required` },
                ...rules,
            }}
            render={({ field: { onBlur, onChange: formOnChange, value }, fieldState: { error } }) => {
                return (
                    <TouchableOpacity
                        className={clsx(
                            labelPosition === CHECKBOX_LABEL_POSITIONS.RIGHT
                                ? "flex-row items-center space-x-2"
                                : labelPosition === CHECKBOX_LABEL_POSITIONS.TOP
                                ? "flex-col-reverse items-center gap-y-2"
                                : "",
                            disabled ? "opacity-30" : "",
                        )}
                        style={style}
                        hitSlop={12}
                        disabled={disabled}
                        onPress={() => {
                            formOnChange(!value);
                            onChange?.(!value);
                        }}
                    >
                        <DefaultCheckbox
                            pointerEvents="none"
                            // onValueChange={onChange}
                            value={Boolean(value)}
                            editable={!disabled}
                            {...props}
                        />
                        {label && !hideDefaultLabel ? (
                            <Typography className="" variant="label">
                                {label}
                            </Typography>
                        ) : (
                            <></>
                        )}
                        {required ? (
                            <Typography className="text-red leading-[30px] ml-0.5" variant="display4">
                                *
                            </Typography>
                        ) : (
                            <></>
                        )}

                        {error ? (
                            <View className="flex-row items-center gap-x-1 mt-1">
                                <Icon name={ICONS_NAME.exclamation} color={COLORS.red.DEFAULT} size={12} />
                                <Typography className="text-red text-[13px]">{error.message}</Typography>
                            </View>
                        ) : (
                            <></>
                        )}
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default Checkbox;
