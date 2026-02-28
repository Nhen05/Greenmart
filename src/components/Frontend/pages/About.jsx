import React, { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [vegetables, setVegetables] = useState([]);

  useEffect(() => {
    fetchVegetables();
  }, []);

  const fetchVegetables = async () => {
    try {
      const response = await axios.get("https://api.dak.edu.vn/api_rau/vegetables.php");
      setVegetables(response.data.data.slice(0, 4));
    } catch (error) {
      console.error("Error fetching vegetables:", error);
    }
  };

  return (
    <section className="about-section">
      {/* Hero Section - Phần giới thiệu lớn */}
      <div 
        className="hero text-white text-center py-5 py-md-8" 
        style={{
          background: "linear-gradient(rgba(15, 94, 63, 0.7), rgba(15, 94, 63, 0.7)), url('https://gloriathemes.com/wp-content/uploads/2024/09/Green-Mart-Organic-Shop-WooCommerce-Themes.jpg') center/cover no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold mb-3" style={{ color: "#a8e063" }}>
            GreenMart – Rau Sạch Từ Vườn Đến Bàn Ăn
          </h1>
          <p className="lead fs-4 mb-4">
            100% organic, không thuốc trừ sâu, tươi ngon mỗi ngày tại Buôn Ma Thuột.  
            Chúng tôi mang đến nguồn rau sạch tự nhiên, an toàn cho sức khỏe gia đình bạn.
          </p>
          <a href="/san-pham" className="btn btn-lg btn-success px-5 py-3 fw-bold">
            Khám Phá Sản Phẩm Ngay
          </a>
        </div>
      </div>

      {/* Phần sản phẩm nổi bật */}
      <div className="container py-5 py-md-6">
        <h2 className="text-center fw-bold mb-5" style={{ color: "#0f5e3f" }}>
          Một Số Loại Rau Organic Nổi Bật
        </h2>
        <div className="row gy-4">
          {vegetables.map((vegetable) => (
            <div className="col-12 col-md-6 col-lg-3" key={vegetable.id}>
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <img 
                  src={vegetable.image} 
                  className="card-img-top" 
                  alt={vegetable.name} 
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold" style={{ color: "#1e8449" }}>
                    {vegetable.name}
                  </h5>
                  <p className="card-text text-muted">
                    {vegetable.description?.substring(0, 80)}...
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Giới thiệu về Developer & Website */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="row gy-5 align-items-center">
            {/* Bên trái: Giới thiệu cá nhân + ảnh */}
            <div className="col-12 col-lg-6">
              <div className="p-4 bg-white rounded shadow">
                <h3 className="fw-bold mb-4" style={{ color: "#0f5e3f" }}>
                  Xin Chào, Tôi Là Nhen Developer
                </h3>
                <p className="lead">
                  Tôi là một lập trình viên trẻ đam mê Front-End & Full-Stack, hiện đang sống và làm việc tại Đắk Lắk.  
                  Với niềm yêu thích mã nguồn mở và thiết kế giao diện đẹp, tôi đã xây dựng GreenMart như một dự án cá nhân để thực hành và chia sẻ.
                </p>
                <p className="lead">
                  Công nghệ sử dụng: <strong>ReactJS</strong>, <strong>Bootstrap 5</strong>, Axios, và rất nhiều tình yêu dành cho rau sạch Việt Nam!  
                  Mục tiêu của tôi là tạo ra những website thân thiện, nhanh chóng và hữu ích cho cộng đồng.
                </p>
              </div>
            </div>

            {/* Bên phải: Ảnh minh họa developer */}
            <div className="col-12 col-lg-6 text-center">
              <img 
                src="https://c8.alamy.com/comp/3DJNB1P/laptop-coding-and-businessman-in-office-with-research-for-full-stack-development-with-project-technology-professional-and-web-developer-with-3DJNB1P.jpg" 
                alt="Nhen Developer coding" 
                className="img-fluid rounded shadow"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <p className="mt-3 text-muted fst-italic">
                Đang code và mơ về những vườn rau xanh mướt...
              </p>
            </div>
          </div>

          {/* Phần giới thiệu website */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="p-5 bg-white rounded shadow text-center">
                <h3 className="fw-bold mb-4" style={{ color: "#0f5e3f" }}>
                  Về GreenMart
                </h3>
                <p className="lead fs-5 mx-auto" style={{ maxWidth: "800px" }}>
                  GreenMart là dự án web bán rau sạch organic do tôi tự tay thiết kế và phát triển.  
                  Không chỉ là một trang thương mại điện tử, đây còn là nơi lan tỏa ý thức sống xanh, ăn sạch – sống khỏe.  
                  Tất cả rau củ đều được chọn lọc từ nguồn uy tín tại Tây Nguyên, giao nhanh chóng đến tay bạn.
                </p>
                <p className="lead fs-5 mx-auto mt-4">
                  Hãy cùng tôi xây dựng một lối sống lành mạnh hơn, bắt đầu từ từng bữa ăn hàng ngày! 🌿🥬
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS inline cho hiệu ứng */}
      <style>{`
        .hero { min-height: 60vh; display: flex; align-items: center; }
        .hover-shadow:hover { box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important; transition: all 0.3s ease; }
        .btn-success { background-color: #1e8449; border-color: #1e8449; }
        .btn-success:hover { background-color: #0f5e3f; border-color: #0f5e3f; }
      `}</style>
    </section>
  );
};

export default About;