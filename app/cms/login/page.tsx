import LoginForm from "@/app/components/cms/LoginForm";


export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0B132B] flex items-center justify-center px-6">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-2xl shadow-xl p-8">

          <div className="text-center mb-8">

            <h1 className="text-3xl font-bold text-[#0B132B]">
              Machwana
            </h1>

            <p className="text-gray-500 mt-2">
              CMS Administrator
            </p>

          </div>


          <LoginForm />


        </div>

      </div>

    </main>
  );
}