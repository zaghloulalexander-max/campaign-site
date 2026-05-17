import IconBase, { type IconProps } from './IconBase';

export default function CloseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 18L18 6M6 6l12 12" />
    </IconBase>
  );
}