import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Inspector, InspectParams } from "react-dev-inspector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { langFontMapping } from "~constants/language";
import { HttpError } from "~services/api.service";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import authInstance, {initKeycloak} from "~utils/authKeycloak";
import {AppRouter} from "~/AppRouter";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      retry: (failureCount, error) => {
        if (!(error instanceof HttpError && String(error.code).startsWith("4"))) {
          return failureCount !== 3;
        } else {
          return false;
        }
      },
    },
  },
});

const App = () => {
  const isDev = process.env.NODE_ENV === "development";
  const [isLoading, setIsLoading] = useState(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    authInstance
        .init({
          scope: "mr.sengleng@gmail.com",
          redirectUri: "http://localhost:3000/login",
          checkLoginIframe: false,
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch(console.error);
  }, []);

  return (
      <div className={langFontMapping[i18n.language]}>
        {isDev && (
            <Inspector
                keys={["control", "shift", "c"]}
                disableLaunchEditor={true}
                onClickElement={({ codeInfo }) => {
                  if (!codeInfo?.absolutePath) return;
                  const { absolutePath, lineNumber, columnNumber } = codeInfo;
                  window.open(`vscode://file/${absolutePath}:${lineNumber}:${columnNumber}`);
                }}
            />
        )}

        <ReactKeycloakProvider authClient={authInstance} initOptions={initKeycloak}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <AppRouter />
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
          </QueryClientProvider>
        </ReactKeycloakProvider>
      </div>
  );
};

export default App;
