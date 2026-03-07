"use client";
import { useEffect, useRef } from 'react';

export default function SecuritySeal() {
  const sealRef = useRef(null);

  useEffect(() => {
    // Ensure we only inject the script once
    if (sealRef.current && sealRef.current.children.length === 0) {
      
      // 1. Save the browser's original write functions
      const originalWrite = document.write;
      const originalWriteLn = document.writeln;

      // 2. Temporarily hijack them to inject the seal safely into our React div
      document.write = (html) => {
        if (sealRef.current) sealRef.current.insertAdjacentHTML('beforeend', html);
      };
      document.writeln = (html) => {
        if (sealRef.current) sealRef.current.insertAdjacentHTML('beforeend', html + '\n');
      };

      // 3. Create and load the script
      const script = document.createElement('script');
      script.src = 'https://security-seal.emsign.com/generateSeal?width=175';
      script.async = true;
      script.type = 'text/javascript';
      script.referrerPolicy = 'origin';

      // 4. Clean up: Restore the original functions once the script finishes loading
      script.onload = () => {
        document.write = originalWrite;
        document.writeln = originalWriteLn;
      };
      
      // Restore on error as well, just to be safe
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
      {/* The script will dynamically draw the anchor and img tags here */}
    </div>
  );
}