import Container from "../ui/Container";
import Section from "../ui/Section";


const indicators = [
  {
    value: "100+",
    label: "Cases Handled",
  },
  {
    value: "Business & Individual",
    label: "Legal Focus",
  },
  {
    value: "Indonesia",
    label: "Legal Coverage",
  },
  {
    value: "Confidential",
    label: "Client Approach",
  },
];



export default function TrustIndicators() {

  return (

    <Section background="white">


      <Container>


        <div className="border-y border-slate-200 py-16">


          {/* Header */}


          <div className="mb-14 text-center">


            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">

              Machwana Law Office

            </p>



            <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-slate-900 md:text-5xl">

              Legal Expertise
              <br />
              Built For Business

            </h2>



            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

              Providing strategic legal counsel for businesses
              and individuals through comprehensive legal
              expertise, commercial understanding, and
              professional responsibility.

            </p>


          </div>





          {/* Indicators */}


          <div className="grid divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0">


            {indicators.map((item) => (

              <div
                key={item.label}
                className="px-6 py-8 text-center"
              >


                <h3 className="font-heading text-2xl font-bold leading-tight text-slate-900 md:text-3xl">

                  {item.value}

                </h3>



                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-orange-500">

                  {item.label}

                </p>


              </div>

            ))}


          </div>



        </div>


      </Container>


    </Section>

  );

}