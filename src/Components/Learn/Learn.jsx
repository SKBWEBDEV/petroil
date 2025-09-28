import Container from "../Layouts/Container"



const Learn = () => {
  return (
    <div className="bg-[#F0F0F0] py-[50px] md:py-[136px]">
      <Container>
         <div className="md:flex">
          <div className="bg-[#F40404] w-full text-center h-full text-white font-poppins font-bold md:text-[36px]">
            <h4 className="md:w-[262px] md:text-center py-[20px] md:py-[100px] md:ml-[74px]">
              Learn more about our company
            </h4>
          </div>

          <div className=" relative bg-[url('./assets/road.png')] py-[50px] px-[100px] md:py-[132px] md:px-[282px] w-fit md:w-full bg-no-repeat bg-cover ">
            <button className="hover:bg-[#7FFF00] border-none hover:text-red-500 bg-white font-bold transition duration-500   px-10 py-5  ">
              LEARN MORE
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Learn