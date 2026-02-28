import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Home.css'

function Home() {
    const [vegetables, setVegetables] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const limit = 4; 

    useEffect(() => {
        fetchVegetables();
    }, [page]);

    const fetchVegetables = async () => {
        try {
            const response = await axios.get("https://api.dak.edu.vn/api_rau/vegetables.php", {
                params: { page, limit }
            });
            setVegetables(response.data.data);
            setTotalPages(response.data.total_pages || Math.ceil(response.data.total / limit));
        } catch (error) {
            console.error("Error fetching vegetables:", error);
        }
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };
    
    return (
      <>
        {/* ==================== CAROUSEL SIÊU ĐẸP ==================== */}
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ height: "650px" }}
        >
          <div className="carousel-inner h-100">
            <div className="carousel-item active">
              <img
                src="./src/assets/slide/R 2.jpg"
                className="d-block w-100 h-100 object-cover"
                alt="Slide 1"
              />
              <div className="carousel-caption d-none d-md-block text-start" 
                   style={{ background: 'rgba(0, 119, 182, 0.85)', padding: '2.5rem', borderRadius: '20px', left: '8%', right: 'auto', bottom: '20%' }}>
                <h1 className="display-4 fw-bold text-white">RAU SẠCH GreenMart</h1>
                <p className="lead text-white fs-3">Tươi ngon từ Buôn Ma Thuột – Đắk Lắk</p>
                <Link to="/products" className="btn btn-light btn-lg px-5 py-3 fw-bold rounded-pill mt-3">Mua Ngay</Link>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/slide/R.jpg"
                className="d-block w-100 h-100 object-cover"
                alt="Slide 2"
              />
              <div className="carousel-caption d-none d-md-block text-start" 
                   style={{ background: 'rgba(0, 119, 182, 0.85)', padding: '2.5rem', borderRadius: '20px', left: '8%', right: 'auto', bottom: '20%' }}>
                <h1 className="display-4 fw-bold text-white">HỮU CƠ • AN TOÀN</h1>
                <p className="lead text-white fs-3">Không thuốc trừ sâu – Không chất bảo quản</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./src/assets/slide/r3.jpg"
                className="d-block w-100 h-100 object-cover"
                alt="Slide 3"
              />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        {/* ==================== DANH SÁCH RAU - CARD GRID ==================== */}
        <div className="container-xl py-5">
          <div className="text-center mb-5">
            <span className="badge bg-primary px-4 py-2 fs-6 rounded-pill">NÔNG SẢN HỮU CƠ ĐẮK LẮK</span>
            <h2 className="display-5 fw-bold text-primary mt-3 mb-2">
              <i className="fas fa-leaf me-2"></i> RAU TƯƠI HÔM NAY
            </h2>
            <p className="lead text-muted">Trồng tại Buôn Ma Thuột – Giao tận nơi</p>
          </div>

          {vegetables.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {vegetables.map((veg) => (
                <div className="col" key={veg.id}>
                  <div className="card h-100 border-0 shadow-sm hover-card overflow-hidden">
                    <div className="position-relative">
                      <img
                        src={veg.image}
                        className="card-img-top"
                        alt={veg.name}
                        style={{ height: "245px", objectFit: "cover" }}
                      />
                      <div className="position-absolute top-0 end-0 m-3">
                        <span className="badge bg-success px-3 py-2 fs-6">{veg.group}</span>
                      </div>
                    </div>
                    <div className="card-body d-flex flex-column p-4">
                      <h5 className="card-title fw-bold text-dark mb-2">{veg.name}</h5>
                      <p className="text-muted fst-italic small mb-2">{veg.scientific_name}</p>
                      <p className="text-secondary small mb-3">
                        <i className="fas fa-seedling me-1"></i> {veg.family}
                      </p>

                      <div className="mt-auto">
                        <div className="d-flex justify-content-between align-items-end">
                          <div>
                            <small className="text-muted">Giá chỉ từ</small>
                            <h4 className="fw-bold text-danger mb-0">
                              {veg.price ? Number(veg.price).toLocaleString('vi-VN') + "đ" : "Liên hệ"}
                            </h4>
                          </div>
                          <Link
                            to={`/detail/${veg.id}`}
                            className="btn btn-primary px-4 py-2 rounded-pill"
                          >
                            Chi tiết
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <h3 className="text-muted">Hết rau để bán rồi? Đang cập nhật thêm...</h3>
            </div>
          )}

          {/* Pagination đẹp */}
          <div className="d-flex justify-content-center mt-5">
            <nav>
              <ul className="pagination pagination-lg">
                <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => handlePageChange(page - 1)}>← Trang trước</button>
                </li>
                <li className="page-item active">
                  <span className="page-link">Trang {page} / {totalPages}</span>
                </li>
                <li className={`page-item ${page === totalPages ? "disabled" : ""}`}>
                  <button className="page-link" onClick={() => handlePageChange(page + 1)}>Trang sau →</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* ==================== TIN TỨC ==================== */}
        <div className="bg-light py-5">
          <div className="container-xl">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold text-primary">Tin Tức & Kiến Thức Rau Sạch</h2>
              <p className="lead text-muted">Cập nhật liên tục 24/7 từ GreenMart</p>
            </div>

            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-lg-4">
                <div className="card h-100 border-0 shadow-sm hover-card overflow-hidden">
                  <img src="https://i.imgur.com/kaZ75JH.jpeg" className="card-img-top" alt="9 thực phẩm lành mạnh" style={{height: '250px', objectFit: 'cover'}} />
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold text-primary">9 thực phẩm lành mạnh nên ăn mỗi ngày</h5>
                    <p className="card-text text-muted">Cá hồi giàu omega-3 tốt cho tim, rau xanh chứa nhiều chất xơ...</p>
                    <a href="#" className="text-success fw-bold">Đọc thêm →</a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-4">
                <div className="card h-100 border-0 shadow-sm hover-card overflow-hidden">
                  <img src="https://i.imgur.com/K5GwF8N.jpeg" className="card-img-top" alt="10 loại rau củ quả" style={{height: '250px', objectFit: 'cover'}} />
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold text-primary">10 loại rau củ quả giúp tăng tuổi thọ</h5>
                    <p className="card-text text-muted">Nấm có nhiều chất chống oxy hóa, bông cải xanh và dâu tây...</p>
                    <a href="#" className="text-success fw-bold">Đọc thêm →</a>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-4">
                <div className="card h-100 border-0 shadow-sm hover-card overflow-hidden">
                  <img src="https://i.imgur.com/KCQbK2u.jpeg" className="card-img-top" alt="5 rau củ quả màu đỏ" style={{height: '250px', objectFit: 'cover'}} />
                  <div className="card-body p-4">
                    <h5 className="card-title fw-bold text-primary">5 rau củ quả màu đỏ tốt cho người tiểu đường</h5>
                    <p className="card-text text-muted">Củ dền, cà chua, bắp cải đỏ, thanh long, táo...</p>
                    <a href="#" className="text-success fw-bold">Đọc thêm →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== LIÊN HỆ - ĐÃ ĐỔI THÔNG TIN ==================== */}
        <div className="container-fluid py-5 bg-white">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-primary">LIÊN HỆ VỚI GreenMart</h1>
            <p className="lead">Rau sạch Buôn Ma Thuột City • Đắk Lắk</p>
          </div>

          <div className="row justify-content-center g-4 mx-auto" style={{maxWidth: '1100px'}}>
            {/* Email */}
            <div className="col-md-6 col-lg-3">
              <div className="contact-box text-center p-4 h-100 border rounded-4 shadow-sm hover-card">
                <i className="fas fa-envelope text-primary fa-3x mb-3"></i>
                <h5>Email</h5>
                <p className="fw-bold">nhen.developer@gmail.com</p>
              </div>
            </div>
            {/* Phone */}
            <div className="col-md-6 col-lg-3">
              <div className="contact-box text-center p-4 h-100 border rounded-4 shadow-sm hover-card">
                <i className="fas fa-phone text-success fa-3x mb-3"></i>
                <h5>Hotline</h5>
                <p className="fw-bold">0916 210 641</p>
              </div>
            </div>
            {/* Address */}
            <div className="col-md-6 col-lg-3">
              <div className="contact-box text-center p-4 h-100 border rounded-4 shadow-sm hover-card">
                <i className="fas fa-home text-danger fa-3x mb-3"></i>
                <h5>Địa chỉ</h5>
                <p className="fw-bold">Buôn Ma Thuột City<br />Đắk Lắk</p>
              </div>
            </div>
            {/* Map */}
            <div className="col-lg-9 mt-4">
              <div className="rounded-4 overflow-hidden shadow">
                <iframe
                  width="100%"
                  height="380"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.4120355005466!2d108.07082537411601!3d12.712563120506516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31721d7da8e6b819%3A0xe707991f0d90b313!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIELDoWNoIEtob2EgVMOieSBOZ3V5w6pu!5e0!3m2!1svi!2s!4v1732629566756"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;