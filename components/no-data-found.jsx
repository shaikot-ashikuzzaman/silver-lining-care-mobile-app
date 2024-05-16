import React from "react";
import { View } from "react-native";

import Button from "./buttons/button";
import Typography from "./typography";

const NoDataFound = ({ style, title, description, onTryAgain, image }) => {
    return (
        <View className="flex-1 justify-center items-center p-2" style={style}>
            <Typography variant="display5">{title ?? "NO_DATA_FOUND"}</Typography>
            {description ? <Typography>{description}</Typography> : <></>}
            {onTryAgain ? (
                <View className="mt-3">
                    <Button title="TRY_AGAIN" onPress={onTryAgain} />
                </View>
            ) : (
                <></>
            )}
        </View>
    );
};

export default NoDataFound;
