import React from "react";
import HeaderAd from "./Headerad";
import FooterAd from "./Footerad";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const LayoutAd = (props) => {
  return (
    <>
      <HeaderAd />

      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Sidebar />

          {/* Phần nội dung chính - thêm nền xanh nhạt & padding */}
          <div
            className="col py-4 px-3 px-md-4"
            style={{
              backgroundColor: "#f8fff8", // nền xanh rất nhạt, sạch sẽ
              minHeight: "calc(100vh - 200px)", // đảm bảo đủ chiều cao
            }}
          >
            {props.children ? props.children : <Outlet />}
          </div>
        </div>
      </div>

      <FooterAd />

      {/* CSS global cho toàn layout (nếu cần) */}
      <style>{`
        body {
          background-color: #f8fff8; /* nền body nhẹ nhàng */
          margin: 0;
          font-family: system-ui, -apple-system, sans-serif;
        }
        .container-fluid {
          padding-left: 0;
          padding-right: 0;
        }
        main {
          transition: background-color 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default LayoutAd;