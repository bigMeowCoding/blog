/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : react_blog

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 09/10/2020 20:29:43
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
BEGIN;
INSERT INTO `admin_user` VALUES ('zyj', '123', 1);
INSERT INTO `admin_user` VALUES ('jwf', '111', 2);
INSERT INTO `admin_user` VALUES ('1', '1', 3);
COMMIT;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `type_id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `article_content` text NOT NULL,
  `introduce` text,
  `addTime` int DEFAULT NULL,
  `view_count` int NOT NULL DEFAULT '0',
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of article
-- ----------------------------
BEGIN;
INSERT INTO `article` VALUES (1, '22', '23', '23', 1598889600, 1067, 9);
INSERT INTO `article` VALUES (1, 'sdfsd', '\nsdfsdf\n<img src=\'/assets/images/a.png\' width=200 height=100>\n\nsdfsd', 'sdfsdf', 1602172800, 1005, 10);
COMMIT;

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `typeName` varchar(255) NOT NULL,
  `orderNumber` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `icon` int DEFAULT '1',
  `parentId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of type
-- ----------------------------
BEGIN;
INSERT INTO `type` VALUES ('前端', 1, 1, 1, NULL);
INSERT INTO `type` VALUES ('算法', 2, 2, 2, 5);
INSERT INTO `type` VALUES ('前端工具', 3, 3, 3, 1);
INSERT INTO `type` VALUES ('刷LeetCode', 1, 4, 1, 2);
INSERT INTO `type` VALUES ('计算机基础', 4, 5, 1, NULL);
INSERT INTO `type` VALUES ('计算机网络', 1, 6, 1, 5);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
