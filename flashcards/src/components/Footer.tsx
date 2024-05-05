import CapyDark from "../assets/dark-icons8-capybara-96.png";
import CapyLight from "../assets/light-icons8-capybara-96.png";

export default function Footer() {
  return (
    <footer className="text-center dark:bg-neutral-900 dark:text-white ">
      <div className="flex items-end justify-center w-full pt-5 pb-1">
        <p className="font-medium">
          Coded with love by{" "}
          <a
            className="font-semibold text-amber-500 hover:text-yellow-500 dark:text-yellow-200"
            href="https://www.facebook.com/mikscasalofficial/"
            target="_blank"
          >
            Miks Casal
          </a>
        </p>
        <img
          src={CapyLight}
          alt="A logo of a Capybara"
          className="block h-12 light-image dark:hidden"
        />
        <img
          className="hidden h-12 dark-image dark:block"
          src={CapyDark}
          alt="A logo of a Capybara"
        />
      </div>
      <div className="pt-1 text-xs italic">
        <a target="_blank" href="https://icons8.com/icon/uoOWMrUsQgHs/capybara">
          Capybara
        </a>{" "}
        icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </footer>
  );
}
