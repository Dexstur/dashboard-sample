import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true, key: "css" }}>
      <p>Works</p>
      {children}
    </AppRouterCacheProvider>
  );
}
