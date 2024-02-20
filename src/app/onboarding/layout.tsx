import Footer from "@/components/Common/Footer";
import type { Metadata } from "next";
import Image from "next/image";
import LottieAniamtion from "@/components/Common/CommonLottieAnimation";

// Constants for text
const LOGIN_TITLE = "Login to tria Demo";
const APP_TITLE = "Login | tria";
const APP_DESCRIPTION = "Login to access the tria Demo application.";

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
      <div className="flex relative overflow-hidden sm:h-[80vh] h-full min-w-96 sm:w-[415px] w-full items-start justify-start gap-2 rounded-20 shadow-default bg-background-default border-2 border-solid border-border-default/5">
        <LottieAniamtion/>
        <div className='absolute flex flex-col bg-background-transparent p-4 justify-between top-0 bottom-0 right-0 left-0'>
          <div className='px-5 py-6 flex gap-4 flex-col items-center justify-center self-stretch'>
            <Image src={'icons/logo.svg'} alt="Logo" width={93} height={93} />
            <h2 className='text-center text-[22px] not-italic font-normal leading-[125%] text-text-light-secondary py-3'>
              {LOGIN_TITLE}
            </h2>
          </div>
          <div className='flex flex-col'>
            {children}
            <div className='py-3'>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}