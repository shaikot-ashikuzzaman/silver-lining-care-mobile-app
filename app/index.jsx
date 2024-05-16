import { Link, router } from "expo-router";
import { useForm } from "react-hook-form";
import { View } from "react-native";

import Button from "../components/buttons/button";
import TextInput from "../components/text-inputs/text-input";
import Typography from "../components/typography";
import { useSession } from "../contexts/authContext";

import Layout from "@/components/layout";
import Logo from "@/components/logo";

export default function SignIn() {
    const { signIn } = useSession();
    const { control, handleSubmit, reset, setValue, watch, getValues, setFocus } = useForm({
        defaultValues: {
            username: "customer",
            password: "",
        },
    });

    return (
        <Layout center>
            <Logo />

            <Typography variant="h1" className="-mb-1">
                Welcome back!
            </Typography>
            <Typography variant="body2" className="mb-16">
                Please enter your login details below
            </Typography>

            <TextInput
                placeholder={`Enter "customer" or "carer"`}
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
            <Typography variant="small1" className="self-end pr-5 text-neutral-500">
                Forgot Password?
            </Typography>
            <Button
                className="mt-14"
                onPress={() => {
                    signIn(getValues("username")?.toLowerCase());
                    // Navigate after signing in. You may want to tweak this to ensure sign-in is
                    // successful before navigating.
                    router.replace("/home");
                }}
                // className="w-full"
                title="Sign in"
                style={{ width: "100%" }}
            />
            <View className="flex-row items-center mt-10 gap-x-2">
                <Typography variant="body2">Don't have an account yet?</Typography>
                <Link href="/register-as" className="text-violet-600 font-poppins-semibold">
                    Sign up
                </Link>
            </View>
        </Layout>
    );
}
