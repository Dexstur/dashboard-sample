import { TProduct } from "./types";

const names = [
  "Smartphone",
  "Laptop",
  "Headphones",
  "Smartwatch",
  "Tablet",
  "Camera",
  "Monitor",
  "Keyboard",
  "Mouse",
  "Speaker",
  "Gaming Console",
  "External Hard Drive",
  "Router",
  "Printer",
  "Projector",
  "Smart TV",
  "Fitness Tracker",
  "Gaming Headset",
  "VR Headset",
  "External Battery",
  "SSD",
  "Memory Card",
  "Webcam",
  "Tripod",
  "Microphone",
  "Studio Monitor",
  "DJ Controller",
  "Studio Headphones",
  "Gaming Chair",
  "Studio Lighting",
  "External SSD",
  "Smart Home Hub",
  "Smart Bulb",
  "Smart Lock",
  "Smart Thermostat",
  "Smart Plug",
  "Smart Doorbell",
  "Smart Speaker",
  "Smart Scale",
  "Smart Mirror",
  "Smart Oven",
  "Smart Coffee Maker",
  "Smart Fridge",
  "Smart Toaster",
  "Smart Air Purifier",
  "Smart Vacuum",
  "Smart Mop",
  "Smart Window",
  "Smart Curtain",
  "Smart Garden System",
];

const getRandomDate = (start: Date, end: Date): string => {
  const randomTimestamp =
    Math.random() * (end.getTime() - start.getTime()) + start.getTime();
  return new Date(randomTimestamp).toISOString().split("T")[0];
};

const generateMockProducts = (): TProduct[] => {
  const today = new Date();
  const oneYearAgo = new Date(
    today.getFullYear() - 1,
    today.getMonth(),
    today.getDate()
  );

  return Array.from({ length: 52 }, (_, i) => {
    const createdAt = getRandomDate(oneYearAgo, today);
    return {
      id: i + 1,
      name: names[i % names.length],
      price: Math.floor(Math.random() * 1000) + 100,
      stock: Math.floor(Math.random() * 100) + 1,
      sold: Math.floor(Math.random() * 50) + 1,
      ordered: Math.floor(Math.random() * 30) + 1,
      createdAt,
      updatedAt: getRandomDate(new Date(createdAt), today),
    };
  });
};

export const mockProducts: TProduct[] = generateMockProducts();
