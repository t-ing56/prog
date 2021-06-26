-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- ホスト: localhost:8889
-- 生成日時: 2021 年 6 月 26 日 14:28
-- サーバのバージョン： 5.7.32
-- PHP のバージョン: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- データベース: `a_db`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `a_table`
--

CREATE TABLE `a_table` (
  `id` int(12) NOT NULL,
  `name` varchar(16) NOT NULL,
  `email` varchar(64) NOT NULL,
  `naiyou` text NOT NULL,
  `indate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `a_table`
--

INSERT INTO `a_table` (`id`, `name`, `email`, `naiyou`, `indate`) VALUES
(1, '就職キャンプ1', 'test1@test.test', 'テスト1', '2015-06-15 00:00:00'),
(2, '就職キャンプ2', 'test2@test.test', 'テスト2', '2021-06-20 16:36:59'),
(3, '就職キャンプ3', 'test1@test.test', 'テスト1', '2015-06-15 00:00:00'),
(4, '就職キャンプ4', 'test2@test.test', 'テスト2', '2021-06-20 16:43:45'),
(5, 'ttt', 'rdsfa', 'ooooo', '2021-06-20 17:27:10'),
(8, 'hhooo', 'fdsfa', 'rererew', '2021-06-20 17:44:02');

-- --------------------------------------------------------

--
-- テーブルの構造 `study_table`
--

CREATE TABLE `study_table` (
  `id` int(12) NOT NULL,
  `日付` date NOT NULL,
  `学習言語` varchar(32) NOT NULL,
  `学習時間（分）` int(11) NOT NULL,
  `振り返り` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- テーブルの構造 `travel_table`
--

CREATE TABLE `travel_table` (
  `id` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `place` varchar(64) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `lat` float NOT NULL,
  `lng` float NOT NULL,
  `score` int(3) DEFAULT NULL,
  `impression` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- テーブルのデータのダンプ `travel_table`
--

INSERT INTO `travel_table` (`id`, `name`, `place`, `date`, `address`, `lat`, `lng`, `score`, `impression`) VALUES
(1, 'test', 'test', '2021-06-01', 'test', 0, 0, 10, 'test'),
(2, '田中', '箱根', '2020-12-15', '神奈川県足柄下郡箱根町湯本６５７', 35.2323, 139.107, 7, 'いいゆだった'),
(3, 'takuya', '仙台', '2021-06-10', '宮城県仙台市青葉区中央１丁目１０−１０', 38.2602, 140.88, 10, 'rwrwe'),
(4, 'takuya', '札幌', '2021-06-03', '北海道札幌市北区北６条西４丁目', 43.0686, 141.351, 8, '楽しかった');

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `a_table`
--
ALTER TABLE `a_table`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `study_table`
--
ALTER TABLE `study_table`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `travel_table`
--
ALTER TABLE `travel_table`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `a_table`
--
ALTER TABLE `a_table`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- テーブルの AUTO_INCREMENT `study_table`
--
ALTER TABLE `study_table`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT;

--
-- テーブルの AUTO_INCREMENT `travel_table`
--
ALTER TABLE `travel_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
