import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import "tailwindcss/tailwind.css";
import { DependencyContainerContext } from "./DependencyContainer/DependencyContainerContext";
import { createDependenciesApp } from "./DependencyContainer/createDependenciesApp";

import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./navigation/routes";

const queryClient = new QueryClient();
const dependencies = createDependenciesApp();

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <DependencyContainerContext.Provider value={dependencies}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  </DependencyContainerContext.Provider>
);
