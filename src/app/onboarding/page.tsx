"use client";
import React, { Suspense, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import LoginScreen from '@/components/PageComponent/Onboarding/LoginScreen';
import Screen from '@/constants/enums/screen';
import CreateNameScreen from '@/components/PageComponent/Onboarding/CreateNameScreen';

function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.LOGIN);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname()

  const changeScreen = (newScreen: Screen) => {
    setCurrentScreen(newScreen);
    // Add a search parameter 'step' with the value of the new screen to the URL
    const params = new URLSearchParams(searchParams.toString());
    params.set('step', newScreen);
    router.push(`${pathname}?${params.toString()}`);
  };

  const screenComponents = {
    [Screen.LOGIN]: LoginScreen,
    [Screen.CREATENAME]: CreateNameScreen,
    [Screen.DASHBOARD]: () => <p>hello</p>,
  };

  const CurrentScreenComponent = screenComponents[currentScreen] || LoginScreen;

  return (
    <Suspense fallback={<></>}>
      <CurrentScreenComponent onChangeScreen={changeScreen} />
    </Suspense>)
}

export default Home;