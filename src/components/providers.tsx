"use client";
import { qc } from "@/services/api";
import { createTheme, MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const theme = createTheme({
    fontFamily: "Open Sans, sans-serif",
    primaryColor: "cyan",
});

export default function Providers(props: PropsWithChildren) {
    return (
        <QueryClientProvider client={qc}>
            <MantineProvider theme={theme}>{props.children}</MantineProvider>
        </QueryClientProvider>
    );
}
