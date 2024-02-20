'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

const blogContent = {
  text: {
    subTitle: 'ブログ・ニュース',
    title: '新着ニュース',
    description: '日々のブログや最新ニュースをお届けします。',
  },
  blog:[
    {
      link:'#',
      img:'/assets/garden.jpg',
      title:'タイトル（準備中）',
      description:'準備中です。今後、こちらに作成したWEBサイトをご紹介します。WordPress,React,Next.Jsのフレームワークを使用して作成する予定です。よろしくお願い致します。',
      date:'2024年-01-01'
    },
    {
      link:'#',
      img:'/assets/sunset.jpg',
      title:'タイトル（準備中）',
      description:'準備中です。今後、こちらに作成したWEBサイトをご紹介します。WordPress,React,Next.Jsのフレームワークを使用して作成する予定です。よろしくお願い致します。',
      date:'2024年-01-01'
    },
    {
      link:'#',
      img:'/assets/temple.jpg',
      title:'タイトル（準備中）',
      description:'準備中です。今後、こちらに作成したWEBサイトをご紹介します。WordPress,React,Next.Jsのフレームワークを使用して作成する予定です。よろしくお願い致します。',
      date:'2024年-01-01'
    },
    {
      link:'#',
      img:'/assets/deer_snow.jpg',
      title:'タイトル（準備中）',
      description:'準備中です。今後、こちらに作成したWEBサイトをご紹介します。WordPress,React,Next.Jsのフレームワークを使用して作成する予定です。よろしくお願い致します。',
      date:'2024年-01-01'
    },
  ]
};

const Blog = () => {
  const [isBeginning, setIsBeginning] = useState(null);
  const [isEnd, setIsEnd] = useState(null);

  return (
    <section id="blog" className="py-20 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        {/* 左 */}
        <div className="lg:w-5/12 mb-10 lg:mb-0 ">
          <span className='inline-block py-1 pl-3 text-heading font-semibold relative mb-7 before:content-[" "] before:absolute before:w-2/3 before:bg-pinkLight before:top-0 before:left-0 before:bottom-0 before:-z-10 z-50'>
            {blogContent.text.subTitle}
          </span>
          <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5 ">
            {blogContent.text.title}
          </h2>
          <p className="text-body leading-relaxed ">
            {blogContent.text.description}
          </p>
        </div>
        {/* 右 */}
        <div className="lg:w-5/12 text-left lg:text-right">
          <div className="inline-flex ml-auto space-x-3 ">
            <div
              className={`${
                isBeginning == true ? '' : ''
              }group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
            >
              <FaAngleLeft
                className={`${isBeginning == true ? '' : ''}
              text-3xl text-green transition-all duration-300 ease-in-out group-hover:text-white
              `}
              />
            </div>
            <div
              className={`${isEnd == true ? '' : ''}
            group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}
            >
              <FaAngleRight
                className={`${isBeginning == true ? '' : ''}
              text-3xl text-green transition-all duration-300 ease-in-out group-hover:text-white`}
              />
            </div>
          </div>
        </div>

        {/* スライド */}


        {/* ボタン */}
        <div className='mx-auto flex-col items-center justify-center w-fit'>
          <Link href={''} className='duration-300 transition-all easein py-3 px-6 flex border rounded-full space-x-3 items-center hover:border-gray-400'>
            過去のニュースは<strong className='text-green px-1 font-semibold'>こちら</strong>
            <span className='text-body'>|</span>
            <span className='bg-green rounded-full w-8 h-8 flex items-center justify-center '>
              <FaAngleRight className='text-white text-2xl'/>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
