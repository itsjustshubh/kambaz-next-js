"use client";

import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <Provider store={store}>
      <div id="wd-kambaz" className="flex min-h-screen">
        <aside
          className="shrink-0 w-[84px] hidden md:block"
          aria-label="Main navigation"
        >
          <KambazNavigation />
        </aside>
        <main className="wd-main-content-offset flex-1 min-w-0 p-4 bg-white">
          {children}
        </main>
      </div>
    </Provider>
  );
}
