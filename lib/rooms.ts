export type Room = {
  id: string;
  /** Display label, e.g. "2 Sharing — AC" */
  label: string;
  /** Number of people sharing the room */
  sharing: number;
  /** Whether the room has air conditioning */
  ac: boolean;
  /** Price per night for the whole room */
  pricePerNight: number;
  /** Path to room photo under /public */
  image: string;
};

export const rooms: Room[] = [
  {
    id: "1-sharing-nonac",
    label: "1 Sharing — Non-AC",
    sharing: 1,
    ac: false,
    pricePerNight: 899,
    image: "/images/rooms/1-sharing-nonac.jpg",
  },
  {
    id: "2-sharing-nonac",
    label: "2 Sharing — Non-AC",
    sharing: 2,
    ac: false,
    pricePerNight: 1199,
    image: "/images/rooms/2-sharing-nonac.jpg",
  },
  {
    id: "2-sharing-ac",
    label: "2 Sharing — AC",
    sharing: 2,
    ac: true,
    pricePerNight: 1499,
    image: "/images/rooms/2-sharing-ac.jpg",
  },
  {
    id: "3-sharing-nonac",
    label: "3 Sharing — Non-AC",
    sharing: 3,
    ac: false,
    pricePerNight: 1499,
    image: "/images/rooms/3-sharing-nonac.jpg",
  },
  {
    id: "4-sharing-nonac",
    label: "4 Sharing — Non-AC",
    sharing: 4,
    ac: false,
    pricePerNight: 2499,
    image: "/images/rooms/4-sharing-nonac.jpg",
  },
  {
    id: "4-sharing-ac",
    label: "4 Sharing — AC",
    sharing: 4,
    ac: true,
    pricePerNight: 2999,
    image: "/images/rooms/4-sharing-ac.jpg",
  },
];

/** Rooms without AC */
export const nonAcRooms = rooms.filter((r) => !r.ac);

/** Rooms with AC */
export const acRooms = rooms.filter((r) => r.ac);
