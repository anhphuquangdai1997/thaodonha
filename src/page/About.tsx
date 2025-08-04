// src/pages/About.tsx
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Giới thiệu - My Shop</title>
        <meta name="description" content="Thông tin về My Shop và sứ mệnh của chúng tôi." />
        <link rel="canonical" href="https://example.com/about" />
      </Helmet>
      <div className="p-6">
        <h1 className="text-3xl font-bold">Giới thiệu</h1>
        <p className="mt-4 text-gray-700">
          Chúng tôi là một cửa hàng chuyên cung cấp các sản phẩm chất lượng cao với dịch vụ tận tâm.
        </p>
      </div>
    </>
  );
};

export default About;
