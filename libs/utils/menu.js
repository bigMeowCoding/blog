"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findMenuById(menuId, menuList) {
    return menuList.find((item) => {
        return item.id === menuId;
    });
}
exports.findMenuById = findMenuById;
function addSubmenu(menu, parentMenu) {
    parentMenu.children = parentMenu.children || [];
    const children = parentMenu.children;
    children.push(menu);
    return parentMenu;
}
exports.addSubmenu = addSubmenu;
function makeMenuTree(menuList) {
    const rootMenus = [];
    menuList.forEach((item) => {
        if (!item.parentId) {
            rootMenus.push(item);
        }
    });
    for (const menu of menuList) {
        if (menu.parentId) {
            const parentMenu = findMenuById(menu.parentId, menuList);
            addSubmenu(menu, parentMenu);
        }
    }
    return rootMenus;
}
exports.makeMenuTree = makeMenuTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxTQUFnQixZQUFZLENBQUMsTUFBYyxFQUFFLFFBQW9CO0lBQy9ELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQzVCLE9BQU8sSUFBSSxDQUFDLEVBQUUsS0FBSyxNQUFNLENBQUM7SUFDNUIsQ0FBQyxDQUFhLENBQUM7QUFDakIsQ0FBQztBQUpELG9DQUlDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLElBQWMsRUFBRSxVQUFvQjtJQUM3RCxVQUFVLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO0lBQ2hELE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7SUFDckMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDO0FBTEQsZ0NBS0M7QUFFRCxTQUFnQixZQUFZLENBQUMsUUFBb0I7SUFDL0MsTUFBTSxTQUFTLEdBQWUsRUFBRSxDQUFDO0lBQ2pDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxLQUFLLE1BQU0sSUFBSSxJQUFJLFFBQVEsRUFBRTtRQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekQsVUFBVSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztTQUM5QjtLQUNGO0lBRUQsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQztBQWZELG9DQWVDIn0=