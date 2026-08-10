"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });


  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(false);



  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  }





  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();


    setLoading(true);

    setStatus("");



    try {


      const response = await fetch(
        "/api/contact",
        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

          },


          body:
            JSON.stringify(formData),

        }
      );



      const data =
        await response.json();




      if (data.success) {


        setStatus(
          "Thank you. Your message has been sent successfully."
        );


        setFormData({

          name: "",

          email: "",

          phone: "",

          subject: "",

          message: "",

        });



      } else {


        setStatus(
          "Failed to send message. Please try again."
        );


      }



    } catch (error) {


      console.error(error);


      setStatus(
        "Something went wrong. Please try again."
      );


    }



    setLoading(false);


  }





  return (

    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-6"
    >



      <input
        name="name"
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full rounded-2xl border border-slate-200 px-6 py-4 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
      />





      <input
        name="email"
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full rounded-2xl border border-slate-200 px-6 py-4 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
      />





      <input
        name="phone"
        type="tel"
        placeholder="WhatsApp Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full rounded-2xl border border-slate-200 px-6 py-4 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
      />





      <input
        name="subject"
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
        className="w-full rounded-2xl border border-slate-200 px-6 py-4 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
      />





      <textarea
        name="message"
        rows={6}
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full rounded-2xl border border-slate-200 px-6 py-4 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
      />





      <button
        type="submit"
        disabled={loading}
        className="btn-primary flex items-center gap-3 disabled:opacity-50"
      >

        {
          loading
          ? "Sending..."
          : "Send Message"
        }


        <ArrowRight size={18} />

      </button>





      {
        status && (

          <p className="mt-4 text-sm text-orange-500">

            {status}

          </p>

        )

      }





    </form>

  );

}