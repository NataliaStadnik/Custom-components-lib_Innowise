export type Sizes = 'small' | 'medium' | 'large';

export type TwoSizes = Exclude<Sizes, 'large'>;

export type Variants = 'contained' | 'text' | 'outlined';

export type TextFieldVariants = 'outlined' | 'filled' | 'standart';

export type TextFieldTypes =
  | 'text'
  | 'password'
  | 'number'
  | 'search'
  | 'time'
  | 'month'
  | 'email'
  | 'date';

export interface CheckBoxCommon {
  label?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
  classes?: object;
  id?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}
