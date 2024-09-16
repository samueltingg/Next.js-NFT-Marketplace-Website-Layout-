
function NFTCard() {
  return (
    <div className="bg-white shadow-md rounded px-4 py-6">
      <img src="https://via.placeholder.com/300" alt="NFT Image" className="w-full h-48 object-cover" />
      <h3 className="text-lg font-bold">NFT Title</h3>
      <p className="text-sm">NFT Description</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Now</button>
    </div>
  );
}

export default NFTCard;
