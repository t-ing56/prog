-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jul 04, 2021 at 03:28 PM
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
-- Dumping data for 