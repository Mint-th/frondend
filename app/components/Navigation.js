"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [tokenState, setToken] = useState(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isServe = pathname?.startsWith("/serve");
  const isContact = pathname?.startsWith("/about") || pathname?.startsWith("/contact");

  useEffect(() => {
    // โหลด token ตอนแรก
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const handleSignOut = () => {
    // ลบ token
    localStorage.removeItem("token");
    // อัปเดต state ของ token ให้ Navbar รีเฟรชทันที
    setToken(null);
    // ไปหน้าแรก
    router.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src="/Image/Night Rider 1.png"
            alt="Logo"
            width={30}
            height={30}
            className="d-inline-block align-text-top"
          />
          Night Rider
        </Link>

        {/* Hamburger menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link${isHome ? ' active' : ''}`} aria-current={isHome ? 'page' : undefined} href="/">
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link${isServe ? ' active' : ''}`} aria-current={isServe ? 'page' : undefined} href="/serve">บริการ</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className={`nav-link dropdown-toggle${isContact ? ' active' : ''}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded={isContact ? "true" : "false"}>ติดต่อ</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/about" className="dropdown-item">เกี่ยวกับเรา</Link>
                  <Link href="/contact" className="dropdown-item">ติดต่อเรา</Link>
                </li>
              </ul>
            </li>
          </ul>


              

            {!tokenState ? (
              <>
                <Link href="/login" className="btn btn-outline-warning">เข้าสู่ระบบ</Link>
                <Link href="/register" className="btn btn-outline-warning">สมัครสมาชิก</Link>
              </>
            ) : (
              <>
                <Link href="/admin/users" className="btn btn-outline-warning">admin</Link>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="btn btn-outline-danger border-2 px-4 py-2 d-flex align-items-center gap-2"
                  aria-label="Sign out">
                  <i className="bi bi-box-arrow-right" aria-hidden="true"></i>
                  <span>ออกจากระบบ</span>
                </button>
              </>
            )}
          </div>
        </div>
      
    </nav>
  );
}