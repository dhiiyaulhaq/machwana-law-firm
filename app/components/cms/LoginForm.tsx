"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginForm(){

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState("");
  const [loading,setLoading] = useState(false);


  async function handleSubmit(
    e:React.FormEvent
  ){

    e.preventDefault();

    setLoading(true);
    setError("");


    try{

      const response =
        await fetch(
          "/api/auth/login",
          {
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              email,
              password
            })
          }
        );


      const data =
        await response.json();


      if(!response.ok){

        throw new Error(
          data.message || "Login failed"
        );

      }


      router.push(
        "/cms/dashboard"
      );


    }catch(err:any){

      setError(
        err.message
      );

    }
    finally{

      setLoading(false);

    }

  }



return (

<form
onSubmit={handleSubmit}
className="space-y-5"
>


<div>

<label className="block text-sm">
Email
</label>

<input

type="email"

value={email}

onChange={
(e)=>setEmail(e.target.value)
}

className="
w-full
mt-2
border
rounded-lg
px-4
py-3
"

/>

</div>



<div>

<label className="block text-sm">
Password
</label>


<input

type="password"

value={password}

onChange={
(e)=>setPassword(e.target.value)
}

className="
w-full
mt-2
border
rounded-lg
px-4
py-3
"

/>

</div>



{
error &&

<p className="text-red-500 text-sm">
{error}
</p>

}



<button

disabled={loading}

className="
w-full
bg-orange-500
text-white
rounded-lg
py-3
"

>

{
loading
?
"Loading..."
:
"Login"
}

</button>


</form>

);

}