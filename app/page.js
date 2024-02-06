import Image from "next/image";
import Navbar from "@/components/UI/Navbar/Navbar";
import GridView from "@/components/UI/GridView/GridView";
import Carousel from "@/components/UI/Carousel/carousel";
import Footer from "@/components/UI/Footer/footer";

export default function Home() {
  return (
   <>
   <div className="w-[100%] h-full bg-[#051e2e]">

    <Navbar/>
    <Carousel/>
    <GridView/>
    <Footer/>
   </div>
   </>
  );
}
