import Container from "../Layouts/Container"

import pet from "../../assets/pet.png"
import the from "../../assets/the.png"
import bar from "../../assets/bar.png"
import bio from "../../assets/bio.png"

const Logo = () => {
  return (
    <div className="py-10 md:py-[117px]">
      <Container>
        <div className=" md:flex md:gap-[26px] ">
          <img className="md:w-full md:h-full md:ml-0 w-[150px] md:mt-0 h-[50px] ml-30 mt-5" src={pet} alt="" />
          <img className="md:w-full md:h-full md:ml-0 w-[150px] md:mt-0 h-[50px] ml-30 mt-5" src={the} alt="" />
          <img className="md:w-full md:h-full md:ml-0 w-[150px] md:mt-0 h-[50px] ml-30 mt-5" src={bar} alt="" />
          <img className="md:w-full md:h-full md:ml-0 w-[150px] md:mt-0 h-[50px] ml-30 mt-5" src={bio} alt="" />
        </div>
      </Container>
    </div>
  )
}

export default Logo