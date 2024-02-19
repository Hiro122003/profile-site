import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const statsContent = {
  stats: [
    {
      number: '99.9%',
      label: '現役合格率',
    },
    {
      number: '99.9%',
      label: '現役合格率',
    },
    {
      number: '99.9%',
      label: '現役合格率',
    },
  ],
  text: {
    title: '担当アドバイザーによるサポート',
    description:
      '担当アドバイザーによるサポートを受けながら、合格を目指します。',
    img: '/assets/hi-man.jpg',
  },
};

const Stats = () => {
  return (
    <section className=" pt-20 pb-10 ">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center space-x-0">
          {/* 左 */}
          <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
            <div className="grid grid-cols-3">
              {statsContent.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <strong className="text-green text-4xl xl:text-[52px] font-bold leading-tight block">
                    {stat.number}
                  </strong>
                  <strong className="text-body">{stat.label}</strong>
                </div>
              ))}
            </div>
          </div>

          {/* 右 */}
          <div className="w-full lg:w-5/12">
            <div className="bg-light py-10 px-7 lg:px-10 !pr-28 md:pr-32 lg:pr-40 rounded-lg relative">
              <Image
                src={statsContent.text.img}
                width={100}
                height={200}
                alt="img"
                className='absolute right-0 lg:-right-3 w-52 h-auto -top-3 z-[-1]'
              />
              <h3>{statsContent.text.title}</h3>
              <p>{statsContent.text.description}</p>
              <Link href={''}>
                <span>もっと見る</span>
                <span>
                  <FaChevronRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
