import { cn } from "cn";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export function CaseStudies() {
  return (
    <section id="case-studies" className="w-full scroll-mt-24">
      <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-12 lg:p-16">
        <p className="max-w-2xl text-2xl font-bold tracking-tight md:text-3xl">
          How the Avalanche Team1 program was built.
        </p>

        {/* Case Study — Avalanche Team1 */}
        <Card className="mt-8 gap-0 overflow-hidden bg-black/[0.02] py-0 shadow-none ring-1 ring-black/5">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr]">
            <div className="relative aspect-[16/9] md:aspect-auto md:h-full">
              <Image
                src="/event-picture/Workshop-1.jpg"
                alt="Avalanche Team1 builder workshop"
                fill
                sizes="(min-width: 768px) 200px, 100vw"
                className="object-cover"
              />
            </div>

            <CardHeader className="grid-cols-1 gap-3 px-6 py-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <CardTitle className="font-sans text-xl font-bold md:text-2xl">
                    Avalanche Team1 : 5 University Series
                  </CardTitle>
                  <p className="mt-1 text-sm font-medium text-black/55">
                    Operations Lead
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="h-auto px-2.5 py-1 text-[11px] font-medium text-black/60"
                    >
                      ADR #001
                    </Badge>
                    <Badge className="h-auto border-transparent bg-[#FFCE4E] px-2.5 py-1 text-[11px] font-semibold text-black">
                      200K THB Budget
                    </Badge>
                    <Badge className="h-auto border-transparent bg-[#F84E00] px-2.5 py-1 text-[11px] font-semibold text-white">
                      5 Chapters
                    </Badge>
                  </div>
                </div>
                <Link
                  href="/work/team1"
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "h-auto shrink-0 rounded-full bg-[#F84E00] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#F84E00]/30 transition-all hover:scale-105 hover:bg-[#F84E00]/90 hover:shadow-xl hover:shadow-[#F84E00]/40"
                  )}
                >
                  See the Details
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </CardHeader>
          </div>
        </Card>
      </div>
    </section>
  );
}
