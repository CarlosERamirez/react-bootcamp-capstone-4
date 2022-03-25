import { useFeaturedBanners } from "../utils/hooks/useFeaturedBanners";
import Slider
 from "./common/Slider";
export default function FeaturedBanners() {
  const { data, isLoading } = useFeaturedBanners();

  return <Slider data={data} />;
}
