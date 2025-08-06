import React from 'react'
import { Link } from 'react-router-dom'

const Two = () => {
    return (
        <div className="max-w-2xl mx-auto p-4 text-gray-800 leading-relaxed">
            {/* Breadcrumb */}
            <div className="text-sm mb-2">
                <Link to="/" className="text-blue-500 hover:underline">Trang Chủ</Link> &raquo;{' '}
                <span className="text-gray-600">Phá Dỡ Công Trình</span>
            </div>

            {/* Tiêu đề bài viết */}
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Phá Dỡ Công Trình Xây Dựng, Tháo Dỡ Nhà Xưởng, Showroom Chuyên Nghiệp
            </h1>

            {/* Nội dung bài viết */}
            <p className="mb-4">
                Hiện nay dịch vụ <span className="font-semibold text-blue-600">Phá dỡ công trình</span> xây dựng
                dần trở nên quan trọng và phổ biến, nhất là ở các thành phố lớn. Xã hội phát triển, công nghiệp
                hóa mạnh, các công trình nhà cao tầng mọc lên với tốc độ chóng mặt. Do đó cần phải
                <strong> phá dỡ nhà cao tầng </strong>
                và công trình xây dựng trên nền cũ để tái sử dụng lại mặt bằng xây dựng công trình mới.
            </p>

            <p className="mb-4">
                Việc thi công <strong>phá dỡ</strong> đòi hỏi công ty có chuyên môn cũng như trang thiết bị máy móc đầy đủ.
                <span className="block mt-2">
                    <a href="#" className="font-semibold text-blue-700 hover:underline">
                        Công ty xây dựng Phương Nam
                    </a>{' '}
                    chúng tôi tự hào là đơn vị
                    <strong> phá dỡ công trình chuyên nghiệp </strong>
                    với đầy đủ các loại máy móc đủ đáp ứng mọi yêu cầu thi công lớn:
                    <strong> khoan nhồi cọc bê tông cốt thép </strong> và
                    <strong> khoan rút lõi bê tông cỡ lớn</strong>.
                </span>
            </p>
        </div>
    )
}

export default Two