import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Dashboard() {
  const [stats, setStats] = useState({
    totalVegetables: 0,
    totalGroups: 0,
    totalFamilies: 0,
    totalUniqueBenefits: 0,
    averagePrice: 0,
    maxPrice: { name: "N/A", price: 0 },
    minPrice: { name: "N/A", price: Infinity },
    totalPriced: 0,
  });
  const [recentVegetables, setRecentVegetables] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      // Lấy toàn bộ rau (không phân trang để tính chính xác)
      // Nếu dữ liệu lớn, có thể fetch nhiều page hoặc sửa API sau
      const response = await axios.get("https://api.dak.edu.vn/api_rau/vegetables.php", {
        params: { limit: 1000 }, // giả sử không quá nhiều, lấy hết
      });

      const vegetables = response.data.data || [];

      // Tính toán chỉ số
      const total = vegetables.length;
      const groups = new Set(vegetables.map((v) => v.group || "Không xác định"));
      const families = new Set(vegetables.map((v) => v.family || "Không xác định"));

      // Lợi ích: tách chuỗi nếu nhiều lợi ích cách nhau dấu phẩy hoặc chấm
      const allBenefits = vegetables.flatMap((v) =>
        (v.benefits || "")
          .split(/[,.;]\s*/)
          .map((b) => b.trim())
          .filter(Boolean)
      );
      const uniqueBenefits = new Set(allBenefits);

      // Giá
      const pricedVeg = vegetables.filter((v) => v.price && Number(v.price) > 0);
      const prices = pricedVeg.map((v) => Number(v.price));
      const avgPrice = prices.length > 0 ? (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2) : 0;
      const maxVeg = pricedVeg.reduce((max, curr) => (curr.price > max.price ? curr : max), { price: -1 });
      const minVeg = pricedVeg.reduce((min, curr) => (curr.price < min.price ? curr : min), { price: Infinity });

      setStats({
        totalVegetables: total,
        totalGroups: groups.size,
        totalFamilies: families.size,
        totalUniqueBenefits: uniqueBenefits.size,
        averagePrice: avgPrice,
        maxPrice: { name: maxVeg.name || "N/A", price: maxVeg.price || 0 },
        minPrice: { name: minVeg.name || "N/A", price: minVeg.price === Infinity ? 0 : minVeg.price },
        totalPriced: pricedVeg.length,
      });

      // 4 rau mới nhất (giả sử sắp xếp theo id DESC)
      setRecentVegetables(vegetables.slice(0, 4));

      setLoading(false);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Đang tải...</span>
        </div>
        <p className="mt-3">Đang tải thống kê rau sạch GreenMart...</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#0f5e3f" }}>
        Dashboard Quản Lý Rau Sạch GreenMart
      </h2>

      {/* Row 1: Các chỉ số chính */}
      <div className="row g-4 mb-5">
        <div className="col-md-3">
          <div className="card shadow-sm border-0 text-center h-100">
            <div className="card-body">
              <h5 className="card-title text-success">Tổng số rau</h5>
              <h2 className="fw-bold">{stats.totalVegetables}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0 text-center h-100">
            <div className="card-body">
              <h5 className="card-title text-success">Số nhóm rau</h5>
              <h2 className="fw-bold">{stats.totalGroups}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0 text-center h-100">
            <div className="card-body">
              <h5 className="card-title text-success">Số họ thực vật</h5>
              <h2 className="fw-bold">{stats.totalFamilies}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm border-0 text-center h-100">
            <div className="card-body">
              <h5 className="card-title text-success">Lợi ích duy nhất</h5>
              <h2 className="fw-bold">{stats.totalUniqueBenefits}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Giá & rau mới nhất */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">Giá trung bình</h5>
              <h3>{stats.averagePrice} VNĐ</h3>
              <small className="text-muted">Trung bình tất cả rau có giá</small>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-danger">Rau đắt nhất</h5>
              <h4>{stats.maxPrice.name}</h4>
              <p className="text-danger fw-bold">{stats.maxPrice.price} VNĐ</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-success">Rau rẻ nhất</h5>
              <h4>{stats.minPrice.name}</h4>
              <p className="text-success fw-bold">{stats.minPrice.price} VNĐ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rau mới nhất */}
      <div className="card shadow-sm border-0">
        <div className="card-header bg-success text-white">
          <h5 className="mb-0">4 Rau mới nhất</h5>
        </div>
        <div className="card-body">
          <div className="list-group">
            {recentVegetables.length > 0 ? (
              recentVegetables.map((veg) => (
                <Link
                  key={veg.id}
                  to={`/admin/rau/${veg.id}`}
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{veg.name}</strong>
                    <small className="d-block text-muted">{veg.scientific_name || "N/A"}</small>
                  </div>
                  <span className="badge bg-success rounded-pill">
                    {veg.price ? `${veg.price} VNĐ` : "Chưa có giá"}
                  </span>
                </Link>
              ))
            ) : (
              <p className="text-center text-muted">Chưa có dữ liệu rau</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;