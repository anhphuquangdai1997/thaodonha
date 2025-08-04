import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white px-4 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Cột 1: Thông tin công ty */}
                <div>
                    <h2 className="text-xl font-bold uppercase mb-3">Phá dỡ nhà Tân Tiến Phát</h2>
                    <p className="mb-4">
                        Chuyên cung cấp giải pháp phá dỡ hiệu quả và thu mua xác nhà linh hoạt,
                        đảm bảo chất lượng và an toàn trên mọi công trình
                    </p>
                    <p className="flex items-center gap-2 mb-2">
                        <span>📍</span>
                        Địa chỉ: 30/66 Đỗ Nhuận, Phường Sơn Kỳ, Quận Tân Phú, TP.HCM
                    </p>
                    <p className="flex items-center gap-2 mb-2">
                        <span>📱</span>
                        Hotline: 0976.999.776 - Tân Tiến Phát
                    </p>
                    <p className="flex items-center gap-2">
                        <span>📧</span>
                        Email: info@gmail.com
                    </p>
                </div>

                {/* Cột 2: Danh mục nổi bật */}
                <div>
                    <h2 className="text-xl font-bold uppercase mb-3">Danh mục nổi bật</h2>
                    <div className="flex flex-col gap-2">
                        {[
                            "Phá dỡ nhà",
                            "Báo giá phá dỡ nhà",
                            "Dịch vụ phá dỡ nhà",
                            "Phá dỡ nhà giá rẻ",
                            "Phá dỡ công trình",
                            "Báo giá phá dỡ công trình",
                            "Phá dỡ công trình Hồ Chí Minh",
                            "Phá dỡ công trình trọn gói",
                        ].map((item, idx) => (
                            <button
                                key={idx}
                                className="border border-white text-white text-sm px-3 py-1 hover:bg-white hover:text-blue-600 transition-all rounded"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cột 3: Bản đồ */}
                <div>
                    <h2 className="text-xl font-bold uppercase mb-3">Bản đồ</h2>
                    <div className="w-full h-[250px]">
                        <iframe
                            src="https://www.google.com/maps?q=30+Đỗ+Nhuận,+Tân+Phú,+TP.HCM&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer