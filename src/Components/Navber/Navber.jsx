import Container from "../Layouts/Container"
import petroil from "../../assets/petroil.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";


const Navber = () => {
const [okey,setOkey] = useState (false)
  

  return (
    <div className="bg-[#F40404] py-[30px] items-center text-white font-poppins">
      
       <Container>
        <div className="flex justify-between">
          <div className="md:block hidden">
            <img src={petroil} alt="" />
          </div>
          <div className="md:block hidden">
            <ul className="flex items-center gap-[55px] font-bold font-poppins">
                 <li><a href="">Home</a></li>
                 <li><a href="">About</a></li>
                 <li><a href="">Services</a></li>
                 <li><a href="">Gallery</a></li>
                 <li><a href="">Blog</a></li>
                <button className="border px-[32px] py-[14px]"><a href="">CONTACT</a></button>
            </ul>

          </div>
        </div>

        <div className="flex  items-center justify-between px-5 md:px-0">
          <div className="md:hidden block">
          <img src={petroil} alt="" />
        </div>

        <div className="flex ">
          {
          okey ? (
            <div className="md:hidden block bg-amber-800 absolute top-[220px] left-0 z-10  py-5 px-5 w-full md:px-0 md:py-0">
              <ul className="  font-bold font-poppins ">
                 <li className="py-3 md:py-0"><a href="">Home</a></li>
                 <li className="py-3 md:py-0"><a href="">About</a></li>
                 <li className="py-3 md:py-0"><a href="">Services</a></li>
                 <li className="py-3 md:py-0"><a href="">Gallery</a></li>
                 <li className="py-3 md:py-0"><a href="">Blog</a></li>
                <button className="border px-[25px] py-[10px]"><a href="">CONTACT</a></button>
            </ul>
            </div>
          ): ""
        }
        </div>

        
          <div className="text-2xl md:hidden">
            {
              okey ? <RxCross2 onClick={()=> setOkey(!okey)}/> : <FaBars onClick={()=> setOkey(!okey)}/>
            
            }
          </div>
        </div>
        

       
       </Container>

      
    </div>
  )
}

export default Navber
