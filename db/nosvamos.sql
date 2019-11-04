-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 04-Nov-2019 às 18:20
-- Versão do servidor: 10.1.40-MariaDB
-- versão do PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nosvamos`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `audio`
--

CREATE TABLE `audio` (
  `id_audio` int(11) NOT NULL,
  `url_audio` varchar(255) NOT NULL,
  `id_etapa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `endereco`
--

CREATE TABLE `endereco` (
  `ID_END` int(11) NOT NULL,
  `LOGRA_END` varchar(40) DEFAULT NULL,
  `CIDADE_END` varchar(30) DEFAULT NULL,
  `NUMERO_END` varchar(30) DEFAULT NULL,
  `UF_END` varchar(10) DEFAULT NULL,
  `CEP_END` varchar(5) DEFAULT NULL,
  `BAIRRO_END` varchar(15) DEFAULT NULL,
  `ID_RESP` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `endereco`
--

INSERT INTO `endereco` (`ID_END`, `LOGRA_END`, `CIDADE_END`, `NUMERO_END`, `UF_END`, `CEP_END`, `BAIRRO_END`, `ID_RESP`) VALUES
(2, 'Avenida Lins de Vasconcelos', 'São Paulo', '1222', 'SP', '07244', 'Vila Mariana', 1),
(5, 'Rua Felicio Geronazo', 'Guarulhos', '108', 'São Paulo ', '07033', 'Ponte Grande', 23),
(6, 'Avenida Lins de Vasconcelos', 'São Paulo', '1222', 'SP', '07244', 'Vila Mariana', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `etapa`
--

CREATE TABLE `etapa` (
  `ID_ETAPA` int(11) NOT NULL,
  `id_end_origem` int(11) NOT NULL,
  `id_end_destino` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `foto`
--

CREATE TABLE `foto` (
  `id_foto` int(11) NOT NULL,
  `nome_foto` varchar(45) NOT NULL,
  `ft_foto` varchar(255) NOT NULL,
  `id_etapa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `pcd`
--

CREATE TABLE `pcd` (
  `ID_PCD` int(11) NOT NULL,
  `NOME_PCD` varchar(40) DEFAULT NULL,
  `NASCIMENTO_PCD` varchar(15) DEFAULT NULL,
  `RG_PCD` varchar(15) DEFAULT NULL,
  `TIPO_DEFICIENCIA` varchar(20) DEFAULT NULL,
  `TELEFONE_PCD` varchar(15) DEFAULT NULL,
  `ID_RESP` int(11) DEFAULT NULL,
  `senha_pcd` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `pcd`
--

INSERT INTO `pcd` (`ID_PCD`, `NOME_PCD`, `NASCIMENTO_PCD`, `RG_PCD`, `TIPO_DEFICIENCIA`, `TELEFONE_PCD`, `ID_RESP`, `senha_pcd`) VALUES
(1, 'Fernandinho', '12345678999', 'fernandolaurino', 'Rua Felicio Geronazo', '654321', 12, ''),
(8, 'FernandoPCDteste', '123456', '789456', '', '', NULL, ''),
(9, 'FernandoDeficiente', '27/06/01', '59868539X', 'Leve', '11949723063', 19, ''),
(10, 'FernandoPCD', '251634456456', '123456', 'Leve', '65456654', 15, '123456'),
(11, 'FernandoFilho', 'datadoFilho', 'rgFilho', 'Leve', '456564456456', 1, '123456'),
(12, '465', '465456', '645465', 'Leve', '4', 23, '56465'),
(13, 'sad', 'dasd', 'asdaasd', 'Leve', 'asd', 20, 'aasd'),
(14, 'filhoDoFernando', '27/06/2201', '59868539X', 'Moderada', '11949723063', 1, '123456');

-- --------------------------------------------------------

--
-- Estrutura da tabela `responsavel`
--

CREATE TABLE `responsavel` (
  `ID_RESP` int(11) NOT NULL,
  `NOME_RESP` varchar(40) DEFAULT NULL,
  `FOTO_RESP` varchar(255) NOT NULL,
  `CPF_RESP` varchar(11) DEFAULT NULL,
  `EMAIL_RESP` varchar(40) DEFAULT NULL,
  `ENDERECO_RESP` varchar(70) DEFAULT NULL,
  `SENHA_RESP` varchar(10) DEFAULT NULL,
  `TEL1_RESP` varchar(15) DEFAULT NULL,
  `TEL2_RESP` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `responsavel`
--

INSERT INTO `responsavel` (`ID_RESP`, `NOME_RESP`, `FOTO_RESP`, `CPF_RESP`, `EMAIL_RESP`, `ENDERECO_RESP`, `SENHA_RESP`, `TEL1_RESP`, `TEL2_RESP`) VALUES
(1, 'FernandoLau', '', '49090439854', 'fernandolaurino28@gmail.com', 'Rua Artur de Azevedo, 1217', '123456', '11949723063', '11949723063'),
(2, 'Fernandinho', '', '12345678999', 'fernandolaurino10@hotmail.com', 'Rua Felicio Geronazo, 108', '654321', '43072145', '43072145'),
(3, '', '', '', NULL, '', '', '', ''),
(4, '', '', '', NULL, '', '', '', ''),
(5, '', '', '', NULL, '', '', '', ''),
(6, '', '', '', NULL, '', '', '', ''),
(7, '', '', '', NULL, '', '', '', ''),
(8, '456', '', '564645', NULL, '6456', 'sadas', '4565', '4654'),
(9, 'CadastroPeloApp', '', 'CpfPeloApp', NULL, 'EnderecoPeloApp', 'SENHAeloAp', 'Telefone1PeloAp', 'Telefone2eloApp'),
(10, 'maisum', '', 'naieknsa', 'k', 'k', 'jlk', 'jlk', 'jlk'),
(11, 'Responsavel com PCD', '', 'CPF do pai', 'cep paikkkk', 'endereco', 'senha', 'telefone do pai', 'outro telefone '),
(12, 'Sara', '', '49090439854', '07033040', 'Rua das dores, 0', 'çdkljaksjd', '1111111111', '1111111111'),
(13, 'Fernandinho', '', '12345678999', 'fernandolaurino10@hotmail.com', 'Rua Felicio Geronazo, 108', '654321', '43072145', '43072145'),
(14, '4565', '', '46465', '456', '45', '6456', '654', '645'),
(15, '456546', '', '123456', '446456', '465', '465645', '456', '645'),
(16, 'Fernando', '', '123456', '07033040', '455665', '6456', '465645', '46645'),
(17, 'FernandoResp', '', '123456789', '654465', '465465', '465654', '456645', '645'),
(18, 'FernandoResp', '', '465789', '654465', '465', '465', '465', '456'),
(19, 'FernandoPCDALKHDJSASKJL', '', '456', 'asdas', '654', '564554', '46', '464'),
(20, '', '', '', '', '', '', '', ''),
(21, 'Fe45654', '', '123456', '465564', '645', '123456', '65', '65445'),
(22, 'Fernando de Oliveira Laurino', '', '49090439854', '07033040', 'Rua Felicio Geronazo', '123456', '11949723063', '43072145'),
(23, '456456', '', '456645', '645654', '654', '654546', '6456', '45456'),
(24, '4654', '', '456', '4', '4', '456', '465', '54645'),
(25, '', '', '', '', '', '', '', ''),
(26, '', '', '', '', '', '', '', ''),
(27, '', '', '', '', '', '', '', ''),
(28, '58285', '', '85285', '28528', '5285', '8252285', '285', '285'),
(29, '58285', '', '85285', '28528', '5285', '8252285', '285', '285');

-- --------------------------------------------------------

--
-- Estrutura da tabela `trajeto`
--

CREATE TABLE `trajeto` (
  `nome_trajeto` varchar(45) NOT NULL,
  `id_end_origem` int(11) NOT NULL,
  `id_end_destino` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audio`
--
ALTER TABLE `audio`
  ADD PRIMARY KEY (`id_audio`),
  ADD KEY `id_etapa` (`id_etapa`);

--
-- Indexes for table `endereco`
--
ALTER TABLE `endereco`
  ADD PRIMARY KEY (`ID_END`),
  ADD KEY `ID_RESP` (`ID_RESP`);

--
-- Indexes for table `etapa`
--
ALTER TABLE `etapa`
  ADD PRIMARY KEY (`ID_ETAPA`),
  ADD KEY `id_end_origem` (`id_end_origem`,`id_end_destino`);

--
-- Indexes for table `foto`
--
ALTER TABLE `foto`
  ADD PRIMARY KEY (`id_foto`),
  ADD KEY `id_etapa` (`id_etapa`);

--
-- Indexes for table `pcd`
--
ALTER TABLE `pcd`
  ADD PRIMARY KEY (`ID_PCD`),
  ADD KEY `ID_RESP` (`ID_RESP`);

--
-- Indexes for table `responsavel`
--
ALTER TABLE `responsavel`
  ADD PRIMARY KEY (`ID_RESP`);

--
-- Indexes for table `trajeto`
--
ALTER TABLE `trajeto`
  ADD PRIMARY KEY (`id_end_origem`,`id_end_destino`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `endereco`
--
ALTER TABLE `endereco`
  MODIFY `ID_END` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pcd`
--
ALTER TABLE `pcd`
  MODIFY `ID_PCD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `responsavel`
--
ALTER TABLE `responsavel`
  MODIFY `ID_RESP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `audio`
--
ALTER TABLE `audio`
  ADD CONSTRAINT `audio_ibfk_1` FOREIGN KEY (`id_etapa`) REFERENCES `etapa` (`ID_ETAPA`);

--
-- Limitadores para a tabela `endereco`
--
ALTER TABLE `endereco`
  ADD CONSTRAINT `endereco_ibfk_1` FOREIGN KEY (`ID_RESP`) REFERENCES `responsavel` (`ID_RESP`);

--
-- Limitadores para a tabela `etapa`
--
ALTER TABLE `etapa`
  ADD CONSTRAINT `etapa_ibfk_1` FOREIGN KEY (`id_end_origem`,`id_end_destino`) REFERENCES `trajeto` (`id_end_origem`, `id_end_destino`);

--
-- Limitadores para a tabela `foto`
--
ALTER TABLE `foto`
  ADD CONSTRAINT `foto_ibfk_1` FOREIGN KEY (`id_etapa`) REFERENCES `etapa` (`ID_ETAPA`);

--
-- Limitadores para a tabela `pcd`
--
ALTER TABLE `pcd`
  ADD CONSTRAINT `pcd_ibfk_1` FOREIGN KEY (`ID_RESP`) REFERENCES `responsavel` (`ID_RESP`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
