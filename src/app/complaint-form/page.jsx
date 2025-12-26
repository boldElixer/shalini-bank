'use client';

import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './complaint.module.css';

// --- DROPDOWN DATA (Same as before) ---
const complaintCategories = {
  "Credit Score/Bureau Related/CIC": {
    "Bureau Record Correction": ["Loan details incorrectly reflected in the Bureau report", "Fraudulent Bureau Enquiry", "Incorrect loan reflecting in Bureau report"],
    "Bureau Updation not done": ["Deficiency in updating Bureau/CIC records"]
  },
  "Debit Cards": {
    "Debit Card Dispatch related": ["Debit Card not received"],
    "ECOM/POS Transaction dispute": ["Account debited but not credited to merchant", "Multiple debts", "Goods/Services not rendered", "Refund not received for cancelled goods"],
    "PIN related": ["Unable to generate Green PIN", "PIN not working at ATM"],
    "Usage related": ["Unable to use Card"],
    "Debit Card Blocking": ["Card block/unblock"]
  },
  "Mobile Banking": {
    "Digital Banking usage issue": ["Unable to access mobile banking", "Unable to add beneficiary"],
    "Internal Fund Transfer": ["Amount debited but not credited to beneficiary", "Fraudulent Fund transfer"],
    "NEFT/RTGS": ["NEFT/RTGS credit not issued", "Amount debited but not credited to beneficiary"]
  },
  "Savings/Currect Account/Deposits": {
    "Account Service/Operation Related": ["Delay in credit of interest", "Account block not removed", "Dorman account not activated"],
    "ATM transaction dispute": ["Cash not dispensed/partial cash dispensed"],
    "FD/RD related": ["Auto sweep not done", "Delay in FD/RD opening", "Incorrect interest received for FD/RD", "Dispute related to premature closure of FD/RD", "FD/RD renewal related issues", "FD advice/RD passbook not received"],
    "Incorrect Levy of Charges": ["Dispute on ATM charge on declined transaction", "Dispute on Cash handling charges", "Dispute on Cheque return charges", "Dispute on Debit card issuance/annual charges"],
    "Personal/Demographic/Re-KYC changes": ["Demographic details not updated(Address/Mobile/Email/PAN)", "KYC/Re-KYC not updated", "Nominee not updated", "Signatory/Joint Holder not updated", "Incorrect personal details updated"],
    "Saving/Current - Account Opening related": ["Delay in account opening/Credit of initial funding of account", "Account opened with incorrect details", "Savings/Deposit refund not received"],
    "TDS related": ["Non-receipt/Delay in receiving TDS certificate", "Incorrect/Wrong TDS deducted", "TDS deducted inspite of submission of Form 15G/15H", "Mismatch of TDS in Form 26AS"]
  },
  "UPI": {
    "Transaction related": ["Amount debited but not credited to beneficiary", "Credit not received", "Unable to initiate UPI transaction", "Multiple debits"]
  },
  "Loan": {
    "Closure related": ["Delay in closure of loan", "NOC not issued post loan closure", "Delay in foreclosure of loan", "Delay in receipt of documents/securities on repayment of loan"],
    "Collections/Recovery Related": ["Recovery/Repossession of assets", "Collection calls received inspite of making payment", "Delay in settlement/account not zeroised", "Payment made towards loan repayment but not credited", "Collection call received beyond business hours"],
    "Documents related": ["Delay in issuance of documents"],
    "EMI/payment related": ["Change in EMI/tenure not done", "EMI not debited", "Payment made but not credited to loan account", "Multiple/Incorrect debit of EMI", "Dispute on rate of interest/EMI amount"],
    "Interest and charges": ["Anomaly/Incorrect interest calculation", "Delay in refund of excess amount", "Foreclosure charges dispute", "Processing fees dispute"],
    "Loans processing and sanction": ["Delay in loan sanction/loan not sanctioned", "List of documents related", "Loan not sanctioned - Government scheme"],
    "Statements/Interest certificate": ["Interest/Provisional certificate not received"]
  },
  "NACH/ECS Mandate": {
    "Mandate related": ["Mandate updated, amount not debited", "Incorrect amount debited", "EMI debited/EMI debit date changed without prior intimation", "Mandate cancellation not done", "Mandate submitted, not updated"]
  }
};

