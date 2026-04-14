import { Manrope, Noto_Serif } from "next/font/google";

const manrope = Manrope({ subsets: [ "latin" ], style: [ "normal" ] });
const notoSerif = Noto_Serif({ subsets: [ "latin" ], style: [ "normal", "italic" ] });

interface ILowerCard {
  name: string,
  cost: string,
  desc: string,
}

export default function LowerCard(props: ILowerCard) {
  return (
    <>
      <div className="flex gap-4">
        <div className="rounded-xl size-24 bg-gray-600"></div>
        <div className="flex flex-col gap-2">
          <div className="flex">
            <p className={`${notoSerif.className} text-lg flex-auto`}>{props.name}</p>
            <p className={`${manrope.className} text-lg text-ylw`}>{props.cost}</p>
          </div>
          <p className={`${manrope.className} text-sm text-pnk`}>{props.desc}</p>
        </div>
      </div>
    </>
  );
}
