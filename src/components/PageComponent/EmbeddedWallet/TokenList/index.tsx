import IndividualTokenTile from "./Helper/IndividualTokenTile";
import {
    CRYPTO_TITLE,
    TOKEN_IMAGE_SRC,
    TOKEN_ALT, 
    TOKEN_NAME, 
    TOKEN_VALUE, 
    TOKEN_RATE
} from "@/constants/embeddedWallet/constant";

const TokenList = () => {
    return (
        <div className="px-6 pt-5 pb-4 flex flex-col gap-4">
            <h2 className="text-left text-base not-italic font-semibold leading-[120%] text-light-primary/30">
                {CRYPTO_TITLE}
            </h2>
            <div className="flex flex-col gap-2 overflow-x-auto h-[calc(80vh_-_450px)]">
                {Array.from({ length: 20 }, (_, index) => (
                    <IndividualTokenTile
                        key={index}
                        tokenImageSrc={TOKEN_IMAGE_SRC}
                        tokenAlt={TOKEN_ALT}
                        tokenName={TOKEN_NAME}
                        tokenValue={TOKEN_VALUE}
                        tokenRate={TOKEN_RATE}
                    />
                ))}
            </div>
        </div>
    );
};

export default TokenList;