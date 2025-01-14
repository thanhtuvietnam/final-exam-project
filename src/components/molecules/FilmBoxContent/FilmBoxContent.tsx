import { cn } from '@/lib/utils';
import { ChevronDown } from '@/components/atoms';

const FilmBoxContent = (): JSX.Element => {
  return (
    <section
      aria-labelledby="FilmBoxContent"
      className="tw-themes-3 rounded-lg px-2"
    >
      <h4 id="FilmBoxContent" className={cn('tw-text-color-2 font-sans')}>
        Witcher Tập: 1 hd + Vietsub
      </h4>
      <button className="tw-flex-1 tw-border-themes border-b pb-1">
        <ChevronDown tab="Nội dung phim" />
      </button>
      <p className="mt-3">
        Trong thời kỳ Chiến tranh chống Nhật, để thuận lợi chiếm đóng Trường Sa,
        quân Nhật sử dụng chiến lược đặc công “Hắc Chấp Sự” đã ẩn náu tại Trung
        Quốc 15 năm, thực hiện kế hoạch lừa dối chiến lược đã được lên kế hoạch
        từ lâu. Thành viên của Đảng Cộng sản Trung Quốc dưới lòng đất Vân Mộ Chi
        đã bị giết trong quá trình điều tra “Hắc Chấp Sự”. Con trai ông Vân
        Hoằng Thâm không biết thân phận thực sự của cha mình khi điều tra kẻ
        giết người, đã bị cuốn vào bẫy mà “Hắc Chấp Sự” đã sắp xếp từ trước.
        Trong lúc Vân Hoằng Thâm cảm thấy mê man và bất lực, bạn thân của cha
        anh khi còn sống đã đem đến cho anh sự giúp đỡ và bảo vệ lớn lao, cuối
        cùng anh đã nhận ra trò lừa của đối phương.&nbsp;
      </p>
    </section>
  );
};

export default FilmBoxContent;
