import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";
import Brands from "./components/brands/Brands";
import Arrivals from "./components/arrivals/Arrivals";
import Payday from "./components/payday/Payday";
import Favourite from "./components/favourite/Favourite";
import Download from "./components/promo-download/Download";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Payday />
      <Favourite />
      <Download />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
