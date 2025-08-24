"use client";
import styles from "./serve.module.css";

const services = [
  {
    title: "Canva for Beginner & Pro",
    points: [
      "สร้างสื่อโซเชียล, presentation, resume, infographic",
      "เทคนิคการจัดวาง, ฟอนต์, การใช้ template อย่างมืออาชีพ",
    ],
  },
  {
    title: "Photoshop Workflow",
    points: [
      "แต่งภาพ, รีทัช, ทำ mockup",
      "เตรียมไฟล์สำหรับพิมพ์หรือโพสต์",
    ],
  },
  {
    title: "Visual Branding",
    points: [
      "ออกแบบแบรนด์ให้ดูแพงด้วย Canva & Photoshop",
      "การเลือกสี โลโก้ ฟอนต์ และ Mood & Tone",
    ],
  },
  {
    title: "Content Creation & Marketing",
    points: [
      "ทำคอนเทนต์แบบมืออาชีพในเวลาอันรวดเร็ว",
      "การใช้ Canva ร่วมกับ AI และ Social Media Tools",
    ],
  },
  {
    title: "Advanced Design Tricks (Photoshop)",
    points: [
      "สร้าง Effect, Layer Style, Masking, Smart Object",
      "เทคนิค Retouch และ Compositing เบื้องต้น",
    ],
  },
];

const learningPlans = [
  "คอร์ส Canva Basic & Pro",
  "คอร์ส Photoshop สำหรับครีเอเตอร์",
  "คอร์สออกแบบแบรนด์สำหรับโซเชียล",
  "Canva + Photoshop สำหรับ Content Creator",
  "คอร์ส Fast-track เรียนจบใน 1 วัน",
];

const pricing = [
  {
    name: "Starter",
    price: "1,990 บาท",
    features: ["Canva + Photoshop เบื้องต้น (เรียนออนไลน์)"],
  },
  {
    name: "Pro",
    price: "4,990 บาท",
    features: ["เข้าถึงทุกคอร์ส", "Workshop สด", "กลุ่มให้คำปรึกษา"],
    highlight: true,
  },
  {
    name: "Team",
    price: "ติดต่อเรา",
    features: ["สำหรับองค์กร, ธุรกิจ หรือโรงเรียน"],
  },
];

const faqs = [
  {
    q: "ไม่เคยใช้ Photoshop มาก่อน เรียนได้ไหม?",
    a: "ได้",
  },
  {
    q: "ใช้ Canva อยู่แล้ว จำเป็นต้องเรียนไหม?",
    a: 'ถ้าคุณอยากให้ผลงานดูโปรขึ้น ตอบว่า "จำเป็นมาก"',
  },
  {
    q: "ต้องมีโปรแกรมอะไรติดตั้งบ้าง?",
    a: "มีแค่ Canva และ Photoshop ก็เริ่มได้เลย",
  },
];

function SectionTitle({ children }) {
  return <h2>{children}</h2>;
}

export default function ServePage() {
  const subtitle =
    "รวมทุกเทคนิคที่คุณต้องรู้ ตั้งแต่การออกแบบแบบเร่งด่วนด้วย Canva ไปจนถึงการปรับแต่งระดับลึกด้วย Photoshop";
  const audience =
    "เหมาะสำหรับ: ครีเอเตอร์, เจ้าของแบรนด์, ฟรีแลนซ์, นักการตลาด, นักเรียน นักศึกษา";

  return (
    <div className={`gradient-frame ${styles.screen} ${styles.frame}`}>
      <div className={`serve-container ${styles.container}`}>
      <header className="hero">
        <h1>🧠 สอนออกแบบด้วย Canva & Photoshop อย่างมืออาชีพ</h1>
        <p>{subtitle}</p>
        <p>{audience}</p>
        <div className="cta">
          <a className="btn primary" href="#register">สนใจลงทะเบียน</a>
          <a className="btn" href="#trial">ทดลองเรียนฟรี</a>
        </div>
      </header>

      <section>
        <SectionTitle>🛠️ บริการของเรา</SectionTitle>
        <p>(เลือกเรียนเฉพาะด้าน หรือซื้อแบบแพ็กเกจรวมได้)</p>
        <div className="cards">
          {services.map((svc, i) => (
            <div className="card" key={i}>
              <h3>{svc.title}</h3>
              <ul>
                {svc.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>🎓 แผนการเรียนรู้</SectionTitle>
        <ul>
          {learningPlans.map((plan, i) => (
            <li key={i}>{plan}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionTitle>💰 แพ็กเกจราคา</SectionTitle>
        <div className="cards">
          {pricing.map((pkg) => (
            <div
              key={pkg.name}
              className={`card ${pkg.highlight ? "highlight" : ""}`}
            >
              <h3>{pkg.name}</h3>
              <div className="price">{pkg.price}</div>
              <ul>
                {pkg.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <a className="btn small" href="#register">เลือกแพ็กเกจ</a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>❓ คำถามที่พบบ่อย</SectionTitle>
        <div className="faqs">
          {faqs.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="trial" className="trial">
        <SectionTitle>📢 สนใจเรียนไหม?</SectionTitle>
        <p>อยากเรียนฟรี คลิกที่นี่!</p>
        <div className="cta">
          <a id="register" className="btn primary" href="#register">
            สนใจลงทะเบียน
          </a>
          <a className="btn" href="#trial">
            ทดลองเรียนฟรี
          </a>
        </div>
      </section>
    </div>
      <style jsx>{`
        .gradient-frame {
          padding: 12px;
          border-radius: 16px;
          
          background-size: 300% 300%;
          animation: gradientShift 12s ease infinite;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(13, 42, 148, 0.35);
        }
        .serve-container {
         
          border-radius: 12px;
          padding: 24px;
        }
        .hero {
          text-align: center;
          padding: 16px 8px 8px;
        }
        .cta {
          margin-top: 16px;
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 10px;
          border: 1px solid #cbd5e1;
          background: #fff;
          color: #0f172a;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
        }
        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 14px rgba(2, 6, 23, 0.12);
          background: #f8fafc;
        }
        .btn.small {
          padding: 8px 12px;
          font-size: 0.95rem;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 16px;
          margin-top: 12px;
        }
        .card {
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          padding: 16px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.3s ease;
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(2, 6, 23, 0.08);
          border-color: #cbd5e1;
        }
        .card.highlight {
          border-color: #2563eb;
          box-shadow: 0 12px 28px rgba(37, 99, 235, 0.18);
        }
        .price {
          font-size: 1.6rem;
          font-weight: 700;
          color: #0b1f66;
          margin: 8px 0 10px;
        }
        .faq-item {
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 8px 12px;
          background: #ffffff;
        }
        .faqs {
          display: grid;
          gap: 10px;
          margin-top: 10px;
        }
        .trial {
          text-align: center;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
