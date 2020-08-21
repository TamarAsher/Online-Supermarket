-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 21, 2020 at 03:30 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_supermarket`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `cart_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`cart_id`, `customer_id`, `date`, `active`) VALUES
(3, 2748473, '2020-07-08', 1),
(11, 1212789, '2020-07-10', 1),
(12, 5638882, '2020-07-10', 1),
(13, 653727, '2020-07-10', 1),
(14, 1111131, '2020-07-10', 1),
(15, 8783738, '2020-07-10', 1),
(16, 87798709, '2020-07-10', 1),
(18, 543210, '2020-07-11', 1),
(19, 778788, '2020-07-11', 1),
(20, 876888, '2020-07-11', 1),
(25, 343433, '2020-07-11', 0),
(26, 321222, '2020-07-12', 0),
(28, 7890765, '2020-07-19', 0),
(29, 7890765, '2020-07-19', 0),
(30, 343433, '2020-07-19', 1),
(31, 343433, '2020-07-19', 0),
(36, 7890765, '2020-07-19', 0),
(37, 7890765, '2020-07-20', 1),
(38, 7890765, '2020-07-20', 1),
(39, 343433, '2020-07-20', 1),
(40, 343433, '2020-07-20', 0),
(41, 343433, '2020-07-20', 1),
(42, 343433, '2020-07-20', 0),
(43, 343433, '2020-07-20', 1),
(44, 343433, '2020-07-20', 1),
(45, 343433, '2020-07-20', 0),
(46, 343433, '2020-07-20', 1),
(47, 343433, '2020-07-20', 0),
(48, 8374948, '2020-07-20', 1),
(49, 8374948, '2020-07-20', 1),
(50, 3343211, '2020-07-20', 1),
(51, 3343211, '2020-07-20', 1),
(52, 857657, '2020-07-21', 1),
(53, 857657, '2020-07-21', 1),
(54, 93838, '2020-07-21', 1),
(55, 93838, '2020-07-21', 1),
(56, 123211, '2020-07-21', 1),
(57, 123211, '2020-07-21', 1),
(58, 343433, '2020-07-22', 0),
(59, 343433, '2020-07-22', 0),
(60, 343433, '2020-07-22', 0),
(61, 343433, '2020-07-26', 0),
(62, 343433, '2020-07-26', 0),
(63, 343433, '2020-07-31', 0),
(64, 88778999, '2020-07-31', 0),
(65, 88778999, '2020-07-31', 1),
(66, 343433, '2020-08-01', 0),
(67, 88882093, '2020-08-02', 0),
(68, 121112334, '2020-08-02', 0),
(69, 343433, '2020-08-05', 0),
(70, 209314, '2020-08-13', 1),
(71, 343433, '2020-08-15', 0),
(72, 343433, '2020-08-15', 1),
(73, 208738385, '2020-08-19', 0);

-- --------------------------------------------------------

--
-- Table structure for table `cart_products`
--

