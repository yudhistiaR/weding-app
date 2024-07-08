import Header from "../Header";
import SideBar from "../SiderBar";

const DefaultLayout = ({ children }) => {
  return (
    <main className="w-full">
      <Header />
      <div className="flex h-screen">
        <SideBar />
        <section className="rounded-xl shadow-xl w-full m-4 overflow-auto">
          {children}
        </section>
      </div>
    </main>
  );
};

export default DefaultLayout;
