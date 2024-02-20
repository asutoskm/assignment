import Image from "next/image";
import React from "react";
import {
  AVATAR_IMAGE_PATH,
  ARROW_DOWN_ICON_PATH,
  POLIGON_ICON_PATH,
  USERNAME_TITLE,
  COPY_TITLE,
  SELECTED_CHAIN_TITLE,
  USER_EMAIL
} from "@/constants/embeddedWallet/constant";

const TopNavigation: React.FC = () => {
  return (
    <div className="flex justify-between items-center px-6 pb-2">
      <div className="flex gap-2 p-1.5 items-center hover:common-hover rounded-xl" title={USERNAME_TITLE}>
        <Image src={AVATAR_IMAGE_PATH} alt="avatar" height={28} width={28} className="h-7 w-7 rounded-full" />
        <div className="flex gap-[7px] items-center">
          <p className="text-center text-base not-italic font-semibold leading-[120%] text-alpha-light8/80">
            {USER_EMAIL}
          </p>
          <Image src={ARROW_DOWN_ICON_PATH} alt="arrow down" height={16} width={16} className="h-4 w-4" />
        </div>
      </div>

      <div className="flex gap-1 items-center justify-center">
        <div className="p-[7px] hover:common-hover rounded-xl" title={COPY_TITLE}>
          <Image src={ARROW_DOWN_ICON_PATH} alt="copy" height={18} width={18} />
        </div>
        <div className="hover:common-hover rounded-xl" title={SELECTED_CHAIN_TITLE}>
          <Image src={POLIGON_ICON_PATH} alt="chain" height={28} width={28} />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;