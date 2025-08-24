'use client'

import { useMemo, useState } from 'react'

// แก้ไขข้อมูลติดต่อได้ที่นี่
const CONTACT = {
  phone: '080-000-0000',
  email: 'support@example.com',
  lineId: '@yourlineid',
  // ลิงก์เพิ่มเพื่อน LINE (เปลี่ยนเป็นของคุณ)
  lineUrl: 'https://line.me/ti/p/@yourlineid',
}

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '', // ชื่อ
    lastName: '', // นามสกุล
    email: '', // อีเมล
    subject: '', // หัวข้อ
    details: '', // รายละเอียด
  })
  const [submitted, setSubmitted] = useState(false)

  const telHref = useMemo(() => {
    const digits = CONTACT.phone.replace(/[^0-9+]/g, '')
    return `tel:${digits}`
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    // เชื่อมต่อ API ส่งข้อมูลได้ที่นี่
  }

  const styles = {
    page: {
      maxWidth: 1024,
      margin: '0 auto',
      padding: '28px 18px 80px',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"',
      lineHeight: 1.6,
      color: '#0f172a',
    },
    header: { marginBottom: 28 },
    title: { fontSize: 36, fontWeight: 800, margin: 0, letterSpacing: -0.5 },
    subtitle: { color: '#64748b', marginTop: 8 },
    card: {
      border: '2px solid transparent',
      borderRadius: 16,
      padding: 22,
      boxShadow: '0 10px 30px rgba(0, 72, 255, 1)',
      background:
        'linear-gradient(180deg, #ffffff, #f8fafc) padding-box,\nlinear-gradient(135deg, #0b3a82, #1e40af, #38bdf8) border-box',
    },
    sectionTitle: { fontSize: 20, fontWeight: 800, marginTop: 0 },
    list: { margin: 0, paddingLeft: 18 },
    listItem: { margin: '10px 0' },
    label: { display: 'block', fontWeight: 700, marginBottom: 8 },
    input: {
      width: '100%',
      padding: '12px 14px',
      border: 'none',
      borderRadius: 10,
      fontSize: 14,
      outline: 'none',
      background: '#fff',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 12,
    },
    textarea: {
      width: '100%',
      minHeight: 140,
      padding: '12px 14px',
      border: 'none',
      borderRadius: 10,
      fontSize: 14,
      outline: 'none',
      resize: 'vertical',
      background: '#fff',
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
      color: '#fff',
      border: 'none',
      borderRadius: 10,
      padding: '12px 18px',
      fontSize: 15,
      fontWeight: 800,
      cursor: 'pointer',
      boxShadow: '0 6px 16px rgba(2, 133, 199, 1)',
    },
    hint: { color: '#006affff', fontSize: 13 },
    successText: { color: '#0b3a82', margin: 0, fontWeight: 600 },
  }

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.subtitle}>ติดต่อเรา</h1>
        <p style={styles.subtitle}>มีคำถาม ข้อเสนอแนะ หรือพบปัญหา แจ้งเราได้ที่นี่</p>
      </header>

      {/* ใช้คลาสแทน inline style เพื่อให้ media query ทำงานได้ */}
      <div className="contact-layout">
        {/* แบบฟอร์มแจ้งปัญหา (ซ้าย) */}
        <section style={styles.card} aria-labelledby="report-form-heading">
          <h2 id="report-form-heading" style={styles.sectionTitle}>❗แจ้งปัญหา❗</h2>

          {submitted && (
            <div className="blue-border" style={{ borderRadius: 12, marginBottom: 14 }}>
              <div style={{ background: '#ecfeff', borderRadius: 10, padding: '12px 14px' }}>
                <p style={styles.successText}>ขอบคุณสำหรับการแจ้งปัญหา เราได้รับข้อมูลของคุณแล้ว</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div style={styles.row}>
              <div>
                <label htmlFor="firstName" style={styles.label}>ชื่อ</label>
                <div className="blue-border" style={{ borderRadius: 12 }}>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="กรอกชื่อ"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" style={styles.label}>นามสกุล</label>
                <div className="blue-border" style={{ borderRadius: 12 }}>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="กรอกนามสกุล"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    style={styles.input}
                  />
                </div>
              </div>
            </div>

            <div style={{ height: 12 }} />

            <div>
              <label htmlFor="email" style={styles.label}>อีเมล</label>
              <div className="blue-border" style={{ borderRadius: 12 }}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@mail.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
            </div>

            <div style={{ height: 12 }} />

            <div>
              <label htmlFor="subject" style={styles.label}>หัวข้อ</label>
              <div className="blue-border" style={{ borderRadius: 12 }}>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="เช่น ล็อกอินไม่สำเร็จ / ระบบล่ม"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
            </div>

            <div style={{ height: 12 }} />

            <div>
              <label htmlFor="details" style={styles.label}>รายละเอียด</label>
              <div className="blue-border" style={{ borderRadius: 12 }}>
                <textarea
                  id="details"
                  name="details"
                  placeholder="อธิบายปัญหาที่พบ ขั้นตอนที่ทำ เบราว์เซอร์ เวอร์ชัน ฯลฯ"
                  value={form.details}
                  onChange={handleChange}
                  required
                  style={styles.textarea}
                />
              </div>
              <p style={styles.hint}>โปรดระบุข้อมูลให้ละเอียดเพื่อให้เราช่วยได้เร็วขึ้น</p>
            </div>

            <div style={{ height: 18 }} />

            <button type="submit" className="btn" style={styles.button}>ส่งข้อมูล</button>
          </form>
        </section>

        {/* ช่องทางการติดต่อ (ขวา) */}
        <section style={styles.card} aria-labelledby="contact-methods-heading">
          <h2 id="contact-methods-heading" style={styles.sectionTitle}>💬ช่องทางการติดต่อ</h2>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              โทรศัพท์: <a href={telHref} style={{ color: '#0369a1', textDecoration: 'none', fontWeight: 600 }}>{CONTACT.phone}</a>
            </li>
            <li style={styles.listItem}>
              อีเมล: <a href={`mailto:${CONTACT.email}`} style={{ color: '#0369a1', textDecoration: 'none', fontWeight: 600 }}>{CONTACT.email}</a>
            </li>
            <li style={styles.listItem}>
              ไลน์: <span style={{ fontWeight: 700 }}>{CONTACT.lineId}</span> 
            </li>
          </ul>
        </section>
      </div>

      <style>{`
        /* Layout: ใช้คลาสเพื่อให้ media query override ได้ */
        .contact-layout { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 900px) {
          .contact-layout { grid-template-columns: 1.2fr 0.8fr; align-items: start; }
        }

        /* ปุ่มส่ง */
        .btn:hover { filter: brightness(0.98); transform: translateY(-1px); }
        .btn:active { transform: translateY(0); filter: brightness(0.95); }

        /* กรอบสีน้ำเงินไล่เฉดสำหรับทุกคอมโพเนนต์ */
        .blue-border {
          position: relative;
          padding: 2px;
          border-radius: 12px;
          background: linear-gradient(135deg, #0b3a82, #1e40af, #38bdf8);
        }
        .blue-border > input,
        .blue-border > textarea,
        .blue-border > div {
          display: block;
          width: 100%;
        }

        /* เอฟเฟกต์โฟกัส: เน้นกรอบภายนอกเมื่อมีโฟกัสภายใน */
        .blue-border:focus-within {
          box-shadow: 0 0 0 4px rgba(56,189,248,0.20);
          background: linear-gradient(135deg, #0b3a82, #1d4ed8, #7dd3fc);
        }
      `}</style>
    </main>
  )
}
