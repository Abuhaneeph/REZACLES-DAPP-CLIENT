const RezaclesAddress="0x03761b5CD57E5c0D3692577a4BA99ce717D4452D";
const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
export default RezaclesAddress;
export {shortenAddress};