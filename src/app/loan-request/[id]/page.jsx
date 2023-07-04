'use client'
import styles from './page.module.css'
import Navbar from '@/components/nav/Navbar'
import { useState, useEffect } from 'react'
import {numberFormat} from "@/utils/library-functions"

export default function LoanRepaymentDetails({params}) {
  const transactionId = params.id
  const [fetching, setFetching]=useState(false);


  const [repaymentSchedule, setRepaymentSchedule]=useState([]);

  useEffect(()=>{
      const fetchRepaymentSchedule= async()=>{
        if(fetching) return
        try {
          setFetching(true)
          const formData = new FormData();
          formData.append('action', 'get_repayment_schedule')
          formData.append('transaction_id', transactionId)
     
           let res = await fetch("http://localhost/projects/concreterose/loan_api/api/", {
             method: 'POST',
             body: formData,
             redirect: 'follow'
           })
           
           let resJson = await res.json();
           setFetching(false)
           setRepaymentSchedule(resJson)
         } catch (err) {
          setFetching(false)
           console.log(err);
         }
      }
      fetchRepaymentSchedule();

  }, []) 


  return (
    <div className={styles.pageContainer}>
    <Navbar/>
       
     
        <h1>Loan Repayment Details</h1>

        <div className={styles.loanDetailBackDiv}>
        <div  className={styles.details}>

            <div className={styles.loanListDiv}>
              <div className={styles.loanListDivIn}>
                <div className={styles.loanAmount}>Loan ID:</div>
                <h2 className={styles.laonName}>{repaymentSchedule.TRANSACTION_ID}</h2>
              </div>
            </div>
            <div className={styles.loanListDiv}>
              <div className={styles.loanListDivIn}>
                <div className={styles.loanAmount}>Customer Name:</div>
                <h2 className={styles.laonName}>{repaymentSchedule.FULL_NAME}</h2>
              </div>
            </div>
            <div className={styles.loanListDiv}>
              <div className={styles.loanListDivIn}>
                <div className={styles.loanAmount}>Loan Amount (N)</div>
                <h2 className={styles.laonName}>N {numberFormat.format(repaymentSchedule.LOAN_AMOUNT)}</h2>
              </div>
            </div>
            <div className={styles.loanListDiv}>
              <div className={styles.loanListDivIn}>
                <div className={styles.loanAmount}>Loan Duration</div>
                <h2 className={styles.laonName}>{repaymentSchedule.REPAYMENT_DURATION} Months</h2>
              </div>
            </div>
            <div className={styles.loanListDiv}>
            <div className={styles.loanListDivIn}>
              <div className={styles.loanAmount}>Cumulative Repayment Amount (N)</div>
              <h2 className={styles.laonName}>N {numberFormat.format(repaymentSchedule.CUMULATIVE_REPAYMENT_AMOUNT)}</h2>
            </div>
          </div>
          <div className={styles.loanListDiv}>
              <div className={styles.loanListDivIn}>
                <div className={styles.loanAmount}>Date:</div>
                <h2 className={styles.laonName}>{repaymentSchedule.DATE}</h2>
              </div>
            </div>
            


        </div>

        <div  className={styles.loanSummaryDiv}>
        
        <div className={styles.tableDiv}>
          <table className={styles.table} cellspacing="0">
                <tr className={styles.tbTitle}>
                  <td><strong>MONTH (S)</strong></td>
                  <td><strong>LOAN BALANCE</strong></td>
                  <td><strong>SUB PAYMENT</strong></td>
                  <td><strong>INTEREST</strong></td>
                  <td><strong>TOTAL REPAYMENT</strong></td>
                </tr> 

                {repaymentSchedule.data?.length>0 && repaymentSchedule.data.map(eachRepayment=>(
                  <tr>
                    <td>{eachRepayment.MONTH_COUNT}</td>
                    <td>{eachRepayment.LOAN_BALANCE}</td>
                    <td>{eachRepayment.EXPECTED_REPAYMENT_AMOUNT}</td>
                    <td>{eachRepayment.INTEREST}</td>
                    <td>{eachRepayment.TOTAL_REPAYMENT_AMOUNT}</td>
                  </tr>
                ))}
                    
          </table>
        </div>


        </div>
    
      </div>
       
    </div>

  )
}
