import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Router from 'next/router';
import API from '../utils/api';

export default function EnterStore(){
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [stage, setStage] = useState(0);
  const [msg, setMsg] = useState('');

  async function sendOtp(){
    try {
      // For now, mock — backend not wired: store phone locally and move to OTP stage
      localStorage.setItem('mrp_phone', phone);
      setStage(1);
      setMsg('OTP sent (mock). Enter 123456 to continue.');
      // If backend ready: await API.post('/auth/send-otp',{phone})
    } catch (err) { setMsg('Error sending OTP'); }
  }

  async function verify(){
    if (otp === '123456') {
      // Mock success: create a fake token
      localStorage.setItem('token', 'FAKE-JWT-TOKEN');
      Router.push('/store');
    } else {
      setMsg('Invalid OTP (use 123456 in mock).');
    }
    // If backend ready: call /auth/verify-otp
  }

  return (
    <>
      <Head><title>Enter Store — The MRP Store</title></Head>
      <Header />
      <main style={{ maxWidth: 800, margin: '60px auto', padding: '0 20px' }}>
        <h1 style={{ textAlign: 'center' }}>Enter Store</h1>
        <p style={{ textAlign: 'center', color:'#666' }}>Access is exclusive. Provide your WhatsApp number to receive OTP.</p>

        <div style={{ maxWidth: 420, margin: '30px auto', background:'#fff', padding:24, borderRadius:8, boxShadow:'0 8px 30px rgba(0,0,0,0.06)' }}>
          {stage === 0 ? (
            <>
              <label className="label">WhatsApp number</label>
              <input className="input" value={phone} placeholder="+91XXXXXXXXXX" onChange={e => setPhone(e.target.value)} />
              <button className="btn" onClick={sendOtp} style={{ marginTop: 12 }}>Send OTP</button>
            </>
          ) : (
            <>
              <label className="label">Enter OTP</label>
              <input className="input" value={otp} onChange={e => setOtp(e.target.value)} placeholder="123456" />
              <button className="btn" onClick={verify} style={{ marginTop: 12 }}>Verify & Enter</button>
            </>
          )}
          {msg && <p style={{ marginTop: 12, color: '#b33' }}>{msg}</p>}
        </div>
      </main>
      <Footer />
    </>
  );
}
