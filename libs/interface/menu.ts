export interface MenuType {
  typeName: string;
  orderNumber: number;
  id: number;
  icon: number;
  parentId: number;
  children?: MenuType[];
}

export interface HeaderComponent {

}
