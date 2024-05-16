import { Box } from "native-base";
import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

import Layout from "./layout";

const DismissKeyboard = (props) => {
    const { children } = props;

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Layout flex="1">{children}</Layout>
        </TouchableWithoutFeedback>
    );
};

export default DismissKeyboard;
