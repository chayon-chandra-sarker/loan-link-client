import React, { use } from 'react';
import Loan from '../Loan/Loan';

const LoansContanet = ({loansPromise}) => {
    const loans = use(loansPromise);
  
    return (
        <div className=''>
            <div className="pb-7 ">
                <h2 className='font-bold text-4xl text-center'>Our All Loans</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3 px-2">
                {
                    loans.map((loan) => <Loan key={loan._id} loan={loan}></Loan>)
                }
            </div>
        </div>
    );
};

export default LoansContanet;