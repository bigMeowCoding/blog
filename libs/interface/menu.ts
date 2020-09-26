export interface MenuType {
  typeName: string;
  orderNumber: number;
  id: number;
  icon: number;
  parentId: number;
}

export interface HeaderComponent {
  typeId?: number;
  typeName?: string;
  [key: string]: any;
}
