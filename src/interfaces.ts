export type Sizes = 'small' | 'medium' | 'large';

export type TwoSizes = Exclude<Sizes, 'large'>;

export type Variants = 'contained' | 'text' | 'outlined';

export interface CheckBoxCommon {
  label?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}
