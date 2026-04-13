import Image from "next/image";
import Header from "./Components/Header";
import Sushi from "@/public/assets/SushiPlatter2.png"
import Chef from "@/public/assets/ChefHome.png"
import Arrow from "@/public/assets/RedHomeArrow.png"
import Umi from "@/public/assets/GoldenUmi.png"
import Wagyu from "@/public/assets/WagyuAburi.png"
import Otoro from "@/public/assets/OtoroTruffle.png"
import { Button } from "flowbite-react";
import HomeCard from "./Components/HomeCard";
import HomeCard2 from "./Components/HomeCard2";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center  bg-black text-white ">
      <Header></Header>
      <main className="w-full">
        <div className="flex bg-[url(/assets/SushiPlatter.png)] w-full min-h-200 text-center flex-col justify-center bg-center bg-cover">
          <h1 className="text-8xl">Toyo Sushi:</h1>
          <div className="flex w-full justify-center">
            <h1 className="text-8xl text-yellow-300 italic">Perfection </h1>
            <h1 className="text-8xl"> You Can</h1>
          </div>
          <h1 className="text-8xl">Taste</h1>
          <h1 className="text-2xl text-red-300">An immersive Omakase experience where tradition meets <p>
            contemporary artistry in every delicate bite.</p></h1>
          <div className="flex justify-center">
            <Button className='rounded-none bg-red-600 m-5 text-1xl h-15 w-40'>VIEW MENU</Button>
            <Button className='rounded-none m-5 text-1xl h-15 w-60' color="yellow" outline >OUR PHILOSOPHY</Button>
          </div>
        </div>
        <div className=" flex ">
          <div className="flex flex-col items-center">
            <Image src={Chef} alt="" width={750} className="m-5 -mb-30 "></Image>
            <div className=" flex flex-col m-5 -mt-16 ms-120 bg-gray-900 min-h-40 min-w-80 justify-center">
              <h1 className=' ms-5 mb-3 italic text-yellow-300 text-3xl'>Est.1988</h1>
              <h3 className=" ms-5 text-red-300 text-1xl">Three decades of mastering the subtle <p>
                balance of vinegar, rice, and sea.</p></h3>
            </div>
          </div>
          <div>
            <p className="text-yellow-300 mt-30 text-1xl">CRAFTING HERITAGE</p>
            <h1 className="text-7xl m-10 ms-0">Our Story</h1>
            <h3 className="text-red-300 mb-7 text-2xl">Toyo Sushi was born from a singular vision: to treat every <p>
              ingredient with the reverence it deserves. We don't just serve food;</p> <p>
                we curate moments of silence and discovery.</p></h3>
            <h3 className="text-red-300 mb-7 text-2xl">Our fish is sourced daily from Tokyo's Toyosu Market, ensuring that <p>
              the distance between the ocean and your palate is bridged by</p> <p>
                nothing but expertise.</p></h3>
            <h3 className="text-yellow-300 text-2xl">EXPLORE OUR ROOTS</h3>
          </div>
        </div>
        <div className=" w-full bg-gray-900 p-16">
          <h3 className="mb-5 text-yellow-300">SEASONAL SELECTION</h3>
          <div className="flex justify-between items-center">
            <h1 className="text-5xl">Featured Specials</h1>
            <div className="flex">
              <p className="text-red-300 me-5">ALL OFFERINGS</p>
              <Image src={Arrow} alt="" height={20} width={20} ></Image>
            </div>
          </div>
          <div className="flex justify-between p-5 pt-15">
            <div>
            <HomeCard2 pic="/assets/GoldenUmi.png" name={"The Golden Umi"} desc={"Hokkaido sea urchin with truffle essence"} price={"$30"}></HomeCard2> 
            </div>
            <div className=" flex ms-10 flex-col items-end">
            <HomeCard pic="/assets/WagyuAburi.png" name={"Wagyu Aburi"} desc={"A5 Miyazaki beef, lightly torched."} price={"$28"}></HomeCard> 
            <HomeCard pic="/assets/OtoroTruffle.png" name={"Otoro Truffle"} desc={"Fatty tuna belly with shaved black truffle."} price={"$34"}></HomeCard> 

            </div>
          </div>
        </div>
        <div className=" flex min-h-200 justify-center items-center flex-col text-center">
          <h1 className="text-7xl m-5"> A Seat Awaits You at the 
            <p>counter</p></h1>
            <p className="text-red-300 text-2xl m-3">Reservations are highly recommended to ensure the freshest seasonal selection.</p>
            <Button className='rounded-none m-5 text-1xl h-15 w-60 text-black' color="yellow" >BOOK YOUR TABLE</Button>
        </div>
      </main>
    </div>
  );
}
