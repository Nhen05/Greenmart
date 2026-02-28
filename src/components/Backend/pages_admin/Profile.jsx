import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  // Thông tin hiển thị cứng (hardcode)
  const userData = {
    firstName: "Nhen",
    lastName: "Developer",
    email: "nhen@example.com",
    // Không hiển thị password thật, chỉ placeholder
    password: "********", 
  };

  return (
    <section className="bg-light py-5 min-vh-100">
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb bg-white rounded-3 p-3 shadow-sm mb-0">
            <li className="breadcrumb-item">
              <Link to="/admin/dashboard" className="text-success text-decoration-none">
                Dashboard
              </Link>
            </li>
            <li className="breadcrumb-item active fw-bold" aria-current="page">
              Hồ sơ cá nhân
            </li>
          </ol>
        </nav>

        <div className="row g-4">
          {/* Cột trái: Avatar + Thông tin cơ bản */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-body text-center p-4">
                <img
                  src="https://i.pinimg.com/736x/1a/6f/56/1a6f560902969e0b92f37fbb97c2f43e.jpg"
                  alt="Avatar Nhen Developer"
                  className="rounded-circle img-fluid shadow mb-3"
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover",
                    border: "5px solid #1e8449",
                  }}
                />
                <h4 className="fw-bold mb-1" style={{ color: "#0f5e3f" }}>
                  {userData.firstName} {userData.lastName}
                </h4>
                <p className="text-muted mb-3">
                  <i className="fas fa-envelope me-2 text-info"></i> {userData.email}
                </p>
                <p className="text-success fw-semibold mb-0">
                  <i className="fas fa-laptop-code me-2"></i> Full Stack Developer - GreenMart
                </p>
              </div>

              {/* Giới thiệu ngắn */}
              <div className="card-footer bg-white border-0 text-center py-4">
                <h5 className="fw-bold mb-3" style={{ color: "#1e8449" }}>
                  <i className="fas fa-info-circle me-2"></i> Giới thiệu
                </h5>
                <p className="text-muted mb-0">
                  Xin chào! Tôi là <strong>Nhen Developer</strong>, hiện đang sống và làm việc tại Đắk Lắk.  
                  Đam mê lập trình Front-End với ReactJS, mình đã xây dựng GreenMart – dự án bán rau sạch organic từ vườn Tây Nguyên.  
                  Mục tiêu là mang đến trải nghiệm mua sắm rau tươi ngon, an toàn cho mọi nhà!
                </p>
              </div>
            </div>
          </div>

          {/* Cột phải: Thông tin chi tiết (hardcode, không chỉnh sửa được) */}
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm rounded-4">
              <div className="card-header bg-success text-white py-3">
                <h5 className="mb-0 fw-bold">
                  <i className="fas fa-user me-2"></i> Thông tin cá nhân
                </h5>
              </div>
              <div className="card-body p-4 p-md-5">
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label fw-bold text-success">Họ</label>
                    <p className="form-control-plaintext fw-semibold fs-5">
                      {userData.firstName}
                    </p>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold text-success">Tên</label>
                    <p className="form-control-plaintext fw-semibold fs-5">
                      {userData.lastName}
                    </p>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-bold text-info">Email</label>
                    <p className="form-control-plaintext fw-semibold fs-5">
                      {userData.email}
                    </p>
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-bold text-warning">Mật khẩu</label>
                    <p className="form-control-plaintext fw-semibold fs-5">
                      {userData.password}
                    </p>
                    <small className="text-muted">
                      (Mật khẩu được ẩn để bảo mật – không hiển thị thật)
                    </small>
                  </div>

                  {/* Nút giả lập (vì hardcode nên không cần submit thật) */}
                  <div className="col-12 mt-4">
                    <button
                      type="button"
                      className="btn btn-outline-success btn-lg w-100 fw-bold"
                      disabled
                    >
                      <i className="fas fa-lock me-2"></i> Thông tin đã được cố định
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card giới thiệu thêm */}
            <div className="card border-0 shadow-sm rounded-4 mt-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-3" style={{ color: "#0f5e3f" }}>
                  <i className="fas fa-heart me-2 text-danger"></i> Đam mê & Dự án
                </h5>
                <p className="text-muted">
                  Hiện tại mình đang tập trung phát triển GreenMart – nền tảng bán rau sạch organic tại Buôn Ma Thuột, Đắk Lắk.  
                  Mọi thứ từ giao diện đến logic đều được tự tay xây dựng bằng ReactJS + Bootstrap.  
                  Cảm ơn bạn đã ghé thăm!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;