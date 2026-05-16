import Banner from "@/components/Banner";
import ChooseWanderlust from "@/components/ChooseWanderlust";
import FeaturedDestination from "@/components/Featured";
import Journey from "@/components/Journey";
import CustomerReview from "@/components/Review";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedDestination />
      <ChooseWanderlust />
      <CustomerReview />
      <Journey />
    </div>
  );
}
