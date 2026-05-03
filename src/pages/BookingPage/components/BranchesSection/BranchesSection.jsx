import { Form, Select } from 'antd';
import './BranchesSection.css';

const branches = [
  { value: 'branch1', label: '🏢 QUẬN 1: 73 Nguyễn Huệ, Quận 1, TP. HCM' },
  { value: 'branch2', label: '🏢 QUẬN 1/2: Dùng Đó, Quận 1, HCM' },
  { value: 'branch3', label: '🏢 QUẬN 2: 2622 Điện Biên Phủ, P. Võ Thị Sáu' },
];

function BranchesSection() {
  return (
    <div className="branches-section">
      <h1 className="section-title">Chọn chi nhánh bạn muốn đến</h1>
      <h2 className="section-subtitle">Chọn chi nhánh bạn muốn đến!</h2>

      <Form.Item
        name="branch"
        rules={[{ required: true, message: 'Vui lòng chọn chi nhánh!' }]}
        className="no-label"
      >
        <Select
          placeholder="Chọn địa điểm"
          options={branches}
        />
      </Form.Item>

      <div className="branches-list">
        {branches.map((branch) => (
          <div key={branch.value} className="branch-item">
            {branch.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BranchesSection;
