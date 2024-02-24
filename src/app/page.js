import Image from "next/image";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import CoursesScrollArea from "./components/CourseScrollArea";
import CourseInfoCards from "./components/CourseInfoCards";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
         

    <Banner/>
    <CoursesScrollArea/>
    <CourseInfoCards/>
   
    </>
  );
}
