-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 22 Lut 2021, 20:06
-- Wersja serwera: 10.4.17-MariaDB
-- Wersja PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `wydatki`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `miesiace`
--

CREATE TABLE `miesiace` (
  `miesiac_id` int(11) NOT NULL,
  `nazwa` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `miesiace`
--

INSERT INTO `miesiace` (`miesiac_id`, `nazwa`) VALUES
(1, 'styczen'),
(2, 'luty'),
(3, 'marzec'),
(4, 'kwiecien'),
(5, 'maj'),
(6, 'czerwiec'),
(7, 'lipiec'),
(8, 'sierpien'),
(9, 'wrzesien'),
(10, 'pazdziernik'),
(11, 'listopad'),
(12, 'grudzien');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `miesiace`
--
ALTER TABLE `miesiace`
  ADD PRIMARY KEY (`miesiac_id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `miesiace`
--
ALTER TABLE `miesiace`
  MODIFY `miesiac_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
