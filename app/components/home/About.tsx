import Link from "next/link";
import { ArrowRight, Scale, ShieldCheck, BriefcaseBusiness } from "lucide-react";


export default function About() {


return (

<section

className="
bg-white
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


<div

className="
grid
gap-16
lg:grid-cols-2
lg:items-center
"

>







{/* LEFT CONTENT */}



<div>


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

Who We Are

</p>





<h2

className="
font-heading
text-4xl
font-bold
leading-tight
text-slate-900
md:text-5xl
"

>


Committed to Legal

<br/>

Excellence & Strategic

<br/>

Solutions


</h2>






<p

className="
mt-8
max-w-xl
text-lg
leading-8
text-slate-600
"

>


Machwana Law Office provides strategic legal

solutions for corporations, entrepreneurs,

investors, and individuals.


</p>





<p

className="
mt-5
max-w-xl
leading-8
text-slate-600
"

>


We combine legal expertise, commercial

understanding, and practical approaches to

help our clients navigate complex legal

challenges with confidence.


</p>








<Link

href="/our-firm"


className="
mt-10
inline-flex
items-center
gap-3
rounded-full
bg-orange-500
px-7
py-4
font-semibold
text-white
transition
hover:bg-orange-600
"

>


Discover Our Firm


<ArrowRight size={18}/>


</Link>



</div>










{/* RIGHT SIDE */}



<div

className="
grid
gap-6
sm:grid-cols-2
"

>







<div

className="
rounded-2xl
border
border-slate-200
bg-slate-50
p-8
transition
hover:-translate-y-1
hover:shadow-xl
"

>


<Scale

className="
mb-6
text-orange-500
"

size={38}


/>



<h3

className="
font-heading
text-2xl
font-semibold
text-slate-900
"

>


Legal Excellence


</h3>


<p

className="
mt-4
leading-7
text-slate-600
"

>


Providing accurate and strategic legal

solutions tailored to every client.


</p>



</div>








<div

className="
rounded-2xl
border
border-slate-200
bg-slate-50
p-8
transition
hover:-translate-y-1
hover:shadow-xl
"

>



<ShieldCheck

className="
mb-6
text-orange-500
"

size={38}


/>



<h3

className="
font-heading
text-2xl
font-semibold
text-slate-900
"

>


Integrity


</h3>


<p

className="
mt-4
leading-7
text-slate-600
"

>


Maintaining professionalism,

confidentiality, and trust.


</p>



</div>








<div

className="
rounded-2xl
border
border-slate-200
bg-slate-50
p-8
sm:col-span-2
transition
hover:-translate-y-1
hover:shadow-xl
"

>



<BriefcaseBusiness

className="
mb-6
text-orange-500
"

size={38}


/>



<h3

className="
font-heading
text-2xl
font-semibold
text-slate-900
"

>


Business Understanding


</h3>


<p

className="
mt-4
max-w-xl
leading-7
text-slate-600
"

>


Understanding commercial objectives to

deliver practical legal strategies that

support long-term growth.


</p>



</div>







</div>






</div>


</div>


</section>


);


}