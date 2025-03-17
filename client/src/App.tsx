import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import { VideoSection } from "./components/VideoSection";
import { CompatibilitySection } from "./components/CompatibilitySection"; // Added import


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
      {/* Added CompatibilitySection */}
      <CompatibilitySection />
    </QueryClientProvider>
  );
}

export default App;

// Placeholder component
export const CompatibilitySection = () => {
  return (
    <section>
      <h2>Bike Compatibility</h2>
      <p>This section will list compatible bike brands.</p>
      <ul>
        <li>Brand A</li>
        <li>Brand B</li>
        {/* Add more brands here */}
      </ul>
    </section>
  );
};