interface Props {
  /** ボタンの文言 */
  label: string;
  /** 非活性にするか */
  disabled?: boolean;
  /** ボタンのサイズ */
  size?: "small" | "medium" | "large";
  /** ボタンの色 */
  color?: "blue" | "red" | "green" | "gray";
  /** クリックイベント */
  onClick: () => void;
}

export const CustomButton: React.FC<Props> = ({
    label,
    disabled = false,
    size = "medium",
    color = "blue",
    onClick
}: Props) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };
  const colorClasses = {
    blue: "enabled:bg-blue-400 enabled:hover:bg-blue-300",
    red: "enabled:bg-red-400 enabled:hover:bg-red-300",
    green: "enabled:bg-green-400 enabled:hover:bg-green-300",
    gray: "enabled:bg-gray-400 enabled:hover:bg-gray-300",
  };

  const sizeClass = sizeClasses[size];
  const colorClass = colorClasses[color];

  return (
    <button 
      className={`${sizeClass} ${colorClass} disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded`}
      disabled={disabled}
      onClick={onClick}
    >
      { label }
    </button>
  )
}
