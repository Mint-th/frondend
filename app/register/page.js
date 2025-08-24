'use client'
import './regiser.css'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

export default function Register() {
  const router = useRouter()

  // ค่าฟอร์ม
  const [firstname, setFirstname] = useState('') // คำนำหน้า
  const [fullname, setFullname] = useState('')   // ชื่อ
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [sex, setSex] = useState('')
  const [birthday, setBirthday] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ firstname, fullname, lastname, username, password, address, sex, birthday }),
      })

      const result = await res.json().catch(() => ({}))

      if (res.ok) {
        await Swal.fire({
          icon: 'success',
          title: 'บันทึกข้อมูลเรียบร้อยแล้ว',
          showConfirmButton: false,
          timer: 2000,
        })
        // เคลียร์ฟอร์มแล้วพาไปหน้า Login
        setFirstname('')
        setFullname('')
        setLastname('')
        setUsername('')
        setPassword('')
        setAddress('')
        setSex('')
        setBirthday('')
        router.push('/login')
      } else {
        Swal.fire({
          title: 'Error!',
          text: result?.message || 'เกิดข้อผิดพลาด!',
          icon: 'error',
          confirmButtonText: 'ตกลง',
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'ข้อผิดพลาด',
        text: 'ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้',
      })
    }
  }

  return (
    <div className="register-page">
      <h1>สมัครสมาชิก</h1>
      <form onSubmit={handleSubmit}>
        <select value={firstname} onChange={(e) => setFirstname(e.target.value)} required>
          <option value="">คำนำหน้าชื่อ</option>
          <option value="นาย">นาย</option>
          <option value="นาง">นาง</option>
          <option value="นางสาว">นางสาว</option>
        </select>

        <input
          type="text"
          placeholder="ชื่อ"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="นามสกุล"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="ที่อยู่"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <select value={sex} onChange={(e) => setSex(e.target.value)} required>
          <option value="">เพศ</option>
          <option value="ชาย">ชาย</option>
          <option value="หญิง">หญิง</option>
          <option value="ไม่ระบุ">ไม่ระบุ</option>
        </select>

        <input
          type="date"
          placeholder="วันเกิด"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />

        <button type="submit">สมัครสมาชิก</button>
      </form>
    </div>
  )
}
