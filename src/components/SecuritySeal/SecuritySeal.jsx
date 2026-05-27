"use client";
import { useEffect, useRef } from 'react';

export default function SecuritySeal() {
  const sealRef = useRef(null);
  const scriptInjected = useRef(false); // Failsafe for React StrictMode

  useEffect(() => {
    if (sealRef.current && !scriptInjected.current) {
      scriptInjected.current = true;
      
      const originalWrite = document.write;
      const originalWriteLn = document.writeln;

      document.write = (html) => {
        if (sealRef.current) sealRef.current.insertAdjacentHTML('beforeend', html);
      };
      document.writeln = (html) => {
        if (sealRef.current) sealRef.current.insertAdjacentHTML('beforeend', html + '\n');
      };

      const script = document.createElement('script');
      script.src = 'https://security-seal.emsign.com/generateSeal';
      script.type = 'text/javascript';
      script.referrerPolicy = 'origin'; // This correctly sends https://ssbbank.bank.in/

      script.onload = () => {
        document.write = originalWrite;
        document.writeln = originalWriteLn;
      };
      
      script.onerror = () => {
        document.write = originalWrite;
        document.writeln = originalWriteLn;
      };

      sealRef.current.appendChild(script);
    }
  }, []);

  return (
    <div 
      ref={sealRef} 
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
    </div>
  );
}