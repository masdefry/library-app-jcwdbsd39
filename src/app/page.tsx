'use client';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineMail } from 'react-icons/hi';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AuthLoginInput,
  authLoginValidation,
} from '@/features/auth/validations/auth.validation';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';
import { useAuthStore, User } from '@/stores/useAuthStore';
import { ApiResponse } from '@/types/api-response.types';
import { useRouter } from 'next/navigation';
export default function LoginPage() {
  const { setAuth } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authLoginValidation),
  });

  const { mutate: authLoginMutation, isPending } = useMutation({
    mutationFn: async (body: AuthLoginInput) => {
      return await axios.post<ApiResponse<User>>(
        'http://localhost:8000/api/v1/auth/login-employee',
        { email: body.email, password: body.password },
        {
          withCredentials: true,
        },
      );
    },
    onSuccess: (res) => {
      setAuth(res?.data?.data);
      toast.success(res?.data?.message || 'Login successful');
      router.push('/admin');
    },
    onError: (error: AxiosError<ApiResponse<null>>) => {
      toast.error(error?.response?.data?.message || 'An error occurred');
    },
  });

  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f9fb] px-4 py-6 md:px-16'>
      {/* Background Decoration */}
      <div className='pointer-events-none fixed inset-0 overflow-hidden opacity-10'>
        <div className='absolute -left-24 -top-24 h-125 w-125 rounded-full bg-[#dfe0ff] blur-[120px]' />
        <div className='absolute -bottom-24 -right-24 h-125 w-125 rounded-full bg-[#e1e0ff] blur-[120px]' />
      </div>

      <div className='relative z-10 w-full max-w-100'>
        {/* Login Card */}
        <div
          className={`overflow-hidden rounded-xl border border-[#c5c5d7] bg-white shadow-[0px_4px_24px_rgba(32,54,189,0.06)] transition-all duration-700 ease-out`}
        >
          <div className='h-1.5 w-full bg-[#2036bd]' />
          <div className='p-6 md:p-10'>
            <div className='mb-6'>
              <h2 className='mb-1 text-2xl font-bold text-[#191c1e]'>
                Administrative Login
              </h2>
              <p className='text-xs text-[#454654]'>
                Please enter your credentials to access the dashboard.
              </p>
            </div>

            <form
              onSubmit={handleSubmit((body) => authLoginMutation(body))}
              className='space-y-4'
            >
              {/* Email */}
              <div className='space-y-1'>
                <label
                  htmlFor='email'
                  className='text-[12px] font-medium uppercase tracking-wider text-[#454654]'
                >
                  Email Address
                </label>

                <div className='relative flex items-center'>
                  <span className='absolute left-3.5 text-[#454654]/50'>
                    <HiOutlineMail />
                  </span>

                  <input
                    {...register('email')}
                    id='email'
                    type='text'
                    placeholder='librarian@libradesk.edu'
                    className='w-full rounded-lg border border-[#c5c5d7] bg-[#f2f4f6] py-2 pl-11 pr-4 text-[16px] text-[#191c1e] outline-none transition-all focus:border-[#2036bd] focus:ring-2 focus:ring-[#2036bd]/10'
                  />
                </div>
              </div>
              <p className='text-red-500 text-xs'>{errors?.email?.message}</p>

              {/* Password */}
              <div className='space-y-1'>
                <div className='flex items-center justify-between'>
                  <label
                    htmlFor='password'
                    className='text-[12px] font-medium uppercase tracking-wider text-[#454654]'
                  >
                    Password
                  </label>
                </div>

                <div className='relative flex items-center'>
                  <input
                    {...register('password')}
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='••••••••'
                    className='w-full rounded-lg border border-[#c5c5d7] bg-[#f2f4f6] py-2 pl-3 pr-12 text-[16px] text-[#191c1e] outline-none transition-all focus:border-[#2036bd] focus:ring-2 focus:ring-[#2036bd]/10'
                  />

                  <button
                    type='button'
                    onClick={() => setShowPassword((prev) => !prev)}
                    className='absolute right-3.5 text-[#454654]/50 transition-colors hover:text-[#2036bd]'
                  >
                    <span className=''>
                      {showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
                    </span>
                  </button>
                </div>
              </div>
              <p className='text-red-500 text-xs'>
                {errors?.password?.message}
              </p>

              {/* Remember */}
              <div className='flex items-center gap-2 py-1'>
                <input
                  id='remember'
                  type='checkbox'
                  className='h-3 w-3 cursor-pointer rounded border-[#c5c5d7] text-[#2036bd] focus:ring-[#2036bd]/20'
                />
                <label
                  htmlFor='remember'
                  className='cursor-pointer select-none text-xs text-[#454654]'
                >
                  Remember this station for 30 days
                </label>
              </div>

              {/* Submit */}
              <button
                disabled={isPending}
                type='submit'
                className={`group mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#2036bd] py-2 font-semibold text-white shadow-md shadow-[#2036bd]/10 transition-all duration-300 hover:bg-[#3e52d5] `}
              >
                {isPending ? 'Logging in...' : 'Login'}
              </button>
            </form>

            {/* Bottom Section */}
            <div className='mt-6 flex flex-col gap-3 border-t border-[#c5c5d7]/50 pt-6'>
              <p className='text-center text-[14px] text-[#454654]'>
                Need administrative access?{' '}
                <button
                  type='button'
                  className='font-bold text-[#2036bd] hover:underline'
                >
                  Request Account
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
