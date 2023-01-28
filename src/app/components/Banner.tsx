'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";


export default function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                interval={5000}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
            >
                <div>
                    <Image
                        loading="lazy"
                        src="https://links.papareact.com/gi1"
                        alt="banner 1"
                        width={1000}
                        height={400}
                    />
                </div>

                <div>
                <Image
                        loading="lazy"
                        src="https://links.papareact.com/6ff"
                        alt="banner 2"
                        width={1000}
                        height={400}
                    />
                </div>

                <div>
                <Image
                        loading="lazy"
                        src="https://links.papareact.com/7ma"
                        alt="banner 3"
                        width={1000}
                        height={400}
                    />
                </div>
            </Carousel>
        </div>

    )
}
