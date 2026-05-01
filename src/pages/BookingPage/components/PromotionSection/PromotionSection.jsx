import { Form, Input, Checkbox } from 'antd';
import './PromotionSection.css';

function PromotionSection() {
  return (
    <div className="promotion-section">
      <h3 className="section-title">Khuyến mãi</h3>

      <Form.Item
        name="promotion"
        className="promotion-input"
      >
        <Input placeholder="Nhập mã khuyến mãi" />
      </Form.Item>

      <Form.Item
        name="notes"
        className="notes-input"
      >
        <Input.TextArea 
          rows={4} 
          placeholder="Ghi chú thêm (nếu có)"
        />
      </Form.Item>

      <div className="info-text">
        <p className="info-line"><span className="emoji">⏱️</span> <strong>Tầm thời gian:</strong> 60 phút</p>
        <p className="info-line"><span className="emoji">🧮</span> <strong>Mức cơ bản:</strong> 600k</p>
        <p className="info-line"><span className="emoji">💳</span> Thủ tướng áp dụng: Quý XMD</p>
      </div>

      <Form.Item
        name="barberConsent"
        valuePropName="checked"
        className="checkbox-item"
      >
        <Checkbox>
          Vấn dữ liệu tin tức. "Vui lòng" dùng ngập hạn để bàng yêu cầu áp dụng thêm cuộc gọi tự động
        </Checkbox>
      </Form.Item>
    </div>
  );
}

export default PromotionSection;
