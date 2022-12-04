const RezaclesAddress="0x0219fc09593D132514a53d9220bd9925395F5dd6";
const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
export default RezaclesAddress;
export {shortenAddress};