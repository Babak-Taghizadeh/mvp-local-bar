import Header from "./header";
import Hero from "./hero";
import MenuSection from "./menu-section";
import Footer from "./footer";

const MainContent = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Header />
      <Hero />
      <MenuSection />
      <Footer />
    </div>
  );
};

export default MainContent;
