import clsx from "clsx";
import React from "react";
import { TouchableOpacity, View } from "react-native";

import Typography from "./typography";
import { cn } from "../utilities/cn";

const RadioInput = ({ data, selected, className, onSelect, style }) => {
    const [userOption, setUserOption] = React.useState(null);

    const selectHandler = (option) => {
        onSelect?.(option);
        setUserOption(option);
    };

    return (
        <View className={cn("gap-y-2", className)} style={style}>
            {data.map((item) => {
                const isSelected = selected
                    ? selected.value === item.value
                    : item.value === userOption?.value;
                return (
                    <TouchableOpacity key={item.value} onPress={() => selectHandler(item)}>
                        <View className="flex-row items-center">
                            <View
                                className={clsx({
                                    "w-5 h-5 rounded-xl  bg-gray-100 border mr-1 relative": true,
                                })}
                            >
                                {isSelected ? (
                                    <View className="absolute w-full h-full justify-center items-center">
                                        <View className="w-[10px] h-[10px] bg-black rounded-full" />
                                    </View>
                                ) : (
                                    <></>
                                )}
                            </View>
                            <Typography variant="body1" className="leading-snug">
                                {" "}
                                {item.label}
                            </Typography>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default RadioInput;
