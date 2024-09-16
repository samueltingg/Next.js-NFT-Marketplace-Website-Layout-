import Head from 'next/head';

function CreatePage() {
  return (
    <div>
      <Head>
        <title>Create NFT | NFT Marketplace</title>
      </Head>
      <h1 className="text-3xl font-bold text-center">Create NFT</h1>
      <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
        <label className="block text-lg font-bold">NFT Title</label>
        <input type="text" className="block w-full p-2 border border-gray-400" />
        <label className="block text-lg font-bold">NFT Description</label>
        <textarea className="block w-full p-2 border border-gray-400" />
        <label className="block text-lg font-bold">NFT Image</label>
        <input type="file" className="block w-full p-2 border border-gray-400" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create NFT</button>
      </form>
    </div>
  );
}

export default CreatePage;
