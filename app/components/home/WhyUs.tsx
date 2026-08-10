import {
  Scale,
  ShieldCheck,
  BriefcaseBusiness,
  Users,
} from "lucide-react";

import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const reasons = [
  {
    title: "Strategic Legal Advice",
    description:
      "We deliver legal strategies that align with our clients' business goals and long-term success.",
    icon: Scale,
  },
  {
    title: "Professional Integrity",
    description:
      "Integrity, confidentiality, and professionalism are at the core of every legal service we provide.",
    icon: ShieldCheck,
  },
  {
    title: "Commercial Perspective",
    description:
      "Our advice combines legal expertise with commercial understanding to produce practical solutions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Long-Term Partnership",
    description:
      "We strive to become trusted legal partners by providing responsive communication and reliable support.",
    icon: Users,
  },
];

export default function WhyUs() {
  return (
    <Section background="white">
      <Container>

        <SectionTitle
          eyebrow="Why Choose Us"
          title="Why Clients Choose Machwana Law Office"
          description="We believe exceptional legal services are built on trust, strategic thinking, and a deep understanding of every client's objectives."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {reasons.map((reason) => {

            const Icon = reason.icon;

            return (
              <Card
                key={reason.title}
                className="flex h-full items-start gap-5"
              >

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50">

                  <Icon
                    size={28}
                    strokeWidth={2.3}
                    className="text-orange-500"
                  />

                </div>

                <div>

                  <h3 className="heading-md">
                    {reason.title}
                  </h3>

                  <p className="body mt-4">
                    {reason.description}
                  </p>

                </div>

              </Card>
            );

          })}

        </div>

      </Container>
    </Section>
  );
}