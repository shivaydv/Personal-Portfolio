import Image from "next/image"
import {Instagram} from "lucide-react"
import shiva from "../../assets/shiva.jpeg"
import Link from "next/link"

export default function Home() {
  return (
    <div className="p-2">
      <div className={`w-full h-40 object-cover bg-cover`} >
        <div className="w-full h-full backdrop-blur-lg justify-between items-center flex px-5 md:px-12">
          <div className="flex gap-10 justify-center items-center">
          <Image className=" object-cover rounded-full  w-32 h-32 border-4 border-white"  src={shiva} alt="" />
          <div >
          <h1 className="font-bold text-2xl  text-white">Shiva Yadav</h1>
          <h1 className="font-light text-sm  text-white">@shivaydv</h1>
          </div>
          </div>
          <Link href={"https://instagram.com/shivay1256"} target="_blank" className="flex gap-2 bg-secondaryBackground md:py-2 p-2 md:px-4 rounded-lg  justify-center items-center">
            <Instagram size={20}/> 
            <p className="max-md:hidden text-sm font-semibold">Follow me on Instagram</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
