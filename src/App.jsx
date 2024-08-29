// import React, { useState } from "react";
// import pic1 from "/public/pic1.jpg";
// import pic2 from "/public/pic2.jpg";
// import pic3 from "/public/pic3.jpg";
// import pic4 from "/public/pic4.jpg";

// function App() {
//   const data = [
//     { id: 0, img: pic1 },
//     { id: 1, img: pic2 },
//     { id: 2, img: pic3 },
//     { id: 3, img: pic4 },
//     { id: 4, img: pic1 },
//   ];

//   const [sliderData, setSliderData] = useState(data[0]);
//   const handleClick = (index) => {
//     const slider = data[index];
//     setSliderData(slider);
//   };

//   return (
//     <>
//       <div className="py-8 w-full bg-black">
//         <div className="max-w-[1440px] mx-auto">
//           <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 h-auto md:h-[580px] overflow-hidden">
//             <div className="w-full md:w-[90%]">
//               <div className="w-full h-[250px] md:h-[580px]">
//                 <img
//                   src={sliderData.img}
//                   alt="Not found"
//                   className="w-full h-full object-cover block"
//                 />
//               </div>
//             </div>

//             <div className="w-full md:w-[10%] overflow-auto custom-scroll">
//               <div className="flex md:flex-col gap-4">
//                 {data.map((item, index) => (
//                   <div
//                     onClick={() => handleClick(index)}
//                     key={item.id}
//                     className={
//                       "w-full h-[100px]md:h-[100px] md:h-[150px] overflow-hidden relative cursor-pointer transition-all"
//                     }
//                   >
//                     <div
//                       className={`${
//                         sliderData.id === index
//                           ? "opacity-[0.1]"
//                           : "opacity-[0.5]"
//                       } absolute bg-black h-full w-full top-0 left-0`}
//                     ></div>
//                     <img
//                       src={item.img}
//                       alt="Not found"
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
















import React, { useState, useRef } from "react";
import pic1 from "/public/pic1.jpg";
import pic2 from "/public/pic2.jpg";
import pic3 from "/public/pic3.jpg";
import pic4 from "/public/pic4.jpg";

function App() {
  const data = [
    { id: 0, img: pic1 },
    { id: 1, img: pic2 },
    { id: 2, img: pic3 },
    { id: 3, img: pic4 },
    { id: 4, img: pic1 },
  ];

  const [sliderData, setSliderData] = useState(data[0]);
  const refs = useRef([]);

  const handleClick = (index) => {
    const slider = data[index];
    setSliderData(slider);

    // Scroll the clicked item into view
    if (refs.current[index]) {
      refs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "end", // the last item scrolls to the end
      });
    }
  };

  return (
    <>
      <div className="py-8 w-full bg-black">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 h-auto md:h-[580px] overflow-hidden">
            <div className="w-full md:w-[90%]">
              <div className="w-full h-[250px] md:h-[580px]">
                <img
                  src={sliderData.img}
                  alt="Not found"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            <div className="w-full md:w-[10%] overflow-auto custom-scroll">
              <div className="flex md:flex-col gap-4">
                {data.map((item, index) => (
                  <div
                    ref={(el) => (refs.current[index] = el)}
                    onClick={() => handleClick(index)}
                    key={item.id}
                    className={
                      "w-full h-[100px]md:h-[100px] md:h-[150px] overflow-hidden relative cursor-pointer transition-all"
                    }
                  >
                    <div
                      className={`${
                        sliderData.id === index
                          ? "opacity-[0.1]"
                          : "opacity-[0.5]"
                      } absolute bg-black h-full w-full top-0 left-0`}
                    ></div>
                    <img
                      src={item.img}
                      alt="Not found"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

