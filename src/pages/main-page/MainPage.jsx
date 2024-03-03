import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Courses from "../../components/courses/Courses";
import Features from "../../components/features/Features";
import Statistics from "../../components/statistics/Statistics";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
const MainPage = () => {
  const items = [
    {
      title: "What is the duration of the courses?",
      content:
        "Depending on the type of the course. Check out the course description for more information.",
    },
    {
      title: "For which countries you are helping to apply ? ",
      content: "US, Canada, England, Singapore, Turkey",
    },
    {
      title: "Will you be helping us with Extracurricular activities ?",
      content:
        "Our team frequently sends announcements or extracurricular opportunities to our pariticipants and alumni. However, it is not part of the course.",
    },
    {
      title: "What are the payment methods ?",
      content:
        "There are 2 options available. 1- sending money to Humo card (in sums). 2- Sendin money to visa card (in usd)",
    },
    {
      title:
        "Do you guarantee acceptance or scholarship to certain universities ?",
      content:
        "No, admission to universities is not guaranteed. However, if all the given advice and materials used correctly may increase your chances of getting in.",
    },
  ];
  const numbers = [100, 30, 20];
  const testimonials = [
    {
      image: "/img/user.png",
      text: "I got checked my essays and learned the most important parts of the application which is ignored in most consulting companies.",
      author: "Sohibjon Hayitboyev",
    },
    {
      image: "/img/user.png",
      text: "Full-time information support, well-covered lessons, thorough feedback",
      author: "Tangirova Diyora ",
    },
    {
      image: "/img/user.png",
      text: "Materials you shared with your students are so valuable and very helpful during my application process.",
      author: "Farangiz Fayzullayeva",
    },
    {
      image: "/img/user.png",
      text: "During the course, I received  high valuable sources for college admission prosses. I am pretty sure that it is extremely hard and even impossible to find these books, files, and examples from anywhere else. Working individually with Abdulloh bro is so beneficial.",
      author: "Bekzod Xurramov",
    },
    // Add more testimonials as needed
  ];
  return (
    <>
      <Header />
      <Hero />
      <Features />
      {/* <TestimonialSlider testimonials={testimonials} /> */}
      {/* <InfiniteCarousel /> */}
      {/* <Faq items={items} /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default MainPage;
