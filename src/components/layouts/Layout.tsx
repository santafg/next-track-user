import Navbar from "../nav/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        © 2024 My Website
      </footer>
    </div>
  );
};

export default Layout;
