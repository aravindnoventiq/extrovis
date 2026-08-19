import { useEffect } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const sections: { title: string; paragraphs: string[] }[] = [
  {
    title: 'SCOPE OF USE',
    paragraphs: [
      'EXTROVIS invites you to view, use and download a copy of this website for your informational, non-commercial use. Using this website to evaluate whether to enter into or continue a business relationship with EXTROVIS shall not constitute a commercial use for the purposes of this use policy.',
    ],
  },
  {
    title: 'NO WARRANTIES',
    paragraphs: [
      'All content on this website is provided to you on an "as is available" basis without warranty of any kind either express of implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. EXTROVIS makes no warranty as to the accuracy, completeness, currency, or reliability of any content available through this website. You are responsible for verifying any information before relying on it. Use of the website and the content available on the website is at your sole risk. EXTROVIS makes no representations or warranties that use of the website will be secure, uninterrupted, or error-free. You are responsible for taking all necessary precautions to ensure that content you may obtain from the website is free of viruses.',
      "EXTROVIS makes no representations or warranties on this website with respect to its product or service offerings. Information regarding EXTROVIS's product or services offerings contained on this website, including but not limited to information regarding features and benefits, technical information, or other similar information contained in documentation available on or from this website shall not be incorporated or integrated into any EXTROVIS warranty or contractual right, privilege, or obligations otherwise provided pursuant to the terms of a valid commercial agreement with EXTROVIS. EXTROVIS may make changes to these materials, or to the products described therein, at any time without notice. EXTROVIS makes no commitment to update these materials.",
    ],
  },
  {
    title: 'LIMITATION OF LIABILITY',
    paragraphs: [
      'EXTROVIS specifically disclaims any liability, whether based in contract, tort, strict liability, or otherwise, for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with access to or use of the website, even if EXTROVIS has been advised of the possibility of such damages, including but not limited to reliance by any party on any content obtained through the use of this website whether caused in whole or in part by negligence, acts of God, telecommunications failure, theft or destruction of or unauthorized access to the website, or related information or programs.',
    ],
  },
  {
    title: 'TRADEMARKS AND COPYRIGHTS',
    paragraphs: [
      'EXTROVIS, SOLARTUS and ADROIQ are registered or common law trademarks and service marks of EXTROVIS AG and/or its affiliates.',
      'Unauthorized use of any trademark, service mark or logo of EXTROVIS and its affiliates is prohibited. Other trademarks, trade names, and service marks appearing on this website are the property of their respective owners.',
      "The materials on this website are copyrighted and protected by worldwide copyright laws and treaty provisions. Any unauthorized use of these materials may violate copyright, trademark and other laws. Materials on this website may not be copied, reproduced, modified, published, uploaded, posted, transmitted, or distributed in any way without EXTROVIS's prior written permission. Except as expressly provided herein, EXTROVIS does not grant any express or implied right to you under any patents, copyrights, trademarks, or trade secret information.",
    ],
  },
  {
    title: 'TRADEMARKS AND COPYRIGHTS',
    paragraphs: [
      'EXTROVIS, SOLARTUS and ADROIQ are registered or common law trademarks and service marks of EXTROVIS AG and/or its affiliates.',
      'Unauthorized use of any trademark, service mark or logo of EXTROVIS and its affiliates is prohibited. Other trademarks, trade names, and service marks appearing on this website are the property of their respective owners.',
      "The materials on this website are copyrighted and protected by worldwide copyright laws and treaty provisions. Any unauthorized use of these materials may violate copyright, trademark and other laws. Materials on this website may not be copied, reproduced, modified, published, uploaded, posted, transmitted, or distributed in any way without EXTROVIS's prior written permission. Except as expressly provided herein, EXTROVIS does not grant any express or implied right to you under any patents, copyrights, trademarks, or trade secret information.",
    ],
  },
  {
    title: 'E-MAIL',
    paragraphs: [
      'Note: email submissions over the Internet may not be secure. Please consider this fact before emailing any personal or confidential information.',
    ],
  },
  {
    title: 'LINKS',
    paragraphs: [
      "This website may contain links to websites operated by other parties. The linked sites are not under the control of EXTROVIS, and EXTROVIS is not responsible for the content available on any other Internet sites linked to EXTROVIS's website. Such links do not imply EXTROVIS's endorsement of material on any other site and EXTROVIS disclaims all liability with regard to your access of such linked websites. EXTROVIS is providing these links to other Internet sites as a convenience to users, and access to any other Internet sites linked to this website is at your own risk.",
      'Unless otherwise set forth in a written agreement between you and EXTROVIS, you must adhere to EXTROVIS\'s linking policy as follows: (i) any links to EXTROVIS\'s site must be a text-only link clearly marked "EXTROVIS website," (ii) the appearance, position and other aspects of the link may not be such as to damage or dilute the goodwill associated with EXTROVIS\'s names and trademarks, (iii) www.extrovis.com and not to other web pages within EXTROVIS\'s website, (iv) the appearance, position and other attributes of the link may not create the false appearance that your organization or entity is sponsored by, affiliated with, or associated with EXTROVIS, (v) when selected by a user, the link must either spawn a new independent window or overtake the parent or topmost frame to display the EXTROVIS website full-screen and not within a "frame" on the linking website, and (vi) EXTROVIS reserves the right to revoke its consent to the link at any time and in its sole discretion.',
    ],
  },
  {
    title: 'FORWARD LOOKING STATEMENTS',
    paragraphs: [
      'This website contains certain forward-looking statements based on current expectations, forecasts and assumptions that involve risks and uncertainties. These statements are based on information available to EXTROVIS as of the date hereof; and EXTROVIS\'s actual results could differ materially from those stated or implied, due to risks and uncertainties associated with its business, which include the risk factors disclosed in EXTROVIS\'s reports filed with the Securities and Exchange Commission. Forward-looking statements include statements regarding EXTROVIS\'s expectations, beliefs, intentions or strategies regarding the future and can be identified by forward-looking words such as "anticipate," "believe," "could," "estimate," "expect," "intend," "may," "should," "will," and "would" or similar words. EXTROVIS assumes no obligation to update the information, whether as a result of new information, future events or otherwise.',
    ],
  },
  {
    title: 'POSTED MATERIAL',
    paragraphs: [
      "Any content you post on or enter into EXTROVIS's website (except for Personal Data entered pursuant to an employment application or through a contact form, which is covered by our Privacy Policy) shall become the property of EXTROVIS, and by posting or entering such information on EXTROVIS's website you thereby grant EXTROVIS a world-wide, royalty-free, perpetual, irrevocable, non-exclusive, and fully sub-licensable right and license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display any such content.",
    ],
  },
  {
    title: 'APPLICABLE LAWS',
    paragraphs: [
      'This site is controlled by EXTROVIS from its offices within the Switzerland. EXTROVIS makes no representation that the materials contained on this website are appropriate or available for use in other locations, and access to them from territories where their content is illegal is prohibited. Those who choose to access this website from other locations do so on their own initiative and are responsible for compliance with applicable local laws. You may not use or export the materials contained on this website in violation of Swiss laws and regulations. Any claim relating to this website and the materials contained hereon shall be governed by the laws of Switzerland.',
    ],
  },
  {
    title: 'GENERAL',
    paragraphs: [
      'EXTROVIS may revise these Legal terms at any time by updating this posting. You should visit this page from time to time to review the then-current Legal terms because they are binding on you. Certain provisions of these Legal terms may be superseded by expressly designated legal notices or terms located on particular pages on this website.',
    ],
  },
];

export default function LegalDisclaimerPage() {
  useEffect(() => {
    document.title = 'Legal Disclaimer - Extrovis';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <section id="legal-disclaimer" className="container" style={{ paddingTop: '12rem', paddingBottom: '4rem' }}>
          <p>As of Jul 1, 2022</p>
          <h1 className="title" style={{ color: '#14146e', textAlign: 'center', marginBottom: '2rem' }}>
            LEGAL INFORMATION REGARDING THE EXTROVIS AG. (EXTROVIS) WEBSITE
          </h1>
          <p>
            By using this website, you assent to the following terms of use. If you do not agree to these terms, please do not use this website.
          </p>

          <div>
            {sections.map((section, i) => (
              <div key={`${section.title}-${i}`}>
                <h2 className="title" style={{ color: '#14146e', marginTop: '2.5rem', marginBottom: '0.5rem' }}>
                  {section.title}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p key={`${i}-${j}`}>{p}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
