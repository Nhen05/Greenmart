import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // to extract the id from the URL
import axios from "axios";

const Detail = () => {
  const { id } = useParams(); // Get the id from the URL
  const [vegetable, setVegetable] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVegetableDetails();
  }, [id]); // Refetch when the id changes

  const fetchVegetableDetails = async () => {
    try {
      const response = await axios.get(`https://api.dak.edu.vn/api_rau/vegetables.php?id=${id}`);
      
      if (response.data && response.data.data) {
        // Find the vegetable by id
        const foundVegetable = response.data.data.find(item => item.id === id);
        
        if (foundVegetable) {
          setVegetable(foundVegetable);
        } else {
          setError("Vegetable not found.");
        }
      } else {
        setError("No data found for this vegetable.");
      }
    } catch (error) {
      console.error("Error fetching vegetable details:", error);
      setError("Error fetching vegetable details.");
    }
  };

  if (error) return <p>{error}</p>;
  if (!vegetable) return <p>Loading...</p>;

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <h2 className="text-success fw-bold">{vegetable.name}</h2>
            <div className="image-container mt-3">
              <button
                type="button"
                className="btn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <img
                  src={vegetable.image}
                  className="img-fluid"
                  alt={vegetable.name}
                  width="300px"
                  height="300px"
                />
              </button>
            </div>
          </div>

          {/* Vegetable Details (Left-aligned) */}
          <div className="col-12 col-md-6 text-start mt-5">
            <h3 className="mt-3"><i className="fas fa-leaf text-success"></i> CÔNG DỤNG:</h3>
            <ul className="list-unstyled">
              <li>
                <p>{vegetable.benefits || "Không có mô tả"}</p>
              </li>
            </ul>

            <h3 className="mt-3"><i className="fas fa-info-circle text-info"></i> MÔ TẢ:</h3>
            <p>{vegetable.description || "Không có mô tả"}</p>

            <h3 className="mt-3"><i className="fas fa-flask text-warning"></i> Thông Tin Khoa Học:</h3>
            <ul>
              <li><strong><i className="fas fa-book text-primary mt-3"></i> Tên Khoa Học:</strong> {vegetable.scientific_name}</li>
              <li><strong><i className="fas fa-tree text-secondary mt-3"></i> Họ:</strong> {vegetable.family}</li>
              <li><strong><i className="fas fa-layer-group text-success mt-3"></i> Nhóm:</strong> {vegetable.group}</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <section className="mt-5">
                <div className="col-md-12 col-lg-12 col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex flex-start align-items-center">
                        <img
                          className="rounded-circle shadow-1-strong me-3"
                          src="https://i.imgur.com/CmWOHte.jpeg"
                          alt="avatar"
                          width="60"
                          height="60"
                        />
                        <div>
                          <h6 className="fw-bold text-primary mb-1">Henry Vũ</h6>
                          <p className="text-muted small mb-0">
                          11 months ago</p>
                        </div>
                      </div>
                      <p className="mt-3 mb-4 pb-2">
                      This is a great website for buying fresh vegetables online! It makes it easy for me to browse through products, compare prices, and place orders quickly. The user interface is very simple and easy to use, making the entire experience smooth. I like how the products are clearly categorized, and the detailed product descriptions helped me make an informed decision. It's definitely worth trying if you want to buy quality fresh vegetables online!
                    </p>
                      <div className="small d-flex justify-content-start">
                        <a href="#!" className="d-flex align-items-center me-3">
                          <i className="far fa-thumbs-up me-2 text-primary"></i>
                          <p className="mb-0">Like</p>  
                        </a>
                        <a href="#!" className="d-flex align-items-center me-3">
                          <i className="far fa-comment-dots me-2 text-success"></i>
                          <p className="mb-0">Comment</p>
                        </a>
                        <a href="#!" className="d-flex align-items-center me-3">
                          <i className="fas fa-share me-2 text-warning"></i>
                          <p className="mb-0">Share</p>
                        </a>
                      </div>
                    </div>
                    <div className="card-footer py-3 border-0">
                      <div className="d-flex flex-start w-100">
                        <img
                          className="rounded-circle shadow-1-strong me-3"
                          src="https://i.imgur.com/CmWOHte.jpeg"
                          alt="avatar"
                          width="40"
                          height="40"
                        />
                        <div data-mdb-input-init className="form-outline w-100">
                          <textarea
                            className="form-control"
                            id="textAreaExample"
                            rows="4"
                            style={{ background: "#fff" }}
                          ></textarea>
                          <label className="form-label" htmlFor="textAreaExample">Message</label>
                        </div>
                      </div>
                      <div className="float-end mt-2 pt-1">
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-sm">
                          Bình Luận
                        </button>
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary btn-sm">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
            </div>
          </section>
          </div>
      </div>

      {/* Modal for purchasing */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-success" id="exampleModalLabel">
                 {vegetable.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex justify-content-center mt-5 mb-5">
                <img
                  src={vegetable.image}
                  className="img-fluid"
                  height="400px"
                  width="400px"
                  alt="QR Code"
                />
              </div>
              <div className="text-start">
              <p className="text-success fw-bold "> <i className="fas fa-book text-primary mt-3"></i> Tên Khoa Học: {vegetable.scientific_name}</p>
              <p className="text-danger fw-bold "><i className="fas fa-dollar-sign text-success me-2"></i> Giá: {vegetable.price || "Chưa có giá"}</p>
              <i className="fas fa-info-circle text-info"></i> MÔ TẢ:
               <p>{vegetable.description || "Không có mô tả"}</p>

              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
