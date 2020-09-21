export interface HeaderComponent {
  typeId?: number;
  typeName?: string;
  [key: string]: any;
}

export interface MenuType {
  typeName: string;
  orderNumber: number;
  id: number;
  icon: number;
}
