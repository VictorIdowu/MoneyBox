import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section
      className="max-w-full h-auto md:h-screen bg-hero-pattern relative "
      data-testid="movie-backdrop"
    >
      <div className=" left-0 top-0 bottom-0 right-0 absolute bg-black bg-opacity-50" />
      <HeroText />
    </section>
  );
};

export default Hero;
