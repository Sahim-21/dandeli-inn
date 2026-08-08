export type Room = {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  baseOccupancy: number;
  extraGuestFee: number;
  image: string;
};

export const rooms: Room[] = [
  {
    id: "standard",
    name: "Standard Cottage",
    description: "Cozy forest-side cottage with essential modern comforts and private balcony.",
    pricePerNight: 2500,
    baseOccupancy: 2,
    extraGuestFee: 500,
    image: "/images/rooms/standard.jpg",
  },
  {
    id: "deluxe",
    name: "Deluxe Cottage",
    description: "Spacious wooden cottage featuring direct Kali River views and air conditioning.",
    pricePerNight: 3500,
    baseOccupancy: 3,
    extraGuestFee: 500,
    image: "/images/rooms/deluxe.jpg",
  },
  {
    id: "family",
    name: "Family Cottage",
    description: "Large two-bedroom retreat designed for families or groups exploring Dandeli.",
    pricePerNight: 5000,
    baseOccupancy: 4,
    extraGuestFee: 500,
    image: "/images/rooms/family.jpg",
  },
  {
    id: "tent",
    name: "Riverside Tent",
    description: "Immersive glamping experience right on the riverbank under canopy shade.",
    pricePerNight: 2000,
    baseOccupancy: 2,
    extraGuestFee: 400,
    image: "/images/rooms/tent.jpg",
  },
];
