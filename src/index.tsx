import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { customTheme } from "./utils/customValues";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./containers/AuthProvider";
import GlobalProgressbarProvider from "./containers/GlobalProgressbarProvider";
import { AppRouter } from "./pages/AppRouter";
import { SnackbarProvider } from "./containers/SnackbarProvider";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <GlobalProgressbarProvider>
          <AuthProvider>
            <SnackbarProvider>
              <RouterProvider router={AppRouter} />
            </SnackbarProvider>
          </AuthProvider>
        </GlobalProgressbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
