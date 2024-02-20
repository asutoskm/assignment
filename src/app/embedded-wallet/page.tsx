"use client";

import Footer from "@/components/Common/Footer2";
import Srink, { SrinkState } from "@/components/Common/Srink";
import AssetsUpCard from "@/components/PageComponent/EmbeddedWallet/AssetsUpCard";
import BottomNavbar from "@/components/PageComponent/EmbeddedWallet/BottomNavbar";
import TokenList from "@/components/PageComponent/EmbeddedWallet/TokenList";
import TopNavigation from "@/components/PageComponent/EmbeddedWallet/TopNavbar";
import { useState } from 'react';

function Home() {
  const [srinkState, setSrinkState] = useState<SrinkState>('closed');
  const handleOnSrinkClick = () => {
    setSrinkState(prevState => prevState === 'open' ? 'closed' : 'open');
  }
  return (
    <div className="flex-1 flex flex-col w-full">
      <Srink onClick={handleOnSrinkClick} className="-m-1 z-0" />
      <div className="flex-1 rounded-20 border flex flex-col border-light-primary/[0.08] bg-background-card z-10 pt-7">
        {/* body */}
        <div className="flex-1 flex flex-col">
          <TopNavigation />
          <AssetsUpCard />
          <TokenList/>
        </div>
        {/* footer */}
        <div className="py-2 gap-2 flex flex-col items-center">
          <BottomNavbar />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;