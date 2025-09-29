"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Novel } from "@/_lib/api/novelsApi";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

type NovelsSectionProps = {
  novels: Novel[];
  onSearch: (query: string) => void;
};

export default function NovelsSection({
  novels,
  onSearch,
}: NovelsSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const slidesCount = novels?.length ?? 0;
  const enableLoop = slidesCount >= 3;

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <section className="relative w-full overflow-hidden rounded-2xl bg-gray-900 py-20 text-white sm:py-28">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <div className="flex justify-center gap-6 lg:justify-start">
            <button className="text-sm font-semibold tracking-wider text-gray-400">
              COMICS
            </button>
            <button className="relative text-sm font-semibold tracking-wider text-white">
              NOVELS
              <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-pink-500"></span>
            </button>
            <button className="text-sm font-semibold tracking-wider text-gray-400">
              MANGA
            </button>
          </div>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Welcome to My Novel Realm, Home of Creativity!
          </h1>
          <p className="mt-4 max-w-lg text-gray-300 mx-auto lg:mx-0">
            Novel Realms is a platform where creativity thrives. Authors can
            showcase their work, connect with readers, and build their own
            universes.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <input
              type="text"
              placeholder="Search for novels..."
              className="rounded-l-full bg-gray-800 px-4 py-3 text-white focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="rounded-r-full bg-pink-600 px-6 py-3 font-semibold transition-transform duration-200 hover:bg-pink-700 active:scale-95"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        <div className="relative h-[450px] w-full">
          {slidesCount === 0 ? (
            <div className="flex h-full w-full items-center justify-center rounded-xl border border-dashed border-white/10">
              <p className="text-gray-400">Nenhuma história encontrada.</p>
            </div>
          ) : (
            <>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                loop={enableLoop}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 80,
                  depth: 200,
                  modifier: 1,
                  slideShadows: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                modules={[EffectCoverflow, Navigation]}
                className="h-full w-full"
              >
                {novels.map((novel) => (
                  <SwiperSlide key={novel.id} className="!w-[280px] h-full">
                    <div className="h-full w-full overflow-hidden rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={novel.coverImageBase64}
                        alt={`Capa de ${novel.title}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute inset-y-0 z-10 flex w-full items-center justify-between">
                <button className="swiper-button-prev-custom -ml-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20">
                  <ChevronLeft size={24} />
                </button>
                <button className="swiper-button-next-custom -mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20">
                  <ChevronRight size={24} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
