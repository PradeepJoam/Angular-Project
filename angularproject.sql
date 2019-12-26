-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 25, 2019 at 10:19 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `angularproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `studentregister`
--

CREATE TABLE IF NOT EXISTS `studentregister` (
  `stId` int(10) NOT NULL AUTO_INCREMENT,
  `stFirstName` varchar(50) NOT NULL,
  `stLastName` varchar(50) NOT NULL,
  `stEmail` varchar(100) NOT NULL,
  `stPassword` varchar(50) NOT NULL,
  PRIMARY KEY (`stId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `studentregister`
--

INSERT INTO `studentregister` (`stId`, `stFirstName`, `stLastName`, `stEmail`, `stPassword`) VALUES
(3, 'manish', 'Joam', 'manish@gmail.com', '457896'),
(4, 'panakj', 'lksdf', 'test@gmail.com', '123456789');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
