'use client'
import React from 'react';
import './page.css';
import { useSearchParams } from 'next/navigation';
import { getCode } from "@/app/services/auth.service";



interface CodeDisplayProps {
  code: string;
}

const call = async (email:string) =>{
    const isRegistered = await getCode(email);

    return isRegistered;
}

const CodeDisplay: React.FC<CodeDisplayProps> = () => {
    const searchParams = useSearchParams();
    const codeFromPreviousPage = searchParams.get('code');
    const code = call(codeFromPreviousPage!);

  return (
    <div className="container">
      <img 
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Office_Depot_Logo.svg/1200px-Office_Depot_Logo.svg.png" 
        alt="Logo de The Office Depot" 
      />
      <h1 className="title">Este es tu código</h1>
      <pre className="code-block">
        {code}
      </pre>
    </div>
  );
};

export default CodeDisplay;