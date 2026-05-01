import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Form, Button, message } from 'antd';
import './BookingPage.css';
import CustomerInfoForm from './components/CustomerInfoForm/CustomerInfoForm';
import BranchesSection from './components/BranchesSection/BranchesSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import DateTimeSection from './components/DateTimeSection/DateTimeSection';
import PromotionSection from './components/PromotionSection/PromotionSection';

function BookingPage() {
  const [form] = Form.useForm();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const onFinish = async (values) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: values.name,
          user_email: values.email,
          service: values.service,
          branch: values.branch,
          size: values.size,
          date: values.date ? values.date.format('DD/MM/YYYY') : '',
          time: values.time || '',
          notes: values.notes || '',
          promotion: values.promotion || '',
        }
      );

      message.success('Đã gửi email xác nhận!');
      form.resetFields();
    } catch (err) {
      console.error(err);
      message.error('Gửi thất bại');
    }
  };

  return (
    <div className="booking-container">
      <div className="booking-wrapper">
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="booking-form"
        >
          {/* Customer Info Section */}
          <CustomerInfoForm />

          {/* Branches Section */}
          <BranchesSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Date Time Section */}
          <DateTimeSection />

          {/* Promotion Section */}
          <PromotionSection />

          {/* Submit Button */}
          <Form.Item className="submit-button-wrapper">
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              className="submit-btn"
            >
              Đặt lịch ngay
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default BookingPage;