import classNames from "classnames";
import { ReactNode } from "react";
import { Tooltip as TipsyTooltip } from "react-tippy";

interface IProps {
  content: string;
  children: ReactNode;
  classNames?: string;
}

export const Tooltip: React.FC<IProps> = (props: IProps) => {
  const CustomToolTip: any = TipsyTooltip;

  return (
    <CustomToolTip
      title={props.content}
      position="top"
      trigger="mouseenter"
      arrow={true}
      className={classNames(props.classNames)}
    >
      {props.children}
    </CustomToolTip>
  );
};
