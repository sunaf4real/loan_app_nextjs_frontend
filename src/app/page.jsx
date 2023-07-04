'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/nav/Navbar'
import TestInput from '@/components/textinput/TestInput'
import Button from '@/components/buttons/Button'


import { Toast, toast } from 'react-hot-toast'
import { useState } from "react";

export default function Home() {
// my js code is written here=======================================================

  /// declaration of inputs
  const [fullName, setFullName] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [duration, setDuration] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const formData = new FormData();
    formData.append('action', 'request_for_loan')
    formData.append('full_name', fullName);
    formData.append('loan_amount', loanAmount);
    formData.append('repayment_duration', duration);

      let res = await fetch("http://localhost/projects/concreterose/loan_api/api/", {
        method: 'POST',
        body: formData,
        redirect: 'follow'
      })
      
      let resJson = await res.json();
      if (resJson.code == 99) {
        setFullName("");
        setLoanAmount("");
        setDuration("");
        const message =resJson.message;
        toast.success(message)
      } else {
        alert('No')
        //toast.error(message)
      }
    } catch (err) {
      console.log(err);
    }
//console.log(resJson)
  }

//================================================================================== 
  return (
    <div className={styles.pageContainer}>
     <Navbar/>
       
     
        <h1>Request For Loan</h1>
        <div className={styles.formDiv}>
        

        <form method='POST' onSubmit={handleSubmit}>
            <TestInput 
            title="Full Name"
            placeholder="Type Full Name Here"
            type='text'
            value={fullName}
            setvalue={setFullName}
            />

            <TestInput 
            title="Loan Amount (N)"
            placeholder="00.00"
            type='number'
            value={loanAmount}
            setvalue={setLoanAmount}
            />

            <TestInput 
              title="Loan Duration (Months)"
              placeholder="0"
              type='number'
              value={duration}
              setvalue={setDuration}
            />
            <Button
              text="Request For Loan"
              class_name="formBtn"
            />       
        </form>



          
        </div>
    </div>

  )
}

