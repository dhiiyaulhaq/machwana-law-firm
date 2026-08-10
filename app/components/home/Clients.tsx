import Image from "next/image";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";

const clients = [
  "/images/clients/client-1.png",
  "/images/clients/client-2.png",
  "/images/clients/client-3.png",
  "/images/clients/client-4.png",
  "/images/clients/client-5.png",
  "/images/clients/client-6.png",
];

export default function Clients() {
  return (
    <Section background="light">

      <Container>

        <SectionTitle
          eyebrow="Our Clients"
          title="Trusted by Businesses"
          description="We are proud to work with corporations, entrepreneurs, and institutions across a wide range of industries."
          align="center"
        />

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

          {clients.map((logo, index) => (

            <div
              key={index}
              className="flex h-36 items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <Image
                src={logo}
                alt={`Client ${index + 1}`}
                width={140}
                height={70}
                className="max-h-16 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
              />

            </div>

          ))}

        </div>

      </Container>

    </Section>
  );
}