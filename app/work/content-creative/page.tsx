import type { Metadata } from "next";
import { ProjectDetailLayout } from "@/components/work/project-detail-layout";

export const metadata: Metadata = {
  title: "Content & Creative Production",
  description: "Content and creative production work by Sanpaphat Porntongprasert.",
};

export default function ContentCreativePage() {
  return (
    <ProjectDetailLayout
      title={<>Content &amp;<br />Creative<br />Production</>}
      titleClassName="text-[clamp(2rem,3.2vw,3.75rem)]"
    />
  );
}
