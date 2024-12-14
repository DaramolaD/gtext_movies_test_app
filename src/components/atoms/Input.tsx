import React from 'react';

interface InputWithIconProps {
  placeholder?: string;
  icon?: React.ReactNode;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  placeholder = '',
  icon,
  type = 'text',
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={`flex items-center border rounded px-3 py-2 ${className}`}>
      {icon && <span className="mr-2 text-gray-500">{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 outline-none bg-transparent"
      />
    </div>
  );
};

export default InputWithIcon;
