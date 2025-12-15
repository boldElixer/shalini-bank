import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './holiday.module.css';
import holidaysData from "@/data/bank-holidays.json";

export default function BankHolidaysPage() {
  const holidays = holidaysData.holidays;
  const sundays = holidaysData.sundays;
  return (
    <>
      <Head>
        <title>Bank Holidays - Shalini Sahakari Bank</title>
        <meta name="description" content="List of Bank Holidays" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Bank Holidays</h1>
                <div>
                    <table className={styles.tableWrapper}>
                        <thead>
                        <tr>
                            <th
                            colSpan="4"
                            style={{
                                textAlign: "center",
                                backgroundColor: "var(--color-primary-blue)",
                                color: "white",
                            }}
                            >
                            List of Bank Holidays in 2025
                            </th>
                        </tr>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Holiday</th>
                            <th>Date</th>
                            <th>Day</th>
                        </tr>
                        </thead>
                        <tbody>
                        {holidays.map((holiday) => (
                            <tr key={holiday["Sr. No."]}>
                            <td>{holiday["Sr. No."]}</td>
                            <td>{holiday["Holiday"]}</td>
                            <td>{holiday["Date"]}</td>
                            <td>{holiday["Day"]}</td>
                            </tr>
                        ))}
                        <tr>
                            <th
                            colSpan="4"
                            style={{
                                textAlign: "center",
                                backgroundColor: "var(--color-primary-blue)",
                                color: "white"
                            }}
                            >
                            The following holidays are falling on Sunday
                            </th>
                        </tr>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Holiday</th>
                            <th>Date</th>
                            <th>Day</th>
                        </tr>
                        {sundays.map((sunday, index) => (
                            <tr key={index}>
                            <td>{sunday["Sr. No."]}</td>
                            <td>{sunday["Holiday"]}</td>
                            <td>{sunday["Date"]}</td>
                            <td>{sunday["Day"]}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    </div>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}