"use client"
import React from 'react';
import PrimaryButton from '@/components/Common/Button/PrimaryButton';
import { useRouter } from 'next/navigation';

const ONBOARDING_TEXT = 'Onboarding';
const EMBEDDED_WALLET_TEXT = 'Embedded Wallet';

function Home() {
  const router = useRouter();

  return (
    <main className='w-screen h-screen flex justify-center items-center'>
      <div className='flex gap-8 justify-center'>
        <PrimaryButton onClick={() => router.push('/onboarding')} className='flex items-center gap-2 !px-8 !py-8'>  
          <p className='text-center text-2xl not-italic font-medium leading-[120%]'>{ONBOARDING_TEXT}</p>
        </PrimaryButton>
        <PrimaryButton onClick={() => router.push('/embedded-wallet')} className='flex items-center gap-2 !px-8 !py-8'>
          <p className='text-center text-2xl not-italic font-medium leading-[120%]'>{EMBEDDED_WALLET_TEXT}</p>
        </PrimaryButton>
      </div>
    </main>
  );
}

export default Home;