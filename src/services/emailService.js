// import emailjs from '@emailjs/browser';

// // Initialize EmailJS with your public key
// const PUBLIC_KEY = "h7cnMVE1nufu98OC7";
// const SERVICE_ID = "service_j1it8n7";
// const TEMPLATE_ID = "template_uvnmczx";

// // Initialize EmailJS
// emailjs.init(PUBLIC_KEY);

// export const sendPasswordResetEmail = async (email, resetLink) => {
//   try {
//     const templateParams = {
//       name: email.split('@')[0], // Use the part before @ as the name
//       email,
//       message: 'Click the link below to reset your password.',
//       reset_link: resetLink
//     };

//     const result = await emailjs.send(
//       SERVICE_ID,
//       TEMPLATE_ID,
//       templateParams,
//       PUBLIC_KEY
//     );

//     console.log('Email sent:', result.text);
//     return { 
//       success: true, 
//       message: 'Reset link has been sent to your email address!' 
//     };
//   } catch (error) {
//     console.error('Email sending error:', error);
//     throw new Error(
//       error.message || 'Failed to send reset link. Please try again later.'
//     );
//   }
// };

// Add other email service functions here as needed 