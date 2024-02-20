import Footer from "@/components/Common/Footer";
import type { Metadata } from "next";
import Image from "next/image";
import Srink from "@/components/Common/Srink";

// Constants for text
const LOGIN_TITLE = "Login to tria Demo";
const APP_TITLE = "EmbeddedWallet | tria";
const APP_DESCRIPTION = "EmbeddedWallet to access the tria Demo application.";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full h-full p-4 flex justify-center items-center">
      <div className="flex flex-col sm:h-[80vh] h-full min-w-96 sm:w-[415px] w-full">
        {children}
      </div>
    </section>
  );
}