import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Card } from "./components/Card";
function App() {
  return (
    <>
      <Navbar />
      <main className="px-30 py-24">
        {/* <Hero /> */}
        <Card
          img="https://picsum.photos/200/300"
          rating="5.0"
          reviewCount={6}
          country="Ze country"
          title="Life Lessons with random image"
          price={136}
        />
      </main>
    </>
  );
}

export default App;
