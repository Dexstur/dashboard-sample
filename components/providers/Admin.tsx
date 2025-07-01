"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import { useState } from "react";
import { AdminHeader } from "../ui/headers";
import { AdminSidebar } from "../ui/sidebars";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [sidebar, openSidebar] = useState(false);
  const [profile, openProfile] = useState(false);

  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <div
        className={`w-[200px] bg-primary-dark h-full border-l fixed z-40 left-0 transform transition-transform duration-500 ${
          sidebar ? "translate-x-0" : "translate-x-[-100%] lg:translate-x-0"
        }`}
      >
        <AdminSidebar toggle={() => openSidebar(false)} />
      </div>
      <AdminHeader
        toggle={() => openSidebar(true)}
        toggleProfile={() => {
          openProfile((prev) => !prev);
        }}
        profile={profile}
      />

      <div
        className="pt-16 lg:pt-[100px] lg:pl-[200px] h-screen bg-background"
        onClick={() => {
          sidebar && openSidebar(false);
          profile && openProfile(false);
        }}
      >
        {children}
      </div>
    </PrimeReactProvider>
  );
}
