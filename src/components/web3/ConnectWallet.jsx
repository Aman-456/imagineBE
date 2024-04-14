import React from "react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";

const WalletConnect = () => {
  const { open } = useWeb3Modal();
  const { address } = useAccount();

  return (
    <>
        <div >
      <button className="flex items-center rounded-2xl bg-white text-black px-2 py-2 gap-1 text-[18px]" onClick={open}>
        <FontAwesomeIcon icon={faWallet} style={{ marginRight: "5px" }} />{" "}
        &nbsp;
        {address ? "Wallet Connected" : "Connect"}
      </button>
      <div>
        {/* <br /> */}
        {/* {address ? (
            <>
            <button class="button-22" role="button">
              Return to Dashboard
            </button>
          </>
        ) : null} */}
      </div>
    </div>
        </>
  );
};

export default WalletConnect;