import { Carousel } from "@/components/common/Carousel";
import EventsList from "@/components/common/EventsList";
import PostsList from "@/components/common/PostsList";
import Services from "@/components/common/Services";

const carouselState = {
  images: [
    "/images/yodt_lg.jpg",
    "/images/yodt_about.png",
    "/images/yodt_services.png",
  ].map((src, index) => ({
    id: String(index),
    src: src,
    alt: `Image ${index + 1}`,
  })),
  autoplay: true,
  interval: 5,
  showArrows: true,
  showDots: true,
};

const page = () => {
  return (
    <main>
      <Carousel carouselState={carouselState} />
      <PostsList />
      <EventsList />
      <Services />
    </main>
  );
};

export default page;
