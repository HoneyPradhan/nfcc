import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    dayOfBirth: '',
    monthOfBirth: '',
    yearOfBirth: '',
    username: '',
    password: '',
    confirmPassword: '',
    securityQuestion: '',
    securityAnswer: '',
    nfcDeviceId: '',
    preferredNfcTagType: '',
    tagUsagePurpose: '',
    streetAddress: '',
    city: '',
    stateProvince: '',
    postalZipCode: '',
    country: '',
    termsAccepted: false,
    privacyAccepted: false,
    referralCode: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your submission logic here (e.g., API call)
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        {/* Personal Information */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />

        {/* Date of Birth */}
        <div className="dob-selectors">
          <label>Date of Birth:</label>
          <div className="dob-select">
            <select
              name="dayOfBirth"
              value={formData.dayOfBirth}
              onChange={handleChange}
              required
            >
              <option value="">Day</option>
              {[...Array(31)].map((_, index) => (
                <option key={index + 1} value={index + 1}>{index + 1}</option>
              ))}
            </select>
            <select
              name="monthOfBirth"
              value={formData.monthOfBirth}
              onChange={handleChange}
              required
            >
              <option value="">Month</option>
              <option value="01">January</option>
              <option value="02">February</option>
              <option value="03">March</option>
              <option value="04">April</option>
              <option value="05">May</option>
              <option value="06">June</option>
              <option value="07">July</option>
              <option value="08">August</option>
              <option value="09">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select
              name="yearOfBirth"
              value={formData.yearOfBirth}
              onChange={handleChange}
              required
            >
              <option value="">Year</option>
              {[...Array(100)].map((_, index) => {
                const year = new Date().getFullYear() - index;
                return <option key={year} value={year}>{year}</option>;
              })}
            </select>
          </div>
        </div>

        {/* Account Information */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

       
        

        {/* NFC-related Information */}
        <input
          type="text"
          name="nfcDeviceId"
          placeholder="NFC Device ID (if applicable)"
          value={formData.nfcDeviceId}
          onChange={handleChange}
        />
        <input
          type="text"
          name="preferredNfcTagType"
          placeholder="Preferred NFC Tag Type (optional)"
          value={formData.preferredNfcTagType}
          onChange={handleChange}
        />
        <input
          type="text"
          name="tagUsagePurpose"
          placeholder="Tag Usage Purpose"
          value={formData.tagUsagePurpose}
          onChange={handleChange}
        />

        {/* Address Information */}
        <input
          type="text"
          name="streetAddress"
          placeholder="Street Address"
          value={formData.streetAddress}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="stateProvince"
          placeholder="State/Province"
          value={formData.stateProvince}
          onChange={handleChange}
        />
        <input
          type="text"
          name="postalZipCode"
          placeholder="Postal/Zip Code"
          value={formData.postalZipCode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />

       

        {/* Minimal Optional Information */}
        <input
          type="text"
          name="referralCode"
          placeholder="Referral Code (if applicable)"
          value={formData.referralCode}
          onChange={handleChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

