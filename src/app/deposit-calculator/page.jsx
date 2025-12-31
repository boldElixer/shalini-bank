'use client';

import { useState, useEffect, Fragment } from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './calculator.module.css';
import Image from 'next/image';
import Link from 'next/link';

const formatCurrency = (val) => 
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

const formatDate = (date) => 
  date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

const addTime = (date, y, m, d) => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + parseInt(y || 0));
  newDate.setMonth(newDate.getMonth() + parseInt(m || 0));
  newDate.setDate(newDate.getDate() + parseInt(d || 0));
  return newDate;
};

export default function FDCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [payoutMode, setPayoutMode] = useState('maturity'); 
  const [rate, setRate] = useState(6.60);
  
  const [startDate] = useState(new Date()); 
  const [duration, setDuration] = useState({ years: 2, months: 0, days: 1 });
  const [maturityDate, setMaturityDate] = useState(new Date());

  const [editDuration, setEditDuration] = useState(false);
  const [editDate, setEditDate] = useState(false);

  useEffect(() => {
    const end = addTime(startDate, duration.years, duration.months, duration.days);
    setMaturityDate(end);
  }, [duration, startDate]);

  const calculateReturns = () => {
    const P = principal;
    const R = rate;
    const timeInYears = duration.years + (duration.months / 12) + (duration.days / 365);
    
    let displayAmount = 0;
    let totalInterest = 0;
    let label = "";

    if (payoutMode === 'maturity') {
        // Standard Quarterly Compounding
        const n = 4;
        const finalAmount = P * Math.pow(1 + (R / (100 * n)), n * timeInYears);
        totalInterest = finalAmount - P;
        displayAmount = finalAmount;
        label = "Maturity Amount";
    } 
    else if (payoutMode === 'quarterly') {
        // Non-Cumulative Quarterly Payout
        displayAmount = (P * R) / 400;
        totalInterest = displayAmount * (timeInYears * 4);
        label = "Quarterly Interest Payout";
    } 
    else if (payoutMode === 'monthly') {
        // Non-Cumulative Monthly Payout (Discounted Rate Logic)
        // Formula: R / (1 + (R/1200))
        const discountedRate = R / (1 + (R / 1200));
        displayAmount = (P * discountedRate) / 1200;
        totalInterest = displayAmount * (timeInYears * 12);
        label = "Monthly Interest Payout";
    }

    const effectiveYield = (totalInterest / P / timeInYears) * 100;

    return {
        displayVal: Math.round(displayAmount),
        totalYield: Math.round(totalInterest),
        effectiveYield: effectiveYield.toFixed(2),
        resultLabel: label
    };
  };

  const { displayVal, totalYield, effectiveYield, resultLabel } = calculateReturns();

  const handleDurationChange = (key, val) => setDuration(prev => ({ ...prev, [key]: Number(val) }));

  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    if(isNaN(newDate)) return;
    setMaturityDate(newDate);
    const totalDays = Math.ceil(Math.abs(newDate - startDate) / (1000 * 60 * 60 * 24));
    setDuration({ 
        years: Math.floor(totalDays / 365), 
        months: Math.floor((totalDays % 365) / 30), 
        days: (totalDays % 365) % 30 
    });
  };

  return (
    <Fragment>
      <Head>
        <title>Deposit Calculator - Shalini Sahakari Bank</title>
        <meta name="description" content="Deposit Calculator" />
      </Head>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.header}>
            <div className={styles.container}>
                <h1>Fixed Deposit Calculator</h1>
            </div>
        </div>

        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.inputPanel}>

                <div style={{marginBottom:'var(--spacing-lg)'}}>
                    <label className={styles.fieldLabel}>Amount to be saved</label>
                    <div className={styles.currencyWrapper}>
                        <span className={styles.currencySymbol}>₹</span>
                        <input type="number" className={styles.amountInput} value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
                    </div>
                </div>

                <div style={{marginBottom:'var(--spacing-lg)'}}>
                    <label className={styles.fieldLabel}>Interest Payout</label>
                    <div className={styles.payoutGroup}>
                        {['On Maturity', 'Monthly', 'Quarterly'].map((mode) => (
                             <button key={mode} className={`${styles.payoutBtn} ${payoutMode === mode.toLowerCase().replace('on ', '') ? styles.activePayout : ''}`} onClick={() => setPayoutMode(mode.toLowerCase().replace('on ', ''))}>
                                {mode}
                             </button>
                        ))}
                    </div>
                </div>

                <div className={styles.sliderSection}>
                    <div className={styles.sliderHeader}>
                        <label className={styles.fieldLabel}>Interest Rate</label>
                        <span className={styles.rateDisplay}>{rate}% p.a.</span>
                    </div>
                    <input type="range" min="3" max="11" step="0.05" value={rate} onChange={(e) => setRate(e.target.value)} className={styles.slider} />
                </div>
            </div>

            
            <div className={styles.resultPanel}>
                <div className={styles.summaryRow}>
                    <div>
                        <div className={styles.summaryLabel}>Interest Rate</div>
                        <div className={styles.summaryValue}>{Number(rate).toFixed(2)}%p.a.</div>
                    </div>
                    <div style={{textAlign:'right'}}>
                        <div className={styles.summaryLabel}>Effective Yield</div>
                        <div className={styles.summaryValue}>{effectiveYield}%p.a.</div>
                    </div>
                </div>

                
                <div className={styles.editBox}>
                    {!editDuration ? (
                        <>
                            <div className={styles.editContent}><span className={styles.editTitle}>Duration</span><div className={styles.editMainText}>{duration.years}Y {duration.months}M {duration.days}D</div></div>
                            <button className={styles.actionBtn} onClick={() => setEditDuration(true)}>
                                <Image src="/edit.svg" alt="Confirm" width={24} height={24} />
                            </button>
                        </>
                    ) : (
                        <div className={styles.editModeContainer}>
                            <select className={styles.dropdown} value={duration.years} onChange={(e) => handleDurationChange('years', e.target.value)}>{[...Array(11)].map((_, i) => <option key={i} value={i}>{i}Y</option>)}</select>
                            <select className={styles.dropdown} value={duration.months} onChange={(e) => handleDurationChange('months', e.target.value)}>{[...Array(12)].map((_, i) => <option key={i} value={i}>{i}M</option>)}</select>
                            <select className={styles.dropdown} value={duration.days} onChange={(e) => handleDurationChange('days', e.target.value)}>{[...Array(31)].map((_, i) => <option key={i} value={i}>{i}D</option>)}</select>
                            <button className={styles.confirmBtn} onClick={() => setEditDuration(false)}>
                                <Image src="/check-white.svg" alt="Confirm" width={24} height={24} />
                            </button>
                        </div>
                    )}
                </div>

                
                <div className={styles.editBox}>
                    {!editDate ? (
                         <Fragment>
                            <div className={styles.editContent}><span className={styles.editTitle}>Maturity Date</span><div className={styles.editMainText}>{formatDate(maturityDate)}</div></div>
                            <button className={styles.actionBtn} onClick={() => setEditDate(true)}>
                                <Image src="/calendar.svg" alt="Confirm" width={24} height={24} />
                            </button>
                        </Fragment>
                    ) : (
                        <div className={styles.editModeContainer}>
                            <input type="date" className={styles.datePicker} value={maturityDate.toISOString().split('T')[0]} onChange={handleDateChange} />
                            <button className={styles.confirmBtn} onClick={() => setEditDate(false)}>
                                <Image src="/check-white.svg" alt="Confirm" width={24} height={24} />
                            </button>
                        </div>
                    )}
                </div>

                <div className={styles.finalResult}>
                    <div className={styles.summaryLabel}>{resultLabel}</div>
                    <div className={styles.bigAmount}>{formatCurrency(displayVal)}</div>

                    <div style={{marginTop:'var(--spacing-sm)', display:'flex', justifyContent:'space-between', alignItems:'center', background:'var(--color-primary-blue-light)', padding:'var(--spacing-xs) var(--spacing-sm)', borderRadius:'var(--radius-card)'}}>
                         <span className={styles.summaryLabel} style={{color: 'var(--color-primary-blue)'}}>Total Interest Earned:</span>
                         <span style={{fontWeight:'var(--bold)', color:'var(--color-primary-blue)', fontSize: '1.2rem'}}>{formatCurrency(totalYield)}</span>
                    </div>
                </div>

                <Link href="/forms/FD-Account.pdf" target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>Open Fixed Deposit</Link>
            </div>
          </div>
        <div className={styles.disclaimer}>
            <p>Note: The above calculation does not include TDS deductions</p>
            <p>Effective Yield: The actual annual return on your Fixed Deposit, including compounding effects</p>
            <p>Note: Clear your browser cookies and history to see the latest interest rates. You can also use the incognito mode</p>
        </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}