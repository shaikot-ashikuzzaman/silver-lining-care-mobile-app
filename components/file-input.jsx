import clsx from "clsx";
import * as DocumentPicker from "expo-document-picker";
import React from "react";
import { Controller } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";

import Icon from "./icon";
import Typography from "./typography";
import { ICONS_NAME } from "../constants/iconsName";
import * as COLORS from "../constants/themeColors";
import { cn } from "../utilities/cn";

const VARIANTS = {
    filled: "bg-input-bg",
    outline: "border border-neutral-200 bg-white",
};

const FileInput = ({
    control,
    name,
    placeholder,
    onPress,
    label,
    required = false,
    style,
    rules = {},
    type = "*/*",
    variant = "outline",
    className,
}) => {
    const formOnChangeRef = React.useRef();

    const onPressFileInput = () => {
        const onSuccess = async (result) => {
            console.log({ result });
            const asset = result?.assets[0];
            if (result.canceled === false) {
                const attachment = {
                    name: asset.name,
                    type: asset.mimeType,
                    uri: asset.uri,
                };
                formOnChangeRef.current?.(attachment);
            } else {
                formOnChangeRef.current?.("");
            }
        };

        const onError = (error) => {
            console.log({ error });
        };

        DocumentPicker.getDocumentAsync({ type }).then(onSuccess).catch(onError);
    };

    return (
        <Controller
            control={control}
            name={name}
            rules={{
                required: { value: required, message: `${label} is required` },
                ...rules,
            }}
            render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => {
                formOnChangeRef.current = onChange;

                return (
                    <View
                        className={cn("overflow-hidden w-full px-5 mb-4", className)}
                        style={style}
                    >
                        {label ? (
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
                        <TouchableOpacity
                            onPress={() => {
                                onPressFileInput?.();
                            }}
                            className={clsx(
                                "bg-transparent flex-row items-center justify-center space-x-2 rounded-full p-2 px-[14px] h-16",
                                VARIANTS[variant],
                                variant === "outline" ? "border border-gray-400" : "",
                            )}
                        >
                            <Typography
                                className={clsx({
                                    "flex-1 px-2": true,
                                    "text-neutral-500 text-xs leading-10 my-1": true,
                                })}
                                numberOfLines={1}
                            >
                                {value ? value?.name || value?.file_name : placeholder}
                            </Typography>
                            <View className="ml-auto items-end">
                                <Icon name={ICONS_NAME["plus"]} />
                            </View>
                        </TouchableOpacity>
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
    );
};

export default FileInput;
