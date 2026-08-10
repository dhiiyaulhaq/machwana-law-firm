import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

import Container from "../ui/Container";

import { navigation } from "../../data/navigation";
import { services } from "../../data/services";
import { contact } from "../../data/contact";


const whatsappMessage =
  "Hi Machwana Law Office, I would like to schedule a legal consultation.";


const whatsappLink =
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    whatsappMessage
  )}`;



export default function Footer() {

return (

<footer className="bg-slate-950">


<Container>


<div className="
grid
gap-12
py-16
md:grid-cols-2
lg:grid-cols-4
">



{/* COMPANY */}


<div>


<Image

src="/logo.png"

alt={contact.company}

width={180}

height={60}

className="mb-6 h-auto"

/>



<p className="
max-w-xs
leading-8
text-slate-400
">

Machwana Law Office delivers
strategic legal solutions with
integrity, professionalism, and
commercial insight for businesses
and individuals throughout Indonesia.

</p>



</div>







{/* NAVIGATION */}



<div>


<h3 className="
mb-6
font-serif
text-xl
text-white
">

Quick Links

</h3>



<div className="space-y-4">


{navigation.map((item)=>(


<Link

key={item.name}

href={item.href}

className="
block
text-slate-300
transition
hover:text-orange-400
"

>

{item.name}

</Link>


))}



</div>



</div>









{/* SERVICES */}



<div>


<h3 className="
mb-6
font-serif
text-xl
text-white
">

Practice Areas

</h3>



<div className="space-y-4">


{services.map((service)=>(


<Link

key={service.title}

href="/services"

className="
block
text-slate-300
transition
hover:text-orange-400
"

>

{service.title}

</Link>


))}



</div>


</div>









{/* CONTACT */}



<div>


<h3 className="
mb-6
font-serif
text-xl
text-white
">

Contact

</h3>



<div className="
space-y-5
text-slate-300
">


<p className="leading-7">

{contact.address.street}

<br />

{contact.address.city}

<br />

{contact.address.province}

</p>







<div className="
flex
items-center
gap-4
">


<Phone

className="
h-6
w-6
flex-shrink-0
text-slate-400
"

/>


<span>

{contact.phone}

</span>



</div>









<div className="
flex
items-center
gap-4
">


<Mail

className="
h-6
w-6
flex-shrink-0
text-slate-400
"

/>


<span>

{contact.email}

</span>



</div>









<a

href={whatsappLink}

target="_blank"

rel="noopener noreferrer"

className="
flex
items-center
gap-4
text-slate-400
transition
hover:text-orange-400
"

>


<MessageCircle

className="
h-6
w-6
flex-shrink-0
"

/>


WhatsApp Consultation



</a>









{/* INSTAGRAM CONTACT TETAP */}



<a

href={contact.social.instagram}

target="_blank"

rel="noopener noreferrer"

className="
flex
items-center
gap-4
text-slate-400
transition
hover:text-orange-400
"

>


<svg

xmlns="http://www.w3.org/2000/svg"

viewBox="0 0 24 24"

fill="none"

stroke="currentColor"

strokeWidth="2"

className="
h-6
w-6
flex-shrink-0
"

>

<rect

width="20"

height="20"

x="2"

y="2"

rx="5"

/>


<path

d="
M16 11.37A4 4 0 1 1
12.63 8 4 4 0 0 1
16 11.37z
"

/>


<line

x1="17.5"

x2="17.51"

y1="6.5"

y2="6.5"

/>


</svg>



machwana.lawoffice



</a>




</div>



</div>






</div>









{/* BOTTOM */}



<div className="
border-t
border-slate-800
py-8
flex
flex-col
gap-4
text-sm
text-slate-500
md:flex-row
md:items-center
md:justify-between
">


<p>

© {new Date().getFullYear()} {contact.company}. All Rights Reserved.

</p>



<p>

Built with Next.js & Tailwind CSS

</p>



</div>





</Container>


</footer>


);

}