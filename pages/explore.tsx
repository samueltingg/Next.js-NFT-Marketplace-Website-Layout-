import Head from 'next/head';
import NFTCard from '../components/NFTCard';

function ExplorePage() {
  return (
    <div>
      <Head>
        <title>Explore NFTs | NFT Marketplace</title>
      </Head>
      <h1 className="text-3xl font-bold text-center">Explore NFTs</h1>
      <div className="flex flex-wrap justify-center">
        <NFTCard />
        <NFTCard />
        <NFTCard />
        {/* Add more NFT cards here */}
      </div>
    </div>
  );
}

export default ExplorePage;
