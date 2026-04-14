import Header from "@/app/Components/Header";
import LowerCard from "@/app/Components/LowerCard";
import MenuItem from "@/app/Components/MenuItem";
import WebFooter from "@/app/Components/WebFooter";
import { Manrope, Noto_Serif } from "next/font/google";

const manrope = Manrope({ subsets: [ "latin" ], style: [ "normal" ] });
const notoSerif = Noto_Serif({ subsets: [ "latin" ], style: [ "normal", "italic" ] });

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-black text-white">
        <Header />

        <div className="w-full min-h-100 p-16">
          <p className={`${manrope.className} text-sm text-ylw mt-16 tracking-[4.2px]`}>
            ARTISANAL SELECTION
          </p>
          <h1 className={`${notoSerif.className} text-8xl my-4`}>
            Our Menu
          </h1>
          <p className={`${manrope.className} text-sm text-pnk w-1/2`}>
            A curated journey through traditional Japanese techniques and seasonal inspirations. Every dish is a silent dialogue between chef and nature.
          </p>
        </div>

        <div className="w-full px-16 py-4 mb-16">
          <div className={`flex gap-8 ${manrope.className} text-xs text-pnk tracking-[1.2px]`}>
            <p className="text-ylw">APPETIZERS</p>
            <p>SUSHI MAKI</p>
            <p>SPECIAL SUSHI</p>
            <p>SASHIMI</p>
            <p>DONBURI</p>
            <p>UDON</p>
            <p>DINNER SPECIALS</p>
          </div>
        </div>

        <div className="flex gap-16 mb-16">
          <div className="w-180 h-100 bg-gray-600 rounded-xl"></div>
          <div className="flex flex-col gap-8">
            <p className={`${notoSerif.className} text-4xl`}>Dinner Specials</p>
            <MenuItem name={"Toyo Deluxe Platter"} cost={"48.00"} desc={"12 pieces of premium nigiri and 1 signature maki roll."} />
            <MenuItem name={"Wagyu Surf & Turf"} cost={"65.00"} desc={"A5 Wagyu beef slices with seared Hokkaido scallops."} />
          </div>
        </div>

        <div className="w-full mb-32 p-16">
          <div className="mb-16">
            <p className={`${notoSerif.className} text-5xl`}>Sushi & Sashimi</p>
            <p className={`${manrope.className} text-lg text-pnk`}>The soul of Toyo. Sourced globally, prepared with local precision.</p>
          </div>
          <div className="flex gap-12 justify-center">
            <div className="size-90 flex flex-col gap-8 p-8">
              <p className={`${manrope.className} text-xs text-pnk tracking-[4.8px]`}>MAKI ROLLS</p>
              <MenuItem name={"Spicy Tuna Roll"} cost={"14.00"} desc={"Fresh tuna, sriracha, cucumber"} />
              <MenuItem name={"Dragon Roll"} cost={"18.00"} desc={"Unagi, cucumber, topped with avocado"} />
              <MenuItem name={"Rainbow Roll"} cost={"22.00"} desc={""} />
            </div>
            <div className="size-90 flex flex-col gap-8 p-8 rounded-xl bg-[#1c1b1b]">
              <p className={`${manrope.className} text-xs text-pnk tracking-[4.8px]`}>SASHIMI SELECTION</p>
              <MenuItem name={"Maguro (Tuna)"} cost={"21.00"} desc={"5 pieces, thick cut"} />
              <MenuItem name={"Hamachi (Yellowtail)"} cost={"19.00"} desc={"5 pieces, citrus zest"} />
              <MenuItem name={"Sake (Salmon)"} cost={"18.00"} desc={"5 pieces, Farce Island"} />
            </div>
            <div className="size-90 rounded-xl bg-gray-600"></div>
          </div>
        </div>

        <div className="flex gap-8 mb-32">
          <div className="flex flex-col gap-8 bg-[#201f1f] p-12">
            <p className={`${notoSerif.className} text-3xl`}>Donburi Bowls</p>
            <div className="flex flex-col gap-8">
              <MenuItem name={"Chirashi Don"} cost={"28.00"} desc={"Assorted sashimi over seasoned rice"} />
              <MenuItem name={"Unagi Don"} cost={"32.00"} desc={"Grilled fresh water eel, sweet glaze"} />
            </div>
            <div className="w-120 h-40 bg-gray-600 rounded"></div>
          </div>
          <div className="flex flex-col gap-8 bg-[#2a2a2a] p-12">
            <p className={`${notoSerif.className} text-3xl`}>Udon & Soba</p>
            <div className="flex flex-col gap-8">
              <MenuItem name={"Tempura Udon"} cost={"19.00"} desc={"Thick wheat noodles, dashi broth, shrimp tempura"} />
              <MenuItem name={"Spicy Miso Ramen"} cost={"18.00"} desc={"Tonkotsu broth, spicy miso, chashu pork"} />
            </div>
            <div className="w-120 h-40 bg-[#2a2a2a]"></div>
          </div>
        </div>

        <div className="w-full px-8">
          <h2 className={`${notoSerif.className} text-5xl text-center mb-16`}>Small Beginnings</h2>
          <div className="w-full flex gap-16 justify-center mb-16">
            <LowerCard name={"Crispy Gyoza"} cost={"9.00"} desc={"Pork and ginger dumplings, pan-seared."} />
            <LowerCard name={"Edamame"} cost={"7.00"} desc={"Steamed soy beans with Maldon sea salt."} />
            <LowerCard name={"Seaweed Salad"} cost={"8.00"} desc={"Marinated wakame with sesame seeds."} />
          </div>
        </div>

        <WebFooter />
      </div>
    </>
  );
}
