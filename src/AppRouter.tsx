import { lazy, ReactNode, Suspense, useEffect } from "react";
import { AppLayout } from "~layouts/AppLayout";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import {
  ROOT_ROUTE,
  SOMETHING_WENT_WRONG,
} from "~constants/routes";
import { lazyRetry } from "~utils/lazyRetry";
import { setupResponseInterceptor } from "~services/api.service";

const LandingPage = lazy(() => lazyRetry(() => import("~pages/LandingPage")));
const UnderConstructionPage = lazy(() =>
  lazyRetry(() => import("~pages/UnderConstructionPage"))
);
const SomethingWentWrongPage = lazy(() =>
  lazyRetry(() => import("~pages/SomethingWentWrongPage"))
);

const WithSuspense = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<div className=""></div>}>
    {children}
  </Suspense>
);

export const AppRouter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setupResponseInterceptor(navigate);
  }, [navigate]);

  return (
    <WithSuspense>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path={SOMETHING_WENT_WRONG}
            element={<SomethingWentWrongPage />}
          />
          <Route path={ROOT_ROUTE} element={<LandingPage />} />
          <Route path="*" element={<UnderConstructionPage />} />
        </Route>
      </Routes>
    </WithSuspense>
  );
};
