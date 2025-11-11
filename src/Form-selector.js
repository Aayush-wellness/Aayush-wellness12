
import { useState, useEffect } from "react"
import DoctorOnboardForm from "./DoctorOnBoardForm"
import FranchiseOnBoardForm from "./FranchiseOnBoardForm"
import HospitalOnBoardForm from "./HospitalOnBoardForm"
import PathologyPartnershipForm from "./PathologyOnBoardForm"
import HealthAgentForm from "./HealthAgentForm"
import { ChevronDown, ChevronUp } from "lucide-react"

function FormSelector() {
  const [selectedForm, setSelectedForm] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [expandedForms, setExpandedForms] = useState({})

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  const formOptions = [
    {
      id: "doctor",
      title: "Doctor Registration",
      description: "Register as a healthcare provider in our network",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-blue"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      ),
      form: <DoctorOnboardForm />,
    },
    {
      id: "franchise",
      title: "Franchise Partnership",
      description: "Join our healthcare network as a franchise partner",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-purple"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      form: <FranchiseOnBoardForm />,
    },
    {
      id: "hospital",
      title: "Hospital Registration",
      description: "Register your hospital with our healthcare network",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-sky"
        >
          <rect x="3" y="8" width="18" height="12" rx="2"></rect>
          <path d="M17 8v-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2"></path>
          <line x1="12" y1="12" x2="12" y2="16"></line>
          <line x1="10" y1="14" x2="14" y2="14"></line>
        </svg>
      ),
      form: <HospitalOnBoardForm />,
    },
    {
      id: "pathology",
      title: "Pathology Partnership",
      description: "Partner with us for pathology and diagnostic services",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-green"
        >
          <path d="M15 3h.01"></path>
          <path d="M15 9h.01"></path>
          <path d="M9 21h.01"></path>
          <path d="M9 15h.01"></path>
          <path d="M9 9h.01"></path>
          <path d="M9 3h.01"></path>
          <path d="M15 21h.01"></path>
          <path d="M15 15h.01"></path>
          <path d="M4.5 7.5l3-3"></path>
          <path d="M19.5 16.5l-3 3"></path>
          <path d="M19.5 7.5l-3-3"></path>
          <path d="M4.5 16.5l3 3"></path>
          <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
      ),
      form: <PathologyPartnershipForm />,
    },
    {
      id: "earn",
      title: "Earn Extra",
      description: "Become a health agent and earn additional income",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-amber"
        >
          <rect x="4" y="3" width="16" height="18" rx="2"></rect>
          <path d="M9 17h6"></path>
          <path d="M9 13h6"></path>
          <path d="M9 9h6"></path>
        </svg>
      ),
      form: <HealthAgentForm />,
    },
  ]

  const toggleFormExpansion = (formId, e) => {
    e.stopPropagation()
    setExpandedForms((prev) => ({
      ...prev,
      [formId]: !prev[formId],
    }))
  }

  const handleFormSelect = (form) => {
    setSelectedForm(form)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="form-selector-container ">
      <div className="form-options-grid ">
        {formOptions.map((option) => (
          <div key={option.id} onClick={() => handleFormSelect(option)} className="form-option-card">
            <div className="form-option-header">
              <div className="form-option-icon">{option.icon}</div>
              <div className="chevron-icon">
                {selectedForm?.id === option.id && isModalOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
            <div className="form-option-content">
              <h3 className="form-option-title">{option.title}</h3>
              <p className="form-option-description">{option.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className={`modal-content ${selectedForm?.id === "doctor" ? "doctor-modal" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title">
                
              </div>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>
            <div className="modal-body">{selectedForm?.form}</div>
          </div>
        </div>
      )}

      {/* CSS Styles */}
      <style jsx>{`
        .form-selector-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 16px;
        }
        
        .form-options-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
        }
        
        @media (min-width: 768px) {
          .form-options-grid {
            flex-wrap: nowrap;
          }
        }
        
        .form-option-card {
          flex: 1;
          min-width: 200px;
          max-width: 100%;
          border: 1px solid #233f8f;
          border-radius: 8px;
          padding: 20px;
          cursor: pointer;
          background-color: white;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .form-option-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          margin-bottom: 16px;
        }

        .chevron-icon {
          color: #94a3b8;
          transition: transform 0.2s ease;
        }
        
        .form-option-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #f8fafc;
        }
        
        .dropdown-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .chevron-icon {
          color: #94a3b8;
          transition: transform 0.2s ease;
        }
        
        .icon-blue {
          color: #4f46e5;
        }
        
        .icon-purple {
          color: #8b5cf6;
        }
        
        .icon-sky {
          color: #0ea5e9;
        }
        
        .icon-green {
          color: #10b981;
        }
        
        .icon-amber {
          color: #f59e0b;
        }
        
        .form-option-title {
          font-weight: 600;
          font-size: 16px;
          margin-top: 0;
          margin-bottom: 4px;
          color: #1e293b;
        }
        
        .form-option-description {
          color: #64748b;
          font-size: 14px;
          margin: 0;
          line-height: 1.4;
        }
        
        .form-dropdown-content {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e2e8f0;
          animation: slideDown 0.2s ease-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .form-select-button {
          width: 100%;
          padding: 8px 16px;
          background-color: #4f46e5;
          color: white;
          border: none;
          border-radius: 4px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .form-select-button:hover {
          background-color: #4338ca;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
        }
        
        .modal-content {
          background-color: white;
          border-radius: 12px;
          width: 95%;
          max-width: 800px; /* Increased for large screens */
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          position: relative;
          display: flex;
          flex-direction: column;
        }
        
        /* Special styles for the doctor modal */
        .doctor-modal {
          max-width: 1000px; /* Even larger for doctor modal */
          width: 95%;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 24px 24px 16px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .modal-title h2 {
          font-size: 20px;
          font-weight: 600;
          margin: 0 0 8px 0;
          color: #1e293b;
        }
        
        .modal-title p {
          color: #64748b;
          margin: 0;
          font-size: 14px;
        }
        
        .modal-close {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          color: #64748b;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s;
        }
        
        .modal-close:hover {
          color: #1e293b;
        }
        
        .modal-body {
          padding: 24px;
          flex: 1;
          overflow-y: auto;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .form-option-card {
            min-width: 100%;
          }
          
          .modal-content {
            width: 100%;
            height: 100%;
            max-height: 100%;
            border-radius: 0;
          }
          
          .modal-header {
            padding: 16px;
          }
          
          .modal-body {
            padding: 16px;
          }
        }
        
        /* Medium screens */
        @media (min-width: 769px) and (max-width: 1024px) {
          .modal-content {
            width: 90%;
            max-height: 85vh;
          }
        }
        
        /* Large screens */
        @media (min-width: 1025px) {
          .modal-content {
            width: 85%;
            max-height: 80vh;
          }
          
          .doctor-modal {
            width: 80%;
          }
        }
      `}</style>
    </div>
  )
}

export default FormSelector


