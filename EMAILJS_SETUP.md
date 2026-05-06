# 📧 Cách setup với EmailJS
- Lưu ý: đây chỉ là các bước tôi rút ra sau khi sử dụng EmailJS, không phải bắt buộc làm theo, nếu bạn có phương án sử dụng hay cách sử dụng khác tốt hơn, vui lòng sử dụng theo ý thích, cho tôi biết thêm nếu bạn muôn

## 1. Tạo tài khoản EmailJS
- Truy cập: https://www.emailjs.com/
- Click "Sign Up Free"
- Đăng ký bằng email hoặc social account

## 2. Lấy Public Key
- Đăng nhập vào EmailJS Dashboard
- Vào **Account** tab
- Copy **Public Key** (dạng: `xxx_xxx_xxx_xxx`)
- Lưu vào `.env.local` với key: `VITE_EMAILJS_PUBLIC_KEY`

## 3. Tạo Email Service
- Trong Dashboard, chọn **Email Services**
- Click **Add Service**
- Chọn provider (Gmail, Yahoo, Outlook, SMTP, v.v.)
  
### Nếu chọn Gmail:
- Bấm "Connect Account"
- Đăng nhập Gmail của bạn
- Cho phép EmailJS truy cập
- Copy **Service ID** (ví dụ: `service_7k8j9h0g`)
- Lưu vào `.env.local`: `VITE_EMAILJS_SERVICE_ID`

### Nếu chọn SMTP:
- Điền SMTP Server, Port, Email, Password
- Copy **Service ID** sau khi lưu

## 4. Tạo Email Template
- Chọn **Email Templates**
- Click **Create New Template**
- Điền **Template Name**: `Booking Confirmation` (hoặc tên khác)
- Thiết kế email với các biến động:

### Email Template Mẫu:
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
</head>
<body style="font-family: Arial, sans-serif; background-color: #1C1C1C; color: #fff; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #353332; padding: 30px; border-radius: 8px;">
    <h1 style="color: #FFC300; text-align: center; font-size: 28px; margin-bottom: 20px;">
        XÁC NHẬN ĐẶT LỊCH
    </h1>

    <hr style="border: none; border-top: 2px solid #FFC300; margin: 20px 0;" />

    <div style="margin: 20px 0;">
      <p><strong>Xin chào {{name}},</strong></p>
      <p>Cảm ơn bạn đã đặt lịch tại Leo Barbershop. Dưới đây là chi tiết booking của bạn:</p>
    </div>

    <div style="background-color: #1C1C1C; padding: 20px; border-radius: 6px; margin: 20px 0;">
      <p><strong style="color: #FFC300;"> Tên khách hàng:</strong> {{name}}</p>
      <p><strong style="color: #FFC300;"> Email:</strong> {{user_email}}</p>
      <p><strong style="color: #FFC300;"> Dịch vụ:</strong> {{service}}</p>
      <p><strong style="color: #FFC300;"> Chi nhánh:</strong> {{branch}}</p>
      <p><strong style="color: #FFC300;"> Số khách:</strong> {{size}}</p>
      <p><strong style="color: #FFC300;"> Ngày:</strong> {{date}}</p>
      <p><strong style="color: #FFC300;"> Giờ:</strong> {{time}}</p>
      <p><strong style="color: #FFC300;"> Ghi chú:</strong> {{notes}}</p>
      <p><strong style="color: #FFC300;"> Khuyến mãi:</strong> {{promotion}}</p>
    </div>

    <hr style="border: none; border-top: 2px solid #FFC300; margin: 20px 0;" />

    <div style="text-align: center; margin-top: 30px;">
      <p style="color: #999; font-size: 12px;">
        Vui lòng đến đúng giờ. Nếu có thay đổi, hãy liên hệ chúng tôi sớm để được hỗ trợ.
      </p>
      <p style="color: #FFC300; font-weight: bold;">
        Leo Barbershop - Chuyên nghiệp & Sang trọng
      </p>
    </div>
  </div>
</body>
</html>
```

- Copy **Template ID** (ví dụ: `template_a1b2c3d4`)
- Lưu vào `.env.local`: `VITE_EMAILJS_TEMPLATE_ID`

## 5. Cập nhật .env.local
File nằm ở root project:
```env
VITE_EMAILJS_SERVICE_ID=service_7k8j9h0g
VITE_EMAILJS_TEMPLATE_ID=template_a1b2c3d4
VITE_EMAILJS_PUBLIC_KEY=xxxx_xxxx_xxxx_xxxx
```

## 6. Thêm .env.local vào .gitignore
Để tránh leak credentials:
```
# /.gitignore
.env.local
.env.*.local
```

## 7. Test Booking
- Restart dev server: `npm run dev`
- Truy cập trang Booking
- Điền form và bấm "Đặt lịch ngay"
- Kiểm tra email để xem có nhận được không

## ⚠️ Chú ý:
- Trong dự án này tôi chỉ sử dụng free plan của EmailJS nhằm mục đích học tập và build project, vui lòng không dùng project để spam mail.
- EmailJS free plan: 200 email/tháng
- Biến template phải khớp với tên key gửi từ code (bao gồm dấu `{}`)
- Nếu Email Services không nhận email, check Spam folder hoặc SMTP setting
- Test Subject line trong Email Template để tránh email rơi vào Spam
