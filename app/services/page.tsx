import Navbar from "../components/layout/Navbar";
import Footer from "../components/home/Footer";
import ContactCTA from "../components/home/ContactCTA";

import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Card from "../components/ui/Card";

import PageHero from "../components/shared/PageHero";

import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Practice Areas"
        title="Legal Services"
        description="Comprehensive legal services designed to support businesses and individuals through every stage of growth and legal challenges."
      />

      <Section background="white">
        <Container>
          <SectionTitle
            eyebrow="Our Expertise"
            title="Comprehensive Legal Solutions"
            description="We combine legal expertise with commercial understanding to deliver practical and strategic advice across multiple practice areas."
            align="center"
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Card key={service.title}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                    <Icon
                      size={30}
                      className="text-orange-500"
                    />
                  </div>

                  <h3 className="heading-md mt-8">
                    {service.title}
                  </h3>

                  <p className="body mt-5">
                    {service.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <ContactCTA />

      <Footer />
    </>
  );
}