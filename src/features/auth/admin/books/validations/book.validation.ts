import { z } from 'zod';
import { GENRE_VALUES } from '../constants';

const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
];

export const createBookSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, 'Title is required field')
    .max(255, 'Title must not exceed 255 characters'),

  description: z
    .string()
    .trim()
    .min(1, 'Description is required field')
    .max(5000, 'Description is too long'),

  author: z
    .string()
    .trim()
    .min(1, 'Author is required field')
    .max(100, 'Author must not exceed 100 characters'),

  isbn: z
    .string()
    .trim()
    .min(1, 'ISBN is required field')
    .max(100, 'ISBN must not exceed 100 characters'),

  genre: z.enum(GENRE_VALUES, {
    error: 'Genre is required field',
  }),

  stocks: z.coerce
    .number({
      error: 'Stocks must be a number',
    })
    .int('Stocks must be an integer')
    .min(1, 'Stocks must be greater than or equal 1'),

  cover: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, 'At least one image is required')
    .refine((files) => files.length <= 3, 'Maximum 3 images are allowed')
    .transform((files) => Array.from(files))
    .refine(
      (files) => files.every((file) => file.size <= MAX_FILE_SIZE),
      'Each image must not exceed 2 MB',
    )
    .refine(
      (files) => files.every((file) => ALLOWED_MIME_TYPES.includes(file.type)),
      'Only JPEG, PNG, WEBP, and AVIF images are allowed',
    ),
});

export type CreateBookFormValues = z.input<typeof createBookSchema>;
export type CreateBookRequest = z.output<typeof createBookSchema>;
