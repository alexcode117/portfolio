import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import Experiences from "@/components/Experiences";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <Experiences />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
