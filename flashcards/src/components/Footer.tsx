import CapyDark from "../assets/dark-icons8-capybara-96.png";
import CapyLight from "../assets/light-icons8-capybara-96.png";

export default function Footer() {
  return (
    <footer className="mb-5 text-center dark:bg-neutral-900 dark:text-white ">
      <div className="pt-5 pb-1 flex justify-center items-end w-full">
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
          className="h-12 light-image block dark:hidden"
        />
        <img
          className="h-12 dark-image hidden dark:block"
          src={CapyDark}
          alt="A logo of a Capybara"
        />
      </div>
      <div className="text-xs italic pt-1">
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
