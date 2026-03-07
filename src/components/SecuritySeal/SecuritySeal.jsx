"use client";
import { useEffect, useRef } from 'react';

export default function SecuritySeal() {
  const sealRef = useRef(null);

  useEffect(() => {
    // This check ensures the script is only added once, even if React re-renders
    if (sealRef.current && sealRef.current.children.length === 0) {
      const script = document.createElement('script');
      script.src = 'https://security-seal.emsign.com/generateSeal?width=175';
      script.async = true;
      script.type = 'text/javascript';
      
      sealRef.current.appendChild(script);
    }
  }, []);

  return (
    <div 
      ref={sealRef} 
      style={{ 
        width: '175px', 
        height: '100px', 
        margin: '0 auto', /* Centers the seal if placed in a block */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      aria-label="Site secured by eMudhra SSL"
    >
    </div>
  );
}