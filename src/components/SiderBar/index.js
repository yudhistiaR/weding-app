import ItemsList from "./ItemList";

const SideBar = () => {
  return (
    <>
      <nav className="bg-gray-200 w-72 h-full shadow-lg py-6">
        <ItemsList />
      </nav>
    </>
  );
};

export default SideBar;
