import { Stack, Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Image, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

import DateTimeInput from "../../../../components/date-time-input";
import Icon from "../../../../components/icon";
import TextInput from "../../../../components/text-inputs/text-input";
import { ICONS_NAME } from "../../../../constants/iconsName";
import { TEACHER_ATTENDANCE_FILTER_DATE_FORMAT } from "../../../../constants/settings";
import { cn } from "../../../../utilities/cn";

import Button from "@/components/buttons/button";
import Layout from "@/components/layout";
import Typography from "@/components/typography";
import { useSession } from "@/contexts/authContext";

const PAYMENTS = [
    {
        imageSource: require("../../../../assets/images/visa.png"),
        expire: "05/30",
        last4Digits: 2418,
    },
    {
        imageSource: require("../../../../assets/images/paypal.png"),
        expire: "05/30",
        last4Digits: 2418,
    },
];

const CreatePaymentMethodButton = () => {
    const router = useRouter();

    return (
        <TouchableOpacity
            className={cn("items-center border border-neutral-200 rounded-lg p-7 mb-4")}
            onPress={() => router.push({ pathname: "/home/create-payment", params: {} })}
        >
            <Icon name={ICONS_NAME.plus} color="#a3a3a3" size={20} />
        </TouchableOpacity>
    );
};

const PaymentMethod = ({
    imageSource,
    expire,
    last4Digits,
    index,
    selectedPayment,
    setSelectedPayment,
}) => {
    return (
        <TouchableOpacity
            className={cn(
                "flex-row gap-4 items-center border border-neutral-200 rounded-lg p-4 mb-4",
                selectedPayment === index ? "bg-violet-100" : "",
            )}
            onPress={() => setSelectedPayment(index)}
        >
            <View className="">
                <Image source={imageSource} className="flex-1 w-14 h-14" resizeMode="contain" />
            </View>
            <View>
                <View className="flex-row">
                    {[
                        "*",
                        "*",
                        "*",
                        "*",
                        " ",
                        "*",
                        "*",
                        "*",
                        "*",
                        " ",
                        "*",
                        "*",
                        "*",
                        "*",
                        " ",
                    ].map((digit, index) => {
                        return <Typography key={digit + index}>{digit}</Typography>;
                    })}
                    <Typography variant="h4" className="">
                        {last4Digits}
                    </Typography>
                </View>
                <Typography variant="small1" className="">
                    Expires {expire}
                </Typography>
            </View>
            <Button className="h-10 w-20 ml-auto rounded-lg bg-sky-500" title="Edit" />
        </TouchableOpacity>
    );
};

export default function Payment() {
    const [selectedPayment, setSelectedPayment] = useState();
    const router = useRouter();
    const [visibleDatePicker, setVisibleDatePicker] = useState({
        date: false,
        start_time: false,
    });
    const { session } = useSession();
    const isCustomer = session === "customer";
    const { control, handleSubmit, reset, setValue, watch, getValues, setFocus } = useForm({
        defaultValues: {
            title: "",
            date: "",
            time: "",
            description: "",
        },
    });

    return (
        <Layout headerTitle="Payment Methods" backButton>
            {/* <Typography variant="body3" className="mb-4 text-neutral-500">
                Select a payment method
            </Typography> */}

            <View className="flex-1 justify-between">
                <View>
                    {PAYMENTS.map((item, index) => {
                        return (
                            <PaymentMethod
                                key={index}
                                index={index}
                                selectedPayment={selectedPayment}
                                setSelectedPayment={setSelectedPayment}
                                {...item}
                            />
                        );
                    })}

                    <CreatePaymentMethodButton />
                </View>
                <View className="items-center">
                    <Button
                        className="mt-14"
                        onPress={() => {
                            router.navigate("/home");
                            Toast.show({
                                type: "success",
                                text1: "Schedule Created",
                                text2: "Your schedule has been created successfull!",
                            });
                        }}
                        // className="w-full"
                        title="Confirm Payment"
                        style={{ width: "100%" }}
                    />
                </View>
            </View>
        </Layout>
    );
}
