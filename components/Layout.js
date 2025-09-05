import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container flex-1 py-10">{children}</main>
      <Footer />
    </div>
  );
}