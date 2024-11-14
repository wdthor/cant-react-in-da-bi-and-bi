import PhotoGrid from "../assets/photo-grid.png";

export function Hero() {
  return (
    <section className="flex justify-center flex-column items-center">
      <img className="w-70 max-w-850" src={PhotoGrid} alt="activities" />

      <div className="align-self-start">
        <h1 className="text-size-2-5 line-h-1-2 mb-15 mt-20">
          Online Experiences
        </h1>
        <p className="w-70 max-w-420 line-h-1-4">
          Join unique interactive activities led by one-of-a-kind hosts - all
          without leaving home
        </p>
      </div>
    </section>
  );
}
