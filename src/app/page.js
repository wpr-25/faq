/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link"
import React, { useState } from "react"

export default function NavbarBasicPreview() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <>
      {/*<!-- Component: Basic Navbar --> */}
      <header className="max-w-7xl mx-auto border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <div><Link href="https://movi.id"><img src="https://shop.movi.id/img/logos/movi.png" className="py-6 h-20" /></Link></div>
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
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
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
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span><Link href="https://movi.id">Home</Link></span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <div
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4  transition-colors duration-300 hover:text-emerald-600 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"

                >
                  <span><Link href="https://movi.id/id/about-ministry-of-vape-indonesia/">About Us</Link></span>
                </div>
              </li>
              <li role="none" className="flex items-stretch">
                <div
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"

                >
                  <span><Link href="https://movi.id/id/shop/">Shop</Link></span>
                </div>
              </li>
              <li role="none" className="flex items-stretch">
                <div
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span><Link href="https://movi.id/id/contact/">Contact</Link></span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Basic Navbar--> */}

      {/*<!-- Component: Basic accordion --> */}
      <div className="max-w-7xl mx-auto py-6">
        <div className="px-4 text-6xl">F.A.Q</div>
        <div className="max-w-7xl mx-auto py-9">
          <section className="w-full divide-y rounded divide-slate-200 ">
            <details className="p-4 group" open>
              <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                Berapa harga pod MOVI KUY dan AFLO dan Cartridge?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac01 desc-ac01"
                >
                  <title id="title-ac01">Open icon</title>
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
                  aria-labelledby="title-ac02 desc-ac02"
                >
                  <title id="title-ac02">Open icon</title>
                  <desc id="desc-ac02">
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
                Ada, berikut list nya
                <br />1 device
                <br />1 cartridge
                <br />1 lanyard
                <br />1 liquid 15ml random
                <br />dengan harga :
                <br />Aflo v1 starterpack : 140
                <br />Kuy v2 starter pack : 140
                <br />Podlott starterpack : 140
                <br />Kuy Gox Starterkit : 250
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
                  aria-labelledby="title-ac03 desc-ac03"
                >
                  <title id="title-ac03">Open icon</title>
                  <desc id="desc-ac03">
                    icon that represents the state of the summary
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <p className="mt-4 text-black font-bold text-justify">
                Ada, Untuk aflo v1 dan kuy v2 memiliki garansi 1 bulan terhitung dari tanggal pembelian dan cartridgenya bergaransi 1 minggu dari tanggal pembelian,
                <br />Untuk aflo joy, kuy saik dan podlott dan cartridgenya bergaransi 1 minggu. Terhitung dari tanggal pembelian
              </p>
            </details>
            <details className="p-4 group">
              <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden text-lg">
                Bagaimana cara claim garansi?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-ac04 desc-ac04"
                >
                  <title id="title-ac04">Open icon</title>
                  <desc id="desc-ac04">
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
                
                <br/>1. Kontak customer care movi.
                <br/>2. Informasikan kendala dari produknya kepada sandra.
                <br/>3. Lampirkan video terkait kendala dari produknya beserta bukti pembelian nya.
                <br/>4  sandra akan mengirim form garansi untuk diisi oleh  yang mengajukan claim. Apabila produknya masih dalam masa garansi
                <br/>5. Kirimkan produk yg terkendala kealamat yang tercantum di form garansi

              </p>
            </details>
            
          </section>
        </div>
      </div>
      {/*<!-- End Basic accordion --> */}

    </>
  )
}