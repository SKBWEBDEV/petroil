


import Container from "../Layouts/Container"

const Banner = () => {
  return (
    <div>
      <div className="relative z-[1] bg-[url(./assets/banner.png)] py-[100px] md:py-[257px] px-5 md:px-0 bg-no-repeat bg-cover font-poppins">
      <div className="absolute top-0 left-0 bg-[#000000]/50 w-full h-full z-[-1]"></div>
        
            <Container>
              <h1 className="text-white font-poppins font-bold  text-[25px] w-[320px] md:text-[64px]  md:w-[842px] ">We exist since 1975 on the oil and gas industry.</h1>
              <button className="hover:bg-[#7FFF00] hover:text-black transition duration-400 ease-in-out md:py-[13px] md:px-[40px] px-[20px] py-[8px] bg-[#F40404] text-white font-semibold mt-[31px]">LEARN MORE</button>
            </Container>
            
      </div>
    </div>
  )
}

export default Banner