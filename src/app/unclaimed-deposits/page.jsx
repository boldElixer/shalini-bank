'use client';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './unclaimed.module.css';
import jsonData from '@/data/unclaimed-deposits.json';
import { useState } from 'react';

export default function UnclaimedDepositsPage() {

    /* take input and set to state */
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    
    /* Handle Search Functionality */
    const handleSearch = (event) => {
        event.preventDefault();
        if (!searchInput) {
            setFilteredResults([]);
            return;
        }
        const query = searchInput.toLowerCase();
        const filteredData = jsonData.filter(item =>
            item.customer_name.toLowerCase().includes(query)
        );
        setFilteredResults(filteredData);
    };

  return (
    <>
      <Head>
        <title>Unclaimed Deposits - Shalini Sahakari Bank</title>
        <meta name="description" content="Unclaimed deposits information" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Unclaimed Deposits</h1>
                <p>
                    RBI vide its circular issued on March 21, 2014 has informed Banks of the establishment of the Depositor Education and Awareness Fund Scheme, 2014. As per the directive, the amount to the credit of any account in India with any bank which has not been operated upon for a period of ten years or any deposit or any amount remaining unclaimed for more than ten years has to be transferred to the DEA Fund.
                </p>
                <p>
                    As per RBI guidelines Banks have been advised that they should display the list of unclaimed deposits/inoperative accounts which are inactive/inoperative for ten years or more on their respective websites.
                </p>
                <p>
                    To claim your unclaimed account, <b>please visit nearest branch with KYC documents in person.</b>
                </p>
            </section>
            
            <section className={styles.searchSection}>
                <h2>Search Unclaimed Deposits/Inoperative Accounts</h2>
                <form className={styles.searchForm} onSubmit={handleSearch}>
                    <input type="text" placeholder="Enter Account Name" className={styles.searchInput} value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                    <button type="submit" className={styles.searchButton}>Search</button>
                </form>
                {filteredResults.length > 0 && (
                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th style={{borderTopLeftRadius: 'var(--radius-card)'}}>Branch Code</th>
                            <th>Account Type</th>
                            <th>Account Number</th>
                            <th>Customer Name</th>
                            <th style={{borderTopRightRadius: 'var(--radius-card)'}}>Customer Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredResults.map((item, index) => (
                            <tr key={index}>
                                <td>{item.branch_code}</td>
                                <td>{item.account_type}</td>
                                <td>{item.account_number}</td>
                                <td>{item.customer_name}</td>
                                <td>{item.customer_address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>)}
                {filteredResults.length === 0 && searchInput && (
                    <p className={styles.noResults}>No records found for "{searchInput}"</p>
                )}
                <p>* Records displayed would be inactive based on search criteria match found in database and must not be considered as final</p>
                <br/><br/>
                <p><b>Disclaimer:</b></p>
                <p>
                    If you are unable to find details of your account, we request you to visit Bank Branch.
                </p>
                <p>
                    Deposits/Accounts already claimed will reflect in database till periodic review is done.
                </p>
                <p>
                    In case of joint accounts, search data, based on first holder's details.
                </p>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}


