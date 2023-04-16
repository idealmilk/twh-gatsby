import React, { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';

import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import { Container, FormWrap, InputWrap, FormResponse } from './styled';

const Form = () => {
  const form = useRef<HTMLFormElement>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const isInView = useInView(form, { once: true });

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.GATSBY_EMAILJS_SERVICE_ID as string,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        process.env.GATSBY_EMAILJS_PUBLIC_KEY as string
      );

      console.log(result);
      setResponseMessage('Your interest has been successfully registered');
    } catch (error) {
      console.log(error);
      setResponseMessage(
        'We could not complete your request, please try again later'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container ref={form} onSubmit={sendEmail}>
      <FormWrap>
        <InputWrap>
          <motion.div
            style={{
              transform: isInView ? 'translateX(0)' : 'translateX(-50vw)',
              // transitionDelay: "0.4",
              opacity: isInView ? 1 : 0,
              transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
            }}
          >
            <FormInput
              type='text'
              name='full_name'
              required
              value={fullName}
              placeholder='Full name'
              isColumn={true}
              color='red'
              handleChange={(e) => setFullName(e.target.value)}
            />
          </motion.div>

          <motion.div
            style={{
              transform: isInView ? 'translateX(0)' : 'translateX(50vw)',
              // transitionDelay: "0.4",
              opacity: isInView ? 1 : 0,
              transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
            }}
          >
            <FormInput
              type='email'
              required
              name='email'
              value={email}
              placeholder='Email address'
              isColumn={true}
              color='blue'
              handleChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          <motion.div
            style={{
              transform: isInView ? 'translateX(0)' : 'translateX(-50vw)',
              // transitionDelay: "0.4",
              opacity: isInView ? 1 : 0,
              transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
            }}
          >
            <FormTextArea
              type='text'
              name='message'
              required
              value={message}
              placeholder='Enter your message'
              style={{ marginBottom: '20px' }}
              isColumn={true}
              handleChange={(e) => setMessage(e.target.value)}
            />
          </motion.div>
        </InputWrap>

        <motion.div
          style={{
            transform: isInView ? 'translateY(0)' : 'translateY(200px)',
            // transitionDelay: "0.4",
            opacity: isInView ? 1 : 0,
            transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
          }}
        >
          <button type='submit' value='send'>
            {loading ? <div className='loader' /> : <p>Submit enquiry</p>}
          </button>
        </motion.div>
      </FormWrap>
      <FormResponse>
        <p>{responseMessage === '' ? '' : responseMessage}</p>
      </FormResponse>
    </Container>
  );
};

export default Form;
