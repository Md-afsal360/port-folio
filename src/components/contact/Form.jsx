'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from 'sonner';

export default function Form() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    const loadingToast = toast.loading('Sending your message...');
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success('Message sent successfully!', { id: loadingToast });
        reset(); // Reset form after successful submission
      } else {
        toast.error(`Failed to send message: ${result.message}`, { id: loadingToast });
      }
    } catch (error) {
      toast.error('Error sending email. Please try again later.', { id: loadingToast });
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
      >
        <input
          type='text'
          placeholder='Name'
          {...register('name', {
            required: 'This field is required!',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters',
            },
          })}
          className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
        />
        {errors.name && toast.error(errors.name.message)}

        <input
          type='email'
          placeholder='Email'
          {...register('email', {
            required: 'Email field is required!',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
        />
        {errors.email && toast.error(errors.email.message)}

        <textarea
          placeholder='Message'
          {...register('message', {
            required: 'This field is required!',
            minLength: {
              value: 15,
              message: 'Message should be at least 50 characters',
            },
            maxLength: {
              value: 500,
              message: 'Message should not exceed 500 characters',
            },
          })}
          className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'
        />
        {errors.message && toast.error(errors.message.message)}

        <input
          value='Cast your message!'
          className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize'
          type='submit'
        />
      </form>
    </>
  );
}
































// 'use client'
// // import emailjs from '@emailjs/browser'
// // import emailjs from 'emailjs-com';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Toaster, toast } from 'sonner'

// export default function Form() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
    
// //   const sendEmail = (params) => {
   

// //     emailjs
// //       .send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID,params,{
// //         publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
// //         limitRate:{
// //           throttle: 5000, //you cannot send more than 1 email per 5 seconds
// //         }
// //       })
// //       .then(
// //         () => {
// //           console.log('SUCCESS!');
// //         },
// //         (error) => {
// //           console.log('FAILED...', error.text);
// //         },
// //       );
// //   };

// //   const onSubmit = (data) => {
// // const templateParams = {
// //   to_name:"Mohamed afsal",
// //   from_name: data.name,
// //   reply_to: data.email,
// //   message: data.message,
// // }

// //     sendEmail(templateParams);
// //   };
// //   console.log(errors);


// const onSubmit = async (data) => {
//   try {
//     const response = await fetch('/api/sendEmail', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         name: data.name,
//         email: data.email,
//         message: data.message,
//       }),
//     });

//     const result = await response.json();
//     if (response.ok) {
//       console.log('SUCCESS:', result.message);
//     } else {
//       console.error('FAILED:', result.message);
//     }
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

  
//   return (

//     <>
//     <Toaster />
//     <form onSubmit={handleSubmit(onSubmit)} 
//     className='max-w-md w-full flex flex-col items-center justify-center space-y-4'>
//       <input type="text" placeholder="name" {...register("name", {required: 'this field is required!', minLength:{
//         value: 3,
//         message: "Name should be entered with atleast 3 characters"
//       }})} 
//       className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'/>
//       {
//         errors.name && <span className='inline-block self-start text-accent'>{errors.name.message}</span>
//       }
//       <input type="email" placeholder="Email" {...register("email", {required: 'Email field is required!', pattern:{
//         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//         message: "Invalid email address"
//       }
//       })}
//        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg' />
//        {
//         errors.email && <span className='inline-block self-start text-accent'>{errors.email.message}</span>
//        }
//       <textarea placeholder='message' {...register("message", {required: 'this is requierd', maxLength:{
//             value: 500,
//             message: "Message should be entered with atleast 50 characters"
//       } , minLength: {
//             value: 50,
//             message: "Message should be entered with atleast 50 characters"
//       } })} 
//        className='w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg'/>

//       <input
//       value="cast your message!"
//        className='px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize' type="submit" />
//     </form>
//     </>
//   );
// }