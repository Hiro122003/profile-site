'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const hobbiesContent = {
  text: {
    subTitle: '趣味のご紹介',
    Title: 'インドア・アウトドア両方好きです！',
    description:
      'アウトドアでは、バイクツーリング、ハイキング、旅行が大好きで基本的に1人で行くことが多いです（笑）。 インドアでは、ゲーム、読書（漫画！）、映画鑑賞、最近はプログラミングの勉強に取り組んでます。',
    features: [
      {
        title: 'バイクツーリングで日本中を旅行',
      },
      {
        title: 'ご当地の美味しいものを食べる',
      },
      {
        title: '海外に別荘を持つこと',
      },
      {
        title: 'アプリの開発をしてみたい',
      },
    ],
  },
  images: {
    img1: '/assets/switsland.jpg',
    img2: '/assets/hayabusa.jpg',
    img3: '/assets/deer_snow.jpg',
  },
  experience: {
    aim: '多くの事に挑戦し、',
    label: '人生を楽しむことが生きがいです。',
  },
};

const Hobbies = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'slide',
      once: true,
    });
  });

  return (
    // 趣味の紹介
    <section id="hobbies" className="bg-indigo-100 py-32 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="lg:flex   justify-between space-x-2">
          {/* 左 */}
          <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:content-[' '] before:absolute before:right-1/2 before:w-screen before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20 max-md:mt-28">
            <div className="flex gap-2 ">
              <div className="flex flex-col space-y-2">
                <Image
                  src={hobbiesContent.images.img1}
                  width={626}
                  height={640}
                  alt="image1"
                  className="object-cover h-full w-full rounded-lg"
                  data-aos="fade-right"
                  data-aos-delay="200"
                />

                <div className="flex justify-end gap-2">
                  {/* 下の段 */}
                  <div className="w-4/12 flex">
                    <div className="ml-auto">
                      <div className="bg-yellow-200 w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]" />
                    </div>
                  </div>
                  <div className="w-6/12 ">
                    <Image
                      src={hobbiesContent.images.img3}
                      width={626}
                      height={640}
                      alt="image3"
                      className="object-cover h-full w-full rounded-lg"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-auto ">
                <div className="flex flex-col gap-2">
                  <div>
                    <div className="bg-purpleLight w-10 h-10 lg:w-20 lg:h-24 rounded-tr-[200px]" />
                  </div>
                  <div>
                    <Image
                      src={hobbiesContent.images.img2}
                      width={547}
                      height={573}
                      alt="image2"
                      className="object-cover h-full w-full rounded-lg"
                      data-aos="fade-left"
                      data-aos-delay="300"
                    />
                  </div>
                  <div
                    className="py-4 px-2 lg:p-1 shadow-2xl rounded-lg bg-white w-full"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <div>
                      <strong className="block font-bold text-green text-xl lg:text-xl">
                        {hobbiesContent.experience.aim}
                      </strong>
                      <span className="text-sm leading-tight">
                        {hobbiesContent.experience.label}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右 */}
          <div className="lg:w-5/12 pt-40 lg:pt-0 ">
            <span
              className='font-bold text-xl lg:text-2xl  inline-block mb-4 pl-3 py-2 relative z-50 text-heading before:content-[" "] before:bg-pinkLight before:absolute before:top-0 before:bottom-0 before:left-0 before:w-[120%] before:h-full before:-z-10'
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {hobbiesContent.text.subTitle}
            </span>
            <h2
              className="font-bold text-2xl lg:text-3xl mb-5 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {hobbiesContent.text.Title}
            </h2>
            <p
              className="leading-relaxed mb-12 font-semibold"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {hobbiesContent.text.description}
            </p>
            <div
              className="bg-pinkLight inline-block px-4 py-2 rounded-lg mb-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h1
                className="font-bold text-xl lg:text-2xl 
              
              "
              >
                将来の夢
              </h1>
            </div>
            <ul
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {hobbiesContent.text.features.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-start items-center space-x-3 "
                >
                  <span className="inline-block w-10 h-10 bg-green relative rounded-[90px]">
                    <FaCheck className="absolute top-1/2 translate-y-[-50%] right-1/2 translate-x-[50%] text-white " />
                  </span>
                  <span className="font-bold text-lg ">{item.title}</span>
                </li>
              ))}
            </ul>

            <div
              className=" py-2 flex flex-col gap-4 justify-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="rounded-lg">
                <h1 className='relative  inline-block pl-3 py-2 text-2xl font-bold before:content-[" "] before:absolute before:bg-pinkLight before:w-[111%] before:top-0 before:bottom-0 before:left-0 before:-z-10 z-50'>
                  好きな言葉
                </h1>
              </div>
              <p className="font-semibold text-lg ">
                常に気持ちを若く、常に挑戦し向上する志を持つ！！
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
