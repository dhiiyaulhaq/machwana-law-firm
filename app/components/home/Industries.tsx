import {
  Landmark,
  Factory,
  Building2,
  Laptop,
  Hospital,
  Home,
} from "lucide-react";

import Card from "../ui/Card";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const industries = [
  {
    title: "Banking & Finance",
    description:
      "Supporting financial institutions, lenders, investors, and corporate financing transactions.",
    icon: Landmark,
  },
  {
    title: "Manufacturing",
    description:
      "Providing legal advice for industrial operations, supply chains, employment, and commercial agreements.",
    icon: Factory,
  },
  {
    title: "Property & Real Estate",
    description:
      "Advising developers, investors, and businesses in property acquisitions and development projects.",
    icon: Home,
  },
  {
    title: "Technology",
    description:
      "Supporting technology companies with commercial contracts, compliance, and intellectual property matters.",
    icon: Laptop,
  },
  {
    title: "Healthcare",
    description:
      "Providing strategic legal support for healthcare providers, clinics, hospitals, and medical businesses.",
    icon: Hospital,
  },
  {
    title: "Corporate & Commercial",
    description:
      "Delivering practical legal solutions across a wide range of corporate and commercial sectors.",
    icon: Building2,
  },
];

export default function Industries() {
  return (
    <Section background="light">
      <Container>

        <SectionTitle
          eyebrow="Industries"
          title="Industries We Serve"
          description="Our commercial understanding enables us to deliver practical legal advice tailored to the unique challenges of each industry."
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry) => {

            const Icon = industry.icon;

            return (

              <Card
                key={industry.title}
                className="flex h-full flex-col items-start"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50">

                  <Icon
                    size={28}
                    strokeWidth={2.3}
                    className="text-orange-500"
                  />

                </div>

                <h3 className="heading-md mt-8">
                  {industry.title}
                </h3>

                <p className="body mt-5 flex-grow">
                  {industry.description}
                </p>

              </Card>

            );

          })}

        </div>

      </Container>
    </Section>
  );
}