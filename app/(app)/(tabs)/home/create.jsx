import { Stack, Tabs, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, TouchableOpacity, View } from "react-native";

import DateTimeInput from "../../../../components/date-time-input";
import TextInput from "../../../../components/text-inputs/text-input";
import { TEACHER_ATTENDANCE_FILTER_DATE_FORMAT } from "../../../../constants/settings";
import { cn } from "../../../../utilities/cn";

import Button from "@/components/buttons/button";
import Layout from "@/components/layout";
import Typography from "@/components/typography";
import { useSession } from "@/contexts/authContext";

export default function HomeDetails() {
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
        <Layout headerTitle="Create Schedule" backButton>
            {/* <Stack.Screen
                options={{
                    title: isCustomer ? "Request New Carer" : "Schedule Shift",
                    headerShown: true,
                }}
            /> */}
            <Typography variant="body3" className="mb-4 text-neutral-500">
                Please select an available date or schedule to home service
            </Typography>

            <Typography variant="h4" className="mb-2">
                Choose a day
            </Typography>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName=""
                contentContainerStyle={{ columnGap: 20 }}
                style={{ flexGrow: 0 }}
            >
                {[
                    { day: "Sun", date: 7 },
                    { day: "Mon", date: 8 },
                    { day: "Tue", date: 9 },
                    { day: "Wed", date: 10 },
                    { day: "Thu", date: 11 },
                    { day: "Fri", date: 12 },
                    { day: "Sat", date: 13 },
                ].map((slot, index) => {
                    return (
                        <TouchableOpacity
                            key={slot.date + index}
                            className={cn(
                                "py-4 w-20 rounded-lg border border-neutral-200 items-center",
                                index === selectedDay ? "bg-violet-600" : "",
                            )}
                            onPress={() => setSelectedDay(index)}
                        >
                            <Typography className={cn(index === selectedDay ? "text-white" : "")}>
                                {slot.day}
                            </Typography>
                            <Typography
                                variant="h4"
                                className={cn(index === selectedDay ? "text-white" : "")}
                            >
                                {slot.date}
                            </Typography>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            <Typography variant="h4" className="mt-6 mb-2">
                Choose a time slot
            </Typography>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName=""
                contentContainerStyle={{ columnGap: 20 }}
                style={{ flexGrow: 0 }}
            >
                {[
                    { time: "08:30 AM" },
                    { time: "09:30 AM" },
                    { time: "10:30 AM" },
                    { time: "11:30 AM" },
                    { time: "12:30 PM" },
                    { time: "01:30 PM" },
                    { time: "02:30 PM" },
                    { time: "03:30 PM" },
                ].map((slot, index) => {
                    return (
                        <TouchableOpacity
                            key={slot.time + index}
                            className={cn(
                                "py-4 w-32 rounded-lg border border-neutral-200 items-center",
                                index === selectedTime ? "bg-violet-600" : "",
                            )}
                            onPress={() => setSelectedTime(index)}
                        >
                            <Typography className={cn(index === selectedTime ? "text-white" : "")}>
                                {slot.time}
                            </Typography>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            <Typography variant="h4" className="mt-6 mb-2">
                Information
            </Typography>
            <View className="p-4 border border-neutral-200 rounded-lg">
                <TextInput
                    placeholder="Enter Title"
                    control={control}
                    name="firstName"
                    label="Title"
                />
                <TextInput
                    textarea
                    placeholder="Please describe more about your needs."
                    control={control}
                    name="lastName"
                    label="Description"
                />
            </View>
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
                        router.push("/home/payment");
                    }}
                    // className="w-full"
                    title="Proceed to Payment"
                    style={{ width: "100%" }}
                />
            </View>
        </Layout>
    );
}
