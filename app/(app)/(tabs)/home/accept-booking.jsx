import { Stack, Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

import CarerScheduleCard from "../../../../components/cards/carer-schedule-card";
import DateTimeInput from "../../../../components/date-time-input";
import TextInput from "../../../../components/text-inputs/text-input";
import { TEACHER_ATTENDANCE_FILTER_DATE_FORMAT } from "../../../../constants/settings";
import { cn } from "../../../../utilities/cn";

import Button from "@/components/buttons/button";
import Layout from "@/components/layout";
import Typography from "@/components/typography";
import { useSession } from "@/contexts/authContext";

export default function AcceptBooking() {
    const [selectedDay, setSelectedDay] = useState();
    const [selectedTime, setSelectedTime] = useState();
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

    const showDatePicker = (name) => {
        setVisibleDatePicker((prevState) => ({ ...prevState, [name]: true }));
    };

    const hideDatePicker = (name) => {
        setVisibleDatePicker((prevState) => ({ ...prevState, [name]: false }));
        // setVisibleDatePicker((prevState) =>
        //     Object.entries(prevState).reduce((obj, [key, value]) => {
        //         return { ...obj, [key]: false };
        //     }, {}),
        // );
    };

    return (
        <Layout headerTitle="Available Booking" backButton>
            {/* <Stack.Screen
                options={{
                    title: isCustomer ? "Request New Carer" : "Schedule Shift",
                    headerShown: true,
                }}
            /> */}
            <Typography variant="body3" className="mb-4 text-neutral-500">
                We found a match with your schedule to customer schedule. Please accept the booking.
            </Typography>

            <CarerScheduleCard
                imageSource={require("../../../../assets/images/customer-1.jpg")}
                time="9:30 am, 08 April"
                name="Catherine Dsourza"
                rate={350}
                rating={4.9}
                title="Need Emergency Medication"
                type="Medication Support"
                address="12 Homestead Rd"
            />
            {/* <DateTimeInput
                control={control}
                name="date"
                mode="datetime"
                placeholder="Select Date and Time"
                variant="filled"
                isVisible={visibleDatePicker["date"]}
                format={TEACHER_ATTENDANCE_FILTER_DATE_FORMAT}
                onCancel={() => hideDatePicker("date")}
                onPress={() => showDatePicker("date")}
                label="Schedule Your Slot"
            /> */}
            <View className="items-center">
                <Button
                    className="mt-14"
                    onPress={() => {
                        router.navigate("/home");
                        Toast.show({
                            type: "success",
                            text1: "Booking successfully",
                            text2: "Congratulation! You have a customer to care.",
                        });
                    }}
                    // className="w-full"
                    title="Accept Booking"
                    style={{ width: "100%" }}
                />
            </View>
        </Layout>
    );
}
