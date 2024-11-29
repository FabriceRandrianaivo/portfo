import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const MailService = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      toSend,
      'YOUR_USER_ID'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='from_name'
        placeholder='From name'
        value={toSend.from_name}
        onChange={handleChange}
      />
      <input
        type='text'
        name='to_name'
        placeholder='To name'
        value={toSend.to_name}
        onChange={handleChange}
      />
      <input
        type='text'
        name='message'
        placeholder='Your message'
        value={toSend.message}
        onChange={handleChange}
      />
      <input
        type='email'
        name='reply_to'
        placeholder='Your email'
        value={toSend.reply_to}
        onChange={handleChange}
      />
      <button type='submit'>Send</button>
    </form>
  );
};

export default MailService;
