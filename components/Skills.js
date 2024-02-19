'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skillsContent = {
  text: {
    subTitle: 'skills',
    Title: 'スキルのご紹介！',
    description:
      '海外生活の経験からの語学力、ビジネススキル、プログラミングスキルを活かし、お客様のビジネスをサポートします。',
  },

  items: [
    {
      icon: '/assets/english.jpg',
      title: '英語',
      description:
        '大学でイギリス文学専攻、イギリス留学、オーストリアでの２年間の生活経験があります。',
    },
    {
      icon: '/assets/chinese.jpg',
      title: '中国語',
      description: '独学で勉強。台湾での１年の生活経験があります。',
    },
    {
      icon: '/assets/excel.jpg',
      title: 'Excel',
      description: 'MOSの資格あります。',
    },
    {
      icon: '/assets/vba.jpg',
      title: 'VBA',
      description:
        '独学で勉強。職場での仕事の効率性を上げるため、頻繁に使用していました。',
    },
    {
      icon: '/assets/javascript_icon.jpg',
      title: 'javascript',
      description:
        'HTML, CSS, WordPress, React, Next.js, TypeScript, Node.jsなどを学習中です。',
    },
    {
      icon: '/assets/sql.jpg',
      title: 'SQL',
      description: '勉強中です。今後は頻繁に使用し、アプリの作成に活かします。',
    },
  ],
};

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'slide',
      once: true,
    });
  });

  return (
    <section id="skills" className="py-20 bg-light ">
      <div className="container px-4 mx-auto ">
        {/* 上の段 */}
        <div
          className="max-w-xl text-center mx-auto mb-20"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className='inline-block py-1 pl-3 pr-3 text-heading font-bold relative mb-7 before:content-[""] before:absolute before:w-[100%] before:bg-pinkLight before:top-0 before:left-0 before:bottom-0 before:-z-10 z-50'>
            {skillsContent.text.subTitle}
          </span>
          <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5">
            {skillsContent.text.Title}
          </h2>
          <p className="text-body leading-relaxed ">
            {skillsContent.text.description}
          </p>
        </div>

        {/* 下の段 */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {skillsContent.items.map((item, index) => {
            index *= 100;
          
          return(
            <div
              key={index}
              className="flex space-x-10"
              data-aos="fade-up"
              data-aos-delay={index}
            >
              <div className="w-14 shrink-0 ">
                <span className="inline-flex justify-center items-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl">
                  <Image
                    src={item.icon}
                    height={60}
                    width={60}
                    alt="icon"
                    className=""
                  />
                </span>
              </div>
              <div className="">
                <h3 className="text-heading font-bold mb-3 ">{item.title}</h3>
                <p className="text-body leading-relaxed">{item.description}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};

export default Skills;
