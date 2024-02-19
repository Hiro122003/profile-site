import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

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
    aim: '多くのことに挑戦し',
    label: '人生を楽しむことが生きがいです。',
  },
};

const Hobbies = () => {
  return (
    // 趣味の紹介
    <section id="hobbies" className='bg-indigo-100 py-32 overflow-x-hidden'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between space-x-2'>
          {/* 左 */}
          <div className='lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:absolute before:right-1/2 before:w-screen before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20'>
            <div>
              <div>
                <Image
                  src={hobbiesContent.images.img1}
                  width={626}
                  height={640}
                  alt="image1"
                />
              </div>
              <div>
                {/* 下の段 */}
                <div>
                  <div>
                    <div />
                  </div>
                </div>
                <div>
                  <Image
                    src={hobbiesContent.images.img3}
                    width={626}
                    height={640}
                    alt="image3"
                  />
                </div>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <div />
                </div>
                <div>
                  <Image
                    src={hobbiesContent.images.img2}
                    width={547}
                    height={573}
                    alt="image2"
                  />
                </div>
                <div>
                  <div>
                    <strong>{hobbiesContent.experience.aim}</strong>
                    <span>{hobbiesContent.experience.label}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右 */}
          <div>
            <span>{hobbiesContent.text.subTitle}</span>
            <h2>{hobbiesContent.text.Title}</h2>
            <p>{hobbiesContent.text.description}</p>
            <div>
              <h1>将来の夢</h1>
            </div>
            <ul>
              {hobbiesContent.text.features.map((item, index) => (
                <li key={index}>
                  <span>
                    <FaCheck />
                  </span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            {/* ボタン */}
            <div>
              <Link href={''}>資料ダウンロード</Link>
              <Link href={''}>申し込み</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
