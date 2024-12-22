"use client";
import { useState, useEffect, useRef } from "react";
import Carousel from "./carousel/carousel.jsx";
import Image from "next/image";

export default function Tabs({ items }) {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstBtnRef = useRef();
  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div>
      <div>
        <div className="px-8">
          {items.map((item, i) => (
            <button
              ref={i === 0 ? firstBtnRef : null}
              key={i}
              onClick={() => setSelectedTab(i)}
              className={`px-2 outline-none   text-cneter hover:text-cstBrown ${
                selectedTab === i ? 'border-b-2 border-b-cstYellow-light ' : 'text-cstBrown-light'
              } `}
            >
              {item.projectName}
            </button>
          ))}
        </div>
        <div className="px-8 pb-8">
          {items.map((item, i) => (
            <div className="flex flex-col md:flex-row mt-3" key={i}>
              <div className={`" pr-2 basis-1/2  flex-1  ${selectedTab === i ? "" : "hidden"} "`} >
                {item.techSkills}
              </div>
              {item.images ? (
                <div className={`" basis-1/2 ${selectedTab === i ? "" : "hidden"} "`}>
                <Carousel>
                  {item.images.map((s, i) => (
                    <div
                      key={i}
                      className="relative flex-shrink-0 w-full h-full"
                    >
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="100vh"
                        priority={s.isAboveFold}
                      />
                    </div>                    
                  ))}
                </Carousel>
              </div>
              ) : (<></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
