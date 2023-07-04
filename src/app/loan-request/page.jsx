'use client'
import styles from './page.module.css'
import Navbar from '@/components/nav/Navbar'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {numberFormat} from "@/utils/library-functions"



export default function Home() {
  const [allLoanRequest, setAllLoanRequest]=useState([]);

  const [fetching, setFetching]=useState(false);

  useEffect(()=>{
      const fetchAllLoanRequest= async()=>{
        if(fetching) return
        try {
          setFetching(true)
          const formData = new FormData();
          formData.append('action', 'get_all_loan_request')
     
           let res = await fetch("http://localhost/projects/concreterose/loan_api/api/", {
             method: 'POST',
             body: formData,
             redirect: 'follow'
           })
           
           let resJson = await res.json();
           setFetching(false)
           setAllLoanRequest(resJson.data)
         } catch (err) {
          setFetching(false)
           console.log(err);
         }
      }
      fetchAllLoanRequest();

  }, [])
  return (
    <div className={styles.pageContainer}>
    <Navbar/>
       
     
        <h1>All Loan Request</h1>
        {/* keep the user waiting ========================= */}
        {fetching && <div>Loading data....</div>}
        {/* ================================================*/}



        <div className={styles.loanListBackDiv}>
          
        {!fetching && allLoanRequest?.length>0 && allLoanRequest.map(eachRequest=>(
          <Link href={`/loan-request/${eachRequest.TRANSACTION_ID}`} title={eachRequest.FULL_NAME}>
            <div className={styles.loanListDiv}>
              <div className={styles.loanListDivIn}>
              <div className={styles.loanId}>{eachRequest.TRANSACTION_ID}</div>
              <h2 className={styles.laonName}>{eachRequest.FULL_NAME}</h2>
              <div className={styles.loanAmount}>N {numberFormat.format(eachRequest.LOAN_AMOUNT)} <button className={styles.btn}>{eachRequest.REPAYMENT_DURATION} Months</button></div>
            </div>
          </div>
        </Link>
        ))}
            
    
        </div>
        
    </div>

  )
}
