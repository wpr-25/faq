/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import React, { useState } from "react"

export default function NavbarBasicPreview() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <>
      <div className="dark:bg-white">
        {/*<!-- Navbar --> */}
        <header className="max-w-7xl mx-auto border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden dark:bg-white">
          <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
            <nav
              aria-label="main navigation"
              className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
              role="navigation">
              {/*      <!-- logo --> */}
              <div><Link href="https://movi.id"><img src="https://shop.movi.id/img/logos/movi.png" className="py-6 h-20" alt="MOVI" /></Link></div>
              {/*      <!-- Mobile trigger --> */}
              <button
                className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                  }
              `}
                onClick={() => setIsToggleOpen(!isToggleOpen)}
                aria-expanded={isToggleOpen ? "true" : "false"}
                aria-label="Toggle navigation">
                <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300">
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300">

                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300">
                  </span>
                </div>
              </button>
              {/*      <!-- Navigation links --> */}
              <ul
                role="menubar"
                aria-label="Select page"
                className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
                  }`}
              >
                <li role="none" className="flex items-stretch">
                  <div
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                    href="javascript:void(0)">
                    <span>
                      <Link href="https://movi.id">
                        Home
                      </Link>
                    </span>
                  </div>
                </li>
                <li role="none" className="flex items-stretch">
                  <div
                    role="menuitem"
                    aria-current="page"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="flex items-center gap-2 py-4  transition-colors duration-300 hover:text-emerald-600 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8">
                    <span>
                      <Link href="https://movi.id/id/about-ministry-of-vape-indonesia/">
                        About Us
                      </Link>
                    </span>
                  </div>
                </li>
                <li role="none" className="flex items-stretch">
                  <div
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8">
                    <span>
                      <Link href="https://movi.id/id/shop/">
                        Shop
                      </Link>
                    </span>
                  </div>
                </li>
                <li role="none" className="flex items-stretch">
                  <div
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                    href="javascript:void(0)">
                    <span>
                      <Link href="https://movi.id/id/contact/">
                        Contact
                      </Link>
                    </span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/*<!-- Navbar--> */}
        {/*<!--slider-->*/}
        <div className="carousel max-w-7xl mx-auto py-4 dark:bg-white">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="AFLO_Wine_Freeze.jpg" className="w-full" alt="movi aflo wine freeze"/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="AFLO_Blackcurrant_Brain_Freeze.jpg" className="w-full" alt="movi aflo blackcurrant brain freeze"/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="KUY_Soursop_Freeze.jpg" className="w-full" alt="movi kuy soursop freeze"/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="KUY_Cantaloupe_Freeze.jpg" className="w-full" alt="movi kuy cantaloupe freeze"/>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
        {/*<!--slider-->*/}

        {/*<!-- FAQ nya customer --> */}
        <div className="max-w-7xl mx-auto py-6 dark:bg-white">
          <div className="px-4 text-6xl dark:bg-white dark:text-white">
            FAQ
          </div>
          <div className="max-w-7xl mx-auto py-6">
            <p className="px-4">Pertanyaan yang sering ditanyakan oleh Kawan MOVI
            </p>
          </div>
          <div className="max-w-7xl mx-auto py-9 dark:bg-white">
            <section className="w-full divide-y rounded divide-slate-200 ">
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Berapa harga pod MOVI KUY dan AFLO dan Cartridge?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac01 desc-ac01">
                    <title id="title-ac01">
                      Open
                    </title>
                    <desc id="desc-ac01">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold">
                  Berikut adalah harganya Kak
                  <br />Kuy v2 device only 105K
                  <br />Aflo v1 device only 105K
                  <br />Kuy Saik device only 110K
                  <br />Aflo Joy device only 110K
                  <br />Cartridge only 66K (2pcs)
                  <br /> Note :
                  <br />Apabila Kamu membeli produk MOVI dibawah harga diatas bisa dikatan itu tidak original,
                  <br />dan apabila terjadi sesuatu atau kerusakan yang dialami maka MOVI tidak akan bertanggung jawab.
                </p>
              </details>
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Apakah ada starterpack?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac02 desc-ac02">
                    <title id="title-ac02">
                      Open
                    </title>
                    <desc id="desc-ac02">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold">
                  Ada, berikut list nya
                  <br />Aflo v1 starterpack : 140k
                  <br />Kuy v2 starterpack : 140k
                  <br />Kuy Podlott starterpack : 140k
                  <br />Starterpack sudah termasuk:
                  <br />- 1x Device
                  <br />- 1x Cartridge
                  <br />- 1x Lanyard
                  <br />- 1x Liquid 15ml (Random)
                  <br />
                  <br />Kuy Gox starterkit : 250k
                  <br />- 1x Device
                  <br />- 1x Cartridge
                  <br />- 1x Lanyard
                  <br />- 1x Silicone Case
                  <br />- 1x Liquid 15ml (Best Seller)
                  <br /> Note :
                  <br />Apabila Kamu membeli produk MOVI dibawah harga diatas bisa dikatan itu tidak original,
                  <br />dan apabila terjadi sesuatu atau kerusakan yang dialami maka MOVI tidak akan bertanggung jawab.
                </p>
              </details>
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Apakah POD yang dibeli dari MOVI ada garansi?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac03 desc-ac03">
                    <title id="title-ac03">Open</title>
                    <desc id="desc-ac03">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold text-justify">
                  Ada,
                  <br />Untuk Aflo V1 dan Kuy V2 memiliki garansi 1 bulan terhitung dari tanggal pembelian dan cartridgenya bergaransi 1 minggu dari tanggal pembelian,
                  <br />Untuk Aflo Joy, Kuy Saik, Kuy Podlott dan Cartridge bergaransi 1 minggu terhitung dari tanggal pembelian.
                  <br />Untuk Kuy Gox bergaransi 1 minggu terhitung dari tanggal pembelian
                  <br />
                  <br />note: Kalau kamu daftarin devicenya di website, garansinya menjadi 1 bulan. klik link di bawah ini untuk mendaftarkan device kamu.
                  <br />
                  <Link className="hover:text-green-500" href="https://shop.movi.id/form/register-product?_ga=2.35579937.1646850590.1677463433-1868872385.1667883819&_gl=1*1rqtz71*_ga*MTg2ODg3MjM4NS4xNjY3ODgzODE5*_ga_XZG8G2C2ZR*MTY3NzQ3NDM5OS4yMDMuMC4xNjc3NDc0Mzk5LjAuMC4w">
                    Form Garansi
                  </Link>
                </p>
              </details>



              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Apakah cartridge Kuy V2 bisa digunakan di Kuy Saik?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac04 desc-ac04">
                    <title id="title-ac04">Open</title>
                    <desc id="desc-ac04">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold">
                  Tenang semua jenis cartridge Kuy bisa saling digunakan mulai dari V1 - KUY GOX (termasuk kuy podlott )
                </p>
              </details>
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Berapa Resistensi OHM yang ada pada cartridge Kuy dan Aflo ?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac099 desc-ac099">
                    <title id="title-ac099">
                      Open
                    </title>
                    <desc id="desc-ac099">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold text-justify">
                  Untuk Resistensi pada cartridge Kuy dan Aflo terbagi menjadi 2 yaitu 0.8 OHM & 1 OHM
                </p>
              </details>
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Bagaimana cara mengisi cartridge ?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac05 desc-ac05">
                    <title id="title-ac05">
                      Open
                    </title>
                    <desc id="desc-ac05">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold text-justify">
                  Untuk cara mengisi cartridge kamu bisa lihat video youtube kami pada link dibawah ini
                  <br /><Link href="https://www.youtube.com/watch?v=ybqzZbeyEH0" className="hover:text-green-500">Cara mengisi cartridge</Link>
                </p>
              </details>
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Barapa lama usia cartridge ?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac06 desc-ac06">
                    <title id="title-ac06">
                      Open
                    </title>
                    <desc id="desc-ac06">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold text-justify">
                  Untuk usia cartridge sendiri bisa sampai 1 bulan dan paling singkat adalah 2 minggu
                </p>
              </details>
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Apa tanda dari lampu indikator?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac07 desc-ac07">
                    <title id="title-ac07">
                      Open
                    </title>
                    <desc id="desc-ac07">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold text-justify">
                  <br />Berikut penjelasannya dibawah ini Kawan
                  <br />indikator baterai :
                  <br />hijau (full / 100%)
                  <br />biru (75 - 50%)
                  <br />merah ( 20 - 10%)
                  <br />merah berkedip (lowbatt)
                </p>
              </details>
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Kuy, Aflo bisa pakai liquid freebase?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac08 desc-ac08">
                    <title id="title-ac08">
                      Open
                    </title>
                    <desc id="desc-ac08">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold text-justify">
                  bisa asalkan menggunakan liquid yang ada logo FB99+ dan vg | pg nya 50:50
                </p>
              </details>

              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Apakah ada rekomendasi Liquid Best Seller?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac09 desc-ac09">
                    <title id="title-ac09">Open</title>
                    <desc id="desc-ac09">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold text-justify">
                  Ada,
                  <br />Aflo
                  <br />Blackcurrant Brain Freeze
                  <br />Wine Freeze
                  <br />Rapsberry Apple
                  <br />Grape Candy
                  <br />Strawberry Freeze
                  <br />Lychee Freeze
                  <br />Virgina Tobbacco
                  <br />Coffee & Rum
                  <br />
                  <br />Kuy
                  <br />Soursop
                  <br />Cantaloupe
                  <br />Santuy (Tropical Punch)
                  <br />Cimang (Lychee Mango)
                  <br />Vanilla milk
                  <br />Pomegranete
                  <br />Rapsberry peach
                  <br />Takis (Chocolate Mint)
                  <br />Semua Liquid diatas harganya murah hanya 50K
                </p>
              </details>
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Berapa lama Device Kuy & Aflo dalam pengisian daya?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac010 desc-ac010">
                    <title id="title-ac010">
                      Open
                    </title>
                    <desc id="desc-ac010">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold text-justify">
                  Dalam pengisian daya device Aflo & Kuy dengan micro usb akan memakan waktu 30 menit sampai dengan 1 jam,
                  <br />Usb type C bisa 30 menit sampai dengan 45 menit
                </p>
              </details>
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Dimana saja MOVI Store tersedia?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac011 desc-ac011">
                    <title id="title-ac011">
                      Open
                    </title>
                    <desc id="desc-ac011">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold text-justify">
                  Kamu bisa kunjungi link dibawah ini untuk menemukan lokasi MOVI terdekat kamu,
                  <br /><Link href="https://desty.page/ministryofvapeindonesia/movistore" className="hover:text-green-500">MOVI Store Terdekat Kamu</Link>
                </p>
              </details>
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Brand apa saja yang dinaungi oleh MOVI?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac012 desc-ac012">
                    <title id="title-ac012">
                      Open
                    </title>
                    <desc id="desc-ac012">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold text-justify">
                  KUY & AFLO
                </p>
              </details>
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Berapa lama Device Kuy & Aflo dalam pengisian daya?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac013 desc-ac013">
                    <title id="title-ac013">
                      Open
                    </title>
                    <desc id="desc-ac013">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold text-justify">
                  Dalam pengisian daya device Aflo & Kuy dengan micro usb akan memakan waktu 30 menit sampai dengan 1 jam,
                  <br />Usb type C bisa 30 menit sampai dengan 45 menit
                </p>
              </details>
              <details className="p-4 group">
                <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                  Bagaimana cara untuk menghubungi Sandra MOVI?
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title-ac014 desc-ac014">
                    <title id="title-ac014">
                      Open
                    </title>
                    <desc id="desc-ac014">
                      icon that represents the state of the summary
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-black font-bold text-justify">
                 Silahkan kunjungi link dibawah ini agar kamu bisa chat dengan Sandra,
                 <br/><Link href="https://api.whatsapp.com/send/?phone=%2B6282298870101&text&type=phone_number&app_absent=0" className="hover:text-green-500">Chat 
                 Sandra yuk..</Link>
                </p>
              </details>
            </section>
          </div>
        </div>
        {/*<!-- FAQ nya customer --> */}

        {/*<!-- Footer-->*/}
        <footer class="bg-white dark:bg-gray-900">
          <div class="container px-6 py-8 mx-auto">
            <div class="flex flex-col items-center text-center">
              <a href="#">
                <img class="w-auto h-7" src="https://shop.movi.id/img/logos/movi.png" alt="MOVI" />
              </a>

              <p class="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">.</p>

              <div class="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                <button class="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                  <svg class="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z" fill="currentColor"></path>
                  </svg>

                  <span class="mx-1">
                    <Link href="https://www.youtube.com/@MinistryOfVapeIndonesia">
                      Youtube MOVI
                    </Link>
                  </span>
                </button>

                <button class="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  <Link href="https://movi.id/id/shop/">
                    Shops
                  </Link></button>
              </div>
            </div>

            <hr class="my-10 border-gray-200 dark:border-gray-700" />

            <div class="flex flex-col items-center sm:flex-row sm:justify-between">
              <p class="text-sm text-gray-500">
                © Copyright 2023. All Rights Reserved.
              </p>

              <div class="flex mt-3 -mx-2 sm:mt-0">
                <Link href="https://movi.id" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                  MOVI
                </Link>

                <Link href="https://psl.id" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                  PSL
                </Link>

                <Link href="https://portofolio1-beta.vercel.app" class="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </footer>
        {/*<!-- Footer-->*/}

      </div>


    </>
  )
}