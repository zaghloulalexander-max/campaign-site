import IconBase, { type IconProps } from './IconBase';

export default function ArrowIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 12h14M12.5 6.5 18 12l-5.5 5.5" />
    </IconBase>
  );
}