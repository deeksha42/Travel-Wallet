import ExploreImg from "../assets/sunrise.jpg";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import PhotoGallery from "../Components/PhotoGallery/PhotoGallery";

function Home() {
  return (
    <>
      <Header />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1489595672898-26572ba975a3?auto=format&fit=crop&q=80&w=2012&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your next adventure awaits"
        buttonText="Start Planning"
        url="/create"
        btnClass="show"
      />
      <PhotoGallery />
      <Hero
        cName="hero-mid"
        heroImg={ExploreImg}
        title="Your next adventure awaits"
        buttonText="Explore More Destinations"
        url="/destination"
        btnClass="show"
      />
      <Footer />
    </>
  );
}

export default Home;
