import { Link, router, useLocalSearchParams } from "expo-router";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";

import Button from "../components/buttons/button";
import FileInput from "../components/file-input";
import TextInput from "../components/text-inputs/text-input";
import Typography from "../components/typography";
import { useSession } from "../contexts/authContext";

import Layout from "@/components/layout";
import Logo from "@/components/logo";

export default function SignUp() {
    const { signIn } = useSession();
    const { category } = useLocalSearchParams();
    const { control, handleSubmit, reset, setValue, watch, getValues, setFocus } = useForm({
        defaultValues: {
            username: "",
            password: "",
            confirm_password: "",
            id: "",
            certification: "",
            reference: "",
        },
    });
    return (
        <Layout center>
            <Logo />
            <Typography variant="h1" className="-mb-1">
                Welcome back!
            </Typography>
            <Typography variant="body2" className="mb-16">
                Please register your log in details below
            </Typography>

            <TextInput
                placeholder="First Name"
                control={control}
                name="firstName"
                label="First Name"
            />
            <TextInput
                placeholder="Last Name"
                control={control}
                name="lastName"
                label="Last Name"
            />
            <TextInput placeholder="Address" control={control} name="address" label="Address" />
            <TextInput
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
            />
            {/* <FileInput
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

            <Button
                className="mt-4"
                onPress={() => {
                    signIn(getValues("username")?.toLowerCase() || "customer");
                    // Navigate after signing in. You may want to tweak this to ensure sign-in is
                    // successful before navigating.
                    router.replace("/account");
                }}
                // className="w-full"
                title="Sign Up"
                style={{ width: "100%" }}
            />

            <View className="flex-row items-center mt-6 mb-5 gap-x-2">
                <Typography variant="body2">You have an account?</Typography>
                <Link href="/" className="text-violet-600 font-poppins-semibold">
                    Sign in
                </Link>
            </View>
        </Layout>
    );
}
