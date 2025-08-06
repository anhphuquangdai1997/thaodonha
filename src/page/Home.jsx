import { Helmet } from 'react-helmet-async';
import Footer from './Footer';
import image1 from '../assets/01.jpg';
import image2 from '../assets/02.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Trang chủ</title>
        <meta name="description" content="Chào mừng bạn đến với trang chủ My Shop." />
        <link rel="canonical" href="https://example.com/" />
      </Helmet>
      <section className="max-w-3xl mx-auto px-4 py-10 text-center">
        {/* Dòng tiêu đề + line */}
        <div className="flex items-center justify-center mb-6">
          <span className="hidden sm:inline-block w-12 h-px bg-blue-600 mr-3" />
          <span className="bg-blue-600 text-white text-sm sm:text-base font-bold px-4 py-2 uppercase rounded-sm">
            Báo giá phá dỡ nhà
          </span>
          <span className="hidden sm:inline-block w-12 h-px bg-blue-600 ml-3" />
        </div>

        {/* Tiêu đề lớn */}
        <h1 className="text-xl sm:text-2xl font-bold text-blue-700 mb-5">
          Bảng báo giá chi phí phá dỡ nhà cũ và công trình
        </h1>

        {/* Nội dung mô tả */}
        <p className="text-gray-800 leading-relaxed text-justify">
          Thi công phá dỡ nhà, <strong>phá dỡ nhà cũ</strong> luôn cần đến những
          đơn vị chuyên nghiệp, có kinh nghiệm và kỹ thuật chuyên sâu. Do đó,
          bảng báo giá phá dỡ nhà cũ bao nhiêu cũng là một trong những vấn đề mà
          khách hàng quan tâm. Hãy cùng với chúng tôi tìm hiểu về mức giá chi
          tiết mới nhất cho công việc này ngay bài viết dưới đây.
        </p>

        {/* Bảng giá phá dỡ trọn gói */}
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Loại công trình
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Diện tích (m²)
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Đơn giá trọn gói (VNĐ/m²)
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">
                  Ghi chú
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  Nhà cấp 4 (1 tầng)
                </td>
                <td className="px-6 py-4">Dưới 100m²</td>
                <td className="px-6 py-4 text-red-600 font-semibold">180.000 - 220.000</td>
                <td className="px-6 py-4 text-sm">Bao gồm dọn dẹp</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  Nhà 2-3 tầng
                </td>
                <td className="px-6 py-4">100-200m²</td>
                <td className="px-6 py-4 text-red-600 font-semibold">200.000 - 280.000</td>
                <td className="px-6 py-4 text-sm">Tùy độ phức tạp</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  Nhà 4-5 tầng
                </td>
                <td className="px-6 py-4">200-400m²</td>
                <td className="px-6 py-4 text-red-600 font-semibold">250.000 - 350.000</td>
                <td className="px-6 py-4 text-sm">Cần thiết bị chuyên dụng</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  Nhà xưởng
                </td>
                <td className="px-6 py-4">Trên 400m²</td>
                <td className="px-6 py-4 text-red-600 font-semibold">150.000 - 200.000</td>
                <td className="px-6 py-4 text-sm">Giá ưu đãi diện tích lớn</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  Công trình khó tiếp cận
                </td>
                <td className="px-6 py-4">Tùy quy mô</td>
                <td className="px-6 py-4 text-red-600 font-semibold">Báo giá theo yêu cầu</td>
                <td className="px-6 py-4 text-sm">Cần khảo sát thực tế</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-16">
          <div className="flex items-center justify-center mb-8">
            <span className="hidden sm:inline-block w-12 h-px bg-blue-600 mr-3" />
            <span className="bg-blue-600 text-white text-sm sm:text-base font-bold px-4 py-2 uppercase rounded-sm">
              Các dịch vụ của chúng tôi
            </span>
            <span className="hidden sm:inline-block w-12 h-px bg-blue-600 ml-3" />
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-8 text-center">
            Các dịch vụ tháo dỡ nhà cũ tại phá dỡ nhà Văn Tú
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phá dỡ nhà cũ, nhà cấp 4, nhà tập thể</h3>
                <p className="text-gray-600 text-sm">Dịch vụ phá dỡ các loại nhà ở cũ, nhà cấp 4, nhà tập thể với quy trình chuyên nghiệp và an toàn.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phá dỡ chung cư, nhà cao tầng đã xuống cấp</h3>
                <p className="text-gray-600 text-sm">Chuyên phá dỡ các công trình cao tầng, chung cư xuống cấp với thiết bị hiện đại.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phá dỡ nhà xưởng, xí nghiệp, nhà máy</h3>
                <p className="text-gray-600 text-sm">Tháo dỡ các công trình công nghiệp lớn như nhà xưởng, xí nghiệp, nhà máy.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phá dỡ các công trình dân dụng ở vị trí khó thực hiện</h3>
                <p className="text-gray-600 text-sm">Xử lý các công trình ở vị trí khó tiếp cận, địa hình phức tạp với kỹ thuật chuyên môn cao.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phá dỡ sân bay cũ, nhà ga, bến xe,...</h3>
                <p className="text-gray-600 text-sm">Tháo dỡ các công trình giao thông như sân bay, nhà ga, bến xe với quy mô lớn.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tháo dỡ trường học cũ, bệnh viện cũ, nhà kho,...</h3>
                <p className="text-gray-600 text-sm">Dịch vụ tháo dỡ các công trình công cộng như trường học, bệnh viện, nhà kho.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tháo dỡ cầu đường bê tông, khoán cắt, đập đầu cọc</h3>
                <p className="text-gray-600 text-sm">Chuyên tháo dỡ các công trình hạ tầng giao thông như cầu đường, cắt đập đầu cọc.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Giải phóng mặt bằng công trình xây dựng</h3>
                <p className="text-gray-600 text-sm">Dịch vụ giải phóng mặt bằng để chuẩn bị cho các dự án xây dựng mới.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Giải pháp mặt bằng ở các công trình xây dựng trái phép</h3>
                <p className="text-gray-600 text-sm">Xử lý và giải phóng mặt bằng các công trình vi phạm quy định xây dựng.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Phần bảng giá phá dỡ nhà cũ trọn gói */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-6 text-center">
            Phá dỡ nhà cũ trọn gói tại TP HCM
          </h2>

          <div className="mb-8 text-left">
            <p className="text-gray-800 leading-relaxed mb-4">
              <strong>Giá phá dỡ nhà cũ</strong> trọn gối toàn bộ công trình sẽ bao gồm toàn bộ chi phí tháo dỡ công trình, dọn dẹp và bàn giao công trình cho khách hàng. Giá sẽ được tính theo mét vuông nhân với tổng diện tích công trình.
            </p>

            <p className="text-gray-800 leading-relaxed mb-4">
              Giá áp, phá dỡ nhà cũ phụ thuộc vào nhiều yếu tố như:
            </p>

            <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6 ml-4">
              <li>Quy mô nhà cũ</li>
              <li>Kết cấu của công trình nhà cũ là nhà khung hay tường chịu lực</li>
              <li>Vị trí thi công, máy móc chuyên dụng chuyên phá dỡ nhà cũ có thì công được không</li>
              <li>Công trình có thu hồi được vật tư hay không</li>
            </ul>
          </div>

          {/* Hình ảnh máy xúc phá dỡ */}
          <div className="mb-8 text-center">
            <img
              src="https://phadonhatantienphat.com/images/dich-vu/pdn6.jpg"
              alt="Máy xúc phá dỡ nhà cũ tại TP HCM"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-3 italic">
              Hình ảnh máy xúc chuyên dụng phá dỡ nhà cũ tại TP HCM
            </p>
          </div>
          <div className="mb-8 text-center">
            <div className='flex gap-1'>
              <img
                src={image1}
                alt="Máy xúc phá dỡ nhà cũ tại TP HCM"
                className="w-full md:max-w-sm max-w-[180px] mx-auto rounded-lg shadow-lg"
              />
              <img
                src={image2}
                alt="Máy xúc phá dỡ nhà cũ tại TP HCM"
                className="w-full md:max-w-sm max-w-[180px] mx-auto rounded-lg shadow-lg"
              />
            </div>
            <p className="text-sm text-gray-600 mt-3 italic">
              Hình ảnh phá dỡ các cọc bị lỗi và hoàn thiện lại
            </p>
          </div>
          <div className="mb-8 text-center ">
            <img
              src="https://cly.1cdn.vn/thumbs/720x480/2025/05/09/z6583920164759_03161693a5c5eb49d4f2571af75bcc75(1).jpg"
              alt="các công nhân đang vận chuyển tôn"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-3 italic">
              Hình ảnh các công nhân đang vận chuyển tôn
            </p>
          </div>
          <div className="mb-8 text-center ">
            <img
              src="https://newhome24h.com/wp-content/uploads/2023/07/thao-do-nha-cu.jpg"
              alt="ảnh tháo dỡ nhà cũ tại TP HCM"
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-3 italic">
              Hình ảnh phá dỡ nhà cũ tại TP HCM
            </p>
          </div>
          <div className="bg-white p-2 md:p-4 shadow-md rounded w-full">
            <h2 className="text-base md:text-lg font-bold text-blue-600 mb-1">
              DANH MỤC NỔI BẬT
            </h2>
            <div className="w-8 border-b-2 border-gray-400 mb-4" />

            <ul className="divide-y divide-gray-200 text-sm">
              <Link
                to="/one"
                className="block bg-gray-50 py-3 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                PHÁ DỠ NHÀ
              </Link>
              <Link
                to="/two"
                className="block bg-gray-50 py-3 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                PHÁ DỠ CÔNG TRÌNH
              </Link>
              <Link
                to="/three"
                className="block bg-gray-50 py-3 px-4 text-blue-600 hover:bg-gray-100 cursor-pointer"
              >
                THU MUA XÁC NHÀ
              </Link>
            </ul>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
