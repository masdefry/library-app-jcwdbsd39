'use client';
import { GENRE_VALUES } from '@/features/auth/admin/books/constants';
import {
  CreateBookFormValues,
  CreateBookRequest,
  createBookSchema,
} from '@/features/auth/admin/books/validations/book.validation';
import { ApiResponse } from '@/types/api-response.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';

export default function BookCreateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBookFormValues, any, CreateBookRequest>({
    resolver: zodResolver(createBookSchema),
    defaultValues: {
      title: '',
      description: '',
      author: '',
      isbn: '',
      genre: undefined,
      stocks: 0,
      cover: undefined,
    },
  });

  const { mutate: createBookMutation, isPending: isCreatingBook } = useMutation({
    mutationFn: async (body: CreateBookRequest) => {
      const fd = new FormData();

      fd.append('title', body.title);
      fd.append('description', body.description);
      fd.append('author', body.author);
      fd.append('isbn', body.isbn);
      fd.append('genre', body.genre);
      fd.append('stocks', String(body.stocks));
      body.cover.forEach((file) => fd.append('BOOK_IMAGES', file));

      return await axios.post<ApiResponse<any>>('http://localhost:8000/api/v1/books', fd, {
        withCredentials: true
      });
    },
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (err: AxiosError<ApiResponse<null>>) => {
      console.log(err);
    },
  });

  return (
    <>
      <div>
        <h1 className='mb-2 text-5xl font-semibold text-gray-800'>
          Create New Book
        </h1>
        <p className='text-sm text-gray-500'>
          Fill in the details below to add a new book to the library.
        </p>
      </div>
      <form
        onSubmit={handleSubmit((body) => createBookMutation(body))}
        className='space-y-6 mt-5 rounded-lg border border-gray-200 bg-white p-6 shadow-sm'
      >
        <div>
          <label
            htmlFor='title'
            className='mb-2 block text-sm font-medium text-gray-700'
          >
            Title <span className='text-red-500'>*</span>
          </label>
          <input
            {...register('title')}
            id='title'
            type='text'
            placeholder='Enter book title'
            className='w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
          />
          <span className='text-red-500 text-xs'>
            {errors?.title && errors?.title?.message}
          </span>
        </div>

        <div>
          <label
            htmlFor='description'
            className='mb-2 block text-sm font-medium text-gray-700'
          >
            Description <span className='text-red-500'>*</span>
          </label>
          <textarea
            {...register('description')}
            id='description'
            rows={5}
            placeholder='Enter book description'
            className='w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
          />
          <span className='text-red-500 text-xs'>
            {errors?.description && errors?.description?.message}
          </span>
        </div>

        <div>
          <label
            htmlFor='author'
            className='mb-2 block text-sm font-medium text-gray-700'
          >
            Author <span className='text-red-500'>*</span>
          </label>
          <input
            {...register('author')}
            id='author'
            type='text'
            placeholder='Enter author name'
            className='w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
          />
          <span className='text-red-500 text-xs'>
            {errors?.author && errors?.author?.message}
          </span>
        </div>

        <div>
          <label
            htmlFor='isbn'
            className='mb-2 block text-sm font-medium text-gray-700'
          >
            ISBN <span className='text-red-500'>*</span>
          </label>
          <input
            {...register('isbn')}
            id='isbn'
            type='text'
            placeholder='Enter ISBN'
            className='w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
          />
          <span className='text-red-500 text-xs'>
            {errors?.isbn && errors?.isbn?.message}
          </span>
        </div>

        <div>
          <label
            htmlFor='genre'
            className='mb-2 block text-sm font-medium text-gray-700'
          >
            Genre <span className='text-red-500'>*</span>
          </label>
          <select
            {...register('genre')}
            id='genre'
            className='w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
          >
            <option value=''>Select genre</option>
            {GENRE_VALUES.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <span className='text-red-500 text-xs'>
            {errors?.genre && errors?.genre?.message}
          </span>
        </div>

        <div>
          <label
            htmlFor='stocks'
            className='mb-2 block text-sm font-medium text-gray-700'
          >
            Stocks <span className='text-red-500'>*</span>
          </label>
          <input
            {...register('stocks', { valueAsNumber: true })}
            id='stocks'
            type='number'
            min={0}
            placeholder='0'
            className='w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
          />
          <span className='text-red-500 text-xs'>
            {errors?.stocks && errors?.stocks?.message}
          </span>
        </div>

        <div>
          <label
            htmlFor='cover'
            className='mb-2 block text-sm font-medium text-gray-700'
          >
            Cover <span className='text-red-500'>*</span>
          </label>
          <input
            {...register('cover')}
            id='cover'
            type='file'
            multiple
            accept='image/jpeg,image/png,image/webp,image/avif'
            className='block w-full text-sm text-gray-700 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-blue-700 hover:file:bg-blue-100'
          />

          <span className='text-red-500 text-xs'>
            {errors?.cover && errors?.cover?.message}
          </span>
        </div>

        <div className='flex justify-end gap-3 pt-2'>
          <button
            type='button'
            className='rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-100'
          >
            Cancel
          </button>

          <button
            disabled={isCreatingBook}
            type='submit'
            className='rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700'
          >
            Create Book
          </button>
        </div>
      </form>
    </>
  );
}
