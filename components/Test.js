// 'use client';

// import React from 'react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import '../app/globals.css';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import Image from 'next/image';

// const Test = () => {
//   return (
//     <div className="bg-indigo-100 py-20">
//       <div className="lg:w-8/12 px-4 container mx-auto flex items-center relative">
//         <Swiper
//           // install Swiper modules
//           modules={[Navigation, Pagination, Scrollbar, A11y]}
//           spaceBetween={50}
//           slidesPerView={1}
//           navigation
//           pagination={{ clickable: true }}
//           scrollbar={{ draggable: true }}
//           onSwiper={(swiper) => console.log(swiper)}
//           onSlideChange={() => console.log('slide change')}
//         >
//           <SwiperSlide>
//             <Image
//               src="/assets/hero-img-1.jpg"
//               width={600}
//               height={600}
//               alt="image1"
//               className="rounded-2xl flex w-[90%] h-full justify-center text-center"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Image
//               src="/assets/hero-img-2.jpg"
//               width={600}
//               height={600}
//               alt="image1"
//               className="rounded-2xl inline-block w-full h-full "
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Image
//               src="/assets/hero-img-3.jpg"
//               width={600}
//               height={600}
//               alt="image1"
//               className="rounded-2xl inline-block w-full h-full "
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <Image
//               src="/assets/hero-img-4.jpg"
//               width={600}
//               height={600}
//               alt="image1"
//               className="rounded-2xl inline-block w-full h-full "
//             />
//           </SwiperSlide>
//           ...
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default Test;
