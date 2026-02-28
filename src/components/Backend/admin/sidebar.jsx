import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation(); // Để highlight mục đang active

  const menuItems = [
    { path: "/dashboard", icon: "fa-tachometer-alt", label: "Dashboard" },
    { path: "/rau-list.html", icon: "fa-leaf", label: "Danh sách rau" },
    { path: "/them-rau.html", icon: "fa-cart-plus", label: "Thêm rau mới" },
    { path: "/Profile", icon: "fa-user", label: "Hồ sơ" },
  ];

  return (
    <div
      className="col-auto col-md-3 col-xl-2 px-0 bg-dark"
      style={{ backgroundColor: "#0f5e3f" }} // Xanh đậm chính
    >
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white min-vh-100">
        {/* Logo nhỏ ở đầu sidebar */}
        <Link
          to=""
          className="d-flex align-items-center pb-3 mb-4 text-white text-decoration-none"
        >
          <img
            src="https://i.imgur.com/nCIDfRC.png"
            alt="GreenMart"
            width={120}
            height={45}
            className="me-2"
          />
          <span className="fs-4 fw-bold d-none d-sm-inline" style={{ color: "#a8e063" }}>
            GreenMart
          </span>
        </Link>

        {/* Menu */}
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100">
          {menuItems.map((item) => (
            <li className="nav-item w-100 mb-1" key={item.path}>
              <Link
                to={item.path}
                className={`nav-link align-middle px-3 py-2 fw-semibold text-white d-flex align-items-center ${location.pathname === item.path ? "active" : ""
                  }`}
                style={{
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                }}
              >
                <i className={`fa-solid ${item.icon} me-3 fs-5`}></i>
                <span className="d-none d-sm-inline">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Phần dưới cùng (nếu cần thêm logout hoặc info) */}
        <hr className="text-white opacity-25 w-100 my-4" />
        <div className="w-100 px-3">
          <small className="text-white-50 d-block text-center">
            © {new Date().getFullYear()} GreenMart Admin
          </small>
        </div>
      </div>

      {/* CSS inline cho hover & active */}
      <style>{`
        .nav-link {
          color: white !important;
        }
        .nav-link:hover {
          background-color: #1e8449 !important;
          color: #a8e063 !important;
          transform: translateX(5px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        .nav-link.active {
          background-color: #1e8449 !important;
          color: #a8e063 !important;
          font-weight: bold;
          border-left: 4px solid #a8e063;
        }
        .nav-link i {
          transition: transform 0.3s ease;
        }
        .nav-link:hover i {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default Sidebar;