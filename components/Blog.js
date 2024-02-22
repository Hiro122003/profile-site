'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const blogContent = {
  text: {
    subTitle: 'ブログ・ニュース',
    title: '新着ニュース',
    description: '日々のブログや最新ニュースをお届けします。',
  },
  blog: [
    {
      link: '#',
      img: '/assets/hero-img-2.jpg',
      title: '石垣島 川平湾',
      description:
        '石垣島の川平湾に行きました。川平湾は、石垣島の西海岸に位置し、美しいビーチが広がるリゾート地です。この日は2月中旬なのに昼間の気温は24度で、とても暖かく、海も穏やかでした。石垣で一番好きな場所です。',
      date: '2024年-02-22',
    },
    {
      link: '#',
      img: '/assets/ishigakiport.jpg',
      title: '石垣港 離島ターミナル',
      description:
        '石垣港の画像です。目の前の離島ターミナルから竹富島、西表島、小浜島、波照間島などにフェリーが出てます。おそらく一番人気であろう竹富島まではおよそ10～15分ほどです。',
      date: '2024年-02-22',
    },
    {
      link: '#',
      img: '/assets/monkey.jpg',
      title: '香港 謎の銅像',
      description:
        '香港で出会った謎の銅像。何を意図しているのか全く分かりませんが、思わず写真を撮ってしまいました。',
      date: '2024年-02-22',
    },
    {
      link: '#',
      img: '/assets/nightview_o.jpg',
      title: '香港の夜景 上手く撮れない',
      description:
        '香港の夜景。全く旨く撮れませんでした。',
      date: '2024年-02-22',
    },
  ],
};

const Blog = () => {
  const [isBeginning, setIsBeginning] = useState(null);
  const [isEnd, setIsEnd] = useState(null);
  const sliderRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'slide',
      once: true,
    });
  });

  useEffect(() => {
    const swiper = sliderRef.current.swiper;

    const updateSlideStatus = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };
    swiper.on('slideChange', updateSlideStatus);
    return () => {
      swiper.off('slideChange', updateSlideStatus);
    };
  }, [sliderRef]);

  // 前にスライド
  const prevHandler = useCallback(() => {
    if (!sliderRef) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  // 次にスライド
  const nextHandler = useCallback(() => {
    if (!sliderRef) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section id="blog" className="py-20 bg-light overflow-x-hidden max-md:py-5">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center mb-10 ">
          {/* 左 */}
          <div className="lg:w-5/12 mb-10 lg:mb-0 ">
            <span
              className='inline-block py-1 pl-3 text-heading font-semibold relative mb-7 before:content-[" "] before:absolute before:w-2/3 before:bg-pinkLight before:top-0 before:left-0 before:bottom-0 before:-z-10 z-50'
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {blogContent.text.subTitle}
            </span>
            <h2
              className="text-heading text-2xl lg:text-4xl font-bold mb-5 "
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {blogContent.text.title}
            </h2>
            <p className="text-body leading-relaxed "
             data-aos="fade-up"
             data-aos-delay="300"
            >
              {blogContent.text.description}
            </p>
          </div>
          {/* 右 */}
          <div className="lg:w-5/12 text-left lg:text-right">
            <div className="inline-flex ml-auto space-x-3">
              <div
                className={`${
                  isBeginning == true
                    ? 'opacity-30 bg-gray-300 cursor-auto'
                    : 'opacity-100 hover:bg-green'
                }group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
                onClick={prevHandler}
              >
                <FaAngleLeft
                  className={`${
                    isBeginning == true
                      ? 'group-hover:text-green'
                      : 'group-hover:text-white'
                  }
              text-3xl text-green transition-all duration-300 ease-in-out group-hover:text-white
              `}
                />
              </div>
              <div
                className={`${
                  isEnd == true
                    ? 'opacity-30 bg-gray-300 cursor-auto'
                    : 'opacity-100 hover:bg-green'
                }
            group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
                onClick={nextHandler}
              >
                <FaAngleRight
                  className={`${
                    isBeginning == true
                      ? 'group-hover:text-green'
                      : 'group-hover:text-white'
                  }
              text-3xl text-green transition-all duration-300 ease-in-out group-hover:text-white`}
                />
              </div>
            </div>
          </div>
        </div>
        {/* スライド */}
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          ref={sliderRef}
          speed={700}
          className='z-50 py-32 relative flex items-stretch overflow-visible 
        before:content-[" "] before:z-50 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light'
        data-aos="fade-up"
        data-aos-delay="300"
        >
          {blogContent.blog.map((item, index) => (
            <SwiperSlide key={index} className="overflow-visible h-full">
              <div className="p-5 rounded-lg bg-white relative mt-10 m-3 ">
                <Link
                  href={item.link}
                  className="relative -mt-10 inline-block overflow-hidden rounded-lg mb-4 "
                >
                  <Image
                    src={item.img}
                    width={782}
                    height={467}
                    alt="blogImg"
                    className="h-80 object-cover"
                  />
                </Link>
                <h2 className="text-heading text-lg font-bold leading-7 mb-5 ">
                  <Link href={item.link} className="text-heading ">
                    {item.title}
                  </Link>
                </h2>
                <p className="mb-6 text-body ">{item.description}</p>
                <span className="text-sm">{item.date}</span>
              </div>
            </SwiperSlide>
          ))}
          ;
        </Swiper>

        {/* ボタン */}
        <div className="mx-auto flex-col items-center justify-center w-fit">
          <Link
            href={''}
            className="duration-300 transition-all easein py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400"
          >
            過去のニュースは
            <strong className="text-green px-1 font-semibold">こちら</strong>
            <span className="text-body">|</span>
            <span className="bg-green rounded-full w-8 h-8 flex items-center justify-center ">
              <FaAngleRight className="text-white text-2xl" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
