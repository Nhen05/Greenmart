import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Rauadd = () => {
  const [formData, setFormData] = useState({
    name: "",
    scientific_name: "",
    family: "",
    description: "",
    benefits: "",
    image: "",
    group: "",
  });
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Preview ảnh khi nhập link
    if (name === "image") {
      setPreviewImage(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Validation cơ bản
    if (!formData.name.trim()) {
      setError("Tên rau không được để trống!");
      setLoading(false);
      return;
    }

    try {
      console.log("Dữ liệu gửi lên API:", formData);

      const response = await axios.post(
        "https://api.dak.edu.vn/api_rau/vegetables.php",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Phản hồi từ API:", response.data);

      if (response.status === 201 || response.data.success) {
        setSuccess("Thêm rau mới thành công!");
        setTimeout(() => {
          navigate("/admin/rau-list"); // Chuyển về danh sách sau 2 giây
        }, 2000);
      } else {
        setError(response.data.message || "Lỗi khi thêm rau!");
      }
    } catch (err) {
      console.error("Lỗi gửi API:", err);
      setError(
        err.response?.data?.message ||
          "Không thể kết nối với server. Vui lòng thử lại!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-light py-5 min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="row g-0">
                {/* Bên trái: Ảnh minh họa lớn */}
                <div className="col-lg-5 d-none d-lg-block">
                  <img
                    src="https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Rau sạch organic"
                    className="img-fluid h-100 object-fit-cover"
                    style={{ objectPosition: "center" }}
                  />
                </div>

                {/* Bên phải: Form */}
                <div className="col-lg-7">
                  <div className="card-body p-5 p-xl-5">
                    <h2 className="fw-bold mb-4 text-center" style={{ color: "#0f5e3f" }}>
                      <i className="fas fa-leaf me-2" style={{ color: "#1e8449" }}></i>
                      Thêm Rau Mới
                    </h2>

                    {/* Thông báo thành công / lỗi */}
                    {success && (
                      <div className="alert alert-success alert-dismissible fade show" role="alert">
                        {success}
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setSuccess("")}
                        ></button>
                      </div>
                    )}
                    {error && (
                      <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {error}
                        <button
                          type="button"
                          className="btn-close"
                          onClick={() => setError("")}
                        ></button>
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        {/* Tên rau */}
                        <div className="col-md-6">
                          <label className="form-label fw-bold text-success">
                            Tên rau <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control form-control-lg"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Ví dụ: Rau muống sạch"
                          />
                        </div>

                        {/* Tên khoa học */}
                        <div className="col-md-6">
                          <label className="form-label fw-bold text-info">
                            Tên khoa học
                          </label>
                          <input
                            type="text"
                            name="scientific_name"
                            className="form-control form-control-lg"
                            value={formData.scientific_name}
                            onChange={handleChange}
                            placeholder="Ví dụ: Ipomoea aquatica"
                          />
                        </div>

                        {/* Họ thực vật */}
                        <div className="col-md-6">
                          <label className="form-label fw-bold text-secondary">
                            Họ thực vật
                          </label>
                          <input
                            type="text"
                            name="family"
                            className="form-control form-control-lg"
                            value={formData.family}
                            onChange={handleChange}
                            placeholder="Ví dụ: Convolvulaceae"
                          />
                        </div>

                        {/* Nhóm rau */}
                        <div className="col-md-6">
                          <label className="form-label fw-bold text-primary">
                            Nhóm rau
                          </label>
                          <input
                            type="text"
                            name="group"
                            className="form-control form-control-lg"
                            value={formData.group}
                            onChange={handleChange}
                            placeholder="Ví dụ: Rau lá, Rau củ"
                          />
                        </div>

                        {/* Lợi ích */}
                        <div className="col-12">
                          <label className="form-label fw-bold text-danger">
                            Lợi ích sức khỏe
                          </label>
                          <textarea
                            name="benefits"
                            className="form-control form-control-lg"
                            rows="3"
                            value={formData.benefits}
                            onChange={handleChange}
                            placeholder="Ví dụ: Giàu vitamin A, tốt cho mắt, hỗ trợ tiêu hóa..."
                          ></textarea>
                        </div>

                        {/* Mô tả */}
                        <div className="col-12">
                          <label className="form-label fw-bold text-warning">
                            Mô tả chi tiết
                          </label>
                          <textarea
                            name="description"
                            className="form-control form-control-lg"
                            rows="4"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Mô tả nguồn gốc, cách trồng, đặc điểm..."
                          ></textarea>
                        </div>

                        {/* Link ảnh */}
                        <div className="col-12">
                          <label className="form-label fw-bold text-primary">
                            Link ảnh rau
                          </label>
                          <input
                            type="url"
                            name="image"
                            className="form-control form-control-lg"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="https://example.com/rau.jpg"
                          />
                          {previewImage && (
                            <div className="mt-3 text-center">
                              <img
                                src={previewImage}
                                alt="Preview"
                                className="img-thumbnail shadow"
                                style={{ maxWidth: "200px", maxHeight: "200px", objectFit: "cover" }}
                                onError={(e) => {
                                  e.target.src = "https://via.placeholder.com/200?text=Ảnh+không+tải+được";
                                }}
                              />
                              <p className="small text-muted mt-1">Xem trước ảnh</p>
                            </div>
                          )}
                        </div>

                        {/* Nút submit */}
                        <div className="col-12 mt-4">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg w-100 fw-bold"
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Đang thêm rau...
                              </>
                            ) : (
                              <>
                                <i className="fas fa-plus me-2"></i> Thêm Rau Mới
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </form>
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

export default Rauadd;