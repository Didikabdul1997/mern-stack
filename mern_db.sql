/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100334
 Source Host           : localhost:3306
 Source Schema         : mern_db

 Target Server Type    : MySQL
 Target Server Version : 100334
 File Encoding         : 65001

 Date: 20/04/2022 05:21:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `price` double(10, 2) NULL DEFAULT NULL,
  `createdAt` date NULL DEFAULT NULL,
  `updatedAt` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (2, 'Product 2', 87676.00, '2022-04-19', '2022-04-19');
INSERT INTO `products` VALUES (5, 'title', 44.00, '2022-04-19', '2022-04-19');
INSERT INTO `products` VALUES (6, 'didik', 9797.00, '2022-04-19', '2022-04-19');

SET FOREIGN_KEY_CHECKS = 1;
