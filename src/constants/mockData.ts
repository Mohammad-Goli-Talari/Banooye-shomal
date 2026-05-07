// src/constants/mockData.ts

import { Product } from "@/types/product";
import { Video } from "@/types/video";

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "ترشی هفت بیجار",
    price: 195000,
    image: "/images/pickle1.jpg",
  },
  {
    id: 2,
    title: "رب انار شمالی",
    price: 145000,
    image: "/images/pomegranate.jpg",
  },
  {
    id: 3,
    title: "کته شمالی مخصوص",
    price: 85000,
    image: "/images/rice.jpg",
  },
];

export const mockVideos: Video[] = [
  {
    id: 1,
    title: "آموزش قیمه نذری",
    duration: "12:34",
    thumbnail: "/images/video1.jpg",
  },
  {
    id: 2,
    title: "تهیه ترشی فوری",
    duration: "08:21",
    thumbnail: "/images/video2.jpg",
  },
  {
    id: 3,
    title: "راز کته شمالی خوش‌عطر",
    duration: "05:55",
    thumbnail: "/images/video3.jpg",
  },
];
