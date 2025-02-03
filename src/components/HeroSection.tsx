import { FiGithub, FiMail, FiPhone } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section
      className="section flex flex-col md:flex-row justify-center md:justify-between items-center gap-12 md:gap-4 "
      id="hero"
    >
      <div className="order-1 w-full md:w-1/2 flex items-center justify-center md:order-2">
        <div className="size-80 lg:size-[400px] profil rounded-full ring-8 ring-neutral-400 dark:ring-neutral-600 overflow-hidden"></div>
      </div>
      <div className=" w-full order-2  md:w-1/2 flex flex-col items-center md:items-start justify-center md:order-1  gap-4 xl:items-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl  md:text-left font-medium">
          Henintsoa Heriniaina
        </h3>
        <h1 className="font-black text-3xl sm:text-5xl text-center  md:text-left xl:text-center leading-tight">
          Dévellopeur web & Mobile
        </h1>
        <div className="flex items-center justify-center md:text-left  md:justify-start  gap-4">
          <a
            href="https://github.com/henintsoaheriniaina"
            target="_blank"
            className="contact-icon"
          >
            <FiGithub />
          </a>
          <a href="#" target="_blank" className="contact-icon">
            <FiMail />
          </a>
          <a href="#" target="_blank" className="contact-icon">
            <FiPhone />
          </a>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center md:items-start md:justify-start gap-4">
          <a
            href="#portfolio"
            className="action-button border-neutral-800 bg-neutral-800 text-neutral-50 dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-800 "
          >
            Télecharger mon CV
          </a>
          <a href="#contact" className="action-button ">
            Me contacter
          </a>
        </div>
      </div>
      {/* <div className="w-full order-2 md:order-1 md:w-1/2 text-neutral-800 dark:text-neutral-50 text-center  space-y-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl  md:text-left font-medium">
          Henintsoa Heriniaina
        </h3>
        <h1 className="font-black text-3xl sm:text-5xl  md:text-left leading-tight">
          Aleo aloha tsy zao
        </h1>

        <div className="flex items-center justify-center md:text-left  md:justify-start  gap-4">
          <a
            href="https://github.com/henintsoaheriniaina"
            target="_blank"
            className="contact-icon"
          >
            <FiGithub />
          </a>
          <a href="#" target="_blank" className="contact-icon">
            <FiMail />
          </a>
          <a href="#" target="_blank" className="contact-icon">
            <FiPhone />
          </a>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center md:items-start md:justify-start gap-4">
          <a
            href="#portfolio"
            className="action-button border-neutral-800 bg-neutral-800 text-neutral-50 dark:border-neutral-50 dark:bg-neutral-50 dark:text-neutral-800 "
          >
            Télecharger mon CV
          </a>
          <a href="#contact" className="action-button ">
            Me contacter
          </a>
        </div>
      </div> */}
    </section>
  );
};
export default HeroSection;
