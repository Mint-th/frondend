'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import Swal from 'sweetalert2'
import styles from './login.module.css'

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('https://backend-nextjs-virid.vercel.app/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    console.log(username);
    if (data.token) {
    localStorage.setItem('token', data.token);  
    Swal.fire({
        icon: 'success',
        title: '<h3>Login Successfuly!</h3>',
        showConfirmButton: false,
        timer: 2000
        }).then(function () {
        //router.push('/admin/users');
        window.location.href = "/admin/users";
      });
    } else {
      
    Swal.fire({
        icon: 'warning',
        title: '<h3>Login Failed!</h3>',
        showConfirmButton: false,
        timer: 2000
        }).then(function () {
          router.push('/register');
      });
 
    }
  };
  return (
    <div className={styles.screen}>
      <div className={`container ${styles.center}`}>
        <div className={`card ${styles.glass}`}>
          <div className={`card-header ${styles.cardHeader}`}>
            เข้าสู่ระบบ
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={handleLogin}>
              <div className="col-md-12">
                <label className={`form-label ${styles.label}`}>ชื่อผู้ใช้</label>
                <div className="input-group">
                  <span className={`input-group-text ${styles.inputGroupText}`} id="basic-addon3">
                    <i className="bi bi-person-vcard"></i>
                  </span>
                  <input
                    type="text"
                    className={`form-control ${styles.input}`}
                    id="formGroupExampleInput"
                    defaultValue={username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <label className={`form-label ${styles.label}`}>รหัสผ่าน</label>
                <div className="input-group">
                  <span className={`input-group-text ${styles.inputGroupText}`} id="basic-addon3">
                    <i className="bi bi-shield-lock"></i>
                  </span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={`form-control ${styles.input}`}
                    id="formGroupExampleInput2"
                    defaultValue={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className={`btn btn-outline-secondary`}
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <i className={showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'}></i>
                  </button>
                </div>
                <div className="form-text">
                  สถานะรหัสผ่าน: {showPassword ? 'เปิด (แสดง)' : 'ปิด (ซ่อน)'}
                </div>
              </div>

              <div className="col-12">
                <button type="submit" className={`btn btn-primary ${styles.cta}`}>Sign In</button>
              </div>
              <div className={`col-12 ${styles.links}`}>
                <Link href="/register">Create Account</Link> | <Link href="/">Forget Password</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}