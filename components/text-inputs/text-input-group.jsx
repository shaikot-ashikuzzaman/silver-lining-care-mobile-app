import React from "react";
import { View } from "react-native";

import { TextInputContext } from "../../contexts/useTextInputContext";
import TextInput from "./text-input";

const TextInputGroup = ({ children, style }) => {
    const { isFocused, setIsFocused } = React.useState(false);

    return (
        <TextInputContext.Provider value={{ isFocused }}>
            <View className="flex-row" style={style}>
                {children}
            </View>
        </TextInputContext.Provider>
    );
};

const TextInputAddon = ({ children, style, ...props }) => {
    return (
        <View className="absolute h-full w-10 z-10" style={style}>
            <View className="flex-1 justify-center items-center" {...props}>
                {children}
            </View>
        </View>
    );
};

const Input = React.forwardRef(({ placeholder, textInputClassName, style, required, control, name, ...props }, ref) => {
    return (
        <TextInput
            ref={ref}
            control={control}
            className="flex-1"
            textInputClassName={textInputClassName}
            placeholder={placeholder}
            required={required}
            name={name}
            {...props}
        />
    );
});

TextInputGroup.Addon = TextInputAddon;

TextInputGroup.TextInput = Input;

export default TextInputGroup;
