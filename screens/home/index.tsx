"use client";
import { AppButton } from "@/components";
import { ContactWidget } from "./contact";

export function HomeScreen() {
  return (
    <main>
      <div className="flex flex-col gap-4 lg:flex-row-reverse w-full justify-between py-6 lg:py-[120px] items-center font-sans bg-gradient-to-br from-primary-dark to-primary-alt">
        <div className="hidden lg:block w-[12%]"></div>
        <div className="relative h-[360px] p-4">
          <div className="w-[240px] h-[240px] bg-transparent border-4 border-primary-light lg:border-primary rounded-full"></div>
        </div>
        <article className="flex flex-col gap-4">
          <section className="flex flex-col gap-4 text-white text-center lg:text-left">
            <h2 className="text-lg">WELCOME TO OUR WEBSITE</h2>
            <p className="text-sm">THIS IS A SAMPLE LANDING PAGE</p>
            <span className="flex justify-center lg:justify-start">
              <AppButton size="lg" color="primary">
                Get Started
              </AppButton>
            </span>
          </section>
        </article>
        <div className="hidden lg:block w-[12%]"></div>
      </div>
      <ContactWidget />
    </main>
  );
}
