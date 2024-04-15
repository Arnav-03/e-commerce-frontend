import { useNavigate } from 'react-router-dom';
function Intro() {
  const navigate = useNavigate();
 
  const getstarted=()=>{
    navigate('/user');
  }
  return (
    <div className="h-screen bg-[#2a6a72] flex flex-col md:flex-row overflow-hidden">
      {/*part1 */}
      <div className="w-full  flex flex-col justify-center p-4 md:p-8  mt-6 lg:ml-[50px] 
      md:w-1/2 md:mt-[100px]
      ">
        <div className="w-full h-2/3  ">
          <div className="text-[#faf9f9] text-6xl md:text-7xl
          lg:text-8xl alfa-slab drop-shadow-2xl ">Welcome <br />To<br></br>
            <span className='text-[#c7be40] text-[90px]  lg:text-9xl oleo drop-shadow-2xl '>ShopKrow</span></div><br />
        </div>
      </div>
      {/*part2 */}

      <div className=" w-full flex flex-col  text-center items-center mt-6
     md:mt-[100px]  md:border--[1px] md:border-[#c0b8b8]">
        <div className="pacifico text-3xl md:text-4xl lg:text-5xl ">
          Bringing Dreams To <br />  Doorsteps.
        </div>
        <div className="text-6xl mt-2 uppercase lilita text-[#d1d0c4] md:text-7xl lg:text-8xl drop-shadow-2xl"> Explore,<br /> Engage,<br /> Enjoy.</div>
        <button  onClick={getstarted}
        className=' m-4 w-fit p-4 rounded-2xl border-[2px] border-[#85bfd1] text-[#85bfd1]  text-3xl capitalize comforter tracking-[4px] hover:bg-[#85bfd1] hover:text-[#2a6a72] getstarted hover:text-4xl '>get started</button>

      </div>

    </div>
  );
}

export default Intro;
