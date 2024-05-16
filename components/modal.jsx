import clsx from "clsx";
import React from "react";
import { View, Modal as RNModal, Pressable } from "react-native";

const Modal = ({
    children,
    visible,
    closeModal,
    onRequestClose,
    onPressOverlay,
    heightAuto = false,
    style = {},
}) => {
    return (
        <RNModal
            animationType="fade"
            transparent
            visible={visible}
            onRequestClose={() => {
                onRequestClose?.();
                closeModal?.();
            }}
        >
            <View className="relative flex-1 items-center justify-center">
                <View className="bg-black flex-1 absolute w-full h-full opacity-30">
                    <Pressable
                        onPress={() => {
                            onPressOverlay?.();
                            closeModal?.();
                        }}
                        className="flex-1"
                    />
                </View>
                <View
                    className={clsx({
                        "w-[90%] rounded-lg overflow-hidden bg-white p-4": true,
                        "": heightAuto,
                        "h-[65%]": !heightAuto,
                    })}
                    style={style}
                >
                    {children}
                </View>
            </View>
        </RNModal>
    );
};

export default Modal;
