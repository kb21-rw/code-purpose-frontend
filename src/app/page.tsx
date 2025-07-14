import ScrollToTop from "@/components/ui/ScrollToTop";
import { HomePageData } from "@/types/HomePage";
import ComponentParser from "./cms/componentParser";
import getHomePage from "./api/homePage";
import NoHomepageData from "@/components/ui/NoHomepageData";
import SiteLoadError from "@/error/SiteLoadError";
export default async function Home() {
  try {
    const { data: homepage }: { data: HomePageData } = await getHomePage();

    if (!homepage || homepage.sections.length === 0) {
      return <NoHomepageData />;
    }
    return (
      <div>
        <ComponentParser blocks={homepage.sections} />
        <ScrollToTop />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <SiteLoadError />;
  }
}
