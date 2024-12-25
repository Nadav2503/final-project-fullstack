import React, { useCallback } from "react";
import LoginForm from "../components/LoginForm";
import useLoginVisitor from "../hooks/useLoginVisitor";
import useForm from "../../form/useForm";
import initializeLogin from "../helpers/initialize/initializeLogin";
import loginSchema from "../model/loginSchema";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import ROUTES from "../../routers/routerModel"; // Ensure ROUTES has a SIGNUP path
import CustomButton from "../../general/CustomButton";

const LoginPage = () => {
    const { handleLogin } = useLoginVisitor();
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        async (formData) => {
            try {
                await handleLogin(formData);
                navigate(ROUTES.ROOT);
            } catch (error) {
                console.error("Login failed:", error);
            }
        },
        [handleLogin]
    );

    const {
        data,
        errors,
        handleChange,
        validateForm,
        onSubmit
    } = useForm(initializeLogin, loginSchema, handleSubmit);

    const handleSignUp = () => {
        navigate(ROUTES.SIGNUP, { state: { from: location.pathname } });
    };

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <LoginForm
                    title="Login to your account"
                    submitLabel="Login"
                    onSubmit={onSubmit}
                    validateForm={validateForm}
                    errors={errors}
                    data={data}
                    onInputChange={handleChange}
                />

                {/* Sign up option */}
                <Box sx={{ marginTop: 2 }}>
                    <Typography variant="body1">
                        Don’t have an account?{" "}
                        <CustomButton onClick={handleSignUp}>Sign up</CustomButton>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage;
