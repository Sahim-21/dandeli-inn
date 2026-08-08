"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type BookingContextType = {
  selectedRoomId: string;
  setSelectedRoomId: (roomId: string) => void;
  selectRoomAndScroll: (roomId: string) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selectedRoomId, setSelectedRoomId] = useState<string>("standard");

  const selectRoomAndScroll = (roomId: string) => {
    setSelectedRoomId(roomId);
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BookingContext.Provider
      value={{ selectedRoomId, setSelectedRoomId, selectRoomAndScroll }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
