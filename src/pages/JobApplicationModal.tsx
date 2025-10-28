import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  // List of all open jobs to populate the dropdown
  jobTitles: string[]; 
  // Title of the job the user clicked "Apply Now" on
  initialPosition: string; 
}

const JobApplicationModal: React.FC<ModalProps> = ({ isOpen, onClose, jobTitles, initialPosition }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: initialPosition,
    message: '',
  });

  // Simple handler for all form inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 1. **(Your Logic Here)** Process the form data (e.g., send to API, email service, etc.)
    console.log('Application Submitted:', formData); 

    // 2. Clear the form and close the modal
    alert(`Thank you, ${formData.name}! Your application for ${formData.position} has been submitted.`);
    setFormData({ name: '', email: '', phone: '', position: jobTitles[0] || '', message: '' });
    onClose();
  };
  
  // Set the position to the initial selection when the modal opens
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, position: initialPosition }));
  }, [initialPosition]);


  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all duration-300 relative"
        onClick={e => e.stopPropagation()} // Stop click propagation to prevent closing when clicking inside
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-wc-charcoal hover:text-wc-primary-deep transition"
          aria-label="Close application form"
        >
          <X size={24} />
        </button>
        
        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-serif font-bold text-wc-primary-deep mb-6 border-b pb-3">
            Apply to Wisecap
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* 1. Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-wc-primary-deep mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-wc-primary-teal focus:border-wc-primary-teal transition"
              />
            </div>

            {/* 2. Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-wc-primary-deep mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-wc-primary-teal focus:border-wc-primary-teal transition"
              />
            </div>

            {/* 3. Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-wc-primary-deep mb-1">Phone Number (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-wc-primary-teal focus:border-wc-primary-teal transition"
              />
            </div>

            {/* 4. Select Position */}
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-wc-primary-deep mb-1">Applying For</label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg appearance-none bg-white focus:ring-wc-primary-teal focus:border-wc-primary-teal transition"
              >
                {jobTitles.map((title) => (
                  <option key={title} value={title}>
                    {title}
                  </option>
                ))}
              </select>
            </div>

            {/* 5. Message Box */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-wc-primary-deep mb-1">Your Message / Cover Letter</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us why you believe design is an investment and why you're a fit."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-wc-primary-teal focus:border-wc-primary-teal transition resize-y"
              ></textarea>
            </div>

            {/* 6. Submit Button */}
            <button
              type="submit"
              className="w-full bg-wc-primary-teal text-white py-3 rounded-lg font-semibold hover:bg-wc-primary-deep transition-all duration-300 shadow-md mt-6"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationModal;