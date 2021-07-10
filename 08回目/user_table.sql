-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 09, 2021 at 11:58 PM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `a_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

CREATE TABLE `user_table` (
  `id` int(12) NOT NULL,
  `lid` varchar(32) NOT NULL,
  `lpw` varchar(32) NOT NULL,
  `name` varchar(16) NOT NULL,
  `u_address` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`id`, `lid`, `lpw`, `name`, `u_address`, `email`) VALUES
(1, 'tanaka', 'tanakapw', '田中一郎', '東京都杉並区', 'test@gmail.com'),
(2, 'satou', 'satoupw', '佐藤太郎', '東京都練馬区', 'test2@gmail.com'),
(3, 'yamada', 'yamadapw', '山田雄一', '京都府京都市', 'test3@gmail.com'),
(4, 'ohta', 'ohtapw', '太田雄介', '神奈川県厚木市', 'test4@gmail.com'),
(5, 'ohno', 'ohnopw', '大野智', '茨城県土浦市', '0'),
(6, 'sakurai', 'sakuraipw', '櫻井翔', '新潟県新潟市', 'sakurai@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_table`
--
ALTER TABLE `user_table`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
