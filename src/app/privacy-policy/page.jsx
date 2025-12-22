import Head from 'next/head';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './privacy.module.css';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Shalini Sahakari Bank</title>
        <meta name="description" content="Privacy Policy - Shalini Sahakari Bank" />
      </Head>

      <Header />

      <main>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1>Privacy Policy</h1>
                <p>
                    The Shalini Sahakari Bank Ltd. (the “Bank”) recognizes the expectations of its customers with regard to privacy, confidentiality, and security of their personal information that resides with the Bank. Keeping personal information of customers secure and using it solely for activities related to the Bank and preventing any misuse thereof is a top priority of the Bank.
                </p>
                <br/>
                <h3>Applicability</h3>
                <p>
                    This Policy is applicable to personal information collected by the Bank directly from the customer or through the Bank's online portals, electronic communications as also any information collected by the Bank's server from the customer's browser.
                </p>
                <br/>
                <h3>Information</h3>
                <p>
                    The Bank collects, retains and uses personal information only when it reasonably believes that it is for a lawful purpose and that it will help administer its business or provide products, services, and other opportunities to the visitor / customer. The Bank collects three types of information: personal, sensitive personal data or information and non-personal.
                </p>
                <ol type='a'>
                    <li>
                        <h4>Personal Information</h4>
                        <p>It can be any information that relates to a natural person, which, either directly or indirectly, in combination with other information available is capable of identifying such person. Information including but not limited to name, address, telephone number, e-mail, occupation, etc.</p>
                    </li>
                    <li>
                        <h4>Sensitive Personal Data or Information</h4>
                        <p>Sensitive personal data or information of a person means such personal information which consists of information relating to passwords, financial information such as Bank account or credit card or debit card or other payment instrument details, sexual orientation, physical physiological and mental health condition, medical records and history, biometric information, details of nominees and national identifiers including but not limited to: Aadhaar card, passport number, income, PAN, etc. For customers enrolled in services provided by the Bank, such as online RTGS/NEFT, personal information about the transaction is collected. Any information that is freely available or accessible in public domain or furnished under the Right to Information Act, 2005 or any other law for the time being in force shall not be regarded as sensitive personal data or information for the purpose of these rules. The information you provide online is held by the Bank business that maintains your account or is processing your application for a new product or service.</p>
                    </li>
                    <li>
                        <h4>Non-Personal Information</h4>
                        <p>This information includes the IP address of the device used to connect to the Bank's website along with other information such as browser details, operating system used, the name of the website that redirected the visitor to the Bank's website, etc. Also, when you browse our site or receive one of our emails, the Bank and our affiliated companies, use cookies and/or pixel tags to collect information and store your online preferences.</p>
                    </li>
                </ol>
                <br/>
                <h3>Choice</h3>
                <p>
                    Consent will be obtained from you when your information is collected by the Bank, in a manner recognized by law. Also, you will be informed of the choices you have for providing your personal information. Only information required for legal purposes or for providing services will be collected.
                </p>
                <br/>
                <h3>Accuracy</h3>
                <p>
                    The Bank has processes in place to ensure that the personal information residing with it is complete, accurate and current. If at any point of time, there is a reason to believe that personal information residing with the Bank is incorrect, the customer may inform the Bank in this regard. The Bank will correct the erroneous information as quickly as possible.
                </p>
                <br/>
                <h3>Purpose and Usage</h3>
                <p>
                    The Bank uses the information collected and appropriately notifies you to manage its business and offer an enhanced, personalized online experience on its website. Further, it enables the Bank to: Process applications, requests and transactions Maintain internal records as per regulatory guidelines Provide services to customers, including responding to customer requests Comply with all applicable laws and regulations Recognize the customer when he conducts online banking Understand the needs and provide relevant product and service offers.
                </p>
                <br/>
                <h3>Disclosure/Sharing</h3>
                <p>
                    The Bank does not disclose sensitive personal data or information of a customer except as directed by law or as per mandate received from the customer / applicant. No specific information about customer accounts or other personally identifiable data is shared with non-affiliated third parties unless any of the following conditions is met: To help complete a transaction initiated by the customer.
                </p>
                <p>
                    To perform support services through an outsourced entity provided it conforms to the Privacy Policy of the Bank. The customer / applicant has specifically authorized it. The disclosure is necessary for compliance of a legal obligation. The information is shared with Government agencies mandated under law. The information is shared with any third party by an order under the law.
                </p>
                <br/>
                <h3>Security</h3>
                <p>
                    The security of personal information is a priority and is protected by maintaining physical, electronic, and procedural safeguards that meet applicable laws. Employees are trained in the proper handling of personal information. The Bank has internal corporate policy and procedures such as Grievance Redressal, Incident Management, Third Party Management, etc., which are available to our employees on Bank's intranet. When other companies are used to provide services on behalf of the Bank, it is ensured that such companies protect the confidentiality of personal information they receive in the same manner the Bank protects.
                </p>
            </section>
        </div>

      </main>

      <Footer />
    </>
  );
}