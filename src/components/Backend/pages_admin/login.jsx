import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    // Giả lập delay để giống fetch thật (0.8s)
    setTimeout(() => {
      // Nhập cứng thông tin: email = "nhen", password = "123"
      if (email.trim() === "nhen" && password === "123") {
        // Lưu thông tin giả lập
        localStorage.setItem("email", "nhen");
        localStorage.setItem("userName", "Nhen Developer");
        localStorage.setItem("isLoggedIn", "true");

        // Chuyển hướng về trang chính hoặc dashboard
        navigate("/dashboard");
      } else {
        setErrorMessage("Email hoặc mật khẩu không đúng! (Thử: nhen / 123)");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <section
      className="min-vh-100 d-flex align-items-center"
      style={{
        background: "linear-gradient(135deg, #f8fff8 0%, #e8f5e9 100%)",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
              <div className="row g-0">
                {/* Bên trái: Ảnh nền rau sạch */}
                <div className="col-lg-5 d-none d-lg-block">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm6IFwBx5W-0Ag-6JYgAYkcQAItmlS4IGB6Q&s"
                    alt="Rau sạch GreenMart"
                    className="img-fluid h-100 object-fit-cover"
                    style={{ objectPosition: "center" }}
                  />
                </div>

                {/* Bên phải: Form login */}
                <div className="col-lg-7">
                  <div className="card-body p-5 p-xl-5">
                    {/* Logo + Tiêu đề */}
                    <div className="text-center mb-5">
                     
                      <h2 className="fw-bold" style={{ color: "#0f5e3f" }}>
                        Đăng Nhập Admin
                      </h2>
                      <p className="text-muted small">
                        Quản lý rau sạch organic từ vườn Tây Nguyên
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin}>
                      <div className="mb-4">
                        <label className="form-label fw-bold text-success">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Nhập email (ví dụ: nhen)"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label fw-bold text-success">
                          Mật khẩu <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Nhập mật khẩu (ví dụ: 123)"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>

                      {/* Thông báo lỗi */}
                      {errorMessage && (
                        <div className="alert alert-danger text-center mb-4 py-2">
                          <i className="fas fa-exclamation-circle me-2"></i>
                          {errorMessage}
                        </div>
                      )}

                      {/* Nút đăng nhập */}
                      <button
                        type="submit"
                        className="btn btn-success btn-lg w-100 fw-bold"
                        disabled={loading}
                        style={{ backgroundColor: "#1e8449", borderColor: "#1e8449" }}
                      >
                        {loading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Đang đăng nhập...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-sign-in-alt me-2"></i> Đăng Nhập
                          </>
                        )}
                      </button>
                    </form>

                    {/* Gợi ý nhập cứng */}
                    <div className="text-center mt-4">
                      <small className="text-muted">
                        Test nhanh: <strong>nhen</strong> / <strong>123</strong>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;