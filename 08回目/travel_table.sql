-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 09, 2021 at 11:59 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `a_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `travel_table`
--

CREATE TABLE `travel_table` (
  `id` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `place` varchar(64) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `score` int(3) DEFAULT NULL,
  `impression` text,
  `fname` varchar(128) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `travel_table`
--

INSERT INTO `travel_table` (`id`, `name`, `place`, `date`, `address`, `score`, `impression`, `fname`) VALUES
(2, '田中一郎', '箱根', '2020-12-15', '神奈川県足柄下郡箱根町湯本６５７', 0, '0', 'hakone.jpeg'),
(4, '山田雄一', '札幌', '2021-06-03', '北海道札幌市北区北６条西４丁目', 8, '楽しかった', 'sapporo.jpeg'),
(5, '太田雄介', '金沢', '2021-07-03', '石川県金沢市木ノ新保町1番1号', 7, '綺麗だった。', 'kanazawa.jpeg'),
(17, '佐藤太郎', '宮崎', '2020-07-30', ' 宮崎県宮崎市錦町１', 8, '食べ物が美味しかった', 'miyazaki.jpeg'),
(18, '田中一郎', '広島', '2021-07-08', '広島県廿日市市宮島町', 8, '厳しやかだった。', 'hirosima.jpeg'),
(19, '大野智', '沖縄', '2021-07-09', '沖縄県那覇市', 10, 'すごく楽しかった', 'okinawa.jpeg'),
(20, '大野智', '白川郷', '2021-01-09', '岐阜県白川村', 10, '落ち着くところだった', 'sirakawagou.jpeg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `travel_table`
--
ALTER TABLE `travel_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `travel_table`
--
ALTER TABLE `travel_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
