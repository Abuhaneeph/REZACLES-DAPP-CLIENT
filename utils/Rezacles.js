const RezaclesAddress="0xa86FaB01D75fb0bD18181B564d4F8c0be6753297";
const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
export default RezaclesAddress;
export {shortenAddress};