export type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
};

export const reviews: GoogleReview[] = [
  {
    author_name: "Ananya Sharma",
    rating: 5,
    relative_time_description: "a week ago",
    text: "An absolute slice of paradise in Dandeli! The riverside views right from our Deluxe Cottage balcony were breathtaking. Staff were incredibly hospitable, helping us organize rafting and wildlife safaris smoothly. Will definitely visit again!",
  },
  {
    author_name: "Rahul Deshmukh",
    rating: 5,
    relative_time_description: "2 weeks ago",
    text: "We stayed in the Riverside Tent for a weekend getaway. Falling asleep to the soothing sound of the Kali river was therapeutic. Food at the restaurant was authentic local Karavali style and delicious. 10/10 recommendation!",
  },
  {
    author_name: "Vikram Malhotra",
    rating: 5,
    relative_time_description: "a month ago",
    text: "Great location for families. Clean cottages, lush greenery, and wonderful evening bonfire with BBQ. Very responsive staff who made sure our stay was comfortable throughout.",
  },
  {
    author_name: "Pooja Hegde",
    rating: 5,
    relative_time_description: "2 months ago",
    text: "Booked directly through their site. The best price guarantee held true and check-in was seamless. The nature trail right outside the lodge was a highlight — we spotted several hornbills!",
  },
  {
    author_name: "Siddharth Rao",
    rating: 5,
    relative_time_description: "3 months ago",
    text: "Serene ambience, peaceful environment away from town noise, yet just 5 mins from Dandeli bus stand. Perfect spot to unwind amidst nature.",
  },
];
