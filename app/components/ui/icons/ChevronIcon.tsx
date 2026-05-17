import IconBase, { type IconProps } from './IconBase';

export default function ChevronIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9 4.5 16.5 12 9 19.5" />
    </IconBase>
  );
}