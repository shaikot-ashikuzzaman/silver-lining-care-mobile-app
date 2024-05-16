import clsx from "clsx";
import React from "react";
import { Controller } from "react-hook-form";
import { View, TextInput as DefaultRNTextInput } from "react-native";

import { ICONS_NAME } from "../../constants/iconsName";
import COLORS from "../../constants/themeColors";
import IconButton from "../buttons/icon-button";
import Icon from "../icon";
import Typography from "../typography";

const VARIANTS = {
    filled: "bg-input-bg",
    outline: "border border-neutral-200 bg-white",
};

const TextInput = ({
    style,
    textInputClassName,
    variant = "outline",
    placeholder,
    secureTextEntry,
    control,
    name,
    rules = {},
    label,
    required,
    error,
    textarea = false,
    hideDefaultLabel = false,
    keyboardType = "default",
    disabled = false,
    toggleSecureText,
    ...props
}) => {
    return control ? (
        <Controller
            control={control}
            name={name}
            rules={{
                required: { value: required, message: `${label} is required` },
                ...rules,
            }}
            render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => {
                return (
                    <View className={clsx("overflow-hidden w-full mb-4 px-5")} style={style}>
                        {label && !hideDefaultLabel ? (
                            <View className="flex-row items-start">
                                <Typography
                                    className="mb-1 justify-self-end align-text-bottom"
                                    variant="label"
                                >
                                    {label}
                                </Typography>
                                {required ? (
                                    <Typography
                                        className="text-red leading-[30px] ml-0.5"
                                        variant="display4"
                                    >
                                        *
                                    </Typography>
                                ) : (
                                    <></>
                                )}
                            </View>
                        ) : (
                            <></>
                        )}
                        <View className="relative">
                            <DefaultRNTextInput
                                placeholder={placeholder}
                                className={clsx(
                                    "px-6 rounded-full font-ubuntu-regular text-lg",
                                    textarea ? "" : "h-16",
                                    VARIANTS[variant],
                                    textInputClassName,
                                )}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={secureTextEntry}
                                keyboardType={keyboardType}
                                editable={!disabled}
                                selectTextOnFocus={!disabled}
                                // style={{ textAlignVertical: "top" }}
                                {...(textarea ? { multiline: true, numberOfLines: 5 } : {})}
                                {...props}
                            />
                            {secureTextEntry !== undefined ? (
                                <View className="absolute h-full right-0 justify-center">
                                    <IconButton
                                        onPress={() => {
                                            toggleSecureText?.();
                                        }}
                                    >
                                        {secureTextEntry ? (
                                            <Icon
                                                name={ICONS_NAME.eye}
                                                size={16}
                                                className="px-3"
                                            />
                                        ) : (
                                            <Icon
                                                name={ICONS_NAME["eye-slash"]}
                                                size={16}
                                                className="px-3"
                                            />
                                        )}
                                    </IconButton>
                                </View>
                            ) : (
                                <></>
                            )}
                        </View>
                        {error ? (
                            <View className="flex-row items-center gap-x-1 mt-1">
                                <Icon
                                    name={ICONS_NAME.exclamation}
                                    color={COLORS.red.DEFAULT}
                                    size={12}
                                />
                                <Typography className="text-red text-[13px]">
                                    {error.message}
                                </Typography>
                            </View>
                        ) : (
                            <></>
                        )}
                    </View>
                );
            }}
        />
    ) : (
        <></>
    );
};

export default TextInput;
