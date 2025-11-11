import { useState, useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import HNewFooter from "./HNewfooter"
import Header from "./Header"

function formatTime(timeStr) {
  const [hour, minute] = timeStr.split(":")
  const h = Number.parseInt(hour)
  const ampm = h >= 12 ? "PM" : "AM"
  const formattedHour = h % 12 || 12
  return `${formattedHour}:${minute} ${ampm}`
}

const LabTieUpForm = () => {
  const [loading, setLoading] = useState(false)
  const [downloadLoading, setDownloadLoading] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const [formData, setFormData] = useState({
    // Basic Information
    facilityName: "",
    facilityType: "",
    fullAddress: "",
    cityDistrict: "",
    state: "",
    pincode: "", // New pincode field
    googleMapsLocation: "",
    dateOfEstablishment: "",

    // Ownership & Contact Details
    ownerName: "",
    designation: "",
    primaryMobile: "",
    alternateContact: "",
    email: "",
    receptionNumber: "",
    kycDocumentType: "", // New KYC document type field
    kycDocument: null, // New KYC document file

    // Licensing & Accreditation
    labLicenseNumber: "",
    issuingAuthority: "",
    licenseValidTill: "",
    labTechnicianName: "",
    labTechnicianLicenseNumber: "",
    nablAccredited: "",
    otherCertifications: "",
    biomedicalWasteAgreement: "",

    // Infrastructure & Facility
    operatingHours: "",
    daysOfOperation: "",

    // Services Offered
    homeCollectionAvailable: "",
    trainedPhlebotomists: "",
    aayushBrandedKits: "",
    radiologyServicesAvailable: "",
    radiologyModalities: "",
    specialDiagnostics: "",
    dailySampleCapacity: "",
    routineTestTurnaround: "",
    radiologyReportTurnaround: "",
    labRateCard: null, // New lab rate card file

    additionalNotes: "",
  })

  // Check for admin parameter in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setIsAdmin(urlParams.get("admin") === "true")
  }, [])

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
  ]

  const facilityTypes = ["Lab", "Diagnostic", "Radiology", "Multi-specialty"]

  const daysOfOperationOptions = [
    "Monday to Friday",
    "Monday to Saturday",
    "Monday to Sunday",
    "Tuesday to Sunday",
    "Custom Schedule",
  ]

  const kycDocumentTypes = ["Aadhar Card", "PAN Card", "Driving License", "Passport"]

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log(`Field changed: ${name} = ${value}`) // Debug log
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const { name, files } = e.target
    if (files && files[0]) {
      console.log(`File selected for ${name}:`, files[0].name)
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (loading) return

    console.log("Submitting form data:", formData) // Debug log

    // Validate required radio button fields
    const requiredRadioFields = [
      { field: "nablAccredited", label: "NABL Accredited" },
      { field: "biomedicalWasteAgreement", label: "Biomedical Waste Agreement" },
      { field: "homeCollectionAvailable", label: "Home Collection Available" },
      { field: "aayushBrandedKits", label: "Aayush Branded Kits" },
      { field: "radiologyServicesAvailable", label: "Radiology Services Available" },
    ]

    for (const { field, label } of requiredRadioFields) {
      if (!formData[field]) {
        toast.error(`Please select an option for "${label}"`)
        return
      }
    }

    setLoading(true)

    try {
      // Create FormData object for file uploads
      const formDataToSend = new FormData()

      // Add all text fields to FormData
      Object.keys(formData).forEach((key) => {
        if (key !== "kycDocument" && key !== "labRateCard") {
          formDataToSend.append(key, formData[key])
        }
      })

      // Add file fields to FormData
      if (formData.kycDocument) {
        formDataToSend.append("kycDocument", formData.kycDocument)
      }

      if (formData.labRateCard) {
        formDataToSend.append("labRateCard", formData.labRateCard)
      }

      const response = await fetch("https://formbackend-n4tm.onrender.com/api/lab/add", {
        method: "POST",
        body: formDataToSend,
        // Note: Don't set Content-Type header when sending FormData
      })

      const responseData = await response.json()
      console.log("Server response:", responseData) // Debug log

      if (response.ok) {
        toast.success("Lab Tie-up Form submitted successfully!")
        // Reset form
        setFormData({
          facilityName: "",
          facilityType: "",
          fullAddress: "",
          cityDistrict: "",
          state: "",
          pincode: "",
          googleMapsLocation: "",
          dateOfEstablishment: "",
          ownerName: "",
          designation: "",
          primaryMobile: "",
          alternateContact: "",
          email: "",
          receptionNumber: "",
          kycDocumentType: "",
          kycDocument: null,
          labLicenseNumber: "",
          issuingAuthority: "",
          licenseValidTill: "",
          labTechnicianName: "",
          labTechnicianLicenseNumber: "",
          nablAccredited: "",
          otherCertifications: "",
          biomedicalWasteAgreement: "",
          operatingHours: "",
          daysOfOperation: "",
          homeCollectionAvailable: "",
          trainedPhlebotomists: "",
          aayushBrandedKits: "",
          radiologyServicesAvailable: "",
          radiologyModalities: "",
          specialDiagnostics: "",
          dailySampleCapacity: "",
          routineTestTurnaround: "",
          radiologyReportTurnaround: "",
          labRateCard: null,
          additionalNotes: "",
        })
      } else {
        toast.error(responseData.message || "Error submitting form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Error submitting form. Please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async () => {
    if (downloadLoading) return

    setDownloadLoading(true)

    try {
      const response = await fetch("https://formbackend-n4tm.onrender.com/api/lab/download")

      if (!response.ok) {
        throw new Error("Failed to download file")
      }

      const blob = await response.blob()
      const link = document.createElement("a")
      link.href = URL.createObjectURL(blob)
      link.download = "labs.xlsx"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      toast.success("File downloaded successfully")
    } catch (error) {
      console.error("Error downloading file:", error)
      toast.error("Error downloading file")
    } finally {
      setDownloadLoading(false)
    }
  }

  // Custom Radio Button Component
  const RadioButton = ({ name, value, checked, onChange, label, required = false }) => (
    <label className="flex items-center cursor-pointer group">
      <div className="relative">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          required={required}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
            checked ? "border-blue-600 bg-blue-600" : "border-gray-300 bg-white group-hover:border-blue-400"
          }`}
        >
          {checked && (
            <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          )}
        </div>
      </div>
      <span className={`ml-3 text-sm font-medium ${checked ? "text-blue-900" : "text-gray-700"}`}>{label}</span>
    </label>
  )

  return (
    <>
      <Header />
      <div className="bg-white rounded-xl shadow-md overflow-hidden pt-16 flex justify-center">
        <div className="p-8 max-w-[1400px]">
          {/* Company Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/png_footer_aw_1.png?v=1739967055"
              alt="Company Logo"
              className="h-20 object-contain"
            />
          </div>

          {/* Form Title */}
          <h1 className="font-bold text-center text-[#233f8f] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[42px] mb-2">
            Lab registration Form
          </h1>

          <p className="text-center text-gray-600 mb-1">
            Partner with us to expand your diagnostic services and reach more patients
          </p>
          <p className="text-center text-gray-600 mb-6">Building healthcare partnerships for better patient care</p>

          <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
            {/* Basic Information */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-xl bg-white text-gray-900 font-bold">Basic Information</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Center / Lab / Radiology Facility Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="facilityName"
                  value={formData.facilityName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Type of Facility <span className="text-red-500">*</span>
                </label>
                <select
                  name="facilityType"
                  value={formData.facilityType}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Facility Type</option>
                  {facilityTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Full Address<span className="text-red-500">*</span>
              </label>
              <textarea
                name="fullAddress"
                value={formData.fullAddress}
                onChange={handleChange}
                required
                rows={3}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  City / District <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cityDistrict"
                  value={formData.cityDistrict}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  State <span className="text-red-500">*</span>
                </label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Pincode <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{6}"
                  maxLength={6}
                  placeholder="Enter 6-digit pincode"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">Google Maps Location / Link</label>
                <input
                  type="url"
                  name="googleMapsLocation"
                  value={formData.googleMapsLocation}
                  onChange={handleChange}
                  placeholder="https://maps.google.com/..."
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Date of Establishment <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfEstablishment"
                  value={formData.dateOfEstablishment}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Ownership & Contact Details */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-xl bg-white text-gray-900 font-bold">Ownership & Contact Details</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Owner / Authorized Signatory Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Designation/Role <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Mobile Number (Primary Contact) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="primaryMobile"
                  value={formData.primaryMobile}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">Alternate Contact Number</label>
                <input
                  type="tel"
                  name="alternateContact"
                  value={formData.alternateContact}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">Reception / Front Desk Number</label>
                <input
                  type="tel"
                  name="receptionNumber"
                  value={formData.receptionNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  KYC Document Type 
                </label>
                <select
                  name="kycDocumentType"
                  value={formData.kycDocumentType}
                  onChange={handleChange}
                 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Document Type</option>
                  {kycDocumentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Upload KYC Document 
                </label>
                <input
                  type="file"
                  name="kycDocument"
                  onChange={handleFileChange}
                  
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">Accepted formats: JPG, PNG, PDF (Max: 5MB)</p>
              </div>
            </div>

            {/* Licensing & Accreditation */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-xl bg-white text-gray-900 font-bold">Licensing & Accreditation</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Lab License Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="labLicenseNumber"
                  value={formData.labLicenseNumber}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Issuing Authority Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="issuingAuthority"
                  value={formData.issuingAuthority}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  License Valid Till <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="licenseValidTill"
                  value={formData.licenseValidTill}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Lab Technician Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="labTechnicianName"
                  value={formData.labTechnicianName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Lab Technician/pathologist license Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="labTechnicianLicenseNumber"
                value={formData.labTechnicianLicenseNumber}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-medium text-gray-700 mb-4">
                  NABL Accredited? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8">
                  <RadioButton
                    name="nablAccredited"
                    value="Yes"
                    checked={formData.nablAccredited === "Yes"}
                    onChange={handleChange}
                    label="Yes"
                    required={true}
                  />
                  <RadioButton
                    name="nablAccredited"
                    value="No"
                    checked={formData.nablAccredited === "No"}
                    onChange={handleChange}
                    label="No"
                    required={true}
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-4">
                  Biomedical Waste Disposal Agreement? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8">
                  <RadioButton
                    name="biomedicalWasteAgreement"
                    value="Yes"
                    checked={formData.biomedicalWasteAgreement === "Yes"}
                    onChange={handleChange}
                    label="Yes"
                    required={true}
                  />
                  <RadioButton
                    name="biomedicalWasteAgreement"
                    value="No"
                    checked={formData.biomedicalWasteAgreement === "No"}
                    onChange={handleChange}
                    label="No"
                    required={true}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Other Certifications (ISO, CAP, etc.)</label>
              <input
                type="text"
                name="otherCertifications"
                value={formData.otherCertifications}
                onChange={handleChange}
                placeholder="e.g., ISO 15189, CAP, etc."
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Infrastructure & Facility */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-xl bg-white text-gray-900 font-bold">Infrastructure & Facility</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Operating Hours <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="time"
                    name="openTime"
                    value={formData.openTime || ""}
                    onChange={(e) => {
                      const open = e.target.value
                      const close = formData.closeTime || ""
                      const formatted = open && close ? `${formatTime(open)} - ${formatTime(close)}` : ""
                      setFormData({
                        ...formData,
                        openTime: open,
                        operatingHours: formatted,
                      })
                    }}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <span className="mt-2">to</span>
                  <input
                    type="time"
                    name="closeTime"
                    value={formData.closeTime || ""}
                    onChange={(e) => {
                      const close = e.target.value
                      const open = formData.openTime || ""
                      const formatted = open && close ? `${formatTime(open)} - ${formatTime(close)}` : ""
                      setFormData({
                        ...formData,
                        closeTime: close,
                        operatingHours: formatted,
                      })
                    }}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Days of Operation <span className="text-red-500">*</span>
                </label>
                <select
                  name="daysOfOperation"
                  value={formData.daysOfOperation}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Days of Operation</option>
                  {daysOfOperationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Services Offered */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-xl bg-white text-gray-900 font-bold">Services Offered</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block font-medium text-gray-700 mb-4">
                  Home Collection Service Available? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8">
                  <RadioButton
                    name="homeCollectionAvailable"
                    value="Yes"
                    checked={formData.homeCollectionAvailable === "Yes"}
                    onChange={handleChange}
                    label="Yes"
                    required={true}
                  />
                  <RadioButton
                    name="homeCollectionAvailable"
                    value="No"
                    checked={formData.homeCollectionAvailable === "No"}
                    onChange={handleChange}
                    label="No"
                    required={true}
                  />
                </div>
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-4">
                  Ready to Use Aayush-Branded Kits? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8">
                  <RadioButton
                    name="aayushBrandedKits"
                    value="Yes"
                    checked={formData.aayushBrandedKits === "Yes"}
                    onChange={handleChange}
                    label="Yes"
                    required={true}
                  />
                  <RadioButton
                    name="aayushBrandedKits"
                    value="No"
                    checked={formData.aayushBrandedKits === "No"}
                    onChange={handleChange}
                    label="No"
                    required={true}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  No. of Trained Phlebotomists for Home Collection
                </label>
                <input
                  type="number"
                  name="trainedPhlebotomists"
                  value={formData.trainedPhlebotomists}
                  onChange={handleChange}
                  min="0"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-4">
                  Radiology Services Available? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-8">
                  <RadioButton
                    name="radiologyServicesAvailable"
                    value="Yes"
                    checked={formData.radiologyServicesAvailable === "Yes"}
                    onChange={handleChange}
                    label="Yes"
                    required={true}
                  />
                  <RadioButton
                    name="radiologyServicesAvailable"
                    value="No"
                    checked={formData.radiologyServicesAvailable === "No"}
                    onChange={handleChange}
                    label="No"
                    required={true}
                  />
                </div>
              </div>
            </div>

            {formData.radiologyServicesAvailable === "Yes" && (
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Modalities Available (X-Ray, CT, MRI, etc.)
                </label>
                <input
                  type="text"
                  name="radiologyModalities"
                  value={formData.radiologyModalities}
                  onChange={handleChange}
                  placeholder="e.g., X-Ray, CT Scan, MRI, Ultrasound"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            )}

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Other Special Diagnostics (e.g., RT-PCR, Histopathology)
              </label>
              <input
                type="text"
                name="specialDiagnostics"
                value={formData.specialDiagnostics}
                onChange={handleChange}
                placeholder="e.g., RT-PCR, Histopathology, Cytology"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Daily Sample Handling Capacity <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="dailySampleCapacity"
                  value={formData.dailySampleCapacity}
                  onChange={handleChange}
                  placeholder="e.g., 100-200 samples/day"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Routine Test Turnaround Time <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="routineTestTurnaround"
                  value={formData.routineTestTurnaround}
                  onChange={handleChange}
                  placeholder="e.g., 4-6 hours, Same day"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">Radiology Report Turnaround Time</label>
                <input
                  type="text"
                  name="radiologyReportTurnaround"
                  value={formData.radiologyReportTurnaround}
                  onChange={handleChange}
                  placeholder="e.g., 2-4 hours, Same day"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Upload Lab Rate Card <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                name="labRateCard"
                onChange={handleFileChange}
                required
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max: 10MB)</p>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">Additional Notes</label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows={3}
                placeholder="Any additional information you'd like to share"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className={`px-8 py-3 font-medium rounded-md shadow-sm transition-colors ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                }`}
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0" />
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit Lab Tie-Up Form"
                )}
              </button>
            </div>

            {/* Admin Download Button */}
            {isAdmin && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={handleDownload}
                  disabled={downloadLoading}
                  className={`px-6 py-3 font-medium rounded-md shadow-sm transition-colors ${
                    downloadLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700 text-white focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  }`}
                >
                  {downloadLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0" />
                      </svg>
                      Downloading...
                    </div>
                  ) : (
                    "Download Excel Report"
                  )}
                </button>
              </div>
            )}
          </form>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
      <HNewFooter />
    </>
  )
}

export default LabTieUpForm
