import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { useNavigate } from "react-router-dom";
const Header = () => {
  let navigate = useNavigate();

  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const handleWallet = () => {
    activateBrowserWallet();

  }
  const goCreate = () => {
    navigate("/creators");
  };
  const importNft = () => {
    navigate("/import");
  };
  return (
    <div id="header">
      <Link to='/' id='logo'>NFT Room</Link>

      <div id="link-containers">
        <a onClick={importNft} >Import NFT Contract</a>
        <a onClick={goCreate} >Creators</a>
        <a>Start Hunting</a>
        <a>Dark NFTs</a>
        <a>Community</a>
        <a>Craft NFT</a>

        <button id="connect-wallet" onClick={handleWallet} >{!account ? 'Connect Wallet' : account}</button>
      </div>
    </div>
  );
}

export default Header;