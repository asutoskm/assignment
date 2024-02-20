import Image from "next/image";
import TokenIcon from "./TokenIcon";
import Chip from "@/components/Common/Chip";

interface IndividualTokenTileProps {
  tokenImageSrc: string;
  tokenAlt: string;
  tokenName: string;
  tokenValue: string;
  tokenRate: string;
}

const IndividualTokenTile: React.FC<IndividualTokenTileProps> = ({
  tokenImageSrc,
  tokenAlt,
  tokenName,
  tokenValue,
  tokenRate,
}) => {
  return (
    <div className='flex gap-4 justify-between p-3 group rounded-xl bg-transparent hover:bg-dark-surface-800 cursor-pointer transition-colors ease-extreme-bouncy'>
      <div className='flex gap-3 flex-1'>
        <div className="rounded-full overflow-hidden">
          <Image src={tokenImageSrc} alt={tokenAlt} className="rounded-full" objectFit="cover" title={tokenAlt} height={44} width={44} />
        </div>
        <div className='flex flex-col gap-1'>
          <p className='text-lg not-italic font-semibold leading-[120%] text-light-primary'>{tokenName}</p>
          <div className='flex '>
            {/* Token icons would be dynamic based on the tokenName or other props */}
            <TokenIcon src={'images/poligon-icon.svg'} alt='poligon-icon' title='poligon-icon' name="eth" />
            <TokenIcon src={'images/poligon-icon.svg'} alt='poligon-icon' title='poligon-icon' name="btc" />
          </div>
        </div>
      </div>


      <div className="flex flex-1 justify-end gap-1">
        <div>
        <Chip text="+2.5%" className="opacity-0 group-hover:opacity-100 text-xs not-italic font-semibold leading-[120%]" />
        </div>
        <div className='flex flex-col gap-1 '>
          <p className='text-center text-base not-italic font-semibold leading-[120%] text-light-secondary'>{tokenValue}</p>
          <p className='text-center text-sm not-italic font-medium leading-[120%] text-light-primary/30'>{tokenRate}</p>
        </div>
      </div>
    </div>
  );
};

export default IndividualTokenTile;