import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Raulist = () => {
  const [vegetables, setVegetables] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const limit = 10; // Đổi thành 10 để xem nhiều hơn (có thể chỉnh lại thành 4, 8, 12...)

  useEffect(() => {
    fetchVegetables();
  }, [page]);

  const fetchVegetables = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://api.dak.edu.vn/api_rau/vegetables.php", {
        params: { page, limit },
      });
      setVegetables(response.data.data || []);
      setTotalPages(response.data.total_pages || Math.ceil(response.data.total / limit));
    } catch (error) {
      console.error("Lỗi khi lấy danh sách rau:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid py-4">
      {/* Header + Nút thêm mới */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold" style={{ color: "#0f5e3f" }}>
          <i className="fas fa-leaf me-2" style={{ color: "#1e8449" }}></i>
          Danh Sách Rau Sạch
        </h2>
        <Link to="/them-rau.html" className="btn btn-success btn-lg">
          <i className="fas fa-plus me-2"></i> Thêm Rau Mới
        </Link>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center py-5 my-5">
          <div className="spinner-border text-success" style={{ width: "3.5rem", height: "3.5rem" }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5 className="mt-3 text-success">Đang tải danh sách rau...</h5>
        </div>
      ) : vegetables.length === 0 ? (
        <div className="alert alert-info text-center py-4">
          <i className="fas fa-info-circle fa-2x me-2"></i>
          Hiện tại chưa có rau nào trong hệ thống.  
          <br />
          <Link to="/them-rau.html" className="btn btn-outline-success mt-3">
            Thêm rau đầu tiên ngay!
          </Link>
        </div>
      ) : (
        <>
          {/* Table chuyên nghiệp */}
          <div className="table-responsive shadow rounded overflow-hidden border-0">
            <table className="table table-hover mb-0 align-middle">
              <thead className="table-dark" style={{ backgroundColor: "#0f5e3f" }}>
                <tr className="text-center">
                  <th scope="col" className="py-3">#</th>
                  <th scope="col" className="py-3">Ảnh</th>
                  <th scope="col" className="py-3">Tên rau</th>
                  <th scope="col" className="py-3">Tên khoa học</th>
                  <th scope="col" className="py-3">Họ</th>
                  <th scope="col" className="py-3">Nhóm</th>
                  <th scope="col" className="py-3">Giá (VNĐ)</th>
                  <th scope="col" className="py-3">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {vegetables.map((veg, index) => (
                  <tr key={veg.id} className="text-center">
                    <td className="fw-bold">{(page - 1) * limit + index + 1}</td>
                    <td>
                      <img
                        src={veg.image || "https://via.placeholder.com/100x100?text=No+Image"}
                        alt={veg.name}
                        className="rounded shadow-sm"
                        style={{ width: "100px", height: "100px", objectFit: "cover", border: "2px solid #e0e0e0" }}
                      />
                    </td>
                    <td className="fw-semibold" style={{ color: "#1e8449" }}>
                      {veg.name}
                    </td>
                    <td className="text-muted">{veg.scientific_name || "-"}</td>
                    <td className="text-muted">{veg.family || "-"}</td>
                    <td>
                      <span className="badge bg-info-subtle text-info fw-normal">
                        {veg.group || "Chưa phân loại"}
                      </span>
                    </td>
                    <td className="fw-bold">
                      {veg.price && !isNaN(veg.price) ? (
                        <span className="text-danger">{Number(veg.price).toLocaleString()}</span>
                      ) : (
                        <span className="text-muted">Chưa cập nhật</span>
                      )}
                    </td>
                    <td>
                      <div className="btn-group btn-group-sm" role="group">
                        <Link
                          to={`/sua-rau/${veg.id}`}
                          className="btn btn-outline-warning"
                          title="Sửa thông tin"
                        >
                          <i className="fas fa-edit"></i>
                        </Link>
                        <Link
                          to={`/xoa-rau/${veg.id}`}
                          className="btn btn-outline-danger"
                          title="Xóa rau"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <nav aria-label="Pagination" className="mt-5">
              <ul className="pagination pagination-lg justify-content-center">
                <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setPage(page - 1)}
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${page === index + 1 ? "active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setPage(index + 1)}
                      style={{
                        backgroundColor: page === index + 1 ? "#1e8449" : "",
                        borderColor: page === index + 1 ? "#1e8449" : "",
                        color: page === index + 1 ? "white" : "",
                      }}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setPage(page + 1)}
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}

      {/* CSS bổ sung */}
      <style>{`
        .table-hover tbody tr:hover {
          background-color: rgba(30, 132, 73, 0.08) !important;
          transition: background-color 0.2s ease;
        }
        .btn-outline-primary:hover, .btn-outline-warning:hover, .btn-outline-danger:hover {
          transform: scale(1.08);
          transition: transform 0.2s ease;
        }
        .badge {
          font-size: 0.85rem;
          padding: 0.5em 0.9em;
        }
      `}</style>
    </div>
  );
};

export default Raulist;