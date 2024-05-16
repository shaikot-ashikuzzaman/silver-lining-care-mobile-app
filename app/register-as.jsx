import { Link, router } from "expo-router";
import { useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";

import Button from "../components/buttons/button";
import TextInput from "../components/text-inputs/text-input";
import Typography from "../components/typography";
import { useSession } from "../contexts/authContext";

import Layout from "@/components/layout";
import Logo from "@/components/logo";

export default function RegisterAs() {
    const { signIn } = useSession();
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
            <Typography variant="h1" className="-mb-1">
                Register As
            </Typography>

            <Button
                className="mt-4"
                variant="outline"
                onPress={() => {
                    router.navigate({ pathname: "/sign-up", params: { category: "carer" } });
                }}
                title="Carer"
                style={{ width: "100%" }}
            />
            <Button
                className="mt-4"
                variant="outline"
                onPress={() => {
                    router.navigate({ pathname: "/sign-up", params: { category: "customer" } });
                }}
                title="Customer"
                style={{ width: "100%" }}
            />
        </Layout>
    );
}
