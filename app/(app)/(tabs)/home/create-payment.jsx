import { Stack, Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Image, TouchableOpacity, View } from "react-native";

import DateTimeInput from "../../../../components/date-time-input";
import Dropdown from "../../../../components/dropdown";
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

export default function CreatePayment({}) {
    const [method, setMethod] = useState();
    const router = useRouter();
    const [visibleDatePicker, setVisibleDatePicker] = useState({
        date: false,
        start_time: false,
    });
    const { session } = useSession();
    const isCustomer = session === "customer";
    const { edit = false } = useLocalSearchParams();
    const { control, handleSubmit, reset, setValue, watch, getValues, setFocus } = useForm({
        defaultValues: {
            method: "",
            cardNumber: "",
            expire: "",
            cvv: "",
            email: "",
            password: "",
        },
    });

    return (
        <Layout headerTitle={edit ? "Edit Payment" : "Create Payment"} backButton>
            <View className="flex-1 justify-between">
                <View>
                    <Dropdown
                        // required
                        control={control}
                        name="method"
                        label="Payment Method"
                        title="Payment Method"
                        placeholder="Select payment method"
                        variant="outline"
                        options={[
                            { label: "Visa", value: "visa" },
                            { label: "Paypal", value: "paypal" },
                        ]}
                        onChange={(data) => {
                            setMethod(data.value);
                        }}
                    />

                    {method === "visa" ? (
                        <>
                            <TextInput
                                placeholder="Enter card number"
                                control={control}
                                name="cardNumber"
                                label="Card Number"
                            />
                            <TextInput
                                placeholder="Enter expiry date"
                                control={control}
                                name="expire"
                                label="Exp. Date"
                            />
                            <TextInput
                                placeholder="Enter cvv code"
                                control={control}
                                name="cvv"
                                label="CVV"
                            />
                        </>
                    ) : (
                        <></>
                    )}
                    {method === "paypal" ? (
                        <>
                            <TextInput
                                placeholder="Enter email"
                                control={control}
                                name="email"
                                label="Email"
                            />
                            <TextInput
                                placeholder="Enter password"
                                control={control}
                                name="password"
                                label="Password"
                            />
                        </>
                    ) : (
                        <></>
                    )}
                </View>

                <View className="items-center">
                    <Button
                        className="mt-14"
                        onPress={() => {
                            router.back();
                        }}
                        title="Create Payment"
                        style={{ width: "100%" }}
                    />
                </View>
            </View>
        </Layout>
    );
}
