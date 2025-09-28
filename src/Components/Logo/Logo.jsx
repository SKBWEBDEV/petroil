import Container from "../Layouts/Container"

import pet from "../../assets/pet.png"
import the from "../../assets/the.png"
import bar from "../../assets/bar.png"
import bio from "../../assets/bio.png"

const Logo = () => {
  return (
    <div className="py-14 md:py-[117px]">
      <Container>
        <div className=" md:flex md:gap-[26px] ">
          <img src={pet} alt="" />
          <img src={the} alt="" />
          <img src={bar} alt="" />
          <img src={bio} alt="" />
        </div>
      </Container>
    </div>
  )
}

export default Logo