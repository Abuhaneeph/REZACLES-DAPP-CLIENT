const RezaclesAddress="0x8719cF870d86715b036bF6a4d478487262AEF1C3";
const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
export default RezaclesAddress;
export {shortenAddress};