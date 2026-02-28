import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#0f5e3f" }}>
      {/* Phần khuyến mãi nổi bật - màu xanh sáng hơn */}
      <section className="d-flex justify-content-between align-items-center p-4" style={{ backgroundColor: "#1e8449" }}>
        <div className="me-5">
          <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            GreenMart – Rau sạch organic từ vườn đến tay bạn! 
            <br className="d-none d-md-inline" />
            Mua 1kg tặng 200g – Ưu đãi có hạn hôm nay!
          </span>
        </div>

        <div>
          <a href="#" className="text-white me-4">
            <i className="fab fa-facebook-f fa-lg"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-tiktok fa-lg"></i>
          </a>
          <a href="#" className="text-white me-4">
            <i className="fab fa-youtube fa-lg"></i>
          </a>
        </div>
      </section>

      {/* Phần nội dung chính */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Về chúng tôi */}
            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: "#a8e063" }}>
                GreenMart
              </h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#a8e063", height: "3px" }} />
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
                Cung cấp rau củ quả sạch 100% organic, không thuốc trừ sâu, không chất bảo quản.  
                Tươi từ vườn – Giao nhanh tận nơi tại Buôn Ma Thuột và lân cận.
              </p>
              <p className="mt-3 small">
                Thiết kế & Phát triển bởi <strong>Nhen Developer</strong>
              </p>
            </div>

            {/* Sản phẩm nổi bật */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: "#a8e063" }}>
                Sản phẩm
              </h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#a8e063", height: "3px" }} />
              <p>
                <a href="#!" className="text-white text-decoration-none hover-link">
                  Rau cải thìa organic
                </a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none hover-link">
                  Rau bina (cải bó xôi)
                </a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none hover-link">
                  Rau răm tươi
                </a>
              </p>
              <p>
                <a href="#!" className="text-white text-decoration-none hover-link">
                  Rau muống sạch
                </a>
              </p>
            </div>

            {/* Liên hệ */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" style={{ color: "#a8e063" }}>
                Liên hệ
              </h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#a8e063", height: "3px" }} />
              <p>
                <i className="fas fa-home me-3"></i> Buôn Ma Thuột, Đắk Lắk
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i> contact@greenmart.vn
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> 0987 654 321
              </p>
              <p>
                <i className="fas fa-clock me-3"></i> 8:00 – 20:00 hàng ngày
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}>
        © {new Date().getFullYear()} Copyright:{" "}
        <a href="#" className="text-white fw-bold text-decoration-none">
          GreenMart.vn
        </a>{" "}
        – All rights reserved. Made with ❤️ by <strong>Nhen Developer</strong>
      </div>

      {/* CSS inline cho hover (có thể tách ra file .css sau) */}
      <style>{`
        .hover-link:hover {
          color: #a8e063 !important;
          transition: color 0.3s ease;
        }
        footer a {
          transition: transform 0.2s;
        }
        footer a:hover {
          transform: scale(1.15);
        }
      `}</style>
    </footer>
  );
};

export default Footer;