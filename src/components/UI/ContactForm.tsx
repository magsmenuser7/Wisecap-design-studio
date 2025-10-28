import React, { useState } from 'react';
import { ContactForm as ContactFormType } from '../../types/cms';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<Partial<ContactFormType>>({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    budget: '',
    services: [],
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    '₹5L - ₹10L',
    '₹10L - ₹25L',
    '₹25L - ₹50L',
    '₹50L - ₹1Cr',
    '₹1Cr+'
  ];

  const serviceOptions = [
    'Brand & Identity',
    'Packaging Design',
    'Digital & UX',
    'Editorial & Book',
    'Exhibition & Environmental',
    'Retainer Packages'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services?.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...(prev.services || []), service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceID = 'service_alp1zsm';     // Replace with your EmailJS Service ID
      const templateID = 'template_s720k6c';   // Replace with your EmailJS Template ID
      const publicKey = '3wTsQ9ooVSx-OAMuR';     // Replace with your EmailJS Public Key

      await emailjs.send(serviceID, templateID, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        role: formData.role,
        budget: formData.budget,
        services: formData.services?.join(', '),
        timeline: formData.timeline,
        message: formData.message
      }, publicKey);

      setIsSubmitted(true);
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm text-center">
        <h3 className="text-2xl font-semibold text-[#1E2A47] mb-4">
          Thanks — we'll be in touch within 1 business day.
        </h3>
        <p className="text-[#7B8163]">
          If urgent, call +91 7386092369
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-wc-charcoal mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08A6A8] focus:border-[#08A6A8] transition-colors duration-180"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[#222427] mb-2">
            Company *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08A6A8] focus:border-[#08A6A8] transition-colors duration-180"
          />
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-[#222427] mb-2">
            Role *
          </label>
          <input
            type="text"
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08A6A8] focus:border-[#08A6A8] transition-colors duration-180"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#222427] mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08A6A8] focus:border-[#08A6A8] transition-colors duration-180"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#222427] mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08A6A8] focus:border-[#08A6A8] transition-colors duration-180"
          />
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-[#222427] mb-2">
            Estimated Budget *
          </label>
          <select
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08A6A8] focus:border-[#08A6A8] transition-colors duration-180"
          >
            <option value="">Select budget range</option>
            {budgetOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Services */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-[#222427] mb-3">
          Services Interested In *
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {serviceOptions.map(service => (
            <label key={service} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.services?.includes(service) || false}
                onChange={() => handleServiceChange(service)}
                className="mr-2 text-[#08A6A8] focus:ring-[#08A6A8]"
              />
              <span className="text-sm text-[#222427]">{service}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-6">
        <label htmlFor="timeline" className="block text-sm font-medium text-[#222427] mb-2">
          Project Timeline
        </label>
        <input
          type="text"
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleInputChange}
          placeholder="e.g., 3-6 months, Q2 2024"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08A6A8] focus:border-[#08A6A8] transition-colors duration-180"
        />
      </div>

      {/* Message */}
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-[#222427] mb-2">
          Brief Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Tell us about your brand, project goals, or specific challenges..."
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#08A6A8] focus:border-[#08A6A8] transition-colors duration-180 resize-vertical"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary py-4 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Tell us about your brand'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
