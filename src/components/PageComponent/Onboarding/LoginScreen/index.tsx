import React from 'react';
import GoogleLogin from './Helper/GoogleLogin';
import TwitterLoginButton from './Helper/TwitterLoginButton';
import TwitterLoginButton2 from './Helper/TwitterLoginButton2';
import Divider from '@/components/Common/Divider';
import WalletButtons from './Helper/WalletButtons';
import Screen from '@/constants/enums/screen';
import { OR } from '@/constants/onBoarding/constant';

type Props = {
  onChangeScreen: (screen: Screen) => void;
};

const LoginScreen: React.FC<Props> = ({ onChangeScreen }) => {


  const handleOnGoogleButtonClick = () => {
    console.log("button clicked");
    onChangeScreen(Screen.CREATENAME);
  }
  const handleOnTwitterButtonClick = () => {
    console.log("button clicked");
    onChangeScreen(Screen.CREATENAME);
  }
  const handleOnMetaMaskButtonClick = () => {
    console.log("button clicked");
  }
  const handleOnWalletConnectButtonClick = () => {
    console.log("button clicked")
  }

  return (
    <div className='rounded-2xl flex flex-col justify-center items-center gap-2 self-stretch px-4 py-4 bg-background-card'>
      <GoogleLogin onClick={handleOnGoogleButtonClick} />
      <TwitterLoginButton onClick={handleOnTwitterButtonClick} />
      <TwitterLoginButton2 onClick={handleOnTwitterButtonClick} />
      <Divider dividerText={OR} />
      <WalletButtons onMetaMaskClick={handleOnMetaMaskButtonClick} onWalletConnectClick={handleOnWalletConnectButtonClick} />
    </div>
  );
};

export default LoginScreen;
