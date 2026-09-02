import React, { useState } from "react";
import { Link } from "react-router-dom";
import somidaxLogo from "@/imports/somidax_logo.jpeg";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(8,11,17,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(138,43,226,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={somidaxLogo} alt="Somidax" className="w-9 h-9 rounded-full object-contain" style={{ background: "#fff" }} />
          <span className="font-display font-700 text-white text-xl">Somidax</span>
        </Link>
        <Link to="/" className="text-sm font-500 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
          ← Back to Home
        </Link>
      </div>
    </nav>
  );
}

const docs = {
  "Privacy Policy": {
    updated: "1 August 2026",
    badge: "GDPR · CCPA · UK GDPR",
    badgeColor: "#00F0FF",
    sections: [
      {
        title: "1. Who We Are",
        body: "Somidax Network Ltd ('Somidax', 'we', 'us', 'our') operates the Somidax Protocol — a non-custodial, AI-native e-commerce settlement network. Our registered office is used solely for legal correspondence. We do not hold or control user funds, private keys, or digital assets at any time. The Somidax Protocol is governed collectively by the Somidax DAO and deployed on publicly auditable blockchain infrastructure.",
      },
      {
        title: "2. Scope of This Policy",
        body: "This Privacy Policy applies to all individuals who access or interact with the Somidax web interface, SDK, REST API, merchant dashboard, or any associated interface. It covers data collected via our web properties, not data recorded on public blockchains. On-chain data is public, immutable, and outside the scope of any privacy regulation.",
      },
      {
        title: "3. Data We Collect",
        body: "We collect the minimum data necessary to operate the protocol. This includes: (a) on-chain data — public wallet addresses, transaction hashes, block timestamps, and order amounts recorded on Ethereum and BNB Chain; (b) merchant integration data — API keys (hashed), webhook endpoints, integration configuration, and SDK version telemetry; (c) anonymised analytics — page views, session durations, feature interaction events, and error rates collected via a self-hosted Plausible instance with IP anonymisation enabled; (d) support communications — email content and attachments you voluntarily submit to legal@somidax.io or privacy@somidax.io. We do not collect names, postal addresses, telephone numbers, payment card details, or government-issued identification numbers in the ordinary course of protocol operation.",
      },
      {
        title: "4. How We Use Your Data",
        body: "On-chain data is used exclusively to facilitate agentic checkout, settle payments, verify $SMDX reward eligibility, and calculate staking tier benefits. Merchant integration data is used to authenticate API requests, deliver webhook notifications, and resolve technical disputes. Anonymised analytics data is used to improve protocol performance, prioritise feature development, and monitor for abuse patterns. Support communications are used solely to respond to your enquiry and are deleted from our mail system within 90 days of resolution. We do not use any data for advertising, profiling, or sale to third parties.",
      },
      {
        title: "5. Legal Basis for Processing",
        body: "Under the UK GDPR and EU GDPR, we process your data on the following legal bases: (a) Contractual necessity — processing required to deliver the services you have signed up for, including settlement and reward calculation; (b) Legitimate interests — anonymised analytics to improve the protocol, provided these interests are not overridden by your rights; (c) Legal obligation — AML/CFT screening, sanctions checking, and record-keeping required by applicable law; (d) Consent — optional analytics cookies, where we obtain your explicit opt-in before any data is collected.",
      },
      {
        title: "6. Cookies & Tracking",
        body: "Our web interface uses: (a) Strictly necessary cookies — session management tokens and CSRF protection headers. These cannot be disabled without breaking core functionality and are set on a session basis. (b) Analytics cookies — anonymised event tracking via a self-hosted Plausible instance. These default to off and require your explicit opt-in via the cookie preferences banner. No advertising, retargeting, cross-site tracking, or third-party analytics cookies are set under any circumstances. Cookie preferences can be changed at any time from the footer of any page.",
      },
      {
        title: "7. Data Sharing & Third Parties",
        body: "We do not sell, rent, or trade personal data. We share data with: (a) Vobit — our settlement infrastructure partner, which receives anonymised transaction routing data required to process gasless settlements. Vobit processes this data under a data processing agreement with equivalent protections. (b) Sanctions screening providers — anonymised wallet addresses are screened against OFAC, UK HMT, and EU consolidated lists via an automated API. No profiling data leaves this process. (c) Legal authorities — we may disclose data when required by a valid legal order, court order, or regulatory demand. We will notify you if permitted by law.",
      },
      {
        title: "8. International Data Transfers",
        body: "Somidax servers are hosted in the European Economic Area. Where merchant or operational data is processed outside the EEA — for example, via cloud infrastructure providers — we ensure transfers are covered by Standard Contractual Clauses approved by the European Commission or equivalent safeguards under UK adequacy regulations.",
      },
      {
        title: "9. Data Retention",
        body: "On-chain data is permanently public and cannot be altered or deleted by any party. Off-chain merchant integration data and API logs are retained for 12 months from your last active session, then automatically purged. Support email records are deleted 90 days after case closure. AML transaction records are retained for a minimum of 5 years as required by the UK Proceeds of Crime Act 2002 and equivalent regulation. Anonymised analytics are aggregated and retained indefinitely as statistical summaries, with no link to individual sessions.",
      },
      {
        title: "10. Your Rights",
        body: "Under applicable data protection law, you have the right to: access a copy of personal data we hold about you; correct inaccurate personal data; erasure of personal data (subject to legal retention obligations); restriction of processing in certain circumstances; portability of data you provided to us in a structured, machine-readable format; object to processing based on legitimate interests; withdraw consent at any time where processing is consent-based. To exercise any right, contact privacy@somidax.io. We respond within 30 calendar days. You may also lodge a complaint with the UK Information Commissioner's Office (ICO) or your local supervisory authority.",
      },
      {
        title: "11. Security",
        body: "We implement industry-standard security measures including TLS 1.3 in transit, AES-256 encryption at rest for off-chain data, API key hashing using bcrypt, and role-based access controls on all internal systems. The Somidax Protocol smart contracts are publicly auditable on Etherscan and BscScan. Security disclosures should be directed to security@somidax.io.",
      },
      {
        title: "12. Changes to This Policy",
        body: "We will post any material changes to this Privacy Policy on this page with an updated 'Last updated' date and, where required, provide 30 days' notice to active merchant accounts before changes take effect. Continued use of the protocol after the effective date constitutes acceptance of the updated policy.",
      },
    ],
  },

  "Terms of Service": {
    updated: "1 August 2026",
    badge: "Binding Agreement",
    badgeColor: "#8A2BE2",
    sections: [
      {
        title: "1. Acceptance of Terms",
        body: "By accessing, integrating with, or using the Somidax Protocol, SDK, REST API, merchant dashboard, or any associated interface (collectively, the 'Service'), you agree to be bound by these Terms of Service ('Terms'). These Terms constitute a legally binding agreement between you and Somidax Network Ltd. If you do not agree to these Terms in their entirety, you must not access or use the Service. These Terms apply equally to merchants, buyers, developers, $SMDX token holders, and any other participants in the Somidax network.",
      },
      {
        title: "2. Eligibility",
        body: "You must be at least 18 years of age, or the age of legal majority in your jurisdiction, to use the Service. By using the Service, you represent and warrant that you meet this requirement. You must not be a resident of, or located in, any jurisdiction subject to comprehensive US, UK, or EU economic sanctions. You must not be included on any sanctions list maintained by OFAC, UK HMT, the UN Security Council, or the EU. We reserve the right to terminate access without notice if eligibility requirements are not met.",
      },
      {
        title: "3. Protocol Access Licence",
        body: "Subject to your compliance with these Terms, Somidax grants you a limited, revocable, non-exclusive, non-transferable licence to access and use the Service for lawful commercial purposes. This licence does not include the right to: sublicense, resell, or redistribute access to the Service; reverse-engineer, decompile, or attempt to extract the source code of proprietary components; use the Service in connection with any activity that is fraudulent, deceptive, illegal, or harmful to other participants; use automated bots, scrapers, or other tools to access the Service in a manner not permitted by our published API rate limits; or represent yourself as affiliated with, endorsed by, or acting on behalf of Somidax without written authorisation.",
      },
      {
        title: "4. Non-Custodial Architecture",
        body: "Somidax is a non-custodial protocol. We do not at any time hold, control, have access to, or take custody of your funds, stablecoins, digital assets, or private keys. Settlement occurs directly between buyer and merchant wallets via smart contracts deployed on Ethereum and BNB Chain. You are solely and entirely responsible for the security, backup, and control of your wallet private keys and seed phrases. Lost private keys cannot be recovered by Somidax, the DAO, or any third party. We are not a bank, electronic money institution, custodian, or investment firm.",
      },
      {
        title: "5. $SMDX Utility Token",
        body: "$SMDX is a utility token that grants holders governance participation rights, access to fee discounts, and eligibility for cashback mechanisms within the Somidax network. $SMDX is not a security, investment product, share, bond, or financial instrument of any kind. Holding $SMDX does not entitle you to any profit share, dividend, equity interest, or financial return from Somidax Network Ltd or the Somidax DAO treasury. The value of $SMDX may fluctuate significantly, and you may lose some or all of the value of any $SMDX you acquire. We make no representation as to the future value of $SMDX.",
      },
      {
        title: "6. Fees & Settlement",
        body: "The standard settlement fee is 0.5% of the net transaction value per settled order, deducted automatically at the point of on-chain settlement. Merchants at Core, Surge, or Apex staking tiers are entitled to reduced settlement fees as documented in the Token Loyalty terms. Fees are deducted before settlement reaches the merchant wallet and are non-refundable once the settlement transaction has been confirmed on-chain. Somidax reserves the right to amend the standard fee rate with 30 days' prior notice published on this page and to active merchants via dashboard notification. The Vobit network gas absorption service, which enables gasless transactions, is included within the 0.5% fee.",
      },
      {
        title: "7. Merchant Obligations",
        body: "Merchants using Somidax agree to: maintain accurate and complete product listings and inventory data in the Somidax network; fulfil orders settled through Somidax in accordance with applicable consumer protection law in their jurisdiction; not list prohibited goods or services including but not limited to narcotics, weapons, counterfeit goods, sexually exploitative material, or any goods whose sale is restricted or prohibited in the merchant's jurisdiction; complete Know Your Business (KYB) verification if required under our AML Policy; maintain reasonable information security practices for API keys and webhook secrets.",
      },
      {
        title: "8. Prohibited Uses",
        body: "You must not use the Service to: process transactions that constitute money laundering, terrorist financing, or sanctions evasion; facilitate the purchase or sale of prohibited goods or services; circumvent our AML screening infrastructure through structured transactions or smurfing; submit false or misleading information to Somidax or regulatory authorities; interfere with the integrity or availability of the protocol or its smart contracts; conduct denial-of-service attacks, exploit vulnerabilities, or introduce malicious code.",
      },
      {
        title: "9. Intellectual Property",
        body: "The Somidax name, logo, and brand marks are trademarks of Somidax Network Ltd. The Somidax Protocol smart contracts are open-source and deployed under the MIT licence. The merchant dashboard, web interface, and SDK are proprietary software of Somidax Network Ltd and may not be copied, modified, or redistributed without written permission, except where open-source licences explicitly permit such use. You retain all intellectual property rights in your product catalogue, merchant data, and any content you submit to the Service.",
      },
      {
        title: "10. Limitation of Liability",
        body: "To the maximum extent permitted by applicable law, Somidax, the Somidax DAO, its contributors, and its infrastructure providers shall not be liable for: (a) any indirect, incidental, special, consequential, or punitive damages; (b) loss of revenue, profits, data, or business opportunities; (c) losses arising from smart contract bugs, blockchain network congestion or downtime, or oracle failures; (d) losses arising from price volatility of $SMDX or any other digital asset; (e) losses arising from your failure to secure your private keys or wallet. Our aggregate liability for direct damages shall not exceed the settlement fees paid by you to Somidax in the three calendar months preceding the event giving rise to the claim.",
      },
      {
        title: "11. Indemnification",
        body: "You agree to indemnify and hold harmless Somidax Network Ltd, the Somidax DAO, and their respective officers, contributors, and infrastructure providers from any claim, liability, cost, or expense (including reasonable legal fees) arising from: your breach of these Terms; your use of the Service for an unlawful purpose; any claim by a third party arising from your product listings, merchant activity, or customer interactions; or your infringement of any intellectual property or privacy rights.",
      },
      {
        title: "12. Termination",
        body: "We may suspend or terminate your access to the Service at any time with or without notice if we determine, in our sole discretion, that you have violated these Terms, are subject to sanctions, present an unacceptable AML risk, or if required to do so by law or regulatory direction. Upon termination, your licence to use the Service ceases immediately. Settled transactions on-chain are not affected by termination as they are permanent blockchain records.",
      },
      {
        title: "13. Governing Law & Dispute Resolution",
        body: "These Terms are governed by the laws of England and Wales. Any dispute arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts of England and Wales, except where mandatory consumer protection laws in your jurisdiction confer alternative jurisdictional rights. We encourage resolution of disputes through good-faith negotiation before legal proceedings. Disputes may also be submitted to binding arbitration under ICC Rules if both parties agree in writing.",
      },
      {
        title: "14. Amendments",
        body: "We reserve the right to update these Terms at any time. Material changes will be communicated with at least 30 days' notice via dashboard notification and by updating this page. Your continued use of the Service after the effective date of amended Terms constitutes acceptance. If you do not accept the amended Terms, you must cease using the Service before the effective date.",
      },
    ],
  },

  "Cookie Policy": {
    updated: "1 June 2026",
    badge: "ePrivacy · PECR",
    badgeColor: "#4ADE80",
    sections: [
      {
        title: "1. What Are Cookies",
        body: "Cookies are small text files placed on your device by a website. They are widely used to make websites function efficiently, remember your preferences, and provide analytical information to the site operator. Cookies can be 'session' cookies (deleted when you close your browser) or 'persistent' cookies (remain on your device for a set period). We use both types, as detailed below.",
      },
      {
        title: "2. Cookies We Set",
        body: "Somidax sets the following categories of cookies: (a) Strictly Necessary Cookies — These are essential for the merchant dashboard and web interface to function. They include session authentication tokens (smdx_session), CSRF protection values (smdx_csrf), and user preference flags (smdx_prefs). These cookies cannot be disabled without breaking core functionality. They are session-scoped and expire when you close your browser or after 24 hours of inactivity, whichever comes first. (b) Analytics Cookies (opt-in only) — If you consent, we set a single analytics cookie (smdx_plausible) linked to our self-hosted Plausible Analytics instance. Plausible Analytics is a privacy-preserving tool that does not use fingerprinting, does not track you across sites, does not collect personally identifiable information, and is not shared with any third party. This cookie has a 30-day lifespan and records anonymised page-view events only.",
      },
      {
        title: "3. Cookies We Do Not Set",
        body: "We do not set: advertising or retargeting cookies; third-party analytics cookies (Google Analytics, Mixpanel, Amplitude, Heap, or similar); social media tracking pixels (Meta Pixel, Twitter/X Pixel, LinkedIn Insight, or similar); cross-site tracking cookies of any kind; A/B testing cookies linked to your identity; or any cookie that profiles your behaviour beyond the Somidax web interface.",
      },
      {
        title: "4. Third-Party Cookies",
        body: "We do not load any third-party scripts that set cookies on our domain. Our Content Delivery Network (CDN) may set its own technical cookies for routing and DDoS protection purposes. These are strictly necessary infrastructure cookies and are not under our direct control. You can review the CDN provider's cookie policy on request to legal@somidax.io.",
      },
      {
        title: "5. Managing Your Cookie Preferences",
        body: "On your first visit to any Somidax web property, you will be presented with a cookie preference banner. You may accept or reject analytics cookies at this point. Your preference is stored in a strictly necessary cookie (smdx_cookie_consent) so we do not need to ask again on subsequent visits. You may change your preference at any time using the 'Cookie Preferences' link in the footer of any page. You may also manage or delete all cookies using your browser settings. Note that deleting strictly necessary cookies will end your merchant dashboard session and require you to sign in again.",
      },
      {
        title: "6. Do Not Track",
        body: "We respect the Do Not Track (DNT) browser signal. If your browser sends a DNT:1 header, we will treat this as a withdrawal of consent for analytics cookies and will not activate the Plausible Analytics cookie, regardless of your stored preference.",
      },
      {
        title: "7. Cookie Durations",
        body: "Strictly necessary session cookies expire at browser close or after 24 hours of inactivity. The CSRF token is regenerated on each page load. The analytics cookie (smdx_plausible) persists for 30 days from your last visit. The consent preference cookie (smdx_cookie_consent) persists for 12 months, after which we will ask for your preference again.",
      },
      {
        title: "8. Updates to This Policy",
        body: "We may update this Cookie Policy when we add or remove cookies or when the applicable law changes. The 'Last updated' date at the top of this page reflects the most recent revision. Material changes that introduce new categories of cookies will be communicated via the preference banner and a 14-day notice period before the new cookies are activated.",
      },
    ],
  },

  "AML Policy": {
    updated: "1 August 2026",
    badge: "FATF · UK POCA · FinCEN",
    badgeColor: "#FFBD2E",
    sections: [
      {
        title: "1. Policy Statement",
        body: "Somidax Network Ltd maintains a zero-tolerance position toward money laundering, terrorist financing, proliferation financing, and sanctions evasion in all its forms. We are committed to full compliance with applicable anti-money laundering and counter-terrorist financing (AML/CFT) regulations, including the UK Proceeds of Crime Act 2002, the Terrorism Act 2000, the UK Money Laundering Regulations 2017 (as amended), FATF Recommendations, and equivalent legislation in jurisdictions where our merchants operate. This policy applies to all protocol participants including merchants, developers, buyers, and $SMDX token holders.",
      },
      {
        title: "2. Designated AML Officer",
        body: "Somidax has appointed a designated Money Laundering Reporting Officer (MLRO) with responsibility for overseeing compliance with this policy, receiving and assessing internal suspicious activity reports, making Suspicious Activity Reports (SARs) to the National Crime Agency (NCA) as required, liaising with regulatory authorities, and maintaining AML training records. The MLRO may be contacted at aml@somidax.io. The MLRO's identity is disclosed to the NCA and regulatory authorities as required by law.",
      },
      {
        title: "3. Risk-Based Approach",
        body: "We apply a risk-based approach to AML/CFT compliance. All merchants, wallet addresses, and transaction patterns are assessed against a risk matrix that considers: (a) Geographic risk — jurisdictions with elevated FATF risk ratings, comprehensive sanctions programmes, or high financial crime indices; (b) Product and service risk — transaction volumes, order frequency, average order value, and concentration in high-risk product categories; (c) Channel risk — integration method, API access patterns, and wallet address age and on-chain history; (d) Customer risk — KYB verification outcomes, beneficial ownership complexity, and PEP (Politically Exposed Person) status. Risk ratings are reviewed at least annually and whenever material changes in merchant activity are detected.",
      },
      {
        title: "4. Know Your Business (KYB) Verification",
        body: "All merchants processing aggregate transaction volumes exceeding $10,000 USD equivalent per calendar month are required to complete Know Your Business (KYB) verification before continued settlement is permitted above this threshold. KYB verification requires: (a) legal entity documentation — certificate of incorporation or equivalent, in the merchant's jurisdiction of registration; (b) registered address verification — utility bill, bank statement, or official government document dated within 90 days; (c) beneficial ownership disclosure — full name, date of birth, nationality, and proof of identity for all beneficial owners holding 25% or more of the legal entity; (d) PEP and sanctions screening — all named individuals are screened against consolidated PEP and sanctions lists. KYB data is handled by our third-party identity verification partner under a data processing agreement and is retained for 5 years from the merchant's last active transaction.",
      },
      {
        title: "5. Ongoing Transaction Monitoring",
        body: "All on-chain settlements are subject to automated real-time monitoring. Our transaction monitoring system screens every wallet address and transaction hash against OFAC SDN, UK HMT Consolidated, EU Consolidated, and UN Security Council sanctions lists at settlement time. Wallet addresses are additionally screened using on-chain analytics to detect: known mixer or tumbler outputs; wallet clusters associated with ransomware, darknet markets, or fraud; structuring patterns consistent with layering or smurfing; and unusual velocity patterns inconsistent with stated merchant activity. Flagged transactions are automatically held pending MLRO review before settlement is released.",
      },
      {
        title: "6. Suspicious Activity Reporting",
        body: "Where the MLRO determines that a transaction or wallet relationship gives rise to knowledge, suspicion, or reasonable grounds for suspicion of money laundering or terrorist financing, a Suspicious Activity Report (SAR) will be filed with the UK National Crime Agency (NCA) via the SAR Online system, without tipping off the subject. Settlement for the relevant wallet or merchant will be suspended pending NCA consent or the expiry of the moratorium period under section 335 of the Proceeds of Crime Act 2002. Internal suspicious activity reports may be submitted by any Somidax team member to the MLRO at aml@somidax.io.",
      },
      {
        title: "7. Sanctions Compliance",
        body: "Somidax maintains a strict policy of zero engagement with sanctioned individuals, entities, countries, or jurisdictions. We do not process settlements to or from wallets associated with: OFAC Specially Designated Nationals; UK HMT Asset Freeze targets; EU Consolidated List designees; UN Security Council-listed entities; or residents of comprehensively sanctioned jurisdictions including but not limited to North Korea, Iran, Cuba, Syria, and the Crimea, Donetsk, and Luhansk regions of Ukraine. Sanctions screening is conducted in real-time at the point of each settlement. New OFAC/HMT/EU designations are ingested within 24 hours of publication.",
      },
      {
        title: "8. High-Risk Products & Restricted Categories",
        body: "The following product and service categories are prohibited on the Somidax network regardless of merchant jurisdiction: controlled substances and precursor chemicals; firearms, ammunition, and weapons components; counterfeit or copyright-infringing goods; sexually exploitative material; gambling services without valid regulatory licence; unlicensed financial services and investment products; goods subject to international arms embargoes; any goods or services whose sale is prohibited in the merchant's jurisdiction of incorporation. Merchants found listing prohibited items will have settlement suspended and the listing reported to relevant authorities.",
      },
      {
        title: "9. Record Keeping",
        body: "We maintain the following records for a minimum of 5 years from the date of the relevant transaction or the termination of the business relationship, whichever is later: KYB documents and verification outcomes; all transaction data including wallet addresses, amounts, timestamps, and settlement hashes; sanctions screening results and MLRO decisions; internal suspicious activity reports and SAR filings; correspondence with regulatory authorities. Records may be produced to the NCA, HMRC, FCA, or other competent authorities upon receipt of a valid legal demand. All record-keeping is in compliance with the UK Money Laundering Regulations 2017 Regulation 40.",
      },
      {
        title: "10. Staff Training",
        body: "All Somidax team members with customer-facing, compliance, or technical roles receive AML/CFT training at onboarding and at intervals not exceeding 12 months. Training covers recognition of money laundering red flags, internal reporting procedures, the tipping-off prohibition, and the consequences of non-compliance. Training completion records are maintained by the MLRO.",
      },
      {
        title: "11. Independent Audit",
        body: "This AML Policy and our compliance controls are subject to independent review by a qualified external auditor at intervals not exceeding 24 months. The audit scope includes transaction monitoring effectiveness, KYB procedure adequacy, SAR filing compliance, and records management. Audit findings are reported to the Somidax DAO governance committee and material deficiencies remediated within 90 days.",
      },
      {
        title: "12. Policy Updates",
        body: "This AML Policy is reviewed at least annually and updated whenever: relevant legislation or regulatory guidance changes; FATF guidance materially affecting our risk profile is published; a material deficiency is identified through internal review or external audit; or a significant change to the protocol's product or service offering is made. Material updates are communicated to all active merchants via dashboard notification with at least 14 days' prior notice.",
      },
    ],
  },
};

