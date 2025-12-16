'use client';

import { useState, useMemo } from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './emi.module.css';
import Image from 'next/image';

// --- HELPERS ---
const formatCurrency = (val) => 
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

const numberToWords = (num) => {
  if (!num) return '';
  if (num >= 10000000) return (num / 10000000).toFixed(2) + ' Crore';
  if (num >= 100000) return (num / 100000).toFixed(2) + ' Lakh';
  if (num >= 1000) return (num / 1000).toFixed(2) + ' Thousand';
  return num;
};

export default function EMICalculator() {
  // --- STATE ---
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(10.5);
  const [tenureType, setTenureType] = useState('2y'); 
  const [tenureMonths, setTenureMonths] = useState(24);   
  
  const [expandedYears, setExpandedYears] = useState({});

  // --- CALCULATION ENGINE ---
  const calculation = useMemo(() => {
    const P = amount || 0;
    const R = rate / 12 / 100;
    const N = tenureMonths;

    let emi = 0;
    let totalPayable = 0;
    let totalInterest = 0;
    let schedule = [];

    if (P > 0 && R > 0 && N > 0) {
        // EMI Formula
        const emiRaw = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
        emi = Math.round(emiRaw);

        totalPayable = emi * N;
        totalInterest = totalPayable - P;

        // Schedule Logic
        let balance = P;
        let currentMonthIdx = new Date().getMonth();
        let yearlyData = [];
        
        let yearPrincipal = 0;
        let yearInterest = 0;
        let yearTotal = 0;

        for (let i = 1; i <= N; i++) {
          let interestComponent = Math.round(balance * R);
          let principalComponent = emi - interestComponent;

          // Last month adjustment
          if (i === N) {
            principalComponent = balance;
          }

          balance = balance - principalComponent;
          if (balance < 0) balance = 0;

          yearPrincipal += principalComponent;
          yearInterest += interestComponent;
          yearTotal += (principalComponent + interestComponent);

          const monthDate = new Date();
          monthDate.setMonth(currentMonthIdx + (i - 1));
          const mName = monthDate.toLocaleString('default', { month: 'short' });
          const yName = monthDate.getFullYear();

          yearlyData.push({
            month: mName,
            year: yName,
            principal: principalComponent,
            interest: interestComponent,
            total: principalComponent + interestComponent,
            balance: balance
          });

          // Check Year End or Loan End
          const nextMonthDate = new Date();
          nextMonthDate.setMonth(currentMonthIdx + i);
          
          if (nextMonthDate.getFullYear() > yName || i === N) {
            schedule.push({
                year: yName,
                rows: yearlyData,
                totalPrincipal: yearPrincipal,
                totalInterest: yearInterest,
                totalPayment: yearTotal,
                endBalance: balance
            });
            yearlyData = [];
            yearPrincipal = 0; yearInterest = 0; yearTotal = 0;
          }
        }
    }

    return { emi, totalPayable, totalInterest, schedule };

  }, [amount, rate, tenureMonths]);

  const handleTenurePreset = (type) => {
    setTenureType(type);
    if (type === '12m') setTenureMonths(12);
    else if (type === '2y') setTenureMonths(24);
  };

  const toggleYear = (year) => {
    setExpandedYears(prev => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <>
      <Head><title>EMI Calculator - SSB Bank</title></Head>
      <Header />
      
      <div className={styles.wrapper}>
        <div className={styles.header}>
            <div className={styles.container}>
                <h1>Loan EMI Calculator</h1>
            </div>
        </div>

        <div className={styles.container}>
          
          <div className={styles.card}>
            <div className={styles.inputPanel}>
                <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>Loan Amount</label>
                    <div className={styles.currencyWrapper}>
                        <span className={styles.currencySymbol}>₹</span>
                        <input 
                            type="number" 
                            className={styles.amountInput}
                            value={amount}
                            // Using standard input handler
                            onChange={(e) => setAmount(Number(e.target.value))}
                            placeholder="Enter Amount"
                        />
                    </div>
                    <div style={{fontSize:'0.85rem', color:'#888', marginTop:'8px'}}>
                        {numberToWords(amount)}
                    </div>
                </div>

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
                                min="6" max="120" step="1"
                                value={tenureMonths}
                                onChange={(e) => setTenureMonths(Number(e.target.value))}
                                className={styles.slider}
                            />
                            <div className={styles.sliderLabels}>
                                <span>6 Months</span>
                                <span>10 Years</span>
                            </div>
                        </div>
                    )}
                </div>

            </div>

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

                <div className={styles.summaryItem}>
                    <span className={styles.summaryLabel}>Total Payable</span>
                    <span className={styles.summaryVal}>{formatCurrency(calculation.totalPayable)}</span>
                </div>

                <button className={styles.applyBtn}>Apply for Loan</button>
            </div>

          </div>

          {calculation.schedule.length > 0 && (
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
                                <tr key={yearData.year} className={styles.yearRow} onClick={() => toggleYear(yearData.year)}>
                                    <td className={styles.yearCell}>
                                        <span className={`${styles.toggleIcon} ${expandedYears[yearData.year] ? styles.rotated : ''}`}>
                                            <Image src="/caret.svg" alt="Caret Icon" width={24} height={24} />
                                        </span>
                                        {yearData.year}
                                    </td>
                                    <td style={{fontWeight:'bold'}}>{formatCurrency(yearData.totalPrincipal)}</td>
                                    <td style={{fontWeight:'bold'}}>{formatCurrency(yearData.totalInterest)}</td>
                                    <td style={{fontWeight:'bold'}}>{formatCurrency(yearData.totalPayment)}</td>
                                    <td style={{fontWeight:'bold'}}>{formatCurrency(yearData.endBalance)}</td>
                                </tr>
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
          )}
        <div className={styles.disclaimer}>
            <p>Disclaimer: Our Loan EMI calculator offers estimated monthly installments which are indicative and tentative and are based upon the details populated by the user. Actual loan terms and eligibility are subject to bank approval. For precise loan details, consult our representatives before decisions based on these estimates.</p>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}