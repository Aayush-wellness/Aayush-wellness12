
import { useState } from "react"
import DoctorOnboardForm from "./DoctorOnBoardForm"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function DoctorOnboardPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="font-bold text-center  text-[#233f8f] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] ">Doctor Registration Portal</h1>
          <p className="mt-2 text-lg text-gray-600">Join our network of healthcare professionals</p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 px-6 py-3 bg-[#233f8f] text-white font-medium rounded-md shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            {showForm ? "Hide Registration Form" : "Start Registration"}
            {showForm ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
        </div>

        {/* Collapsible Form */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${showForm ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          {showForm && <DoctorOnboardForm />}
        </div>
      </div>
    </div>
  )
}

