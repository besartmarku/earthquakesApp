export interface SearchInputProps {
  placeholder: string;
  buttonTitle: string;
  type: string;
  onSearch: (type: string, arg1?: string) => void;
}

export interface ListItemProps {
  id: string;
  place: string;
  mag: number;
  magType: string;
}
