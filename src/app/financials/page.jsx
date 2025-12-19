import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './financial.module.css';
import jsonData from '@/data/financial.json';
import Link from 'next/link';

export default function FinancialPage() {
  return (
    <>
      <Head>
        <title>Financials - Shalini Sahakari Bank</title>
        <meta name="description" content="Financial information for Shalini Sahakari Bank" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Financials</h1>
                <p>
                    Shalini Sahakari Bank's growth plan focuses on long-term stability, responsible expansion, and sound financial performance. Our Board provides strategic direction, ensures strong governance, and supports the Bank with effective controls and resources to achieve sustainable growth.
                </p>
                <p>
                    The Board carefully considers the interests of all stakeholders, including members, customers, employees, regulators, and the communities we serve. Through ethical practices and prudent decision-making, the Bank continues to strengthen trust while creating lasting value for the future.
                </p>
                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th style={{borderTopLeftRadius: 'var(--radius-card)'}}>Year</th>
                            <th>Members</th>
                            <th>Share Capital</th>
                            <th>Reserves</th>
                            <th>Deposits</th>
                            <th>Investment</th>
                            <th>Loans & Advances</th>
                            <th>Gross NPA</th>
                            <th>Net NPA</th>
                            <th>Profit</th>
                            <th>Working Capital</th>
                            <th>Audit Class</th>
                            <th style={{borderTopRightRadius: 'var(--radius-card)'}}>Employees</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsonData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.year}</td>
                                <td>{item.no_of_members}</td>
                                <td>₹ {item.paid_up_share_capital}</td>
                                <td>₹ {item.reserves}</td>
                                <td>₹ {item.deposit}</td>
                                <td>₹ {item.investment}</td>
                                <td>₹ {item.loans_and_advances}</td>
                                <td>{item.gross_npa_percentage}%</td>
                                <td>{item.net_npa_percentage}%</td>
                                <td>₹ {item.profit}</td>
                                <td>₹ {item.working_capital}</td>
                                <td>{item.audit_class}</td>
                                <td>{item.no_of_employee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p style={{textAlign: 'right', fontSize: '0.8rem'}}>₹ in Lakhs</p>
                <p>Explore our <Link href="/annual-reports" className={styles.reportLink}>Annual Reports</Link> to learn more about our financial performance and growth journey.</p>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}