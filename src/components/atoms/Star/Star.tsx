import { icons } from '@/lib/declarations/icons';
interface StarProps {
  size: number;
}
const Star: React.FC<StarProps> = ({ size }) => {
  return (
    <div className="star tw-flex text-yellow-950 dark:text-yellow-400">
      <icons.CiStar size={size} />
      <icons.CiStar size={size} />
      <icons.CiStar size={size} />
      <icons.CiStar size={size} />
      <icons.CiStar size={size} />
    </div>
  );
};

export default Star;
