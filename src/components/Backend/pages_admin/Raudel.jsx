import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Raudel = () => {
    const { id } = useParams();  // Lấy id từ URL
    const navigate = useNavigate();  // Để chuyển hướng sau khi xóa thành công

    useEffect(() => {
        // Gọi API xóa rau khi component được mount
        handleDelete();
    }, [id]);  // Chạy lại mỗi khi id thay đổi

    // Hàm xử lý xóa rau
    const handleDelete = async () => {
        try {
            // Gửi yêu cầu DELETE tới server API
            const response = await fetch(`/api/vegetable/${id}`, { // Đảm bảo rằng đây là URL chính xác với proxy đã cấu hình
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Xóa rau không thành công');
            }

            const data = await response.json();  // Nhận dữ liệu phản hồi từ API
            console.log('Xóa rau thành công:', data);
            alert('Rau đã được xóa!');
            navigate('/raulist');  // Sau khi xóa thành công, chuyển hướng về trang danh sách rau
        } catch (error) {
            console.error('Lỗi khi xóa rau:', error);
            alert('Có lỗi xảy ra khi xóa rau!');
        }
    };

    return (
        <div>
            <h3>Đang xóa rau với ID: {id}</h3>
            <p>Đang xóa rau...</p>
        </div>
    );
};

export default Raudel;
