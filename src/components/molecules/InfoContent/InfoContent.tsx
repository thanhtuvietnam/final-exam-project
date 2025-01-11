import { icons } from '@/lib/declarations/icons';
import { SectionTitle } from '@/components/atoms';

const InfoContent: React.FC = () => {
  return (
    <section
      aria-labelledby="infoContent"
      className="tw-themes-3 rounded-lg px-2"
    >
      <SectionTitle idLabel="infoContent" title="Nội dung phim" />
      <p>
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
      <button className="button-two tw-flex tw-bounce-effect mt-2 gap-2 rounded-md px-2 py-1">
        {/* <icons.IoExpandOutline /> */}
        <icons.GrExpand />
        {/* Mo rong */}
        Thu gon
      </button>
    </section>
  );
};

export default InfoContent;
