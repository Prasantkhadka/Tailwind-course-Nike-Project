import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffers, Subscribe, SuperQuality } from "./Sections";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffers />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  )
}

export default App
