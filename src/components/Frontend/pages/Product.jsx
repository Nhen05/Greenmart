import React, { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [vegetables, setVegetables] = useState([]);
  const [selectedVegetable, setSelectedVegetable] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 8;

  useEffect(() => {
    fetchVegetables();
  }, [page]);

  const fetchVegetables = async () => {
    try {
      const response = await axios.get("https://api.dak.edu.vn/api_rau/vegetables.php", {
        params: { page, limit },
      });
      setVegetables(response.data.data);
      setTotalPages(response.data.total_pages || Math.ceil(response.data.total / limit));
    } catch (error) {
      console.error("Error fetching vegetables:", error);
      alert("Không thể tải dữ liệu rau sạch. Vui lòng thử lại!");
    }
  };

  const handleOpenModal = (vegetable) => {
    setSelectedVegetable(vegetable);
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <section style={{ backgroundColor: "#f8fff8" }} className="py-5">
      <div className="container">
        {/* Tiêu đề */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5" style={{ color: "#0f5e3f" }}>
            Rau Sạch Organic GreenMart
          </h2>
          <p className="lead text-muted">
            Tươi từ vườn Tây Nguyên – 100% tự nhiên, không thuốc trừ sâu – Giao nhanh Buôn Ma Thuột!
          </p>
        </div>

        {/* Grid sản phẩm */}
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {vegetables.map((veg) => (
            <div className="col" key={veg.id}>
              <div className="card h-100 border-0 shadow-sm product-card hover-shadow">
                <div className="position-relative">
                  <img
                    src={veg.image}
                    className="card-img-top"
                    alt={veg.name}
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <span className="position-absolute top-0 start-0 badge bg-success m-2">
                    Organic
                  </span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold" style={{ color: "#1e8449", minHeight: "50px" }}>
                    {veg.name}
                  </h5>
                  <p className="card-text text-muted small mb-1">
                    <strong>Tên KH:</strong> {veg.scientific_name}
                  </p>
                  <p className="card-text text-muted small mb-1">
                    <strong>Họ:</strong> {veg.family}
                  </p>
                  <p className="card-text text-muted small mb-2">
                    <strong>Lợi ích:</strong>{" "}
                    {veg.benefits?.length > 60 ? `${veg.benefits.substring(0, 60)}...` : veg.benefits}
                  </p>
                  <div className="mt-auto">
                    <h5 className="text-danger fw-bold mb-2">
                      {veg.price ? `${veg.price.toLocaleString()} VNĐ` : "Liên hệ"}
                    </h5>
                    <div className="d-flex gap-2">
                      <button
                        className="btn btn-outline-success btn-sm flex-fill"
                        onClick={() => handleOpenModal(veg)}
                      >
                        Chi tiết
                      </button>
                      <button className="btn btn-success btn-sm flex-fill">
                        <i className="fas fa-cart-plus me-1"></i> Giỏ hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Không có sản phẩm */}
        {vegetables.length === 0 && (
          <div className="text-center py-5">
            <h4 className="text-muted">Đang tải rau tươi... hoặc chưa có sản phẩm!</h4>
          </div>
        )}

        {/* Phân trang */}
        {totalPages > 1 && (
          <nav aria-label="Product pagination" className="mt-5">
            <ul className="pagination pagination-lg justify-content-center">
              <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => handlePageChange(page - 1)}>
                  Trước
                </button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${page === i + 1 ? "active" : ""}`}>
                  <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                    {i + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => handlePageChange(page + 1)}>
                  Sau
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Modal chi tiết */}
      {selectedVegetable && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title fw-bold">{selectedVegetable.name}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedVegetable(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-5">
                    <img
                      src={selectedVegetable.image}
                      className="img-fluid rounded"
                      alt={selectedVegetable.name}
                    />
                  </div>
                  <div className="col-md-7">
                    <p><strong>Tên khoa học:</strong> {selectedVegetable.scientific_name}</p>
                    <p><strong>Họ thực vật:</strong> {selectedVegetable.family}</p>
                    <p><strong>Nhóm:</strong> {selectedVegetable.group}</p>
                    <p><strong>Mô tả:</strong> {selectedVegetable.description || "Đang cập nhật"}</p>
                    <p><strong>Lợi ích sức khỏe:</strong> {selectedVegetable.benefits}</p>
                    <h4 className="text-danger mt-4">
                      Giá: {selectedVegetable.price ? `${selectedVegetable.price.toLocaleString()} VNĐ` : "Liên hệ"}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-outline-secondary" onClick={() => setSelectedVegetable(null)}>
                  Đóng
                </button>
                <button className="btn btn-success">
                  <i className="fas fa-cart-plus me-2"></i> Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS inline cho hiệu ứng */}
      <style>{`
        .product-card {
          transition: all 0.3s ease;
          border-radius: 12px;
          overflow: hidden;
        }
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(30, 132, 73, 0.2) !important;
        }
        .hover-shadow:hover {
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }
        .badge-success {
          background-color: #1e8449;
        }
        .btn-success {
          background-color: #1e8449;
          border-color: #1e8449;
        }
        .btn-success:hover {
          background-color: #0f5e3f;
          border-color: #0f5e3f;
        }
      `}</style>
    </section>
  );
};

export default Product;