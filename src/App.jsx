import Courses from "./components/courses/Courses";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import TestimonialSlider from "./components/testimonials/Testimonials";
import "./styles/_main.scss";
import Statistics from "./components/statistics/Statistics";
import Faq from "./components/faq/Faq";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const items = [
    {
      title: "Accordion Item 1",
      content: "Content for Accordion Item 1",
    },
    {
      title: "Accordion Item 2",
      content: "Content for Accordion Item 2",
    },
    {
      title: "Accordion Item 2",
      content: "Content for Accordion Item 2",
    },
    {
      title: "Accordion Item 2",
      content: "Content for Accordion Item 2",
    },
  ];
  const numbers = [100, 30, 20];
  const testimonials = [
    {
      image: "../src/assets/img/frame2.jpg",
      text: "The courses were of exceptional quality and cutting-edge. You won't find these courses just anywhere.",
      author: "John Doe",
    },
    {
      image: "../src/assets/img/frame2.jpg",
      text: "The courses were of exceptional quality and cutting-edge. You won't find these courses just anywhere.",
      author: "Jane Smith",
    },
    {
      image: "../src/assets/img/frame2.jpg",
      text: "The courses were of exceptional quality and cutting-edge. You won't find these courses just anywhere.",
      author: "Jane Smith",
    },
    // Add more testimonials as needed
  ];
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Courses />
        <Features />
        <TestimonialSlider testimonials={testimonials} />
        <Statistics finalNumber={numbers[1]} />
        <Faq items={items} />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
