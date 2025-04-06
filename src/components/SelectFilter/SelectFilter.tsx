import { ChangeEvent, memo, useMemo } from 'react';

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const SelectFilter = memo((props: SelectProps) => {
  const { options, value, onChange } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.content}
        </option>
      )),
    [options],
  );

  return (
    <div>
      <select
        style={{
          padding: '5px',
          borderRadius: '5px',
        }}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
