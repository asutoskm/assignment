import Image from "next/image";

interface TokenIconProps {
  src: string;
  alt: string;
  title: string;
  name: string;
}

const TokenIcon: React.FC<TokenIconProps> = ({ src, alt, title, name }) => {
  return (
    <div className='p-1.5 flex gap-0.5 rounded-full -mr-0.5 border border-alpha-light8/[0.08]  items-center bg-background-card'>
      <Image src={src} alt={alt} title={title} height={14} width={14} className="rounded-full" />
      <span className="hidden text-white !text-center !text-xs not-italic font-medium leading-[100%] opacity-0 origin-[left_center] -translate-x-full scale-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100  group-hover:block  transition-opacity duration-300 ease-extreme-bouncy">
        {name}
      </span>
    </div>
  );
};

export default TokenIcon;