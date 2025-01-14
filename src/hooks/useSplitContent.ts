// import { useMemo } from 'react';
//
// // import { Item } from '@/types/apiMovieDetails';
//
// export const useSplitContents = (content: string) => {
//   return useMemo(() => {
//     const contentBlock = content || '';
//     const withoutTags = contentBlock.replace(/<[^>]+>/g, '');
//     const halfLength = Math.floor(withoutTags.length / 2);
//
//     return {
//       contentBlockWithoutTags: withoutTags,
//       contentBlockSplitted: [
//         withoutTags.slice(0, halfLength),
//         withoutTags.slice(halfLength),
//       ],
//     };
//   }, [content]);
// };
//
// export default useSplitContents;

// useSplitContents.ts
import { useMemo } from 'react';

/**
 * Hook để tách nội dung thành hai phần sau khi loại bỏ các thẻ cụ thể.
 * Loại bỏ các thẻ <p>, <p/>, </p>, và <p>&nbsp;</p> nếu có.
 *
 * @param content - Nội dung chuỗi cần xử lý.
 * @returns { contentBlockWithoutTags: string, contentBlockSplitted: [string, string] }
 */
export const useSplitContents = (content: string) => {
  return useMemo(() => {
    const contentBlock = content || '';

    // Định nghĩa regex để tìm các thẻ <p>, <p/>, </p> và &nbsp;
    const tagPattern = /<\/?p[^>]*>|&nbsp;/g;

    // Kiểm tra xem nội dung có chứa các thẻ này không
    const hasSpecificTags = tagPattern.test(contentBlock);

    // Nếu có, loại bỏ các thẻ; nếu không, giữ nguyên nội dung
    const withoutTags = hasSpecificTags
      ? contentBlock.replace(tagPattern, '')
      : contentBlock;

    // Tính độ dài nửa
    const halfLength = Math.floor(withoutTags.length / 2);

    return {
      contentBlockWithoutTags: withoutTags,
      contentBlockSplitted: [
        withoutTags.slice(0, halfLength),
        withoutTags.slice(halfLength),
      ],
    };
  }, [content]);
};

export default useSplitContents;
