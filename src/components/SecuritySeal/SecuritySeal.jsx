"use client";
import Script from "next/script";

export default function SecuritySeal() {
  return (
    <div
      style={{ 
        width: '175px', 
        height: '100px', 
        margin: '0 auto', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      aria-label="Site secured by eMudhra SSL"
    >
      <Script
        src="https://security-seal.emsign.com/generateSeal?width=175"
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Failed to load SSL seal script:', e);
        }}
      />
    </div>
  );
}