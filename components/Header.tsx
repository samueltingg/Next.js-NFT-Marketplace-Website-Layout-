

function Header() {
  return (
    <header className="bg-gray-200 py-4">
      <nav className="container mx-auto flex justify-between">
        <ul className="flex">
          <li><a href="/" className="text-blue-600 hover:text-blue-800">Home</a></li>
          <li><a href="/explore" className="text-blue-600 hover:text-blue-800">Explore</a></li>
          <li><a href="/create" className="text-blue-600 hover:text-blue-800">Create</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
