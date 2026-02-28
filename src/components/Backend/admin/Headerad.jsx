import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderAd = () => {
  const [userName, setUserName] = useState("Nhen Developer");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    } else if (storedEmail) {
      setUserName(storedEmail.split("@")[0]);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm"
      style={{ backgroundColor: "#0f5e3f" }} // Xanh đậm chính
    >
      <div className="container-fluid px-4">
        {/* Logo + Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/admin">
        
          <span className="fw-bold fs-4" style={{ color: "#a8e063" }}>
            GreenMart Admin
          </span>
        </Link>

        {/* User dropdown - phần duy nhất bên phải */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle text-white d-flex align-items-center"
              to="#"
              id="adminUserDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user-circle fa-lg me-2" style={{ color: "#a8e063" }}></i>
              <span className="fw-bold d-none d-md-inline">
                {userName}
              </span>
            </Link>
            <ul
              className="dropdown-menu dropdown-menu-end dropdown-menu-dark shadow"
              aria-labelledby="adminUserDropdown"
              style={{ backgroundColor: "#1e8449" }} // Nền dropdown xanh sáng
            >
              <li>
                <Link className="dropdown-item text-white" to="/admin/profile">
                  <i className="fas fa-user me-2"></i> Hồ sơ
                </Link>
              </li>
              <li>
                <Link className="dropdown-item text-white" to="/admin/settings">
                  <i className="fas fa-cog me-2"></i> Cài đặt
                </Link>
              </li>
              <li><hr className="dropdown-divider bg-light" /></li>
              <li>
                <button
                  className="dropdown-item text-white fw-bold"
                  onClick={handleLogout}
                  style={{ color: "#ffcccc !important" }} // Màu đỏ nhạt cho logout
                >
                  <i className="fas fa-sign-out-alt me-2"></i> Đăng xuất
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* CSS inline cho hover & transition */}
      <style>{`
        .navbar-brand:hover span {
          color: #ffffff !important;
          transition: color 0.3s ease;
        }
        .nav-link.dropdown-toggle:hover {
          color: #a8e063 !important;
        }
        .dropdown-item:hover {
          background-color: #0f5e3f !important;
          color: #a8e063 !important;
        }
        .dropdown-menu {
          border: none;
          border-radius: 8px;
        }
      `}</style>
    </nav>
  );
};

export default HeaderAd;