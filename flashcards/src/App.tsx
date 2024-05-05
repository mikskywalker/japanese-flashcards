import Hiragana from "./components/Hiragana";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <div className="bg-white rounded md:border md:rounded-md md:shadow dark:bg-neutral-800 dark:text-white">
        <Hiragana />
      </div>
      <Footer />
    </div>
  );
}

export default App;
