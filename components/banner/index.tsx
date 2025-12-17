import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from "@/components/ui";
import Image from "next/image";
import Img1 from "./image/cloud-server.png";
import Img2 from "./image/4. Metaverse Glasses3.png";

function Banner() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {[Img1, Img2].map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="relative aspect-square h-[400px] flex items-center justify-center p-6">
                  <Image src={img} fill alt="baner" className="object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Banner;