CREATE TABLE `cart_products` (
  `cp_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `total_price` double NOT NULL,
  `cart_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cart_products`
--

INSERT INTO `cart_products` (`cp_id`, `product_id`, `amount`, `total_price`, `cart_id`) VALUES
(30, 2, 2, 2, 16),
(37, 1, 1, 0.5, 18),
(39, 3, 2, 4, 18),
(40, 5, 3, 9, 18),
(42, 3, 1, 2, 19),
(43, 4, 1, 1, 19),
(44, 4, 1, 1, 19),
(45, 5, 1, 3, 19),
(46, 2, 1, 1, 19),
(47, 1, 1, 0.5, 19),
(48, 1, 1, 0.5, 20),
(49, 1, 1, 0.5, 20),
(50, 2, 1, 1, 20),
(65, 2, 1, 1, 26),
(129, 2, 1, 1, 25),
(130, 1, 3, 1.5, 25),
(131, 4, 1, 1.5, 25),
(144, 1, 1, 0.7, 28),
(145, 2, 1, 1, 28),
(146, 3, 1, 3, 28),
(147, 1, 2, 1.4, 36),
(148, 2, 1, 1, 36),
(149, 3, 1, 3, 36),
(150, 2, 1, 1, 37),
(151, 1, 1, 0.7, 38),
(152, 16, 1, 3, 38),
(153, 17, 1, 2, 38),
(154, 18, 1, 4, 38),
(155, 3, 1, 3, 38),
(156, 4, 1, 1.5, 38),
(157, 8, 1, 2, 38),
(158, 7, 1, 2.5, 38),
(159, 1, 2, 1.4, 31),
(160, 2, 2, 2, 31),
(161, 3, 1, 3, 31),
(162, 7, 1, 2.5, 31),
(163, 6, 1, 3, 31),
(164, 1, 2, 1.4, 39),
(165, 2, 2, 2, 40),
(166, 1, 1, 0.7, 40),
(167, 3, 1, 3, 40),
(168, 2, 1, 1, 41),
(169, 1, 1, 0.7, 42),
(170, 2, 1, 1, 42),
(171, 1, 1, 0.7, 43),
(172, 2, 1, 1, 44),
(176, 2, 1, 1, 45),
(177, 1, 1, 0.7, 45),
(178, 3, 1, 3, 45),
(179, 2, 1, 1, 46),
(180, 1, 1, 0.7, 47),
(181, 1, 1, 0.7, 48),
(182, 2, 1, 1, 49),
(183, 1, 1, 0.7, 13),
(184, 2, 1, 1, 13),
(185, 1, 1, 0.7, 50),
(194, 2, 11, 11, 51),
(195, 3, 15, 45, 51),
(196, 4, 8, 12, 51),
(197, 1, 3, 2.0999999999999996, 51),
(198, 73, 1, 30, 51),
(199, 74, 1, 30, 51),
(200, 5, 1, 3, 51),
(201, 3, 1, 3, 52),
(202, 1, 1, 0.5, 53),
(203, 1, 1, 0.5, 54),
(204, 2, 1, 1, 55),
(205, 1, 1, 0.5, 56),
(206, 2, 1, 1, 57),
(207, 1, 2, 1, 15),
(209, 3, 1, 3, 15),
(210, 2, 1, 1, 15),
(211, 2, 1, 1, 47),
(212, 3, 1, 3, 47),
(213, 4, 1, 1.5, 47),
(214, 1, 2, 1, 58),
(215, 2, 2, 2, 58),
(216, 3, 2, 6, 58),
(217, 1, 1, 0.5, 59),
(218, 2, 1, 1, 59),
(219, 4, 1, 1.5, 60),
(220, 3, 1, 3, 60),
(221, 2, 1, 1, 60),
(222, 17, 1, 2, 60),
(223, 18, 1, 4, 60),
(224, 47, 1, 25, 60),
(225, 48, 2, 30, 60),
(226, 46, 1, 30, 60),
(227, 49, 2, 20, 60),
(231, 1, 1, 0.5, 61),
(232, 2, 1, 1, 61),
(233, 3, 1, 3, 61),
(241, 1, 2, 1, 62),
(242, 2, 1, 1, 62),
(243, 3, 1, 3, 62),
(244, 4, 1, 1.5, 62),
(245, 1, 1, 0.5, 63),
(246, 2, 2, 2, 63),
(247, 3, 2, 6, 63),
(248, 4, 1, 1.5, 63),
(249, 3, 4, 12, 64),
(250, 2, 4, 4, 64),
(251, 1, 4, 2, 64),
(252, 2, 3, 3, 65),
(253, 1, 2, 1, 65),
(254, 3, 1, 3, 65),
(255, 4, 1, 1.5, 65),
(256, 32, 1, 4, 65),
(257, 33, 1, 2.5, 65),
(258, 48, 1, 15, 65),
(259, 47, 1, 25, 65),
(261, 7, 2, 5, 63),
(267, 1, 2, 1, 67),
(268, 4, 2, 3, 67),
(269, 5, 1, 3, 67),
(270, 6, 1, 3, 67),
(271, 18, 2, 8, 67),
(272, 17, 2, 4, 67),
(273, 19, 1, 6, 67),
(274, 1, 1, 0.5, 68),
(275, 2, 1, 1, 68),
(276, 3, 1, 3, 68),
(277, 5, 1, 3, 68),
(278, 4, 1, 1.5, 68),
(282, 1, 1, 0.5, 66),
(283, 2, 1, 1, 66),
(284, 3, 2, 6, 66),
(285, 5, -2, -6, 66),
(286, 4, 1, 1.5, 66),
(287, 47, 2, 50, 69),
(288, 48, 1, 15, 69),
(289, 46, 1, 30, 69),
(290, 2, 1, 1, 70),
(291, 3, 1, 3, 70),
(292, 4, 1, 1.5, 70),
(293, 1, 1, 0.5, 71),
(294, 2, 1, 1, 71),
(295, 3, 2, 6, 71),
(296, 4, 1, 1.5, 71),
(297, 72, 1, 30, 71),
(298, 73, 1, 30, 71),
(299, 2, 1, 1, 72),
(300, 3, 1, 3, 72),
(301, 30, 1, 3.5, 73),
(302, 26, 1, 4, 73),
(303, 41, 1, 2.5, 73),
(304, 35, 1, 2.9, 73),
(305, 34, 5, 22.5, 73);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`) VALUES
(111, 'fruits_and_vegetables'),
(222, 'dairy_products_and_eggs'),
(333, 'bakery_and_bread'),
(444, 'meat_chicken_fish'),
(555, 'drinks_and_wine');

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `cityId` int(11) NOT NULL,
  `city_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`cityId`, `city_name`) VALUES
(1000, 'Jerusalem'),
(1200, 'Mevasseret-Zion'),
(1500, 'Beit-Shemesh'),
(1900, 'Yavne'),
(2000, 'Tel-Aviv'),
(2200, 'Petah-Tikva'),
(2500, 'Holon'),
(2900, 'Hadera'),
(3000, 'Rishon-Lezion'),
(3200, 'Carmiel'),
(3300, 'Yaffo'),
(3400, 'Tzfat'),
(4000, 'Haifa'),
(4800, 'Givataim'),
(4900, 'Nahariya'),
(5000, 'Ashdod'),
(5100, 'Ramat-Gan'),
(5300, 'Acko'),
(5400, 'Arad'),
(5900, 'Dimona'),
(6000, 'Beer-Sheva'),
(6500, 'Netivot'),
(7000, 'Baka-El-Garbia'),
(7200, 'Ashkelon'),
(7300, 'Bat-Yam'),
(7700, 'Bnei-Brak'),
(8000, 'Herzelia'),
(8200, 'Eilat'),
(9000, 'Natania');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `password` varchar(255) NOT NULL,
  `city` int(15) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `isManager` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`first_name`, `last_name`, `mail`, `customer_id`, `password`, `city`, `street`, `isManager`) VALUES
('Yuval', 'David', 'yuvald@walla.com', 93838, 'y123', 3200, 'Hayonim 11', 0),
('Manager', 'Tamar', 'manager@gmail.com', 111111, 'manager111', NULL, NULL, 1),
('Shira', 'Harush', 'shirah111@gmail.com', 123211, 's123', 1200, 'Ben Baba 12', 0),
('Yona', 'Vizel', 'yonav321@gmail.com', 172638, 'yona1', 2500, 'shmuel hanavi 2', 0),
('Tamar', 'Asher', 'tamara@knesset.gov.il', 209314, '123456t', 2000, 'Rotshild 1', 0),
('Eden', 'Ben Ishay', 'eden@gmail.com', 228819, 'eden123', 1200, 'Margalit 6', 0),
('Merav', 'Asher', 'merav@gmail.com', 321222, '123m', 1500, 'Ben Yohai 12', 0),
('Tamar', 'Asher', 'tamar2a2@gmail.com', 343433, '123', 1000, 'Haim yahil 8', 0),
('Omri', 'Dayan', 'omrid@gmail.com', 543210, 'ABCD123', 5100, 'Rothschild 5', 0),
('Lin', 'Bar', 'linb@walla.com', 653727, 'linb1', 7300, 'Sderot Hertzel 12', 0),
('Hila', 'Matok', 'hilam1231@walla.com', 778788, '12312h', 3000, 'Haaliya 56', 0),
('Roni', 'Shein', 'ronis@gmail.com', 857657, 'roni123', 4800, 'Yehuda hamakabi 12', 0),
('Yahel', 'Neeman', 'yahel321@gmail.com', 876888, 'yah123', 1000, 'Smuel Hanavi 13', 0),
('Yonatan', 'Morgan', 'yonatanm@gmail.com', 989997, 'y12345', 3400, 'Yehuda Hanasi', 0),
('Maya', 'Cohen', 'maya.cl@gmail.com', 1111131, 'Maya1', 2500, 'Hamania 28 ', 0),
('Coral', 'Zino', 'coral@gmail.com', 1212789, 'C123', 3000, 'Leib Yafe', 0),
('omri', 'shakshuka', 'omri@gmail.com', 2020299, '1111111', 3300, 'abulafia 321', 0),
('Hen', 'Ben-ishay', 'hen.b222@gmail.com', 2748473, 'hen123', 1500, 'hamevaser 45', 0),
('Merav', 'Levi', 'meravl@gmail.com', 3343211, 'Mm123', 7200, 'Eliezer Kaplan 8', 0),
('Amit', 'Mizrahi', 'amit.am130@gmail.com', 5638882, '123', 1500, 'Marvad Haksamim', 0),
('Bella', 'Hermosa', 'bella@gmail.com', 7890765, 'b123', 2500, 'bella street 22', 0),
('Lola', 'Shvartz', 'lola@knesset.gov.il', 8374948, 'l123l', 2500, 'lolita 56', 0),
('Amit', 'Svarovsky', 'amit245sd@walla.com', 8386244, '123456sd', 7700, 'Marvad Haksamim 5', 0),
('Roslun', 'Yakobovitz', 'roslany12@gmail.com', 8783738, 'ry1236', 6500, 'Harav Shmuel 13', 0),
('Varda ', 'Asher', 'vardaasher@gmail.com', 8789787, 'varda111', 1000, 'Leib Yafe 8', 0),
('Van ', 'Gogh', 'vango@gmail.com', 67849494, 'van1234', 3400, 'Van Gogh 11', 0),
('Michael', 'Malkoviz', 'michael234a4@walla.com', 87798709, '876543s', 7700, 'Leib Yafe 76', 0),
('Korin', 'Darmon', 'korind@walla.co.il', 88778999, 'k12345', 3000, 'Marvad Haksamim 9', 0),
('Tami', 'Bany', 'tamar222@gmail.com', 88882093, 't123', 3300, 'carmit 12', 0),
('abc', 'ABC', 'abc@gmail.com', 121112334, 'abcabc', 2000, 'abc 123', 0),
('Coral', 'Zino', 'coralzino2@gmail.com', 208738385, 'A1234567z', 1200, 'shimon swisa 60', 0);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `total_price` double NOT NULL,
  `city` int(11) NOT NULL,
  `street` varchar(255) NOT NULL,
  `shipping_date` date NOT NULL,
  `order_date` date NOT NULL,
  `credit_card` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `customer_id`, `cart_id`, `total_price`, `city`, `street`, `shipping_date`, `order_date`, `credit_card`) VALUES
(3, 5638882, 3, 45, 5300, 'mrvad', '2020-07-19', '2020-07-12', 1221),
(4, 1212789, 13, 111, 5000, 'leib yafe', '2020-07-19', '2020-07-14', 2222),
(5, 2748473, 12, 890, 7700, 'hakalanit', '2020-07-19', '2020-07-08', 9878),
(7, 343433, 25, 32.9, 1000, 'Haim yahil 8', '2020-07-22', '2020-07-19', 8787),
(8, 343433, 25, 4, 1000, 'Haim yahil 8', '2020-07-15', '2020-07-19', 4329),
(9, 343433, 25, 4, 1000, 'Haim yahil 8', '2020-07-28', '2020-07-19', 6664),
(10, 343433, 14, 669, 1000, 'hayafa ve hahaya 78', '2020-07-29', '2020-07-20', 8768),
(11, 7890765, 28, 4.7, 2500, 'bella street 22', '2020-07-20', '2020-07-19', 8080),
(12, 7890765, 36, 5.4, 2500, 'bella street 22', '2020-07-22', '2020-07-20', 8380),
(14, 343433, 31, 11.9, 1000, 'Haim yahil 8', '2020-07-08', '2020-07-20', 3033),
(15, 343433, 40, 5.7, 1000, 'Haim yahil 8', '2020-07-21', '2020-07-20', 9443),
(16, 343433, 42, 1.7, 1000, 'Haim yahil 8', '2020-07-21', '2020-07-20', 8444),
(17, 343433, 45, 4.7, 1000, 'Haim yahil 8', '2020-07-21', '2020-07-20', 4555),
(18, 343433, 47, 6.2, 1000, 'Haim yahil 8', '2020-07-22', '2020-07-22', 4444),
(19, 343433, 58, 9, 1000, 'Haim yahil 8', '2020-07-24', '2020-07-22', 9998),
(20, 343433, 59, 1.5, 1000, 'Haim yahil 8', '2020-07-23', '2020-07-22', 6477),
(21, 343433, 60, 116.5, 1000, 'Haim yahil 8', '2020-07-23', '2020-07-22', 9696),
(22, 343433, 61, 4.5, 1000, 'Haim yahil 8', '2020-07-23', '2020-07-26', 7777),
(23, 343433, 62, 6.5, 1000, 'Haim yahil 8', '2020-07-31', '2020-07-31', 8),
(24, 88778999, 64, 18, 3000, 'Marvad Haksamim 9', '2020-07-28', '2020-07-31', 7655),
(25, 343433, 63, 15, 1000, 'Haim yahil 8', '2020-07-27', '2020-08-01', 8333),
(26, 88882093, 67, 28, 3300, 'carmit 12', '2020-08-03', '2020-08-02', 8444),
(27, 121112334, 68, 9, 2000, 'abc 123', '2020-07-28', '2020-08-02', 8678),
(28, 343433, 66, 3, 1000, 'Haim yahil 8', '2020-08-13', '2020-08-04', 5325),
(29, 343433, 69, 95, 1000, 'Haim yahil 8', '2020-08-12', '2020-08-05', 5554),
(30, 343433, 71, 69, 1000, 'Haim yahil 8', '2020-08-07', '2020-08-15', 5559),
(31, 208738385, 73, 35.4, 1200, 'shimon swisa 60', '2020-08-14', '2020-08-19', 6864);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` double NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `category_id`, `price`, `img`) VALUES
(1, 'tomatoes', 111, 0.5, 'assets/images/1.jpg'),
(2, 'cucumbers', 111, 1, 'assets/images/2.jpg\r\n'),
(3, 'lemon', 111, 3, 'assets/images/3.jpeg\r\n\r\n'),
(4, 'apple', 111, 1.5, 'assets/images/4.jpeg\r\n'),
(5, 'pineapple', 111, 3, 'assets/images/5.jpg\r\n'),
(6, 'watermelon', 111, 3, 'assets/images/6.jpg\r\n'),
(7, 'lettuce', 111, 2.5, 'assets/images/7.jpg\r\n'),
(8, 'onion', 111, 2.5, 'assets/images/8.jpg\r\n'),
(9, 'garlic', 111, 1.5, 'assets/images/9.jpg\r\n'),
(10, 'Kiwi', 111, 2.5, 'assets/images/10.jpg\r\n'),
(11, 'mango', 111, 4.5, 'assets/images/11.jpg\r\n'),
(12, 'strawberry', 111, 3.5, 'assets/images/12.jpg\r\n'),
(13, 'orange', 111, 4, 'assets/images/13.jpg\r\n'),
(14, 'cabbage', 111, 3, 'assets/images/14.jpg\r\n'),
(15, 'eggplant', 111, 5, 'assets/images/15.jpg\r\n'),
(16, 'soy milk', 222, 3, 'assets/images/16.jfif'),
(17, 'milk', 222, 2, 'assets/images/17.jpg'),
(18, 'Yellow cheese', 222, 4, 'assets/images/18.jpg'),
(19, 'Bulgarian cheese', 222, 6, 'assets/images/19.jpg'),
(20, 'yogurt', 222, 2.5, 'assets/images/20.jpg'),
(21, 'Yolo chocolate pudding', 222, 1.5, 'assets/images/21.jpg'),
(22, 'Milky chocolate pudding', 222, 2.9, 'assets/images/22.jpg'),
(23, 'Cottage cheese', 222, 3.5, 'assets/images/23.jpg'),
(24, 'Cream cheese', 222, 2, 'assets/images/24.jpg'),
(25, 'eggs', 222, 3.9, 'assets/images/25.jpg'),
(26, 'Napoleon cream cheese', 222, 4, 'assets/images/26.jpg'),
(27, 'butter', 222, 2.5, 'assets/images/27.jpg'),
(28, 'margarine', 222, 2, 'assets/images/28.jpg'),
(29, 'Parmesan cheese', 222, 5.9, 'assets/images/29.jpg'),
(30, 'Cooking cream', 222, 3.5, 'assets/images/30.jpg'),
(31, 'sliced bread', 333, 3, 'assets/images/31.jpg\r\n'),
(32, 'Whole wheat bread', 333, 4, 'assets/images/32.jpg'),
(33, 'Pita', 333, 2.5, 'assets/images/33.jpg'),
(34, 'whole wheat flour pita', 333, 4.5, 'assets/images/34.jpg'),
(35, 'baguette', 333, 2.9, 'assets/images/35.jpg'),
(36, 'buns', 333, 2.9, 'assets/images/36.jpg'),
(37, 'challah', 333, 2.9, 'assets/images/37.jpg'),
(38, 'Chocolate croissant', 333, 1.9, 'assets/images/38.jpg'),
(39, 'Chocolate pastry', 333, 2, 'assets/images/39.jpg'),
(40, 'freez pizza', 333, 10, 'assets/images/40.jpg'),
(41, 'chocolate chip cookies', 333, 2.5, 'assets/images/41.jpeg'),
(42, 'donuts', 333, 2, 'assets/images/42.jpg'),
(43, 'bagels', 333, 2.9, 'assets/images/43.jpg'),
(44, 'hamburger bun', 333, 1.9, 'assets/images/44.jpg'),
(45, 'Cinnamon pastry', 333, 2.9, 'assets/images/45.jpg'),
(46, 'Lamb chops', 444, 30, 'assets/images/46.jpg\r\n'),
(47, 'Entrecote', 444, 25, 'assets/images/47.jpg\r\n'),
(48, 'Mince', 444, 15, 'assets/images/48.jpg\r\n'),
(49, 'chicken', 444, 10, 'assets/images/49.png\r\n'),
(50, 'Chicken Thighs', 444, 7, 'assets/images/50.jpg\r\n'),
(51, 'Chicken Breast', 444, 5, 'assets/images/51.jpg\r\n'),
(52, 'sausage', 444, 4.9, 'assets/images/52.jpg\r\n'),
(53, 'Foie gras', 444, 65, 'assets/images/53.jpg\r\n'),
(54, 'Salmon', 444, 20, 'assets/images/54.jpg\r\n'),
(55, 'Salmon fillet', 444, 25, 'assets/images/55.jpg\r\n'),
(56, 'Sea bream fillet', 444, 20, 'assets/images/56.jpg\r\n'),
(57, 'tuna fish', 444, 15, 'assets/images/57.jpg\r\n'),
(58, 'Red tuna', 444, 17.9, 'assets/images/58.jpg\r\n'),
(59, 'chicken hearts', 444, 25.9, 'assets/images/59.jpg\r\n'),
(60, 'Chicken wings', 444, 15.9, 'assets/images/60.jpg\r\n'),
(61, 'finlandia', 555, 30, 'assets/images/61.png'),
(62, 'Absolut Vodka', 555, 32, 'assets/images/62.jpg\r\n'),
(63, 'Barkan wine', 555, 20, 'assets/images/63.jpg\r\n'),
(64, 'Grey Goos vodka', 555, 32, 'assets/images/64.jpg\r\n'),
(65, 'Blagofe vodka', 555, 30, 'assets/images/65.jpg\r\n'),
(66, 'Heineken', 555, 5.9, 'assets/images/66.jpg\r\n'),
(67, 'Tubi', 555, 15, 'assets/images/67.jpg\r\n'),
(68, 'Beluga', 555, 35, 'assets/images/68.jpg\r\n'),
(69, 'Hermon red wine', 555, 15, 'assets/images/69.jpg\r\n'),
(70, 'Corona', 555, 12, 'assets/images/70.jpg\r\n'),
(71, 'Smirnoff', 555, 15, 'assets/images/71.png'),
(72, 'Van Gogh PINEAPPLE', 555, 30, 'assets/images/72.jpg\r\n'),
(73, 'Van Gogh COCONUT', 555, 30, 'assets/images/73.jpeg\r\n'),
(74, 'Van Gogh ACAI BLUEBERRY', 555, 30, 'assets/images/74.jpeg'),
(75, 'Van Gogh MELON', 555, 30, 'assets\\images\\75.jpg'),
(100, 'banana', 111, 2.5, 'uploads\\1596387844880.jpg'),
(101, 'purple Onion', 111, 1.5, 'uploads\\1596388597507.jpg'),
(102, 'Goose fillet', 444, 41, 'uploads\\1596388671400.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `cart_products`
--
ALTER TABLE `cart_products`
  ADD PRIMARY KEY (`cp_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `cart_id` (`cart_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`cityId`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`),
  ADD UNIQUE KEY `mail` (`mail`),
  ADD KEY `city` (`city`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `cart_id` (`cart_id`),
  ADD KEY `city` (`city`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `cart_products`
--
ALTER TABLE `cart_products`
  MODIFY `cp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=307;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=556;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

--
-- Constraints for table `cart_products`
--
ALTER TABLE `cart_products`
  ADD CONSTRAINT `cart_products_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`),
  ADD CONSTRAINT `cart_products_ibfk_2` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`cart_id`);

--
-- Constraints for table `customers`
--
ALTER TABLE `customers`
  ADD CONSTRAINT `customers_ibfk_1` FOREIGN KEY (`city`) REFERENCES `cities` (`cityId`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`cart_id`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`city`) REFERENCES `cities` (`cityId`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
