import useWallet from '@/hooks/useWallet';
import React from 'react';

const Payme = () => {
  const { data, isLoading } = useWallet();

  return (
    <div className="col-span-3">
      <h1 className="text-dark text-3xl font-head font-semibold flex items-center mb-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#411A6E]">
          <svg
            className="w-8 h-8 text-white"
            stroke="currentColor"
            viewBox="0 0 52 52"
          >
            <polygon
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              points="29 13 14 29 25 29 23 39 38 23 27 23"
            />
          </svg>
        </div>
        <span className="ml-4">Payme</span>
      </h1>
      <div className="p-5 rounded-xl bg-white shadow-sm text-[#9e9e9e]">
        {!isLoading && data && (
          <React.Fragment>
            {`<div id="checkgate" to="${data?.wallet?.wallet_id}"></div>`}
            <br />
            {'<script src="https://payme.checkgate.ml/main.js"></script>'}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Payme;
