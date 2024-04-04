import React, { useState } from 'react';

const CopyTextButton = ({ buttonText, text }) => {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div className='m-6 mt-10 rounded-2xl p-4 bg-[#353539]'>
      <div className='text-white mt-2 mb-8'><p>{text}</p></div>
      <button
        className='border border-[#646373] px-4 py-2 rounded-2xl text-[#646373] font-semibold'
        onClick={copyText}
        disabled={copied}
      >
        {copied ? 'Copied!' : buttonText}
      </button>
    </div>
  );
};

export default CopyTextButton;
