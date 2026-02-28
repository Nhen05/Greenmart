import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      {/* Hero section với background vườn rau Tây Nguyên */}
      <div 
        className="hero text-white text-center py-5 py-md-8 d-flex align-items-center"
        style={{
          background: "linear-gradient(rgba(15, 94, 63, 0.7), rgba(15, 94, 63, 0.7)), url('https://happyvegi.com/wp-content/uploads/2023/05/20230430_103248-scaled.jpg') center/cover no-repeat",
          minHeight: "50vh",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3" style={{ color: "#a8e063" }}>
            Liên Hệ GreenMart
          </h1>
          <p className="lead fs-4">
            Rau sạch organic từ vườn Buôn Ma Thuột – Chúng tôi luôn sẵn sàng hỗ trợ bạn!  
            Gửi câu hỏi, đặt hàng hoặc phản hồi ngay hôm nay 🌿🥬
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Thông tin liên hệ */}
        <div className="row g-4 justify-content-center mb-5">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm contact-card">
              <div className="card-body text-center">
                <i className="fas fa-envelope fa-3x mb-3" style={{ color: "#1e8449" }}></i>
                <h5 className="fw-bold mb-2" style={{ color: "#0f5e3f" }}>Email</h5>
                <p className="text-muted lead">contact@greenmart.vn</p>
                <small className="text-muted">Phản hồi trong 24h</small>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm contact-card">
              <div className="card-body text-center">
                <i className="fas fa-phone fa-3x mb-3" style={{ color: "#1e8449" }}></i>
                <h5 className="fw-bold mb-2" style={{ color: "#0f5e3f" }}>Số điện thoại</h5>
                <p className="text-muted lead">0987 654 321</p>
                <small className="text-muted">Hỗ trợ 8:00 – 20:00 hàng ngày</small>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm contact-card">
              <div className="card-body text-center">
                <i className="fab fa-zalo fa-3x mb-3" style={{ color: "#1e8449" }}></i>
                <h5 className="fw-bold mb-2" style={{ color: "#0f5e3f" }}>Zalo</h5>
                <p className="text-muted lead">0903 123 456</p>
                <small className="text-muted">Chat nhanh, tiện lợi</small>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card h-100 border-0 shadow-sm contact-card">
              <div className="card-body text-center">
                <i className="fas fa-home fa-3x mb-3" style={{ color: "#1e8449" }}></i>
                <h5 className="fw-bold mb-2" style={{ color: "#0f5e3f" }}>Địa chỉ</h5>
                <p className="text-muted lead">
                  Buôn Ma Thuột, Đắk Lắk<br />
                  (Giao hàng toàn thành phố & lân cận)
                </p>
                <small className="text-muted">Từ vườn Tây Nguyên đến tay bạn</small>
              </div>
            </div>
          </div>
        </div>

        {/* Form liên hệ + Maps */}
        <div className="row g-5">
          {/* Form liên hệ */}
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm p-4">
              <h3 className="fw-bold mb-4" style={{ color: "#0f5e3f" }}>
                Gửi tin nhắn cho chúng tôi
              </h3>
              <form>
                <div className="mb-3">
                  <label className="form-label fw-bold">Họ tên</label>
                  <input type="text" className="form-control" placeholder="Nhập tên của bạn" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Email</label>
                  <input type="email" className="form-control" placeholder="email@greenmart.vn" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Số điện thoại</label>
                  <input type="tel" className="form-control" placeholder="0987 654 321" />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-bold">Tin nhắn</label>
                  <textarea className="form-control" rows="5" placeholder="Bạn cần hỗ trợ gì về rau sạch hôm nay?"></textarea>
                </div>
                <button type="submit" className="btn btn-success btn-lg w-100 fw-bold">
                  <i className="fas fa-paper-plane me-2"></i> Gửi Tin Nhắn
                </button>
              </form>
            </div>
          </div>

          {/* Google Maps */}
          <div className="col-lg-6">
            <div className="shadow-sm rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.123456789!2d108.035!3d12.667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31721d7da8e6b819%3A0xe707991f0d90b313!2zQsO4biBNYSBUaOG7qyBUaOG6oXQsIMSQ4bqhYyBMxINj!5e0!3m2!1svi!2s!4v1732629566756!5m2!1svi!2s"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="GreenMart - Buôn Ma Thuột"
              ></iframe>
            </div>
            <p className="text-center mt-3 text-muted">
              Khu vực Buôn Ma Thuột – Nơi rau sạch GreenMart được trồng và giao hàng
            </p>
          </div>
        </div>
      </div>

      {/* CSS inline */}
      <style>{`
        .hero { background-size: cover; }
        .contact-card {
          transition: all 0.3s ease;
          border-radius: 12px;
        }
        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(30, 132, 73, 0.2) !important;
        }
        .btn-success {
          background-color: #1e8449;
          border-color: #1e8449;
        }
        .btn-success:hover {
          background-color: #0f5e3f;
        }
      `}</style>
    </section>
  );
};

export default Contact;