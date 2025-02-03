import { FiGithub, FiMail, FiPhone } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      className="section flex flex-col md:flex-row justify-center md:justify-between items-center  gap-12"
      id="hero"
    >
      <div className="size-80 overflow-hidden profil ring-8 ring-neutral-500 dark:ring-neutral-600 order-1 md:order-2"></div>
      <div className="text-neutral-800 dark:text-neutral-50 text-center order-2 md:order-1 md:text-left space-y-2 md:space-y-4">
        <h3 className="text-lg md:text-2xl">Henintsoa Heriniaina</h3>
        <h1 className="font-black text-3xl sm:text-4xl md:text-5xl">
          Aleo aloha tsy zao
        </h1>
        <div className="flex items-center justify-center gap-2 md:justify-start ">
          <a
            href="https://github.com/henintsoaheriniaina"
            target="_blank"
            className="icon contact-icon"
          >
            <FiGithub />
          </a>
          <a href="#" target="_blank" className="icon contact-icon">
            <FiMail />
          </a>
          <a href="#" target="_blank" className="icon contact-icon">
            <FiPhone />
          </a>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