type DocKey = keyof typeof docs;

const docIcons: Record<DocKey, string> = {
  "Privacy Policy": "shield",
  "Terms of Service": "scroll",
  "Cookie Policy": "cookie",
  "AML Policy": "alert",
};

function DocIcon({ type, color }: { type: string; color: string }) {
  const paths: Record<string, React.ReactElement> = {
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    scroll: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></>,
    cookie: <><circle cx="12" cy="12" r="10"/><path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01"/></>,
    alert: <><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
  };
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[type]}
    </svg>
  );
}

export default function LegalPage() {
  const [activeDoc, setActiveDoc] = useState<DocKey>("Privacy Policy");
  const [expandedSection, setExpandedSection] = useState<number | null>(null);
  const doc = docs[activeDoc];

  return (
    <div style={{ background: "#080B11", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <NavBar />

      <div className="pt-28 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
              style={{ background: "rgba(255,189,46,0.08)", border: "1px solid rgba(255,189,46,0.2)" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FFBD2E" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span className="font-mono-data text-xs" style={{ color: "#FFBD2E" }}>Legal & Compliance Documentation</span>
            </div>
            <h1 className="font-display font-900 text-white mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)" }}>
              Legal Centre
            </h1>
            <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Somidax is a non-custodial protocol. We do not hold your funds or private keys. Please read our policies carefully before using the network.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 items-start">

            {/* Sidebar */}
            <div className="lg:sticky lg:top-28 flex flex-col gap-2">
              {(Object.keys(docs) as DocKey[]).map((key) => {
                const d = docs[key];
                const active = activeDoc === key;
                return (
                  <button key={key} onClick={() => { setActiveDoc(key); setExpandedSection(null); }}
                    className="text-left px-4 py-4 rounded-xl transition-all"
                    style={{
                      background: active ? "rgba(138,43,226,0.12)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${active ? "rgba(138,43,226,0.4)" : "rgba(255,255,255,0.07)"}`,
                    }}>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <DocIcon type={docIcons[key]} color={active ? d.badgeColor : "rgba(255,255,255,0.35)"} />
                      <span className="font-display font-600 text-sm" style={{ color: active ? "#fff" : "rgba(255,255,255,0.5)" }}>{key}</span>
                    </div>
                    <div className="font-mono-data text-xs pl-6" style={{ color: "rgba(255,255,255,0.25)" }}>
                      Updated {d.updated}
                    </div>
                  </button>
                );
              })}

              {/* Contact card */}
              <div className="mt-3 rounded-xl p-4"
                style={{ background: "rgba(255,189,46,0.05)", border: "1px solid rgba(255,189,46,0.18)" }}>
                <div className="font-display font-600 text-xs mb-2" style={{ color: "#FFBD2E" }}>Legal enquiries</div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Questions about our policies or compliance obligations:
                </p>
                <a href="mailto:legal@somidax.io" className="font-mono-data text-xs mt-2 block underline" style={{ color: "#FFBD2E" }}>
                  legal@somidax.io
                </a>
                <a href="mailto:privacy@somidax.io" className="font-mono-data text-xs mt-1 block underline" style={{ color: "#FFBD2E" }}>
                  privacy@somidax.io
                </a>
                <a href="mailto:aml@somidax.io" className="font-mono-data text-xs mt-1 block underline" style={{ color: "#FFBD2E" }}>
                  aml@somidax.io
                </a>
              </div>
            </div>

            {/* Document content */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl overflow-hidden"
                style={{ background: "rgba(18,15,36,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}>

                {/* Doc header */}
                <div className="px-8 pt-8 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h2 className="font-display font-800 text-white text-2xl mb-2">{activeDoc}</h2>
                      <div className="flex items-center gap-3">
                        <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                          Last updated: {doc.updated}
                        </span>
                        <span className="font-mono-data text-xs px-2.5 py-1 rounded-full"
                          style={{ background: `${doc.badgeColor}14`, color: doc.badgeColor, border: `1px solid ${doc.badgeColor}28` }}>
                          {doc.badge}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 px-3 py-1.5 rounded-lg"
                      style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)" }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#4ADE80" }} />
                      <span className="font-mono-data text-xs" style={{ color: "#4ADE80" }}>Current</span>
                    </div>
                  </div>

                  {/* Section count / jump strip */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{doc.sections.length} sections</span>
                    <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                    <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Click any section to expand</span>
                  </div>
                </div>

                {/* Sections — accordion on mobile, always open on desktop */}
                <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                  {doc.sections.map((section, i) => {
                    const isOpen = expandedSection === i || expandedSection === null;
                    return (
                      <div key={i}>
                        <button
                          onClick={() => setExpandedSection(expandedSection === i ? null : i)}
                          className="w-full text-left px-8 py-5 flex items-center justify-between gap-4 group transition-all"
                          style={{ background: expandedSection === i ? "rgba(138,43,226,0.04)" : "transparent" }}>
                          <div className="flex items-center gap-3">
                            <span className="font-mono-data text-xs flex-shrink-0 w-6 text-right"
                              style={{ color: doc.badgeColor, opacity: 0.7 }}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="font-display font-600 text-sm"
                              style={{ color: expandedSection === i ? "#fff" : "rgba(255,255,255,0.75)" }}>
                              {section.title.replace(/^\d+\.\s/, "")}
                            </span>
                          </div>
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                            className="flex-shrink-0 transition-transform duration-200"
                            style={{ transform: isOpen && expandedSection !== null ? "rotate(180deg)" : "rotate(0deg)", color: "rgba(255,255,255,0.3)" }}>
                            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </button>

                        {/* Content — always visible when no section selected; per-section when one is */}
                        <div className={expandedSection !== null && expandedSection !== i ? "hidden" : ""}>
                          <div className="px-8 pb-7 pt-1">
                            <div className="pl-9">
                              <p className="text-sm leading-[1.85]" style={{ color: "rgba(255,255,255,0.58)" }}>
                                {section.body}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Footer notice */}
                <div className="px-8 py-6 mx-0" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,189,46,0.03)" }}>
                  <div className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFBD2E" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <div>
                      <div className="font-display font-600 text-sm mb-1" style={{ color: "#FFBD2E" }}>Non-Custodial Notice</div>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                        Somidax does not hold, control, or have access to your funds or private keys at any time. $SMDX is a utility token and does not constitute a security, investment product, or financial instrument. Settlement is final and non-reversible once confirmed on-chain. Nothing in these documents constitutes financial, legal, or tax advice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nav between docs */}
              <div className="flex items-center justify-between mt-5">
                {(() => {
                  const keys = Object.keys(docs) as DocKey[];
                  const idx = keys.indexOf(activeDoc);
                  const prev = idx > 0 ? keys[idx - 1] : null;
                  const next = idx < keys.length - 1 ? keys[idx + 1] : null;
                  return (
                    <>
                      <div>
                        {prev && (
                          <button onClick={() => { setActiveDoc(prev); setExpandedSection(null); }}
                            className="text-sm font-500 transition-colors hover:text-white flex items-center gap-1.5"
                            style={{ color: "rgba(255,255,255,0.4)" }}>
                            ← {prev}
                          </button>
                        )}
                      </div>
                      <div>
                        {next && (
                          <button onClick={() => { setActiveDoc(next); setExpandedSection(null); }}
                            className="text-sm font-500 transition-colors hover:text-white flex items-center gap-1.5"
                            style={{ color: "rgba(255,255,255,0.4)" }}>
                            {next} →
                          </button>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
