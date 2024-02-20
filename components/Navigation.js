'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const navigationMenu = [
  {
    href: '/',
    label: 'ホーム',
  },
  {
    href: '/skills',
    label: 'スキル',
  },
  {
    href: '/hobbies',
    label: '趣味',
  },
  {
    href: '/works',
    label: '作品',
  },
  {
    href: '/blog',
    label: 'ブログ・ニュース',
  }
];

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  // 768以上になると閉じる
  const [mobile, setMobile] = useState({})
  useEffect(() => {
    function handleResize() {
      setMobile({
        height:window.innerHeight,
        width:window.innerWidth
      })
      if(mobile.width > 768 && navOpen){
        setNavOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return()=> window.removeEventListener('resize', handleResize)
  })


  return (
    <>
      {/* webメニュー */}
      <header className="py-7 bg-[#fff] shadow-xl fixed top-0  w-full z-[9999]">
        <div className="container px-4 mx-auto ">
          <div className="flex items-center justify-between">
            {/* ロゴ */}
            <div className="max-w-[100%]">
              <Link href="/">
                <Image
                  src={'/assets/portrait.jpg'}
                  alt="Logo"
                  height={90}
                  width={90}
                  // priority={false}
                  className='rounded-[90%]'
                />
              </Link>
            </div>
            {/* メニュー */}
            <div className="hidden lg:block text-center ">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, index) => (
                  <li key={index} className="text-body font-semibold">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* ボタン */}
            <div>
              <Link
                href={'#'}
                className="btnBlue inline-flex lg:inline-block max-lg:hidden"
              >
                Contact Me
              </Link>

              {/* レスポンシブ対応 モバイル用 */}
              <button
                className="block lg:hidden"
                onClick={() => setNavOpen(!navOpen)}
              >
                <FaBars className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* モバイルメニュー */}
      <div className={navOpen ? 'py-0 block w-screen z-[999]' : 'hidden'}
      onClick={() => setNavOpen(!navOpen)}
      >
        <div className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50">
          <div className="h-screen bg-white w-[380px] top-0 right-0 z-[999] fixed ">
            <div className="h-14 px-10 border-b flex items-center">
              <button
                className="flex items-center space-x-3"
                onClick={() => setNavOpen(!navOpen)}
              >
                <IoCloseSharp />
                <span>閉じる</span>
              </button>
            </div>
            <div className="h-full py-3 px-10 pb-20">
              {/* ナビゲーションボタンが押されたときに表示 */}
              <ul className="block mb-7">
                {navigationMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="group flex items-center py-2 duration-300 transition-all ease-out hover:text-blue "
                      onClick={() => setNavOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="relative left-2 duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                        <FaChevronRight className="text-xl" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
