import Link from "next/link";
import {
  Scale,
  Gavel,
  Building2,
  Handshake,
  Lightbulb,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";



const services = [

{
title:
"Bankruptcy & Suspension of Payment",

description:
"Strategic representation and legal solutions for restructuring, bankruptcy, and suspension of payment matters.",

icon: Scale,

},


{
title:
"Litigation & Dispute Resolution",

description:
"Effective dispute management and representation in complex commercial and civil disputes.",

icon: Gavel,

},


{
title:
"Merger & Acquisitions",

description:
"Comprehensive legal assistance for corporate transactions, acquisitions, and investments.",

icon: Building2,

},


{
title:
"Arbitration & Alternative Dispute Resolution",

description:
"Professional guidance in arbitration and alternative mechanisms for resolving disputes.",

icon: Handshake,

},


{
title:
"Intellectual Property",

description:
"Protection and enforcement of intellectual property rights for businesses and individuals.",

icon: Lightbulb,

},


{
title:
"Corporate & Commercial",

description:
"Legal advisory for business operations, agreements, compliance, and commercial strategies.",

icon: BriefcaseBusiness,

},


];





export default function Services(){


return (

<section

className="
bg-slate-950
py-24
md:py-32
"

>


<div

className="
mx-auto
max-w-7xl
px-6
lg:px-8
"

>




{/* HEADER */}


<div

className="
max-w-3xl
"

>


<p

className="
mb-6
text-sm
font-semibold
uppercase
tracking-[0.45em]
text-orange-500
"

>

Practice Areas

</p>



<h2

className="
font-heading
text-4xl
font-bold
leading-tight
text-white
md:text-5xl
"

>

Comprehensive Legal

<br/>

Services For Every Need

</h2>



<p

className="
mt-6
text-lg
leading-8
text-slate-300
"

>

Our legal team provides strategic solutions

across various practice areas to support

business growth and protect client interests.

</p>



</div>









{/* SERVICE GRID */}



<div

className="
mt-16
grid
gap-6
md:grid-cols-2
lg:grid-cols-3
"

>


{

services.map((service)=>{


const Icon =
service.icon;



return (


<div

key={service.title}

className="
group
rounded-2xl
border
border-white/10
bg-white/5
p-8
transition
duration-300
hover:-translate-y-2
hover:bg-white/10
"

>


<div

className="
mb-6
flex
h-14
w-14
items-center
justify-center
rounded-xl
bg-orange-500/10
"

>


<Icon

size={30}

className="
text-orange-500
"

/>


</div>





<h3

className="
font-heading
text-2xl
font-semibold
text-white
"

>

{service.title}

</h3>




<p

className="
mt-4
leading-7
text-slate-300
"

>

{service.description}

</p>




<Link

href="/services"

className="
mt-6
inline-flex
items-center
gap-2
text-sm
font-semibold
text-orange-500
transition
group-hover:text-orange-400
"

>

Learn More

<ArrowRight size={16}/>

</Link>




</div>


)


})


}



</div>





</div>


</section>


);


}