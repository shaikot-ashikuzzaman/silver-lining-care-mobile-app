import clsx from "clsx";
import dayjs from "dayjs";
import React from "react";
import { Controller } from "react-hook-form";
import { View, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Icon from "./icon";
import TextInput from "./text-inputs/text-input";
import Typography from "./typography";
import { ICONS_NAME } from "../constants/iconsName";
import { convert12HourTo24Hour } from "../utilities/dateHelper";

const VARIANTS = {
    filled: "bg-input-bg",
    outline: "border border-primary bg-white",
};

const DateTimeInput = ({
    control,
    name,
    value,
    isVisible = false,
    mode = "date",
    placeholder,
    onPress = () => {},
    onConfirm = () => {},
    onCancel = () => {},
    InputLeftElement = <Icon name={ICONS_NAME.calendar} size={14} color="black" />,
    touchableOpacityProps,
    boxProps,
    inputProps,
    dateProps,
    required = false,
    label,
    variant = "outline",
    rules = {},
    style = {},
    format,
    openingDate,
}) => {
    const formOnChangeRef = React.useRef();

    return (
        <View style={style}>
            <Controller
                control={control}
                name={name}
                rules={{
                    required: { value: required, message: `${label} is required` },
                    ...rules,
                }}
                render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => {
                    // formOnChangeRef.current = onChange;
                    return (
                        <View className={clsx("overflow-hidden w-full")}>
                            {label ? (
                                <View className="flex-row items-start">
                                    <Typography
                                        className="leading-[36px] justify-self-end align-text-bottom"
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
                                    onPress?.();
                                }}
                                className={clsx(
                                    "bg-transparent flex-row items-center space-x-2 rounded-md p-2 px-[14px] h-11",
                                    VARIANTS[variant],
                                    variant === "outline" ? "border border-gray-400" : "",
                                )}
                            >
                                <Typography
                                    className={clsx({
                                        "flex-1": true,
                                        "text-neutral-500 font-ubuntu-light": true,
                                    })}
                                    numberOfLines={1}
                                >
                                    {value ? value : placeholder}
                                </Typography>
                                <View className="ml-auto items-end">
                                    <Icon name={ICONS_NAME["calendar"]} />
                                </View>
                                <DateTimePickerModal
                                    isVisible={isVisible}
                                    mode={mode}
                                    onConfirm={(date) => {
                                        onCancel?.();
                                        const convertedDate = dayjs(date).format(format);
                                        onChange(convertedDate);
                                    }}
                                    onCancel={onCancel}
                                    // {...(openingDate ? { date: openingDate } : {})}
                                    // date={value}
                                    // date={mode === "date" ? (value ? new Date(value) : new Date()) : new Date()}
                                    date={
                                        mode === "date"
                                            ? value
                                                ? new Date(dayjs(value, format))
                                                : new Date()
                                            : value
                                              ? new Date(
                                                    new Date().setHours(
                                                        convert12HourTo24Hour(value).split(":")[0],
                                                        convert12HourTo24Hour(value).split(":")[1],
                                                    ),
                                                )
                                              : new Date()
                                    }
                                    {...dateProps}
                                />
                            </TouchableOpacity>
                            {error ? (
                                <View className="flex-row items-center gap-x-1 mt-1">
                                    <Icon name={ICONS_NAME.exclamation} color="black" size={12} />
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
        </View>
    );
};

export default DateTimeInput;