export default function ComplaintForm() {
  const [formData, setFormData] = useState({
    name: '',
    customerType: 'customer', 
    accountNumber: '',
    employeeId: '',     // New Field
    mobile: '',
    email: '',
    grievance: '',
    issueCategory: '',
    issueDesc: '',
    complaint: ''
  });

  // --- DERIVED STATE FOR LOGIC ---
  const isApplicant = formData.customerType === 'applicant';
  const isEmployee = formData.customerType === 'employee';

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Logic when switching Customer Types
    if (name === 'customerType') {
      setFormData(prev => ({ 
        ...prev, 
        [name]: value,
        // Clear Acc No if Applicant (since it gets disabled)
        accountNumber: value === 'applicant' ? '' : prev.accountNumber,
        // Clear Employee ID if not Employee
        employeeId: value !== 'employee' ? '' : prev.employeeId
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleL1Change = (e) => {
    setFormData(prev => ({ ...prev, grievance: e.target.value, issueCategory: '', issueDesc: '' }));
  };

  const handleL2Change = (e) => {
    setFormData(prev => ({ ...prev, issueCategory: e.target.value, issueDesc: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Complaint Submitted Successfully!");
  };

  return (
    <>
      <Head>
        <title>Complaint Form - SSB Bank</title>
        <meta name="description" content="Submit your complaint to Shalini Sahakari Bank Ltd." />
      </Head>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.container}>
          
          <div className={styles.header}>
            <h1 className={styles.title}>Complaint Form</h1>
          </div>

          <div className={styles.formCard}>
            <div className={styles.warningBox}>
              <strong>Note:</strong>  Do not provide any sensitive data in the complaint/inquiry box below, such as Card Number, PIN, CVV, Login ID, Password, etc.
            </div>

            <form onSubmit={handleSubmit}>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Name <span className={styles.required}>*</span></label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Enter Full Name" 
                  className={styles.input} 
                  required 
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Customer Type <span className={styles.required}>*</span></label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="customerType" value="customer" className={styles.radioInput} checked={formData.customerType === 'customer'} onChange={handleChange} />
                    Customer
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="customerType" value="applicant" className={styles.radioInput} checked={formData.customerType === 'applicant'} onChange={handleChange} />
                    Applicant - Non Customer
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="customerType" value="employee" className={styles.radioInput} checked={formData.customerType === 'employee'} onChange={handleChange} />
                    Employee (On Behalf Of Customer)
                  </label>
                </div>
              </div>

              {/* --- DYNAMIC ROW: Account Number & Employee ID --- */}
              <div className={isEmployee ? styles.row : ''}>
                
                {/* Account Number */}
                <div className={styles.formGroup}>
                  <label className={styles.label}>
                    Account Number {!isApplicant && <span className={styles.required}>*</span>}
                  </label>
                  <input 
                    type="text" 
                    pattern="[0-9]{15}"
                    name="accountNumber"
                    placeholder={isApplicant ? "Not applicable" : "Enter 15-digit Account No."} 
                    className={styles.input} 
                    // Disabled ONLY if Applicant
                    disabled={isApplicant}
                    // Mandatory for Customer AND Employee (Everyone except Applicant)
                    required={!isApplicant}
                    value={formData.accountNumber}
                    onChange={handleChange}
                    style={isApplicant ? { backgroundColor: '#f0f0f0', color: '#999', cursor: 'not-allowed' } : {}}
                  />
                </div>

                {/* Employee ID (Only visible if Employee) */}
                {isEmployee && (
                  <div className={styles.formGroup}>
                    <label className={styles.label}>
                      Employee ID <span className={styles.required}>*</span>
                    </label>
                    <input 
                      type="text" 
                      name="employeeId"
                      placeholder="Enter Employee ID" 
                      className={styles.input} 
                      required 
                      value={formData.employeeId}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Registered Mobile Number <span className={styles.required}>*</span></label>
                  <input type="tel" name="mobile" pattern="[6-9]{1}[0-9]{9}" placeholder="e.g., 9876543210" className={styles.input} required onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email ID <span className={styles.required}>*</span></label>
                  <input type="email" name="email" placeholder="e.g., email@gmail.com" className={styles.input} required onChange={handleChange} />
                </div>
              </div>

              {/* Cascading Dropdowns */}
              <div className={styles.formGroup}>
                <label className={styles.label}>Grievance (Category) <span className={styles.required}>*</span></label>
                <select name="grievance" className={styles.select} required value={formData.grievance} onChange={handleL1Change}>
                  <option value="">Select Grievance</option>
                  {Object.keys(complaintCategories).map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {formData.grievance && (
                <div className={styles.formGroup}>
                  <label className={styles.label}>Issue Category <span className={styles.required}>*</span></label>
                  <select name="issueCategory" className={styles.select} required value={formData.issueCategory} onChange={handleL2Change}>
                    <option value="">Select Issue Category</option>
                    {Object.keys(complaintCategories[formData.grievance]).map((subCat) => (
                      <option key={subCat} value={subCat}>{subCat}</option>
                    ))}
                  </select>
                </div>
              )}

              {formData.issueCategory && (
                <div className={styles.formGroup}>
                  <label className={styles.label}>Issue Description <span className={styles.required}>*</span></label>
                  <select name="issueDesc" className={styles.select} required value={formData.issueDesc} onChange={handleChange}>
                    <option value="">Select Issue Description</option>
                    {complaintCategories[formData.grievance][formData.issueCategory].map((desc) => (
                      <option key={desc} value={desc}>{desc}</option>
                    ))}
                  </select>
                </div>
              )}

              <div className={styles.formGroup}>
                <label className={styles.label}>Complaint/Inquiry<span className={styles.required}>*</span> (Max 1000 characters)</label>
                <textarea name="complaint" className={styles.textarea} maxLength="1000" placeholder="Describe your issue here..." required onChange={handleChange}></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>Submit Form</button>

            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}