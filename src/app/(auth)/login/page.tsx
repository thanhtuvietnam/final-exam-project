'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import styles from '@/auth/auth.module.css';
import { icons } from '@/lib/declarations/icons';

const LoginPage = (): JSX.Element => {
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
        x: -150,
      }}
      className={cn(styles['authBox'], 'h-[500px] select-none')}
    >
      <div className={cn(styles['form'])}>
        <Link href="/" className="absolute top-5">
          <icons.IoArrowBackCircleOutline size={40} />
        </Link>
        <div className={cn(styles['authHeader'])}>
          <span className={cn(styles['headerSpan'])}>Login</span>
        </div>

        <div className="mt-24">
          <div className={cn(styles['inputBox'])}>
            <input
              id="email"
              className={cn(styles['inputField'], 'mb-3')}
              required
              type="email"
            />
            <label className={cn(styles['label'])} htmlFor="email">
              Email
            </label>
            <icons.MdOutlineEmail className={cn(styles['icon'])} />
          </div>

          <div className={cn(styles['inputBox'])}>
            <input
              id="pass"
              className={cn(styles['inputField'])}
              required
              type="password"
            />
            <label className={cn(styles['label'])} htmlFor="password">
              Password
            </label>
            <icons.FaLock className={cn(styles['icon'])} />
          </div>

          <div className={cn(styles['rememberForgot'])}>
            <div>
              <input id="remember" type="checkbox" />
              <label className={cn()} htmlFor="remember">
                Remember Me
              </label>
            </div>

            <div className="forgot">
              <Link href="#">Forgot password?</Link>
            </div>
          </div>
          <button className={cn(styles['submitBtn'], 'my-5')} type="submit">
            Login
          </button>

          <div className={cn('-mt-2 flex items-center justify-center gap-2')}>
            <p>Don&apos;t have an account yet?</p>
            <Link href="/signup">
              <icons.IoArrowForwardCircleOutline size={40} />
            </Link>
          </div>
        </div>
      </div>
    </motion.form>
  );
};

export default LoginPage;
