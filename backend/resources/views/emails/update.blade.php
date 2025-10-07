<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Account Pending Approval - {{ $user->name }}</title>
</head>
<body style="margin:0; padding:20px; font-family: Arial, sans-serif; background-color: #f9fafb; color:#111827;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff; border-radius:12px; padding:25px; border:1px solid #e5e7eb; box-shadow:0 3px 10px rgba(0,0,0,0.06);">

          <!-- Banner placeholder -->
          <tr>
            <td align="center" style="padding-bottom:20px;">
              <img src="{{ asset('images/banner.png') }}" alt="Wefithost Banner" style="max-width:100%; border-radius:8px; margin-bottom:20px;">
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td>
              <h2 style="margin:0; color:#5a52e0; font-size:22px; text-align:center; border-bottom:2px solid #93c5fd; padding-bottom:10px;">
                Hello {{ $user->name }},
              </h2>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding-top:20px;">
              <p style="font-size:15px; line-height:1.6; color:#4b5563;">
                Thank you for registering as an affiliate with <strong style="color:#6b63ff;">Wefithost</strong>.
              </p>
              <p style="font-size:15px; line-height:1.6; color:#4b5563;">
                Your account request has been received and is currently <strong>pending approval</strong>. Our admin team will review your request, and you will receive a response within <strong>24 hours</strong>.
              </p>
              <p style="font-size:15px; line-height:1.6; color:#4b5563;">
                You do not need to take any further action at this time. Once approved, you will receive an email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:20px; font-size:12px; color:#888; text-align:center;">
              &copy;  Wefithost. All rights reserved.
            </td>
          </tr>

        </table>
        <!-- End Main Container -->

      </td>
    </tr>
  </table>
</body>
</html>
