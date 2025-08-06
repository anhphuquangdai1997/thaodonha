import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const One = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className="border rounded p-2 shadow-md w-full max-w-md">
            <div className="text-sm mb-2">
                <Link to="/" className="text-blue-500 hover:underline">Trang Chủ</Link> &raquo;{' '}
                <span className="text-gray-600">Phá Dỡ nhà</span>
            </div>
            {/* Tiêu đề - click để đóng/mở */}
            <button
                onClick={() => setOpen(!open)}
                className="bg-yellow-400 text-black font-semibold px-4 py-2 w-full text-left"
            >
                Nội dung bài viết {open ? "▲" : "▼"}
            </button>

            {/* Danh sách nội dung */}
            {open && (
                <div className="p-4 text-sm">
                    <ol className="list-decimal pl-4 space-y-2">
                        <li>
                            4 bước tháo dỡ nhà cũ chuẩn kỹ thuật trong xây dựng
                            <ol className="list-decimal pl-6 mt-1 space-y-1">
                                <li>
                                    Lập phương án, giải pháp phá dỡ công trình xây dựng
                                </li>
                                <li>
                                    Thẩm tra, phê duyệt thiết kế phương án, giải pháp phá dỡ công
                                    trình xây dựng
                                </li>
                                <li>Tổ chức thi công phá dỡ công trình xây dựng</li>
                                <li>
                                    Tổ chức giám sát, nghiệm thu công tác phá dỡ công trình xây
                                    dựng
                                </li>
                            </ol>
                        </li>
                        <li>
                            Không được thực hiện những việc gì khi thi công tháo dỡ
                        </li>
                    </ol>
                </div>
            )}
        </div>
    )
}

export default One