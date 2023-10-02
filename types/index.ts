export interface CustomButtonProps {
  title: string;
  btnType: 'button' | 'submit' | undefined;
  containerStyles?: string;
  rightIcon?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: (filter: number | string) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void
}
