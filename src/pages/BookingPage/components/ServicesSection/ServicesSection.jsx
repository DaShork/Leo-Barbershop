import { Form, Select } from 'antd';
import { services } from '../../../../data/ServiceData';
import './ServicesSection.css';

function ServicesSection() {
  return (
    <div className="services-section">
      <h1 className="section-title">Chọn dịch vụ</h1>
      <h2 className="section-subtitle">Vui lòng chọn 1 trong các dịch vụ hiện có</h2>

      <Form.Item
        name="service"
        rules={[{ required: true, message: 'Vui lòng chọn dịch vụ!' }]}
        className="no-label"
      > 
        <Select
          placeholder="Chọn dịch vụ"
          options={services.map(s => ({
            value: s.title,
            label: s.title
          }))}
        />
      </Form.Item>
    </div>
  );
}

export default ServicesSection;
