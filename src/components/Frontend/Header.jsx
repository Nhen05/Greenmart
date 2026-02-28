import React from "react";

const Header = () => {
  return (
    <>
      {/* Navbar chính - khớp màu footer */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top  shadow-sm" style={{ backgroundColor: "#0f5e3f" }}>
        <div className="container-fluid px-4">
          {/* Logo + Brand */}
          <a className="navbar-brand d-flex align-items-center" href="/">
          
            <span className="fw-bold fs-4" style={{ color: "#a8e063" }}>
              GreenMart
            </span>
          </a>

          {/* Toggler cho mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu items */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold text-uppercase">
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="/">
                  <i className="bi bi-house-door me-1"></i> Trang chủ
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="/gioi-thieu.html">
                  <i className="bi bi-info-circle me-1"></i> Giới thiệu
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="/san-pham.html">
                  <i className="bi bi-box-seam me-1"></i> Sản phẩm
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="/lien-he.html">
                  <i className="bi bi-envelope me-1"></i> Liên hệ
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link text-white" href="/tin-tuc.html">
                  <i className="bi bi-newspaper me-1"></i> Tin tức
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Banner khuyến mãi - thay marquee cũ bằng alert xanh tươi */}
      <div 
        className="alert alert-success text-center mb-0 py-3 fw-bold" 
        style={{ 
          backgroundColor: "#1e8449", 
          color: "white", 
          borderRadius: "0", 
          marginTop: "70px"  // Đẩy xuống để tránh chồng navbar fixed
        }}
        role="alert"
      >
        <div className="container">
          🌿 <strong>Ưu đãi đặc biệt hôm nay:</strong> Mua 1kg rau sạch organic – Tặng ngay 200g! Giao nhanh tận nơi Buôn Ma Thuột – Rau tươi từ vườn, sạch 100% tự nhiên! 🥬🍅
        </div>
      </div>

      {/* CSS inline cho hover (có thể tách ra file sau) */}
      <style>{`
        .navbar-dark .navbar-nav .nav-link {
          transition: all 0.3s ease;
        }
        .navbar-dark .navbar-nav .nav-link:hover,
        .navbar-dark .navbar-nav .nav-link.active {
          color: #a8e063 !important;
          transform: translateY(-2px);
        }
        .alert-success {
          animation: fadeIn 1.5s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Header;