-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-09-2022 a las 15:49:01
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `parqueaderofdj`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `idAdmin` bigint(20) NOT NULL,
  `nombre` varchar(59) DEFAULT NULL,
  `documento` bigint(20) DEFAULT NULL,
  `telefono` bigint(20) DEFAULT NULL,
  `correo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`idAdmin`, `nombre`, `documento`, `telefono`, `correo`) VALUES
(1, 'daniel', 1005090349, 3003764571, 'ospinaortizjuandaniel351@gmail.com'),
(2, 'tulio', 1234098756, 3214567890, 'tulito@gmail.com'),
(3, 'eustakio', 1200098756, 3211244890, 'eukkk@gmail.com'),
(4, 'javier', 6983465, 3213337890, 'chupeta@gmail.com'),
(5, 'roberto', 12998877, 3209125890, 'robertico@gmail.com'),
(6, 'jacinto', 1698325, 3233337220, 'jcnt@gmail.com'),
(7, 'elver', 26983465, 3217617187, 'elvergomez@gmail.com'),
(8, 'espamfilo', 466465, 3217877492, 'espam@gmail.com'),
(9, 'clementino', 69000065, 3001122333, 'clemente@gmail.com'),
(10, 'mati', 11909465, 3057672211, 'mate95@gmail.com'),
(11, 'johan', 9183491, 3019879988, 'lloanzith0@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estacionamiento`
--

CREATE TABLE `estacionamiento` (
  `idEstacio` bigint(20) NOT NULL,
  `idVehi1` bigint(20) DEFAULT NULL,
  `idUser2` bigint(20) DEFAULT NULL,
  `hora_llegada` time DEFAULT NULL,
  `hora_salida` time DEFAULT NULL,
  `numero_asignado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estacionamiento`
--

INSERT INTO `estacionamiento` (`idEstacio`, `idVehi1`, `idUser2`, `hora_llegada`, `hora_salida`, `numero_asignado`) VALUES
(1, 1, 1, '16:36:47', '17:36:47', 34),
(11, 2, 4, '05:11:21', '09:11:21', 67),
(13, 3, 3, '07:07:40', '10:07:40', 44),
(14, 4, 2, '11:07:40', '12:07:40', 14),
(16, 5, 5, '06:11:21', '08:11:21', 33);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `factura`
--

CREATE TABLE `factura` (
  `idVehi3` bigint(20) DEFAULT NULL,
  `idEstacio3` bigint(20) DEFAULT NULL,
  `valor` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `factura`
--

INSERT INTO `factura` (`idVehi3`, `idEstacio3`, `valor`) VALUES
(1, 1, 7500),
(2, 11, 72000),
(3, 13, 24000),
(4, 14, 16000),
(4, 16, 24000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_vehiculo`
--

CREATE TABLE `tipo_vehiculo` (
  `idVehi2` bigint(20) DEFAULT NULL,
  `idEstacio2` bigint(20) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `valor` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipo_vehiculo`
--

INSERT INTO `tipo_vehiculo` (`idVehi2`, `idEstacio2`, `descripcion`, `valor`) VALUES
(1, 1, 'Ferrari estacionado en la zona 34', 7500),
(2, 11, 'Mercedes benz zona 14', 72000),
(3, 13, 'zona 44', 8000),
(4, 16, 'zona 33', 5000),
(5, 16, 'zona 33', 6000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idUser` bigint(20) NOT NULL,
  `idAdmin1` bigint(20) DEFAULT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `telefono` bigint(20) DEFAULT NULL,
  `hora_llegada` time DEFAULT NULL,
  `hora_salida` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idUser`, `idAdmin1`, `nombre`, `telefono`, `hora_llegada`, `hora_salida`) VALUES
(1, 1, 'Javier', 664523, '11:34:36', '17:34:36'),
(2, 1, 'paco', 3210987654, '15:04:11', '16:00:11'),
(3, 1, 'antonio', 3201987654, '15:09:11', '04:00:00'),
(4, 1, 'leonardo', 3221109988, '15:52:11', '17:00:00'),
(5, 1, 'jhonny', 3008171615, '20:09:11', '21:08:13');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculo`
--

CREATE TABLE `vehiculo` (
  `idVehi` bigint(20) NOT NULL,
  `idEstacio1` bigint(20) DEFAULT NULL,
  `placa` text DEFAULT NULL,
  `tipo_vehiculo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vehiculo`
--

INSERT INTO `vehiculo` (`idVehi`, `idEstacio1`, `placa`, `tipo_vehiculo`) VALUES
(1, 1, 'E-022', 'carro'),
(2, 11, 'ERR-987', 'moto'),
(3, 14, 'B-02', 'Moto'),
(4, 16, 'A-23', 'Carro'),
(5, 13, 'C-772', 'Camioneta\r\n');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`idAdmin`);

--
-- Indices de la tabla `estacionamiento`
--
ALTER TABLE `estacionamiento`
  ADD PRIMARY KEY (`idEstacio`),
  ADD KEY `fkEstaUser` (`idUser2`);

--
-- Indices de la tabla `factura`
--
ALTER TABLE `factura`
  ADD KEY `fkFactVehi` (`idVehi3`),
  ADD KEY `fkFactEsta` (`idEstacio3`);

--
-- Indices de la tabla `tipo_vehiculo`
--
ALTER TABLE `tipo_vehiculo`
  ADD KEY `fkTipVehi` (`idVehi2`),
  ADD KEY `fkTipEst` (`idEstacio2`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`),
  ADD KEY `fkUserAdmin` (`idAdmin1`);

--
-- Indices de la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  ADD PRIMARY KEY (`idVehi`),
  ADD KEY `fkVehiEstac` (`idEstacio1`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `estacionamiento`
--
ALTER TABLE `estacionamiento`
  ADD CONSTRAINT `fkEstaUser` FOREIGN KEY (`idUser2`) REFERENCES `users` (`idUser`);

--
-- Filtros para la tabla `factura`
--
ALTER TABLE `factura`
  ADD CONSTRAINT `fkFactEsta` FOREIGN KEY (`idEstacio3`) REFERENCES `estacionamiento` (`idEstacio`),
  ADD CONSTRAINT `fkFactVehi` FOREIGN KEY (`idVehi3`) REFERENCES `vehiculo` (`idVehi`);

--
-- Filtros para la tabla `tipo_vehiculo`
--
ALTER TABLE `tipo_vehiculo`
  ADD CONSTRAINT `fkTipEst` FOREIGN KEY (`idEstacio2`) REFERENCES `estacionamiento` (`idEstacio`),
  ADD CONSTRAINT `fkTipVehi` FOREIGN KEY (`idVehi2`) REFERENCES `vehiculo` (`idVehi`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fkUserAdmin` FOREIGN KEY (`idAdmin1`) REFERENCES `admin` (`idAdmin`);

--
-- Filtros para la tabla `vehiculo`
--
ALTER TABLE `vehiculo`
  ADD CONSTRAINT `fkVehiEstac` FOREIGN KEY (`idEstacio1`) REFERENCES `estacionamiento` (`idEstacio`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
