import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/authprovider";
import AppRoutes from "./routes/appRouter";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}
