'use client'
import React from 'react';
import './page.css';
import { useSearchParams } from 'next/navigation';
import { getCode } from '@/services/auth.service'; 

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
        src="https://tse2.mm.bing.net/th/id/OIP.5S8nLA3Iq5CizlrCN71zhAHaFA?rs=1&pid=ImgDetMain" 
        alt="Logo de The Office Depot" 
      />
      <h1 className="title">Take your code: </h1>
      <pre className="code-block">
        {code}
      </pre>
    </div>
  );
};

export default CodeDisplay;