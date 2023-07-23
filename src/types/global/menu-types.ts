export interface IMenu {
  key: string;
  label: string;
  path: string;
  icon: React.ReactNode;
  children?: IMenu[];
}
