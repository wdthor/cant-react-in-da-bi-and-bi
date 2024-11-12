import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
import data from "./data";

const cards = data.map((item) => {
  return (
    <Card
      key={item.id}
      img={item.coverImg(item.id + item.price)}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  );
});

function App() {
  return (
    <>
      <Navbar />
      <main className="px-30 py-24">
        {/* <Hero /> */}
        <section className="flex gap-22 overflow-x-auto py-24">{cards}</section>
      </main>
    </>
  );
}

export default App;
