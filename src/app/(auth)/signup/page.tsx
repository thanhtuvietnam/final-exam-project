'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import styles from '@/auth/auth.module.css';
import { icons } from '@/lib/declarations/icons';

const SignupPage: React.FC = () => {
  return (
    <motion.form
      transition={{
        duration: 0.5,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      initial={{
        opacity: 0,
        x: 150,
      }}
      className={cn(styles['authBox'], 'h-[700px] select-none')}
      action=""
    >
      <div className={cn(styles['form'])}>
        <Link href="/login" className="absolute top-5">
          <icons.IoArrowBackCircleOutline size={40} />
        </Link>

        <div className={cn(styles['authHeader'])}>
          <span className={cn(styles['headerSpan'])}>Signup</span>
        </div>

        <div className="mt-20">
          <div className={cn(styles['inputBox'])}>
            <input
              id="user"
              className={cn(styles['inputField'], 'mb-3')}
              required
              type="text"
            />
            <label className={cn(styles['label'])} htmlFor="user">
              Full Name
            </label>
            <icons.FaUserSecret className={cn(styles['icon'])} />
          </div>

          <div className={cn(styles['inputBox'])}>
            <input
              id="email"
              className={cn(styles['inputField'], 'mb-3')}
              required
              type="email"
            />
            <label className={cn(styles['label'])} htmlFor="name">
              Email
            </label>
            <icons.MdOutlineEmail className={cn(styles['icon'])} />
          </div>

          <div className={cn(styles['inputBox'])}>
            <input
              id="phone"
              className={cn(styles['inputField'], 'mb-3')}
              required
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
            <label className={cn(styles['label'])} htmlFor="Phone number">
              Phone
            </label>
            <icons.AiOutlinePhone className={cn(styles['icon'])} />
          </div>

          <div className={cn(styles['inputBox'])}>
            <input
              id="password"
              className={cn(styles['inputField'], 'mb-3')}
              required
              type="password"
            />
            <label className={cn(styles['label'])} htmlFor="password">
              Password
            </label>
            <icons.FaLock className={cn(styles['icon'])} />
          </div>

          <div className={cn(styles['inputBox'])}>
            <input
              id="confirm-password"
              className={cn(styles['inputField'], 'mb-3')}
              required
              type="password"
            />
            <label className={cn(styles['label'])} htmlFor="confirm-password">
              Confirm password
            </label>
            <icons.MdOutlineLockClock className={cn(styles['icon'])} />
          </div>

          <button className={cn(styles['submitBtn'], 'my-5')} type="submit">
            Signup
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default SignupPage;
