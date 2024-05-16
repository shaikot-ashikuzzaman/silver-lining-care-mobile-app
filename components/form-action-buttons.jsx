import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";

import { ICONS_NAME } from "../../constants/iconsName";
import ActionButton from "../buttons/action-button";

const FormActionButtons = ({
    onReset,
    onSubmit,
    handleSubmit,
    resetButtonText,
    submitButtonText,
    loading,
}) => {
    const { t } = useTranslation();

    return (
        <View className="flex-row px-6 gap-x-4 py-8">
            {/* <ResetButton
                onPress={() => {
                    onReset?.();
                }}
                buttonText={resetButtonText ? resetButtonText : t("RESET")}
            /> */}
            <ActionButton
                onPress={() => {
                    onReset?.();
                }}
                title={resetButtonText ? resetButtonText : t("RESET")}
                className="bg-[#3F4945] flex-1"
                iconName={ICONS_NAME.reset}
                textStyle="py-1"
                iconSize={20}
            />
            {/* <SaveButton
                onPress={handleSubmit(onSubmit)}
                buttonText={submitButtonText ? submitButtonText : t("SUBMIT")}
                loading={loading}
            /> */}
            <ActionButton
                onPress={handleSubmit(onSubmit)}
                title={submitButtonText ? submitButtonText : t("SUBMIT")}
                loading={loading}
                className="bg-green flex-1"
                iconName={ICONS_NAME.save}
                textStyle="py-1"
                iconSize={20}
            />
        </View>
    );
};

export default FormActionButtons;
