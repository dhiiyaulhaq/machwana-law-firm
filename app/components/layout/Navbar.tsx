"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { navigation } from "../../data/navigation";


const whatsappMessage =
  "Hi Machwana Law Office, I would like to schedule a legal consultation.";


const whatsappLink =
  `https://wa.me/628118692778?text=${encodeURIComponent(
    whatsappMessage
  )}`;





export default function Navbar() {


  const pathname = usePathname();


  const [isScrolled,setIsScrolled] =
    useState(false);


  const [isOpen,setIsOpen] =
    useState(false);





  useEffect(()=>{


    const handleScroll = ()=>{

      setIsScrolled(
        window.scrollY > 50
      );

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return ()=>{

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[]);






return (


<header

className={`
fixed
inset-x-0
top-0
z-50
transition-all
duration-300

${
isScrolled

?
"bg-white/95 shadow-lg backdrop-blur-md"

:

"bg-transparent"

}

`}

>




<div

className="
mx-auto
flex
h-24
max-w-7xl
items-center
justify-between
px-6
lg:px-8
"

>







{/* LOGO */}


<Link href="/">


<Image

src="/logo.png"

alt="Machwana Law Office"

width={190}

height={60}

priority

className="
w-[155px]
lg:w-[185px]
"

/>


</Link>









{/* DESKTOP MENU */}



<nav

className="
hidden
items-center
gap-10
lg:flex
"

>


{
navigation.map((item)=>{


const active =
pathname === item.href;



return (


<Link

key={item.name}

href={item.href}


className={`

group

relative

text-sm

font-semibold

uppercase

tracking-[0.18em]

transition


${
active

?

"text-orange-500"

:

isScrolled

?

"text-slate-900 hover:text-orange-500"

:

"text-white hover:text-orange-300"

}

`}


>


{item.name}



<span

className={`

absolute

left-0

-bottom-2

h-0.5

bg-orange-500

transition-all

duration-300


${
active
?
"w-full"
:
"w-0 group-hover:w-full"
}

`}

/>



</Link>


)


})


}


</nav>









{/* CTA */}



<a


href={whatsappLink}

target="_blank"

rel="noopener noreferrer"


className={`

hidden

rounded-full

px-7

py-3

text-sm

font-semibold

transition

lg:inline-flex



${
isScrolled

?

"bg-orange-500 text-white hover:bg-orange-600"

:

"bg-orange-500 text-white hover:bg-orange-600"

}

`}

>


Consultation


</a>










{/* MOBILE BUTTON */}



<button


onClick={()=>setIsOpen(!isOpen)}


className={`

lg:hidden


${
isScrolled

?

"text-slate-900"

:

"text-white"

}

`}


aria-label="Menu"



>


{

isOpen

?

<X size={32}/>

:

<Menu size={32}/>

}


</button>





</div>









{/* MOBILE MENU */}



{

isOpen && (


<div

className="
border-t
border-slate-200
bg-white
lg:hidden
"

>


<nav

className="
flex
flex-col
px-6
py-6
"

>


{
navigation.map((item)=>{


const active =
pathname === item.href;



return (


<Link

key={item.name}

href={item.href}

onClick={()=>setIsOpen(false)}


className={`

rounded-xl

px-4

py-4

text-sm

font-semibold

uppercase

tracking-wide


${
active

?

"bg-orange-50 text-orange-600"

:

"text-slate-800 hover:bg-slate-100"

}

`}


>


{item.name}


</Link>


)


})


}




<a

href={whatsappLink}

target="_blank"

rel="noopener noreferrer"


className="
mt-5
rounded-full
bg-orange-500
py-4
text-center
font-semibold
text-white
"


>

Consultation


</a>



</nav>


</div>


)

}



</header>


);


}