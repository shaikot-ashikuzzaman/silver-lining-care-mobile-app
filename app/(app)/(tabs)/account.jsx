import { useState } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";

import Button from "../../../components/buttons/button";
import Checkbox from "../../../components/checkbox";
import Dropdown from "../../../components/dropdown";
import FileInput from "../../../components/file-input";
import Icon from "../../../components/icon";
import Layout from "../../../components/layout";
import RadioInput from "../../../components/radio-input";
import TextInput from "../../../components/text-inputs/text-input";
import Typography from "../../../components/typography";

// import CollapsibleRow from "@/components/collapsible-row";
import { ICONS_NAME } from "../../../constants/iconsName";

import { useSession } from "@/contexts/authContext";

const SECTIONS = [
    {
        identifier: "profile",
        title: "Profile",
    },
    {
        identifier: "account-data",
        title: "Account Data",
    },
    {
        identifier: "app-settings",
        title: "App Settings",
    },
    {
        identifier: "vehicle-management",
        title: "Vehicle Management",
    },
];

export default function Profile() {
    const { signOut, session } = useSession();
    const [activeSections, setActiveSections] = useState([]);
    const [radioSelected, setRadioSelected] = useState({});
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const { control, handleSubmit, reset, setValue, watch, getValues, setFocus } = useForm({
        defaultValues: {
            preference: "",
            // username: "",
            // password: "",
            // confirm_password: "",
            id: "",
            certification: "",
            reference: "",
        },
    });
    const isCustomer = session === "customer";

    const renderHeader = (section, index, isActive) => {
        return (
            <View className="border border-violet-600 bg-violet-50 p-5 rounded-lg flex-row items-center gap-3">
                {section.identifier === "profile" ? (
                    <Icon name={ICONS_NAME.account} size={20} color="#4c1d95" />
                ) : (
                    <></>
                )}
                {section.identifier === "account-data" ? (
                    <Icon name={ICONS_NAME.info} size={20} color="#4c1d95" />
                ) : (
                    <></>
                )}
                {section.identifier === "app-settings" ? (
                    <Icon name={ICONS_NAME.settings} size={20} color="#4c1d95" />
                ) : (
                    <></>
                )}
                {section.identifier === "vehicle-management" ? (
                    <Icon name={ICONS_NAME.car} size={20} color="#4c1d95" />
                ) : (
                    <></>
                )}

                <Typography variant="body2" className="text-violet-900 leading-snug">
                    {section.title}
                </Typography>

                <View className="ml-auto">
                    {isActive ? (
                        <Icon name={ICONS_NAME["arrow-up"]} size={16} color="#4c1d95" />
                    ) : (
                        <Icon name={ICONS_NAME["arrow-down"]} size={16} color="#4c1d95" />
                    )}
                </View>
            </View>
        );
    };

    const renderContent = (section) => {
        return (
            <View className="border border-neutral-200 rounded-lg p-4 mt-2">
                {section.identifier === "profile" ? (
                    <View>
                        <TextInput
                            placeholder="Enter your first name"
                            control={control}
                            name="firstName"
                            label="First Name"
                        />
                        <TextInput
                            placeholder="Enter your last name"
                            control={control}
                            name="lastName"
                            label="Last Name"
                        />
                        <TextInput
                            placeholder="Enter your address"
                            control={control}
                            name="address"
                            label="Address"
                        />
                        <FileInput
                            placeholder="Enter your certification"
                            control={control}
                            name="certification"
                            label="Certification"
                        />
                        <FileInput
                            placeholder="Enter your ID"
                            control={control}
                            name="reference"
                            label="ID"
                        />
                        <FileInput
                            placeholder="Upload your photo"
                            control={control}
                            name="reference"
                            label="Upload Photo"
                        />
                        <TextInput
                            placeholder="Enter your emergency contact"
                            control={control}
                            name="contact"
                            label="Emergency Contact"
                        />
                        <View className="items-center">
                            <Button
                                className="mt-5 mb-2"
                                title="Update Profile"
                                onPress={() => {}}
                            />
                        </View>
                    </View>
                ) : (
                    <></>
                )}
                {section.identifier === "account-data" ? (
                    <View>
                        {/* <Typography>Account Data</Typography> */}
                        <View className="items-center">
                            <Button
                                className="mt-5 mb-2 bg-rose-600"
                                title="Delete Account"
                                onPress={() => {}}
                            />
                        </View>
                    </View>
                ) : (
                    <></>
                )}
                {section.identifier === "app-settings" ? (
                    <View className="flex-row items-center justify-between">
                        <Typography>Get app notification</Typography>
                        <Switch
                            // trackColor={{ false: "#767577", true: "#81b0ff" }}
                            // thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            // ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                ) : (
                    <></>
                )}
                {section.identifier === "vehicle-management" ? (
                    <View>
                        <Typography variant="h5" className="mb-1">
                            Do you have a vehicle?
                        </Typography>
                        <RadioInput
                            data={[
                                {
                                    label: "Yes",
                                    value: "yes",
                                },
                                {
                                    label: "No",
                                    value: "no",
                                },
                            ]}
                            onSelect={(item) => setRadioSelected(item)}
                            selected={radioSelected}
                            className="mb-4"
                        />
                        <Collapsible collapsed={radioSelected.value !== "yes"}>
                            <Dropdown
                                // required
                                control={control}
                                name="vehicleType"
                                label="Vehicle Info"
                                title="Vehicle Registration Type"
                                placeholder="Select vehicle registration type"
                                variant="outline"
                                options={[
                                    { label: "Car", value: "car" },
                                    { label: "Van", value: "van" },
                                    { label: "Truck", value: "truck" },
                                ]}
                                onChange={() => {}}
                            />
                        </Collapsible>
                        <View className="items-center">
                            <Button
                                className="mt-5 mb-2"
                                title="Update Vehicle Management"
                                onPress={() => {}}
                            />
                        </View>
                    </View>
                ) : (
                    <></>
                )}
            </View>
        );
    };

    const updateSections = (_activeSections) => {
        console.log(_activeSections);
        setActiveSections(_activeSections);
    };

    return (
        <Layout headerTitle="Account" drawerButton>
            <View className="flex-1 justify-between">
                <Accordion
                    sectionContainerStyle={{ paddingBottom: 20 }}
                    touchableComponent={TouchableOpacity}
                    sections={SECTIONS}
                    activeSections={activeSections}
                    // renderSectionTitle={_renderSectionTitle}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    onChange={updateSections}
                />
                <View className="items-center">
                    {/* <Button className="mt-10 mb-2" title="Update Profile" onPress={() => {}} /> */}

                    <Button
                        className="bg-rose-600 mt-14"
                        title="Logout"
                        onPress={() => {
                            // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
                            signOut();
                        }}
                    />
                </View>
            </View>
            {/* <View className="w-40 h-40 mb-3 rounded-full bg-slate-200 self-center" />
            <Typography className="text-center mb-1" variant="display1">
                {isCustomer ? "Md. Hayder Ali" : "Ashiquzzaman Shaikot"}
            </Typography>
            <Typography className="text-center mb-10">{session}</Typography>

            <Typography variant="h3" className="my-2">
                {isCustomer ? "Preference" : "Preference"}
            </Typography>
            <Typography variant="base" className="mb-2">
                {isCustomer ? "I'm looking for" : "I'm expertise at"}
            </Typography>

            <Dropdown
                required
                control={control}
                name="preference"
                // label="Preference"
                title="Preference"
                placeholder="Select preference"
                variant="outline"
                options={[
                    { label: "Personal Carer", value: "personal carer" },
                    { label: "Assistant Nurse", value: "assistant nurse" },
                ]}
                onChange={() => {}}
            />

            <Typography variant="h3" className="mt-16 mb-2">
                Personal Information
            </Typography> */}

            {/* <TextInput
                placeholder="Enter username"
                control={control}
                name="username"
                label="Username"
            />
            <TextInput
                placeholder="Enter Password"
                control={control}
                name="password"
                label="Password"
            />
            <TextInput
                placeholder="Enter Confirm Password"
                control={control}
                name="confirm_password"
                label="Confirm Password"
            /> */}
            {/* <TextInput placeholder="Enter ID" control={control} name="id" label="ID" />
            <FileInput
                placeholder="Enter certification"
                control={control}
                name="certification"
                label="Certification"
            />
            <FileInput
                placeholder="Enter reference"
                control={control}
                name="reference"
                label="Reference"
            /> */}
        </Layout>
    );
}
