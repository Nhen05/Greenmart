import React from "react";

const FooterAd = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-center text-white mt-auto"
      style={{ backgroundColor: "#0f5e3f" }} // Xanh đậm chính của GreenMart
    >
      <div
        className="p-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.15)", // Lớp overlay nhẹ
          borderTop: "1px solid #1e8449",
        }}
      >
        <p className="mb-1 fw-semibold" style={{ color: "#a8e063" }}>
          GreenMart Admin Dashboard
        </p>
        <p className="mb-2 small">
          Quản lý rau sạch organic – Buôn Ma Thuột, Đắk Lắk
        </p>
        <p className="mb-0">
          © {currentYear} Copyright:{" "}
          <a
            href="#"
            className="text-white fw-bold text-decoration-none"
            style={{ color: "#a8e063" }}
          >
            Nhen Developer
          </a>
        </p>
      </div>

      {/* CSS inline cho hiệu ứng hover nếu có link */}
      <style>{`
        footer a:hover {
          color: #ffffff !important;
          text-decoration: underline !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </footer>
  );
};

export default FooterAd;