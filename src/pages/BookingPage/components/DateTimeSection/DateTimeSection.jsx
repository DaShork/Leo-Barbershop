import { Form, DatePicker, Button, Row, Col } from 'antd';
import './DateTimeSection.css';

const timeSlots = [
  '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30',
  '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30',
  '16:00', '16:30', '19:00', '19:30'
];

function DateTimeSection() {
  return (
    <div className="datetime-section">
      <div className="date-picker-wrapper">
        <h3 className="section-title">Ngày đặt lịch</h3>
        <p className="section-label">Chọn ngày mà bạn muốn đến <span className="required-mark">*</span></p>

        <Form.Item
          name="date"
          rules={[{ required: true, message: 'Vui lòng chọn ngày!' }]}
          className="no-label"
        >
          <DatePicker style={{ width: '100%' }} placeholder="Chọn ngày" />
        </Form.Item>
      </div>

      <div className="time-slots-wrapper">
        <h3 className="section-title">Chọn khung giờ dịch vụ</h3>
        <p className="section-label">Chọn khung giờ <span className="required-mark">*</span></p>

        <Form.Item
          name="time"
          rules={[{ required: true, message: 'Vui lòng chọn giờ!' }]}
          className="no-label"
        >
          <div className="time-slots-grid">
            {timeSlots.map((time, index) => (
              <button key={index} className="time-slot-btn" type="button">
                {time}
              </button>
            ))}
          </div>
        </Form.Item>
      </div>
    </div>
  );
}

export default DateTimeSection;
