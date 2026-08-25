import { useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="title" style={{ color: '#14146e', marginTop: '2.5rem', marginBottom: '0.5rem' }}>
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy - Extrovis';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <section id="privacy-policy" className="container" style={{ paddingTop: '12rem', paddingBottom: '4rem' }}>
          <h1 className="title" style={{ color: '#14146e', textAlign: 'center', marginBottom: '2.5rem' }}>
            PRIVACY POLICY
          </h1>

          <Section title="1. CONTACT DETAILS">
            <p>
              Extrovis Group (in the following &quot;Extrovis&quot; or &quot;we&quot;) is the controller for the personal information we process unless otherwise stated.
            </p>
            <p>
              Extrovis AG
              <br />
              Bahnhof-Park 4
              <br />
              Baar 6340
              <br />
              Switzerland
              <br />
              Tel.: +41 41 740 11 20
            </p>
          </Section>

          <Section title="2. GENERAL TERMS AND LEGAL BASIS FOR DATA PROCESSING">
            <p>
              This privacy policy sets out how Extrovis collects, uses and protects any information from you, when you use this website. Extrovis is committed to ensure that your privacy is protected. We only collect and use personal data of users if this is necessary to provide content, services and a functional website.
            </p>
            <p>
              Usually, collection and use of personal data is limited to cases where the user gives consent (article 6 (1)(a) of the EU General Data Protection Regulation (GDPR)). An exception applies to those cases where processing of data is permitted by law. The law permits processing of personal data to execute a contract (article 6 (1)(b) GDPR), to fulfill legal obligations (article 6 (1)(c) GDPR), to fulfill vital interests of a natural person (article 6 (1)(d) GDPR) and with restrictions to safeguard the legitimate interest of our company (article 6 (1)(f) GDPR).
            </p>
            <p>
              We will delete personal data of individuals as soon as the data are no longer needed. Beyond that, we still may process personal data if we are obliged to do so by regulations, laws or other provisions of the European Union or a national legislator.
            </p>
          </Section>

          <Section title="3. SHARING YOUR PERSONAL DATA">
            <p>
              We will share your personal data with processors. Processors are third parties that provide services for us. We have contracts in place that ensure that processors retain share and process your data only as instructed by us.
            </p>
            <p>
              We will share your personal information if we are legally obliged to do so (for example under a court order). In any case, before we share your personal information, we will make sure, that we have a lawful basis on which to share the data and document our decision-making.
            </p>
          </Section>

          <Section title="4. PROVIDING THE WEBSITE AND CREATING LOG FILES">
            <p>
              To provide you with our website and online service and to constantly improve it, we need to maintain and monitor the performance of our website, which is within our legitimate interests as a business (6(1)(f) of the GDPR). Therefore, when you access our website, our systems automatically collect the following data and information but is deleted as soon as the respective session has ended.:
            </p>
            <p>
              IP address, date and time of the website call, time zone difference to GMT, content of the called website (the very page), operating system and access status / HTTP-status code, volume of transferred data, referrer-URL, information concerning the type, language and version of the internet browser used
            </p>
            <p>
              In anonymized form, this data is also stored in log files of our system. We do not evaluate the data for marketing purposes in this context. Data in log files is deleted after 120 days at the latest. If certain parts of the data are subsequently processed the IP addresses of the users are deleted or anonymized, so that an assignment of the data to an individual is impossible. As this data collection is necessary for the operation of the website, there is no possibility of objection on the part of the user.
            </p>
            <p>To provide you with elements related to our website we have processors in place.</p>
          </Section>

          <Section title="5. COOKIES">
            <p>
              Data collected in technical cookies are not used to create user profiles. Cookies are stored on the user&apos;s computer; therefore, you have full control over the use of cookies. You may deactivate or restrict the transmission of cookies by changing the settings in your Internet browser. You can delete cookies at any time. If you choose to deactivate cookies for our website, it may no longer be possible to use all the website&apos;s functions or to use them to full extent.
            </p>
          </Section>

          <Section title="6. CONTACTING US">
            <p>
              You have several means to contact us, so we can provide you with our service. Please contact us with the contact form on our company website, whenever you need some information, have a technical question, are interested in a topic related to us or our business, want us to contact you, want to contact the webmaster, want a brochure, want a catalog, want to give feedback, need an air waybill number, want to subscribe to press releases.
            </p>
            <p>
              Depending on your choice of contacting us, the legal basis for processing your personal data is article 6(1)(a) of the GDPR, article 6(1)(b) of the GDPR, article 6(1)(c) of the GDPR or article 6(1)(f) of the GDPR. We will ask you to enter some of the following data:
            </p>
            <p>
              Country, title, first name, last name, function, company name, department, address 1, address 2, address 3, city, ZIP / postal code, email address, phone number, mobile phone number, topic 1, topic 2, your message, topic of the newsletter that you want to receive from us and comment
            </p>
            <p>
              If you send us an e-mail, we receive and process the personal data that you transmit along with your e-mail, including the data in the attachments.
            </p>
            <p>
              We need the data to provide the service you request. We keep the information as long as needed to fulfill your request, namely for miscellaneous queries not more than 4 months, requests for press releases and annual reports 5 years, for orders 10 to 11 years based on article 958(f)(1) of the Swiss Code of Obligations.
            </p>
          </Section>

          <Section title="7. SOCIAL MEDIA">
            <h3 className="title" style={{ color: '#14146e', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              7.1. PRIVACY POLICY FOR FACEBOOK
            </h3>
            <p>
              This website uses functions of Facebook Inc, 1601 S. California Ave, Palo Alto, CA 94304, USA . When you call up our pages with Facebook plug-ins, a connection is established between your browser and the Facebook servers. In the process, data is already transmitted to Facebook. If you have a Facebook account, this data can be linked to it. If you do not want this data to be associated with your Facebook account, please log out of Facebook before visiting our site. Interactions, in particular, the use of a comment function or the clicking of a &quot;Like&quot; or &quot;Share&quot; button are also passed on to Facebook. You can learn more at{' '}
              <a
                href="https://www.facebook.com/about/privacy"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                https://www.facebook.com/about/privacy
              </a>
            </p>

            <h3 className="title" style={{ color: '#14146e', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              7.2. PRIVACY POLICY FOR LINKEDIN
            </h3>
            <p>
              We use the marketing services of the social network LinkedIn of LinkedIn Ireland Unlimited Company, Wilton Plaza, Wilton Place, Dublin 2, Ireland (&quot;LinkedIn&quot;) within our online offer.
            </p>
            <p>
              These use cookies, i.e. text files that are stored on your computer. This enables us to analyze your use of the website. For example, we can measure the success of our ads and show users products in which they were previously interested.
            </p>
            <p>
              For example, information on the operating system, the browser, the website you previously visited (referrer URL), which websites the user visited, which offers the user clicked on, and the date and time of your visit to our website is collected.
            </p>
            <p>
              The information generated by the cookie about your use of this website is transferred pseudonymously to a LinkedIn server in the USA and stored there. LinkedIn therefore does not store the name or email address of the respective user. Rather, the above-mentioned data is only assigned to the person for whom the cookie was generated. This does not apply if the user has allowed LinkedIn to process without pseudonymization or has a LinkedIn account.
            </p>
            <p>
              You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. You can also object to the use of your data directly at LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out
              </a>
              .
            </p>
            <p>
              We use LinkedIn Analytics to analyze and regularly improve the use of our website. The statistics obtained allow us to improve our offer and make it more interesting for you as a user. All LinkedIn companies have adopted the standard contractual clauses to ensure that the data traffic to the USA and Singapore necessary for the development, implementation and maintenance of the services takes place in a lawful manner. If we ask users for consent, the legal basis for processing is Art. 6 (1) lit. a DSGVO. Otherwise, the legal basis for the use of LinkedIn Analytics is Art. 6 para. 1 p. 1 lit. f DSGVO.
            </p>
            <p>
              Third-party provider information: LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2 Ireland; User Agreement and Privacy Policy.
            </p>
          </Section>

          <Section title="11. YOUR RIGHTS AS AN INDIVIDUAL">
            <p>
              Extrovis assures the following rights of yours related to the processing of personal data which are defined in the GDPR.
            </p>

            <h3 className="title" style={{ color: '#14146e', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              11.1. RIGHT OF ACCESS
            </h3>
            <p>
              You have the right to obtain a confirmation if personal data concerning you is processed, or not. If so, you can gain access to it. If we transfer personal data to a third country or to an international organization, you have the right to be informed of the appropriate safeguards that ensure your privacy (article 46 of the GDPR). Upon request, we provide you with a copy of the processed personal data, if this does not adversely affect the rights and freedoms of others.
            </p>

            <h3 className="title" style={{ color: '#14146e', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              11.2. RIGHT TO RECTIFICATION
            </h3>
            <p>
              You have the right that Extrovis restricts the processing of your personal data, if you contest the accuracy of the personal data or if the processing is unlawful, and you oppose the erasure but request the restriction of their use instead. You can restrict processing of your data, if Extrovis no longer needs the personal data, but they are required by yourself for the establishment, exercise or defense of legal claims or if you have objected to processing (article 21(1) GDPR) and the case is pending.
            </p>

            <h3 className="title" style={{ color: '#14146e', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              11.3. RIGHT TO RESTRICTION OF PROCESSING
            </h3>
            <p>
              You have the right that Extrovis restricts the processing of your personal data, if you contest the accuracy of the personal data or if the processing is unlawful, and you oppose the erasure but request the restriction of their use instead. You can restrict processing of your data, if Extrovis no longer needs the personal data, but they are required by yourself for the establishment, exercise or defense of legal claims or if you have objected to processing (article 21(1) GDPR) and the case is pending.
            </p>

            <h3 className="title" style={{ color: '#14146e', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              11.4. RIGHT TO ERASURE
            </h3>
            <p>
              You have the right that Extrovis immediately deletes your personal data. This right does not apply if the data has to be processed for compliance with a legal obligation, for exercising the right of freedom of expression and information, for the establishment, exercise or defense of legal claims.
            </p>

            <h3 className="title" style={{ color: '#14146e', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              11.5. RIGHT TO NOTIFICATION
            </h3>
            <p>
              You have the right to obtain upon request a list of recipients to whom Extrovis has disclosed your data. Furthermore, Extrovis is obliged to communicate any rectification or erasure of personal data or restriction of processing carried out in accordance with article 16, article 17(1) and article 18 of the GDPR to each to these recipients, unless this proves impossible or involves disproportionate effort.
            </p>

            <h3 className="title" style={{ color: '#14146e', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              11.6. RIGHT TO DATA PORTABILITY
            </h3>
            <p>
              You have the right to receive the personal data, which you have provided to Extrovis, in a structured, commonly used and machine-readable format. But only where the processing is based on consent pursuant article 6(1)(a), article 9(2)(a) of the GDPR, or on a contract pursuant article 6(1)(b) of the GDPR; and is carried out by automated means.
            </p>

            <h3 className="title" style={{ color: '#14146e', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              11.7. RIGHT TO OBJECT
            </h3>
            <p>
              You have the right to object, to processing of personal data concerning yourself based on article 6(1)(e), article 6(1)(f) or article 89(1) of the GDPR. If this right is not restricted by a compelling legitimate ground or by tasks carried out in the public interest
            </p>
            <p>
              Where personal data are processed for direct marketing purposes including profiling, you have the right to object at any time to the processing. We then no longer process the personal data for such purposes.
            </p>

            <h3 className="title" style={{ color: '#14146e', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              11.8. RIGHT TO WITHDRAW CONSENT
            </h3>
            <p>
              You have the right to withdraw your consent to processing of your personal data at any time. The withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.
            </p>

            <h3 className="title" style={{ color: '#14146e', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              11.9. RIGHT TO OBJECT AUTOMATED INDIVIDUAL DECISION-MAKING, INCLUDING PROFILING
            </h3>
            <p>
              You have the right to object to be subject to a decision based solely on automated processing, including profiling, which produces legal effects or similarly significantly affects you. This is restricted, if the decision is necessary for entering into, or performance of, a contract between you and Extrovis, if the decision is based on your explicit consent or if the Union or Member State law to which Extrovis is subject to authorizes the decision.
            </p>

            <h3 className="title" style={{ color: '#14146e', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              11.10. RIGHT TO LODGE A COMPLAINT WITH A SUPERVISORY AUTHORITY
            </h3>
            <p>
              You have the right to lodge a complaint with a supervisory authority, in the Member State of your habitual residence, place of work or place of the alleged infringement if you consider that the processing of personal data relating to you infringes the GDPR.
            </p>
          </Section>

          <Section title="12. UPDATE TO PRIVACY STATEMENT">
            <p>
              From time to time, Extrovis may revise this online Privacy Statement. Any such changes to this Privacy Statement will be promptly communicated on this page. Continued use of our sites after receiving notice of a change in our Privacy Statement indicates your consent to the use of newly submitted information in accordance with the amended Extrovis Privacy Statement. The effective date of this Privacy Statement is 20 March 2019.
            </p>
          </Section>
        </section>
      </main>
      <Footer />
    </div>
  );
}
