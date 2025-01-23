export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface IFdColumn {
  key: string;
  title: string;
  width: string;
  custom?: boolean;
  showModes?: ('edit' | 'read')[];
}
