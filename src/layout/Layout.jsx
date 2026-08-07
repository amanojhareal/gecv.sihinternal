import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-content">{children}</main>

      <Footer />
    </div>
  );
}