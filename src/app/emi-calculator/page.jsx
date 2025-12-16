'use client';

import { useState, useEffect, useMemo } from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './emi.module.css';

// --- HELPERS ---
const formatCurrency = (val) => 
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

const numberToWords = (num) => {
  // Simple approximation for demo (50k, 1L etc)
  if (num >= 10000000) return (num / 10000000).toFixed(2) + ' Crore';
  if (num >= 100000) return (num / 100000).toFixed(2) + ' Lakh';
  if (num >= 1000) return (num / 1000).toFixed(2) + ' Thousand';
  return num;
};

export default function EMICalculator() {
  // --- STATE ---
  const [amount, setAmount] = useState(500000); // 5 Lakh default
  const [rate, setRate] = useState(10.5);       // 10.5% default
  const [tenureType, setTenureType] = useState('custom'); // '12m', '2y', 'custom'
  const [tenureMonths, setTenureMonths] = useState(60);   // Default 5 years (60m)
  
  const [expandedYears, setExpandedYears] = useState({}); // Track which years are open in table

  // Update Tenure when preset buttons are clicked
  const handleTenurePreset = (type) => {
    setTenureType(type);
    if (type === '12m') setTenureMonths(12);
    else if (type === '2y') setTenureMonths(24);
    // if custom, we leave tenureMonths as is (or reset to a default if needed)
  };

  // --- CALCULATION ENGINE ---
  const calculation = useMemo(() => {
    const P = amount;
    const R = rate / 12 / 100; // Monthly Interest Rate
    const N = tenureMonths;

    // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const emiRaw = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const emi = Math.round(emiRaw);

    const totalPayable = emi * N;
    const totalInterest = totalPayable - P;

    // --- GENERATE SCHEDULE ---
    let balance = P;
    let currentYear = new Date().getFullYear();
    let currentMonthIdx = new Date().getMonth(); // 0 = Jan
    
    const schedule = [];
    let yearlyData = [];
    
    // Yearly Aggregators
    let yearPrincipal = 0;
    let yearInterest = 0;
    let yearTotal = 0;

    for (let i = 1; i <= N; i++) {
      // Calculate Interest for this month
      let interestComponent = Math.round(balance * R);
      let principalComponent = emi - interestComponent;

      // Adjust for last month to ensure 0 balance
      if (i === N) {
        principalComponent = balance;
        // Recalculate EMI for last month slightly if needed to match exact balance
        // For simplicity in display, we usually just force balance to 0
      }

      balance = balance - principalComponent;
      if (balance < 0) balance = 0;

      // Add to Yearly Totals
      yearPrincipal += principalComponent;
      yearInterest += interestComponent;
      yearTotal += (principalComponent + interestComponent);

      // Current Month Name
      const monthDate = new Date();
      monthDate.setMonth(currentMonthIdx + (i - 1));
      const mName = monthDate.toLocaleString('default', { month: 'short' });
      const yName = monthDate.getFullYear();

      // Push Row
      yearlyData.push({
        month: mName,
        year: yName,
        principal: principalComponent,
        interest: interestComponent,
        total: principalComponent + interestComponent,
        balance: balance
      });

      // Check if Year Ends or Loan Ends
      const nextMonthDate = new Date();
      nextMonthDate.setMonth(currentMonthIdx + i);
      
      if (nextMonthDate.getFullYear() > yName || i === N) {
        // Push the Year Group to schedule
        schedule.push({
            year: yName,
            rows: yearlyData,
            totalPrincipal: yearPrincipal,
            totalInterest: yearInterest,
            totalPayment: yearTotal,
            endBalance: balance
        });

        // Reset for next year
        yearlyData = [];
        yearPrincipal = 0;
        yearInterest = 0;
        yearTotal = 0;
      }
    }

    return { emi, totalPayable, totalInterest, schedule };

  }, [amount, rate, tenureMonths]);


  // Toggle Table Rows
  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  return (
    <>
      <Head><title>EMI Calculator - SSB Bank</title></Head>
      <Header />
      
      <div className={styles.wrapper}>
        
        {/* Page Header */}
        <div className={styles.header}>
            <div className={styles.container}>
                <h1>Personal Loan EMI Calculator</h1>
                <p>Use our Personal Loan Calculator to get insights on your loan plan!</p>
            </div>
        </div>

        <div className={styles.container}>
          
          {/* CALCULATOR CARD */}
          <div className={styles.card}>
            
            {/* LEFT: INPUTS */}
            <div className={styles.inputPanel}>
                
                {/* 1. AMOUNT */}
                <div className={styles.fieldGroup}>
                    <div className={styles.inputHeader}>
                        <label className={styles.fieldLabel}>Loan Amount</label>
                        <span className={styles.valueDisplay}>{formatCurrency(amount)}</span>
                    </div>
                    <input 
                        type="range" 
                        min="50000" max="10000000" step="10000"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className={styles.slider}
                    />
                    <div className={styles.sliderLabels}>
                        <span>₹50K</span>
                        <span>₹1 Cr</span>
                    </div>
                    <div style={{fontSize:'0.8rem', color:'#888', marginTop:'5px'}}>
                        {numberToWords(amount)}
                    </div>
                </div>

                {/* 2. INTEREST RATE */}
                <div className={styles.fieldGroup}>
                    <div className={styles.inputHeader}>
                        <label className={styles.fieldLabel}>Interest Rate (p.a)</label>
                        <span className={styles.valueDisplay}>{rate}%</span>
                    </div>
                    <input 
                        type="range" 
                        min="8" max="24" step="0.1"
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        className={styles.slider}
                    />
                    <div className={styles.sliderLabels}>
                        <span>8%</span>
                        <span>24%</span>
                    </div>
                </div>

                {/* 3. DURATION */}
                <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Loan Tenure</label>
                    <div className={styles.tenureGroup}>
                        <button 
                            className={`${styles.tenureBtn} ${tenureType === '12m' ? styles.activeTenure : ''}`}
                            onClick={() => handleTenurePreset('12m')}
                        >12 Month</button>
                        <button 
                            className={`${styles.tenureBtn} ${tenureType === '2y' ? styles.activeTenure : ''}`}
                            onClick={() => handleTenurePreset('2y')}
                        >2 Years</button>
                        <button 
                            className={`${styles.tenureBtn} ${tenureType === 'custom' ? styles.activeTenure : ''}`}
                            onClick={() => handleTenurePreset('custom')}
                        >Custom</button>
                    </div>

                    {/* Custom Slider (Visible only if Custom selected) */}
                    {tenureType === 'custom' && (
                        <div className={styles.customDurationWrapper}>
                            <div className={styles.inputHeader} style={{marginBottom:'0.5rem'}}>
                                <span style={{fontSize:'0.9rem', color:'#666'}}>Duration:</span>
                                <span style={{fontWeight:'bold', color:'var(--color-primary-blue)'}}>
                                    {Math.floor(tenureMonths/12)} Years {tenureMonths%12} Months
                                </span>
                            </div>
                            <input 
                                type="range" 
                                min="12" max="120" step="1"
                                value={tenureMonths}
                                onChange={(e) => setTenureMonths(Number(e.target.value))}
                                className={styles.slider}
                            />
                            <div className={styles.sliderLabels}>
                                <span>1 Year</span>
                                <span>10 Years</span>
                            </div>
                        </div>
                    )}
                </div>

            </div>

            {/* RIGHT: RESULTS */}
            <div className={styles.resultPanel}>
                
                <div className={styles.emiLabel}>Monthly EMI</div>
                <div className={styles.emiValue}>{formatCurrency(calculation.emi)}</div>

                <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Loan Amount</span>
                    <span className={styles.summaryVal}>{formatCurrency(amount)}</span>
                </div>
                <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Total Interest</span>
                    <span className={styles.summaryVal} style={{color:'var(--color-primary-red)'}}>
                        {formatCurrency(calculation.totalInterest)}
                    </span>
                </div>
                
                <hr className={styles.divider} />

                <div className={styles.summaryItem} style={{fontSize:'1.2rem', marginTop:'1rem'}}>
                    <span className={styles.summaryLabel}>Total Payable</span>
                    <span className={styles.summaryVal}>{formatCurrency(calculation.totalPayable)}</span>
                </div>

                <button className={styles.applyBtn}>Apply for Loan</button>

            </div>

          </div>

          {/* AMORTIZATION SCHEDULE */}
          <div className={styles.scheduleSection}>
            <h3 className={styles.scheduleHeader}>Loan Repayment Schedule</h3>
            
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th style={{width:'20%'}}>Year / Month</th>
                        <th style={{width:'20%'}}>Principal Paid</th>
                        <th style={{width:'20%'}}>Interest Charged</th>
                        <th style={{width:'20%'}}>Total Payment</th>
                        <th style={{width:'20%'}}>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {calculation.schedule.map((yearData) => (
                        <>
                            {/* YEAR ROW (Clickable) */}
                            <tr key={yearData.year} className={styles.yearRow} onClick={() => toggleYear(yearData.year)}>
                                <td className={styles.yearCell}>
                                    <span className={`${styles.toggleIcon} ${expandedYears[yearData.year] ? styles.rotated : ''}`}>
                                        ▼
                                    </span>
                                    {yearData.year}
                                </td>
                                <td style={{fontWeight:'bold'}}>{formatCurrency(yearData.totalPrincipal)}</td>
                                <td style={{fontWeight:'bold'}}>{formatCurrency(yearData.totalInterest)}</td>
                                <td style={{fontWeight:'bold'}}>{formatCurrency(yearData.totalPayment)}</td>
                                <td style={{fontWeight:'bold'}}>{formatCurrency(yearData.endBalance)}</td>
                            </tr>

                            {/* MONTHLY ROWS (Conditional) */}
                            {expandedYears[yearData.year] && yearData.rows.map((row, idx) => (
                                <tr key={`${yearData.year}-${idx}`} className={styles.monthRow}>
                                    <td>{row.month}</td>
                                    <td>{formatCurrency(row.principal)}</td>
                                    <td>{formatCurrency(row.interest)}</td>
                                    <td>{formatCurrency(row.total)}</td>
                                    <td>{formatCurrency(row.balance)}</td>
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>
          </div>

        </div>

      </div>
      <Footer />
    </>
  );
}