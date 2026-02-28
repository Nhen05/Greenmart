import React from "react";

const News = () => {
  const newsItems = [
    {
      title: "9 Thực Phẩm Lành Mạnh Nên Ăn Mỗi Ngày Tại GreenMart",
      description: "Cá hồi giàu omega-3 tốt cho tim mạch, rau bina Tây Nguyên chứa sắt và vitamin K hỗ trợ xương chắc khỏe, trứng cung cấp protein chất lượng cao. Kết hợp rau organic từ vườn Buôn Ma Thuột để bữa ăn gia đình thêm bổ dưỡng!",
      image: "https://i.imgur.com/kaZ75JH.jpeg",
      date: "28/02/2026",
      readMore: "#",
    },
    {
      title: "10 Loại Rau Củ Quả Giúp Tăng Tuổi Thọ & Sống Khỏe Hơn",
      description: "Nấm hương chống oxy hóa mạnh mẽ, bông cải xanh từ Đắk Lắk giàu sulforaphane chống ung thư, dâu tây organic giảm viêm. Ăn đa dạng rau sạch mỗi ngày để cơ thể trẻ trung lâu dài!",
      image: "https://i.imgur.com/K5GwF8N.jpeg",
      date: "15/02/2026",
      readMore: "#",
    },
    {
      title: "5 Rau Củ Quả Màu Đỏ Tốt Cho Người Tiểu Đường Tại Tây Nguyên",
      description: "Củ dền, cà chua, thanh long ruột đỏ, ớt chuông đỏ và táo – giàu anthocyanin giúp kiểm soát đường huyết ổn định. Chọn rau organic GreenMart để an toàn tuyệt đối!",
      image: "https://i.imgur.com/KCQbK2u.jpeg",
      date: "10/02/2026",
      readMore: "#",
    },
    {
      title: "Xu Hướng Rau Organic 2025–2026: Tươi Từ Vườn Đắk Lắk",
      description: "Nông nghiệp hữu cơ đang bùng nổ tại Tây Nguyên với rau thủy canh sạch, giảm thiểu thuốc trừ sâu. GreenMart cam kết mang đến sản phẩm tươi ngon, bền vững cho cộng đồng Buôn Ma Thuột!",
      image: "https://daklak.info.vn/wp-content/uploads/2023/08/ban-rau-sach.jpg",
      date: "01/02/2026",
      readMore: "#",
    },
  ];

  return (
    <section style={{ backgroundColor: "#f8fff8" }} className="py-5">
      <div className="container">
        {/* Hero tiêu đề */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold" style={{ color: "#0f5e3f" }}>
            Tin Tức Rau Sạch & Sống Khỏe
          </h1>
          <p className="lead text-muted">
            Cập nhật lợi ích sức khỏe từ rau organic Tây Nguyên – Từ vườn Buôn Ma Thuột đến bàn ăn gia đình bạn 🌿🥬
          </p>
        </div>

        {/* Danh sách tin tức */}
        <div className="row justify-content-center">
          {newsItems.map((item, index) => (
            <div className="col-12 col-xl-10 mb-4" key={index}>
              <div className="card news-card border-0 shadow-sm overflow-hidden">
                <div className="row g-0">
                  <div className="col-lg-4">
                    <img
                      src={item.image}
                      className="img-fluid h-100"
                      alt={item.title}
                      style={{ objectFit: "cover", minHeight: "250px" }}
                    />
                  </div>
                  <div className="col-lg-8">
                    <div className="card-body d-flex flex-column h-100">
                      <small className="text-muted mb-2">{item.date} • GreenMart</small>
                      <h5 className="card-title fw-bold mb-3" style={{ color: "#1e8449" }}>
                        {item.title}
                      </h5>
                      <p className="card-text text-muted flex-grow-1">
                        {item.description}
                      </p>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center mb-3">
                          <span className="text-danger me-2 fw-bold">Đánh giá:</span>
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fas fa-star text-warning me-1"></i>
                          ))}
                          <span className="ms-2 text-muted">(5.0)</span>
                        </div>
                        <a
                          href={item.readMore}
                          className="btn btn-outline-success btn-sm"
                          style={{ borderColor: "#1e8449", color: "#1e8449" }}
                        >
                          Đọc thêm <i className="fas fa-arrow-right ms-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nút xem thêm nếu cần */}
        <div className="text-center mt-5">
          <button className="btn btn-success btn-lg fw-bold px-5">
            Xem Thêm Tin Tức
          </button>
        </div>
      </div>

      {/* CSS inline */}
      <style>{`
        .news-card {
          transition: all 0.3s ease;
          border-radius: 12px;
        }
        .news-card:hover {
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
        .btn-outline-success:hover {
          background-color: #1e8449;
          color: white !important;
        }
      `}</style>
    </section>
  );
};

export default News;