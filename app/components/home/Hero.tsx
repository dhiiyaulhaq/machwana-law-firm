import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


const whatsappMessage =
  "Hi Machwana Law Office, I would like to schedule a legal consultation.";


const whatsappLink =
  `https://wa.me/628118692778?text=${encodeURIComponent(
    whatsappMessage
  )}`;



export default function Hero() {


return (

<section

className="
relative
flex
min-h-screen
items-center
overflow-hidden
"

>





{/* Background Image */}


<Image

src="/images/hero-building.jpg"

alt="Machwana Law Office"

fill

priority

quality={95}

sizes="100vw"

className="
object-cover
object-center
"

/>






{/* Dark Overlay */}


<div

className="
absolute
inset-0
bg-gradient-to-r
from-slate-950/95
via-slate-950/75
to-slate-950/20
"

/>







{/* Bottom Fade */}


<div

className="
absolute
bottom-0
left-0
right-0
h-48
bg-gradient-to-t
from-white
to-transparent
"

/>







{/* Content */}



<div

className="
relative
z-10
mx-auto
w-full
max-w-7xl
px-6
pt-32
lg:px-8
"

>


<div

className="
max-w-3xl
"

>




{/* Small Label */}



<p

className="
mb-8
text-sm
font-semibold
uppercase
tracking-[0.45em]
text-orange-500
"

>

Machwana Law Office

</p>







{/* Heading */}



<h1

className="
font-heading
text-5xl
font-bold
leading-[1.05]
text-white
md:text-6xl
lg:text-7xl
"

>


Trusted Legal

<br/>


Solutions for

<br/>


Business Growth


</h1>







{/* Description */}



<p

className="
mt-8
max-w-xl
text-lg
leading-8
text-slate-200
"

>


Machwana Law Office provides strategic legal counsel

for corporations, entrepreneurs, investors, and

individuals with professionalism, integrity,

and commercial insight.


</p>








{/* Buttons */}



<div

className="
mt-12
flex
flex-wrap
gap-5
"

>




{/* Consultation */}



<a

href={whatsappLink}

target="_blank"

rel="noopener noreferrer"


className="
inline-flex
items-center
gap-3
rounded-full
bg-orange-500
px-8
py-4
font-semibold
text-white
transition
hover:bg-orange-600
"

>


Schedule Consultation


<ArrowRight size={18}/>


</a>







{/* Services */}



<Link

href="/services"


className="
rounded-full
border
border-white/30
bg-white/10
px-8
py-4
font-semibold
text-white
backdrop-blur-md
transition
hover:bg-white
hover:text-slate-900
"

>


Explore Services


</Link>





</div>





</div>



</div>






</section>


);


}