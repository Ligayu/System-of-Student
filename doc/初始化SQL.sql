DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `sex` varchar(20) NOT NULL DEFAULT '男',
  `academy` varchar(400) NOT NULL DEFAULT '前端与移动开发学院',
  `introduce` varchar(1000) NOT NULL DEFAULT '暂无',
  `createTime` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO `user` VALUES ('1', '汤姆', '男', '前端与移动开发学院', '传智清流', '2019-05-12 22:39:40');
INSERT INTO `user` VALUES ('2', '杰瑞', '男', '前端与移动开发', '规规矩矩', '2019-05-12 22:39:45');
INSERT INTO `user` VALUES ('3', '西西弗的守望2', '男', '前端与移动开发', '规规矩矩', '2019-05-12 22:39:45');
INSERT INTO `user` VALUES ('4', '西西弗的守望3', '男', '前端与移动开发', '规规矩矩', '2019-05-12 22:39:45');
INSERT INTO `user` VALUES ('5', '西西弗的守望4', '男', '前端与移动开发', '规规矩矩', '2019-05-12 22:39:45');
INSERT INTO `user` VALUES ('6', '西西弗的守望5', '男', '前端与移动开发', '规规矩矩', '2019-05-12 22:39:45');
