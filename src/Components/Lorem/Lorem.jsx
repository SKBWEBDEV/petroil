import Container from "../Layouts/Container";
import { FaGreaterThan } from "react-icons/fa6";

const Lorem = () => {
  return (
    <div className="bg-[#F0F0F0] py-[30px] md:py-[130px] font-poppins">
      <Container>
        <div className=" md:flex md:justify-between">

             <div className="z-[1] relative bg-[url(./assets/man.png)] bg-no-repeat bg-cover py-[20px] md:py-[75px]
              md:px-[44px] px-[30px]   mt-[20px]">
            <div className=" z-[-1] absolute bg-black/50 w-full h-full top-0 left-0"></div>

            <h3 className="text-white font-popins font-bold w-[249px] text-[24px]">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h3>
            <button className="bg-white/50 py-[10px] px-[25px] mt-[5px] md:mt-[52px] text-white font-popins 
            hover:bg-[#7FFF00] hover:text-black transition duration-500">
              <a href="">Read more</a>
            </button>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
          <div className="z-[1] relative bg-[url(./assets/woman.png)] bg-no-repeat bg-cover py-[20px] md:py-[75px] 
          md:px-[44px] px-[30px]   mt-[20px]">
            <div className=" z-[-1] absolute bg-black/50 w-full h-full top-0 left-0"></div>

            <h3 className="text-white font-popins font-bold w-[249px] text-[24px]">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h3>
            <button className="bg-white/50 py-[10px] px-[25px] mt-[5px] md:mt-[52px] text-white font-popins 
            hover:bg-[#7FFF00] hover:text-black transition duration-500">
              <a href="">Read more</a>
            </button>
          </div>
          {/* ---------------------------------------------------------------------------------- */}

          <div className="z-[1] relative bg-[url(./assets/iron.png)] bg-no-repeat bg-cover py-[20px] md:py-[75px] md:px-[44px] px-[30px]   mt-[20px]">
            <div className=" z-[-1] absolute bg-black/50 w-full h-full top-0 left-0"></div>

            <h3 className="text-white font-popins font-bold w-[249px] text-[24px]">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h3>
            <button className="bg-white/50 py-[10px] px-[25px] mt-[5px] md:mt-[52px] text-white font-popins hover:bg-[#7FFF00] hover:text-black transition duration-500">
              <a href="">Read more</a>
            </button>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
        </div>
        <p className="flex items-center font-bold font-popins md:justify-end gap-[2px] mt-[29px] px-5 md:px-0"><a href="">MORE FROM THE BLLOG</a><FaGreaterThan /></p>
        
      </Container>
    </div>
  )
}

export default Lorem