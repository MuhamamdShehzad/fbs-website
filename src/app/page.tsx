
// This is a Home page of website.
import Faq from "@/components/faq/Faq";
import Feature from "@/components/features/Feature";
import TopContainer from "@/components/topcontainer/TopContainer";
import Vision from "@/components/vision/Vision";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <TopContainer />
      <Vision />
      <Feature />
      <Faq />
    </div>
  );
}
