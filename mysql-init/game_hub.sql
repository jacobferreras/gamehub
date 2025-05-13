-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: May 13, 2025 at 07:40 AM
-- Server version: 5.7.44
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `game_hub`
--

-- --------------------------------------------------------

--
-- Table structure for table `dota2_article`
--

CREATE TABLE `dota2_article` (
  `type` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `article_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dota2_article`
--

INSERT INTO `dota2_article` (`type`, `title`, `description`, `date`, `author`, `image`, `id`, `article_url`, `created_at`, `updated_at`) VALUES
('news', 'BLAST announce BLAST Slam IV will be hosted live in Singapore in November', 'BLAST Slam IV will be the first Dota 2 tournament to be hosted in the Singapore since The International 2022. ', 'May 11, 2025', 'Kurt \"Gosu_Kurt\" Lozano', 'https://static.gosugamers.net/55/ee/90/4a94fba8dad2660c39b0173bf371d0fad97db67649d1e05289d7e88371.webp?w=1600', 1, 'https://www.gosugamers.net/dota2/news/74957-blast-announce-blast-slam-iv-will-be-hosted-live-in-singapore-in-november', '2025-05-12 00:41:49', '2025-05-12 00:41:49'),
('news', 'MOUZ unveils new Dota 2 roster headlined by Seleri and Abed', 'MOUZ will be looking to make its mark in Dota 2 once again with an international roster captained by three-time Major champion Seleri.', 'May 9, 2025', 'Sarah \"KZ\" Zulkiflee', 'https://static.gosugamers.net/81/ea/7e/e1ae0be898903d19e9ac1acfef776653c726a45f01c4f95b463d6c1d40.webp?w=1600', 2, 'https://www.gosugamers.net/dota2/news/74943-mouz-unveils-new-dota-2-roster-headlined-by-seleri-and-abed', '2025-05-12 00:44:19', '2025-05-12 00:44:19');

-- --------------------------------------------------------

--
-- Table structure for table `game_guides`
--

CREATE TABLE `game_guides` (
  `id` int(11) NOT NULL,
  `game` varchar(20) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `video_url` text,
  `author` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `game_highlights`
--

CREATE TABLE `game_highlights` (
  `id` int(11) NOT NULL,
  `game` varchar(20) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `channel` text,
  `video_url` text,
  `author` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `game_highlights`
--

INSERT INTO `game_highlights` (`id`, `game`, `title`, `channel`, `video_url`, `author`, `created_at`, `updated_at`) VALUES
(1, 'Valorant', 'IS TENZ STILL BETTER??? - TENZ MONTAGE | VALORANT MONTAGE', 'https://www.youtube.com/@valorantvision', 'https://www.youtube.com/embed/jXNkqRQ_f94?si=-fNRbrceWupb6Sdt', 'Valorant Vision', '2025-05-11 00:53:22', '2025-05-11 02:49:22'),
(2, 'Valorant', 'SCREAM - ONE TAP MACHINE | VALORANT MONTAGE ', 'https://www.youtube.com/@valorantvision', 'https://www.youtube.com/embed/1jQ02RYiEGY?si=Z3Xyk4SlEMb53gsr', 'Valorant Vision', '2025-05-11 00:58:03', '2025-05-11 02:49:26'),
(3, 'Valorant', 'Paper Rex vs Rex Regum Qeon - HIGHLIGHTS | Champions Tour 2025: Pacific Stage 1', 'https://www.youtube.com/@DailyValorantqq', 'https://www.youtube.com/embed/Kj8OCHzNko4?si=h49Kxi-MnYuzDBaN', '\r\nDaily Valorant', '2025-05-11 02:45:12', '2025-05-11 02:49:30'),
(4, 'Dota 2', '\r\nSEMIFINALS! GAIMIN GLADIATORS vs TUNDRA - Official Highlights - BLAST Slam III Dota 2', 'https://www.youtube.com/@BLASTDota', 'https://www.youtube.com/embed/w36C0iSrXDQ?si=LOsHmZRyLKwC5Vrx', 'BLAST Slam Dota 2', '2025-05-11 02:48:45', '2025-05-11 02:48:45');

-- --------------------------------------------------------

--
-- Table structure for table `proplayers`
--

CREATE TABLE `proplayers` (
  `ign` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `team` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `about` varchar(255) NOT NULL,
  `game` varchar(255) NOT NULL,
  `mouse_sensitivity` float DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `hero_pool` varchar(255) DEFAULT NULL,
  `dpi` int(11) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `proplayers`
--

INSERT INTO `proplayers` (`ign`, `age`, `team`, `role`, `about`, `game`, `mouse_sensitivity`, `position`, `hero_pool`, `dpi`, `image`, `id`) VALUES
('Tenz', 24, 'Sentinels', 'Flex', 'Tyson \"TenZ\" Ngo (born May 5, 2001) is a retired Canadian player known for his explosive mechanics and early dominance in Valorant. ', 'Valorant', 0.156, '', '', 1600, 'https://cdn.oneesports.gg/cdn-data/2023/08/Valorant_TenZ_Sentinels_VCTAmericasLCQ.jpg', 1),
('f0rsakeN', 21, 'Paper Rex', 'Controller', 'Jason \"f0rsakeN\" Susanto is an Indonesian star player known for his fast-paced aggression and high-impact entries with PRX. ', 'Valorant', 0.712, '', '', 800, 'https://cdn.oneesports.gg/cdn-data/2023/06/Valorant_MastersTokyo2023_PaperRex_f0rsaken_DoubleFist.jpg', 2),
('aspas', 21, 'MIBR', 'Duelist', 'Erick \"aspas\" Santos is a Brazilian Valorant star known for his flashy Jett play. He was instrumental in LOUD championship-winning run at Valorant Champions 2022.', 'Valorant', 0.4, '', '', 800, 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/03/03/52978170600_6f2389d552_k_1600x900.jpg', 3),
('Derke', 21, 'Fnatic', 'Duelist', 'Nikita \"Derke\" Sirmitev is a Finnish-Russian player known for his aggressive Jett and Raze playstyle. He has been a key fragger for Fnatic since 2021.', 'Valorant', 0.74, '', '', 400, 'https://cdn.oneesports.gg/cdn-data/2022/07/Valorant_Derke_MastersCopenhagen2022_Day8.jpg', 4),
('Sacy', 25, 'Sentinels', 'Initiator', 'Gustavo \"Sacy\" Rossi is a Brazilian Valorant player and former professional LoL player. He is known for his utility-heavy playstyle and leadership.', 'Valorant', 0.48, '', '', 800, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-KZZCbJ5n9E9c0UkSPH3sG0jcLLN1k1p3w&s', 5),
('Boaster', 28, 'Fnatic', 'In-Game Leader', 'Jake \"Boaster\" Howlett is a British IGL known for his strategic mind and charismatic personality. He has led Fnatic to multiple international finals.', 'Valorant', 0.24, '', '', 800, 'https://cdn.oneesports.gg/cdn-data/2022/03/Valorant_Masters_Fnatic_Boaster.jpg', 6),
('leaf', 21, 'G2', 'Flex', 'Nathan \"leaf\" Orf is a North American player known for his versatility and mechanical prowess. He transitioned from CS:GO and made an impact in NA Valorant.', 'Valorant', 0.08, '', '', 1600, 'https://www.dexerto.com/cdn-image/wp-content/uploads/2021/12/02/cloud9-leaf.jpg', 7),
('crashies', 25, 'Fnatic', 'Initiator', 'Austin \"crashies\" Roberts is known for his smart utility usage and clutch plays. He played a vital role in OpTic Gaming\'s international success.', 'Valorant', 0.23, '', '', 800, 'https://cdn.oneesports.gg/cdn-data/2022/07/Valorant_crashies_MastersCopenhagen2022_Day6.jpg', 8),
('yay', 25, 'Bleed Esports', 'Sentinel', 'Jaccob \"yay\" Whiteaker, nicknamed \"El Diablo\", is famous for his sharp aim and dominance on Chamber and Killjoy. He is one of NA’s top fraggers.', 'Valorant', 0.38, '', '', 800, 'https://cdn.oneesports.gg/cdn-data/2022/01/Valorant_Yay_TeamEnvy_VCTStage3MastersBerlin5.jpg', 9),
('Mindfreak', 26, 'Paper Rex', 'Controller', 'Aaron \"Mindfreak\" Leonhart is an Indonesian player who anchors PRX\'s wild playstyle with solid utility and control.', 'Valorant', 0.45, '', '', 400, 'https://cdn.sanity.io/images/zoz4y99f/production/52d7f29c6c72aa408d06f084caa0a21fc61ef31c-1600x900.jpg', 10),
('Marved', 25, 'NRG', 'Controller', 'Jimmy \"Marved\" Nguyen is known for his calm playstyle and clutch capability. He was instrumental in OpTic Gaming\'s 2022 run.', 'Valorant', 0.35, '', '', 800, 'https://cdn.oneesports.gg/cdn-data/2022/07/Valorant_Marved_MastersCopenhagen2022_Day4.jpg', 11),
('Leo', 21, 'Fnatic', 'Initiator', 'Leo \"Leo\" Jannesson is a Swedish player known for his high game IQ and consistency. He joined Fnatic to strengthen their support core.', 'Valorant', 0.41, '', '', 400, 'https://cdn.oneesports.gg/cdn-data/2023/08/Valorant_Leo_Fnatic_MastersTokyo_4.jpg', 12),
('something', 21, 'Paper Rex', 'Duelist', 'Ilya \"something\" Petrov is a Russian mechanical prodigy. His aggressive plays and aim earned him a spot on Paper Rex\'s starting lineup.', 'Valorant', 0.6, '', '', 800, 'https://cdn.oneesports.gg/cdn-data/2023/06/Valorant_PaperRex_something_Secretlab.jpg', 13),
('Asuna', 20, '100 Thieves', 'Duelist', 'Peter \"Asuna\" Mazuryk is a Ukrainian-American player known for his aggressive duelist playstyle.', 'Valorant', 0.295, NULL, NULL, 1400, 'https://cdn.sanity.io/images/zoz4y99f/production/12e9f64d7f3b4259789e975b6f8b57391f57011f-1600x900.jpg?w=1600&auto=format', 54),
('ScreaM', 29, 'Karmine Corp', 'Duelist', 'Adil \"ScreaM\" Benrlitom, known as the \"Headshot Machine\", is a Belgian player famed for his precision.', 'Valorant', 0.741, NULL, NULL, 400, 'https://cdn.oneesports.gg/cdn-data/2023/04/Valorant_ScreaM_KarmineCorp_VCTEMEA_3.jpg', 55),
('ShahZaM', 29, 'Sentinels', 'In-Game Leader', 'Shahzeeb \"ShahZaM\" Khan is an American player renowned for his leadership and strategic play.', 'Valorant', 0.53, NULL, NULL, 400, 'https://cdn.oneesports.gg/cdn-data/2022/10/Valorant_ShahZaM_Sentinels_ValorantChampions2021_1.webp', 56),
('Mixwell', 27, 'G2 Esports', 'Flex', 'Oscar \"Mixwell\" Cañellas Colocho is a Spanish player known for his versatility and adaptability.', 'Valorant', 0.69, NULL, NULL, 400, 'https://cdn.oneesports.gg/cdn-data/2022/01/Valorant_G2Esports_Bench_Mixwell-_2.webp', 57),
('Hiko', 33, '100 Thieves', 'Initiator', 'Spencer \"Hiko\" Martin is an American player celebrated for his clutch plays and experience.', 'Valorant', 0.36, NULL, NULL, 1600, 'https://cdn.oneesports.gg/cdn-data/2022/04/Valorant_100Thieves_Hiko_Dropped.webp', 58),
('Shroud', 30, 'Sentinels', 'Flex', 'Michael \"Shroud\" Grzesiek is a Canadian player and streamer known for his exceptional aim.', 'Valorant', 0.78, NULL, NULL, 450, 'https://cdn.oneesports.gg/cdn-data/2022/08/Valorant_Sentinels_Shroud_VCTNALCQ.jpg', 59),
('nAts', 21, 'Team Liquid', 'Sentinel', 'Ayaz \"nAts\" Akhmetshin is a Russian player recognized for his stealthy and strategic gameplay.', 'Valorant', 0.49, NULL, NULL, 800, 'https://cdn.oneesports.gg/cdn-data/2021/10/Valorant_nAts_Gambit_VCTStage3MastersBerlin.jpg', 60),
('Redgar', 25, 'Team Liquid', 'In-Game Leader', 'Igor \"Redgar\" Vlasov is a Russian player known for his leadership and tactical acumen.', 'Valorant', 0.5, NULL, NULL, 800, 'https://www.dexerto.com/cdn-image/wp-content/uploads/2021/09/19/Redgar-Gambit.jpg', 61),
('Sayf', 22, 'Team Liquid', 'Duelist', 'Saif \"Sayf\" Jibraeel is a Swedish player known for his sharp aim and aggressive plays.', 'Valorant', 0.7, NULL, NULL, 400, 'https://cdn.oneesports.gg/cdn-data/2022/07/Valorant_Sayf_MastersCopenhagen2022_Day7.jpg', 62),
('Soulcas', 24, 'Team Liquid', 'Initiator', 'Dom \"soulcas\" Sulcas is a British player known for his supportive playstyle and utility usage.', 'Valorant', 0.495, NULL, NULL, 400, 'https://www.thespike.gg/_next/image?url=https%3A%2F%2Fcdn.thespike.gg%2FOnur%252Fsoulcas_1694627953897.jpg&w=3840&q=75', 63),
('Jinggg', 20, 'Paper Rex', 'Duelist', 'Wang \"Jinggg\" Jing Jie is a Singaporean player known for his explosive entry fragging.', 'Valorant', 0.2, NULL, NULL, 1600, 'https://cdn.oneesports.gg/cdn-data/2022/08/Valorant_Jinggg_Copenhagen_Final.jpg', 64),
('Suygetsu', 21, 'NAVI', 'Sentinel', 'Dmitry \"Suygetsu\" Ilyushin is a Russian player known for his clutch plays and defensive prowess.', 'Valorant', 0.25, NULL, NULL, 800, 'https://admin.esports.gg/wp-content/uploads/2023/02/Suygetsu-NAVI-VALORANT-1568x1046.jpg', 65),
('Zest', 22, 'DRX', 'Initiator', 'Kim \"Zest\" Gi-seok is a South Korean player known for his strategic utility usage.', 'Valorant', 0.56, NULL, NULL, 400, 'https://cdn.oneesports.co.th/cdn-data/sites/3/2024/10/53099057960_65ba8e00e4_k-1.jpg', 66),
('ardiis', 24, 'NRG', 'Flex', 'Ardis \"ardiis\" Svarenieks is a Latvian player known for his adaptability and sharp aim.', 'Valorant', 0.27, NULL, NULL, 800, 'https://cdn.oneesports.gg/cdn-data/2023/06/Valorant_MastersTokyo2023_NRG_ardiis_Smiling.jpg', 67),
('cNed', 22, 'NAVI', 'Duelist', 'Mehmet \"cNed\" İpek is a Turkish player renowned for his Operator skills and clutch potential.', 'Valorant', 0.32, NULL, NULL, 800, 'https://cdn.oneesports.gg/cdn-data/2023/04/Valorant_NAVI_cned_VCTLOCKIN.jpg', 68),
('dapr', 24, 'Sentinels', 'Sentinel', 'Michael \"dapr\" Gulino is an American player known for his lurking and clutch capabilities.', 'Valorant', 0.66, NULL, NULL, 400, 'https://staticg.sportskeeda.com/editor/2022/07/e472a-16592854641055-1920.jpg', 69),
('Subroza', 25, 'TSM', 'Duelist', 'Yassine \"Subroza\" Taoufik is a Canadian player known for his aggressive plays and unpredictability.', 'Valorant', 0.277, NULL, NULL, 800, 'https://cdn.esportsdriven.com/media/upload/images/subroza_wyTniZB.large.webp', 70),
('Shanks', 23, 'NRG', 'Duelist', 'Ryan \"Shanks\" Ngo is a Canadian player known for his entry fragging and sharp aim.', 'Valorant', 0.45, NULL, NULL, 400, 'https://static.gosugamers.net/2f/69/49/e06392debf1b41bffab8986df5bbbb77d16560bfb0a7891b704a908aeb.jpg?w=1600', 71),
('Brax', 28, 'T1', 'Flex', 'Braxton \"Brax\" Pierce is an American player known for his experience and precise aim.', 'Valorant', 0.34, NULL, NULL, 400, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY8MH7ByZf21wFWaoZtubAtNwA6Ooy5ZcfNQ&s', 72),
('Noted', 26, 'Free Agent', 'Flex', 'Lucas \"Noted\" Almeida is a Brazilian player known for his versatility and content creation.', 'Valorant', 0.486, NULL, NULL, 800, 'https://static.invenglobal.com/upload/image/2020/10/06/i1602002894790770.jpeg', 73),
('N0tail', 31, 'OG', 'Support', 'Johan \"N0tail\" Sundstein is a Danish-Faroese professional Dota 2 player known for his leadership and support play. He is a two-time The International champion.', 'Dota 2', NULL, 'Position 5', 'Chen, Enchantress, Oracle', NULL, 'https://cdn.oneesports.gg/cdn-data/2022/10/Dota2_N0tail.jpg', 94),
('JerAx', 32, 'OG', 'Support', 'Jesse \"JerAx\" Vainikka is a Finnish professional Dota 2 player renowned for his exceptional support gameplay and two-time The International victories with OG.', 'Dota 2', NULL, 'Position 4', 'Earth Spirit, Tusk, Rubick', NULL, 'https://cdn.oneesports.gg/cdn-data/2022/05/Dota2_OG_JerAx_EPICENTER-1.webp', 95),
('SumaiL', 26, 'Nigma Galaxy', 'Mid', 'Sumail \"SumaiL\" Hassan is a Pakistani professional Dota 2 player known for his explosive mid-lane performances and being one of the youngest players to win The International.', 'Dota 2', NULL, 'Position 2', 'Storm Spirit, Ember Spirit, Puck', NULL, 'https://cdn.oneesports.gg/cdn-data/2023/05/Dota2_TI11_SumaiL.jpg', 96),
('Miracle-', 27, 'Nigma Galaxy', 'Carry', 'Amer \"Miracle-\" Al-Barkawi is a Jordanian professional Dota 2 player celebrated for his versatile gameplay and significant contributions to his team\'s successes.', 'Dota 2', NULL, 'Position 1', 'Invoker, Anti-Mage, Morphling', NULL, 'https://cdn.oneesports.gg/cdn-data/wp-content/uploads/2019/05/Dota2_MiracleSoloRampage.jpg', 97),
('KuroKy', 32, 'Nigma Galaxy', 'Support', 'Kuro \"KuroKy\" Salehi Takhasomi is a German professional Dota 2 player recognized for his strategic support play and leadership.', 'Dota 2', NULL, 'Position 5', 'Rubick, Lion, Witch Doctor', NULL, 'https://game-tournaments.com/media/news/n41376.jpeg', 98),
('Puppey', 34, 'Team Secret', 'Captain', 'Clement \"Puppey\" Ivanov is an Estonian professional Dota 2 player known for his long-standing leadership and strategic prowess.', 'Dota 2', NULL, 'Position 5', 'Chen, Enigma, Enchantress', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-KV71q09EJD7CBGP1zEqalkhcMRTtnLUWPw&s', 99),
('Dendi', 35, 'B8', 'Mid', 'Danil \"Dendi\" Ishutin is a Ukrainian professional Dota 2 player famed for his charismatic playstyle and contributions to the game\'s popularity.', 'Dota 2', NULL, 'Position 2', 'Pudge, Queen of Pain, Templar Assassin', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnH8ncVMtXaMdv3AsKTlOYtM65iOzuHkgsfw&s', 100),
('Arteezy', 29, 'Shopify Rebellion', 'Carry', 'Artour \"Arteezy\" Babaev is a Canadian professional Dota 2 player known for his farming efficiency and consistent carry performances.', 'Dota 2', NULL, 'Position 1', 'Terrorblade, Medusa, Drow Ranger', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEwJrGSan1uVGsA58kn2nzxWGPrJjM_FHxw&s', 101),
('Topson', 26, 'OG', 'Mid', 'Topias \"Topson\" Taavitsainen is a Finnish professional Dota 2 player recognized for his unconventional mid-lane strategies and back-to-back The International wins.', 'Dota 2', NULL, 'Position 2', 'Monkey King, Zeus, Invoker', NULL, 'https://cdn.oneesports.gg/cdn-data/2021/10/Dota2_OG_Topson_TI10.jpg', 102),
('Ana', 26, 'OG', 'Carry', 'Anathan \"Ana\" Pham is an Australian professional Dota 2 player celebrated for his impactful carry plays and crucial role in OG\'s The International victories.', 'Dota 2', NULL, 'Position 1', 'Spectre, Phantom Lancer, Ember Spirit', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT52IUI2lfOgVAUax1DBdiiRuAS8SRJFUC2dQ&s', 103),
('Collapse', 22, 'Team Spirit', 'Offlane', 'Magomed \"Collapse\" Khalilov is a Russian Dota 2 player known for his world-class offlane play and initiating prowess during Team Spirit\'s TI10 victory.', 'Dota 2', NULL, 'Position 3', 'Magnus, Mars, Tidehunter', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_G8lx7hbxrBznWgUjdTlM2UufpYBtlaGQ4w&s', 104),
('Yatoro', 21, 'Team Spirit', 'Carry', 'Illya \"Yatoro\" Mulyarchuk is a Ukrainian Dota 2 player famed for his versatile hero pool and carry role in Team Spirit\'s TI10 championship run.', 'Dota 2', NULL, 'Position 1', 'Morphling, Terrorblade, Phantom Assassin', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMqzxiioOSV1PhF0-_J63DUx97k5_QblSjig&s', 105),
('TORONTOTOKYO', 25, 'Team Spirit', 'Mid', 'Alexander \"TORONTOTOKYO\" Khertek is a Russian Dota 2 player who played a key role as a midlaner in Team Spirit\'s TI10 win.', 'Dota 2', NULL, 'Position 2', 'Storm Spirit, Void Spirit, Templar Assassin', NULL, 'https://cdn.oneesports.gg/cdn-data/2022/12/Dota2_Torontotokyo_TeamSpirit_TI10.jpg', 106),
('Zai', 26, 'Team Liquid', 'Offlane', 'Ludwig \"Zai\" Wåhlberg is a Swedish Dota 2 player known for his consistent offlane play and tactical awareness.', 'Dota 2', NULL, 'Position 3', 'Dark Seer, Doom, Beastmaster', NULL, 'https://cdn.oneesports.gg/cdn-data/2021/11/Dota2_TeamSecret_Zai_TI10.jpg', 107),
('Boxi', 24, 'Team Liquid', 'Support', 'Samuel \"Boxi\" Svahn is a Swedish support/offlane Dota 2 player recognized for his aggressive playstyle and high-impact rotations.', 'Dota 2', NULL, 'Position 4', 'Earth Spirit, Clockwerk, Tusk', NULL, 'https://cdn.oneesports.gg/cdn-data/2022/10/Dota2_Boxi_TeamLiquid_TI11Playoffs.jpg', 108),
('Nisha', 24, 'Team Liquid', 'Mid', 'Michał \"Nisha\" Jankowski is a Polish midlaner known for his mechanical skill and intelligent plays, formerly of Team Secret.', 'Dota 2', NULL, 'Position 2', 'Pangolier, Storm Spirit, Ember Spirit', NULL, 'https://media.assettype.com/afkgaming%2F2023-01%2Fad01694a-e083-4532-b22f-1b71872bcadd%2FMy_project__3___1_.jpg?auto=format%2Ccompress&dpr=1.0&w=1200', 109),
('Cr1t-', 28, 'Shopify Rebellion', 'Support', 'Andreas \"Cr1t-\" Nielsen is a Danish Dota 2 support player known for his creative plays and success on position 4.', 'Dota 2', NULL, 'Position 4', 'Earth Spirit, Rubick, Tiny', NULL, 'https://external-preview.redd.it/cr1t-i-know-what-fans-go-through-when-they-watch-and-v0-WqSLPZy4lv6DZVnxBcnahMLf85xbpsrDFeJta2S_ld4.jpg?auto=webp&s=ed32ae7d6453faf98b7d416daa7979e7d4def59c', 110),
('Fly', 30, 'Shopify Rebellion', 'Support', 'Tal \"Fly\" Aizik is an Israeli-Canadian Dota 2 player known for his leadership and solid support gameplay.', 'Dota 2', NULL, 'Position 5', 'Dazzle, Treant Protector, Crystal Maiden', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEJcBIq92dRVyIkWt4S2HEYgaYDx8oNoXDA&s', 111),
('fng', 29, 'NAVI', 'Support', 'Artsiom \"fng\" Barshak is a Belarusian Dota 2 player and captain, respected for his deep strategic understanding of the game.', 'Dota 2', NULL, 'Position 5', 'Disruptor, Bane, Vengeful Spirit', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_7kDRE2aFlhEgCxFHPoMygs1DYR0sOmM2g&s', 112),
('Malr1ne', 23, 'BetBoom Team', 'Mid', 'Stanislav \"Malr1ne\" Potorak is a rising CIS star playing mid for BetBoom, known for explosive lane control and teamfight dominance.', 'Dota 2', NULL, 'Position 2', 'Invoker, Leshrac, Void Spirit', NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbAAUJTfSCX7gq568fp88wQxiaPPOVwrX2OA&s', 113),
('TGLTN', 23, 'Soniqs', 'Fragger', 'James \"TGLTN\" Giezen is an Australian PUBG player known for his sharp aim and dominant mechanical skills.', 'PUBG', NULL, NULL, NULL, NULL, 'https://cdn.esportsdriven.com/media/guides/images/tgltn-pubg-settings-equipment.main.webp', 114),
('Pio', 25, 'Gen.G', 'Flex', 'Cha \"Pio\" Seung-hoon is a top Korean PUBG pro known for his versatile role and clutch plays in global tournaments.', 'PUBG', NULL, NULL, NULL, NULL, 'https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Ch=675%2Cq=85%2Csharpen=2%2Cw=1200/wp-content/uploads/pio.png', 115),
('Inonix', 25, 'Gen.G', 'Support', 'Na \"Inonix\" Hee-joo is a Korean PUBG player recognized for his supportive plays and consistent performance.', 'PUBG', NULL, NULL, NULL, NULL, 'https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Ch=675%2Cq=85%2Csharpen=2%2Cw=1200/wp-content/uploads/inonix.png', 116),
('GodV', 28, 'Four Angry Men', 'IGL', 'Wei \"GodV\" Zhen is a Chinese PUBG legend and former League of Legends pro, now known for leading 4AM.', 'PUBG', NULL, NULL, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziwnvjxVyYxJ1pZpPctAIsBpQSIUozfCJDjjnX-f5PTESKPe4KIbw9knyPWwu71uwavI&usqp=CAU', 117),
('Aqua5', 26, 'Danawa e-sports', 'Fragger', 'Jeong \"Aqua5\" Seung-won is a Korean PUBG star known for aggressive entry fragging and precision aim.', 'PUBG', NULL, NULL, NULL, NULL, 'https://specs.gg/assets/include/upload/image.php?name=Aqua5&t=2025-05-01%2006:19:54', 118),
('Loki', 25, 'Twisted Minds', 'Scout', 'Jeong \"Loki\" Jun-young is a veteran PUBG player recognized for his map control and info gathering skills.', 'PUBG', NULL, NULL, NULL, NULL, 'https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Ch=675%2Cq=85%2Csharpen=2%2Cw=1200/wp-content/uploads/loki.png', 119),
('Kickstart', 24, 'Soniqs', 'Fragger', 'Hunter \"Kickstart\" Minns is an American PUBG player known for high impact and disciplined play.', 'PUBG', NULL, NULL, NULL, NULL, 'https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Ch=675%2Cq=85%2Csharpen=2%2Cw=1200/wp-content/uploads/kickstart.png', 120),
('shao', 23, 'Petrichor Road', 'Support', 'Zhao \"shao\" Zhe is a Chinese PUBG player recognized for providing structure and anchor play to his team.', 'PUBG', NULL, NULL, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNm8QM6yHqlg1IpIzJ4m727PuIhv2E43nJg&s', 121),
('Jeemzz', 27, 'FaZe Clan', 'Entry Fragger', 'Jim \"Jeemzz\" Eliassen is a Norwegian PUBG veteran with sharp aim and years of EU scene experience.', 'PUBG', NULL, NULL, NULL, NULL, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPO1yyzXL-H8gM5KE5DGbjtiQ65bEHYlp7xQ&s', 122),
('mxey', 29, 'FaZe Clan', 'Support', 'Anssi \"mxey\" Pekkonen is a Finnish PUBG player with a calm, supportive role, famous for late-game clutches.', 'PUBG', NULL, NULL, NULL, NULL, 'https://prosettings.net/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=pad%2Ch=675%2Cq=85%2Csharpen=2%2Cw=1200/wp-content/uploads/mxey.png', 123);

-- --------------------------------------------------------

--
-- Table structure for table `pubg_article`
--

CREATE TABLE `pubg_article` (
  `type` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `article_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pubg_article`
--

INSERT INTO `pubg_article` (`type`, `title`, `description`, `date`, `author`, `image`, `id`, `article_url`, `created_at`, `updated_at`) VALUES
('news', 'PUBG GLOBAL SERIES 7 Champions - 17GAMING', 'Congratulations to the PGS 7 Champions, 17GAMING!\r\nThe very first champions of PGS 1, 17GAMING have reclaimed their throne with a thrilling victory at PGS 7!', 'May 4, 2025', 'krafton', 'https://wstatic-prod-boc.krafton.com/common/news/20250504/80tgBPXe.jpg', 1, 'https://pubgesports.com/en/news/8618', '2025-05-12 01:24:18', '2025-05-12 01:24:18');

-- --------------------------------------------------------

--
-- Table structure for table `pubg_schedule`
--

CREATE TABLE `pubg_schedule` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `region` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pubg_schedule`
--

INSERT INTO `pubg_schedule` (`id`, `title`, `date`, `region`, `image_url`, `created_at`, `updated_at`) VALUES
(1, 'PUBG Global Series 8', 'May 12, 2025 - May 18, 2025', 'Global', 'https://wstatic-prod-boc.krafton.com/common/default/20250331/9cdQOdLE/8white.png', '2025-05-12 10:13:03', '2025-05-12 10:25:11');

-- --------------------------------------------------------

--
-- Table structure for table `upcoming_games`
--

CREATE TABLE `upcoming_games` (
  `id` int(11) NOT NULL,
  `game` varchar(255) NOT NULL,
  `team1` varchar(100) NOT NULL,
  `team2` varchar(100) NOT NULL,
  `logo1` varchar(255) DEFAULT NULL,
  `logo2` varchar(255) DEFAULT NULL,
  `match_series` varchar(150) DEFAULT NULL,
  `match_event` varchar(200) DEFAULT NULL,
  `unix_timestamp` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `upcoming_games`
--

INSERT INTO `upcoming_games` (`id`, `game`, `team1`, `team2`, `logo1`, `logo2`, `match_series`, `match_event`, `unix_timestamp`, `created_at`, `updated_at`) VALUES
(1, 'valorant', 'Gen.G', 'Rex Regum Qeon', 'https://upload.wikimedia.', 'https://upload.wikimedia.org/wikipedia/commons/5/5b/LOGO_RRQ_orange.png', 'Playoffs: Grand Final', 'Champions Tour 2025: Pacific Stage 1', '2025-05-11 16:00:00', '2025-05-11 14:35:11', '2025-05-11 16:00:19'),
(4, 'valorant', 'Trace Esports', 'Wolves Esports', 'https://owcdn.net/img/6433a2cc3ae72.png', 'https://owcdn.net/img/651d33f8e6a1f.png', 'Main Event: Consolation Final', 'China Evolution Series: Act 2 X Asian Champions League', '2025-05-11 17:00:00', '2025-05-11 14:48:00', '2025-05-11 16:16:08'),
(6, 'valorant', 'BBL Esports', 'FUT Esports', 'https://owcdn.net/img/65b8ccef5e273.png', 'https://owcdn.net/img/632be9976b8fe.png', 'Playoffs: Lower Round 2', 'Champions Tour 2025: EMEA Stage 1', '2025-05-11 23:00:00', '2025-05-11 14:56:08', '2025-05-11 16:20:10'),
(7, 'valorant', 'Team Liquid', 'Natus Vincere', 'https://owcdn.net/img/640c381f0603f.png', 'https://owcdn.net/img/62a4109ddbd7f.png', 'Playoffs: Lower Round 2', 'Champions Tour 2025: EMEA Stage 1', '2025-05-12 02:00:00', '2025-05-11 14:56:33', '2025-05-11 16:21:38'),
(8, 'valorant', 'SLT Seongnam', 'SHERPA', 'https://owcdn.net/img/641d8f2b943ee.png', 'https://owcdn.net/img/68035c3e9d3a2.png', 'Round Robin: Week 4', 'WDG Challengers League 2025 Korea: Stage 2', '2025-05-12 16:00:00', '2025-05-11 14:59:57', '2025-05-11 16:22:15'),
(9, 'valorant', 'EDward Gaming', 'Titan Esports Club', 'https://owcdn.net/img/62c82049253b2.png', 'https://owcdn.net/img/65487414b8562.png', 'Main Event: Grand Final', 'China Evolution Series: Act 2 X Asian Champions League', '2025-05-12 17:00:00', '2025-05-11 15:05:29', '2025-05-11 16:22:51'),
(10, 'Valorant', 'FN Pocheon', 'DRX Academy', 'https://owcdn.net/img/67937e7c1ae44.png', 'https://owcdn.net/img/63b17abd77fc0.png', 'Round Robin: Week 4', 'WDG Challengers League 2025 Korea: Stage 2', '2025-05-12 19:00:00', '2025-05-11 16:34:55', '2025-05-11 16:38:36'),
(11, 'Valorant', 'TeamOrangeGaming', 'XPERION NXT', 'https://owcdn.net/img/678aa7dadc257.png', 'https://owcdn.net/img/663b1e3e5e827.png', 'Groups Phase: Relegation', 'Challengers League 2025 DACH Evolution: Split 2', '2025-05-12 23:00:00', '2025-05-11 16:34:55', '2025-05-11 17:09:38'),
(12, 'Valorant', 'NOBLES', 'VillianArc', 'https://owcdn.net/img/638435e010584.png', 'https://owcdn.net/img/681788e162ec6.png', 'Relegations: Upper Final', 'Challengers League 2025 MENA Resilience: GCC-Pakistan-Iraq Split 1', '2025-05-13 00:00:00', '2025-05-11 16:34:55', '2025-05-11 17:10:33'),
(13, 'Valorant', 'Orgless 2.0', 'VoidWalkers', 'https://owcdn.net/img/680407c3ac6c9.png', 'https://owcdn.net/img/67cbb91902df6.png', 'Relegations: Lower Bracket Final', 'Challengers League 2025 MENA Resilience: North Africa and Levant Split 1', '2025-05-13 02:30:00', '2025-05-11 16:34:55', '2025-05-11 17:11:03'),
(14, 'Valorant', 'Nightblood Gaming', 'Prosperity Esports', 'https://owcdn.net/img/61f13e1258cab.png', 'https://owcdn.net/img/67ad41d418646.png', 'Promotion/Relegation: Relegation', 'Challengers League 2025 North America ACE: Stage 2', '2025-05-13 04:00:00', '2025-05-11 16:34:55', '2025-05-11 17:11:25'),
(15, 'Valorant', 'FlyQuest RED', ':3', 'https://owcdn.net/img/6478e8607ca46.png', 'https://owcdn.net/img/6519ca99df26a.png', 'Swiss Stage: Round 6', 'Game Changers 2025 North America: Stage 1', '2025-05-13 05:00:00', '2025-05-11 16:34:55', '2025-05-11 17:11:44'),
(16, 'Valorant', 'Teddy Tactics', 'Prosperity X', 'https://owcdn.net/img/6433c24475816.png', 'https://owcdn.net/img/67ad41d418646.png', 'Swiss Stage: Round 6', 'Game Changers 2025 North America: Stage 1', '2025-05-13 05:00:00', '2025-05-11 16:34:55', '2025-05-11 17:12:45'),
(17, 'Valorant', 'Ghost Gaming', 'YFP X', 'https://owcdn.net/img/62a407a8ec084.png', 'https://owcdn.net/img/679dea8b44b77.png', 'Swiss Stage: Round 6', 'Game Changers 2025 North America: Stage 1', '2025-05-12 23:30:00', '2025-05-11 16:34:55', '2025-05-11 16:44:43'),
(18, 'Valorant', 'Teevee', 'Berzerkers Dawn', 'https://owcdn.net/img/67fd793b27afa.png', 'https://owcdn.net/img/6793386686460.png', 'Swiss Stage: Round 6', 'Game Changers 2025 North America: Stage 1', '2025-05-13 07:30:00', '2025-05-11 16:34:55', '2025-05-11 17:13:52'),
(19, 'Valorant', 'Fisher Fumblers', 'kessoku band', 'https://owcdn.net/img/63b525814a4ef.png', 'https://owcdn.net/img/67f3165d2ce6c.png', 'Swiss Stage: Round 6', 'Game Changers 2025 North America: Stage 1', '2025-05-13 07:30:00', '2025-05-11 16:34:55', '2025-05-11 17:14:14'),
(20, 'Valorant', 'Dplus Esports', 'FEARX', 'https://owcdn.net/img/63bbe4f904433.png', 'https://owcdn.net/img/65a77a95e73af.png', 'Round Robin: Week 4', 'WDG Challengers League 2025 Korea: Stage 2', '2025-05-13 16:00:00', '2025-05-11 16:34:55', '2025-05-11 17:14:33'),
(21, 'Valorant', 'Gen.G Global Academy', 'T1 Academy', 'https://owcdn.net/img/654cc858ea9f5.png', 'https://owcdn.net/img/5ea85d21e625f.png', 'Round Robin: Week 4', 'WDG Challengers League 2025 Korea: Stage 2', '2025-05-13 19:00:00', '2025-05-11 16:34:55', '2025-05-11 17:14:40'),
(22, 'valorant', 'TBD', 'Yung', 'https://www.vlr.gg/img/vlr/tmp/vlr.png', 'https://www.vlr.gg/img/vlr/tmp/vlr.png', 'Relegations: Lower Final', 'Challengers League 2025 MENA Resilience: GCC-Pakistan-Iraq Split 1', '2025-05-14 00:00:00', '2025-05-12 14:13:05', '2025-05-12 14:20:44'),
(23, 'valorant', 'SaD Esports', 'Nightblood Gaming', 'https://owcdn.net/img/6528e9505cb61.png', 'https://owcdn.net/img/61f13e1258cab.png', 'Promotion/Relegation: Relegation', 'Challengers League 2025 North America ACE: Stage 2', '2025-05-14 04:00:00', '2025-05-12 14:13:05', '2025-05-12 14:19:53'),
(24, 'valorant', 'Trace Esports', 'ZETA DIVISION', 'https://owcdn.net/img/6433a2cc3ae72.png', 'https://owcdn.net/img/62a411783d94d.png', 'Main Event: Lower Round 1', 'HERO ESPORTS ASIAN CHAMPIONS LEAGUE 2025', '2025-05-14 17:00:00', '2025-05-12 14:13:05', '2025-05-12 14:19:22'),
(25, 'valorant', 'Bilibili Gaming', 'DRX', 'https://owcdn.net/img/63f25d72216c1.png', 'https://owcdn.net/img/63b17abd77fc0.png', 'Main Event: Lower Round 2', 'HERO ESPORTS ASIAN CHAMPIONS LEAGUE 2025', '2025-05-14 19:00:00', '2025-05-12 14:13:05', '2025-05-12 14:18:54'),
(26, 'dota 2', 'Vitros.pro', 'Runa Team', 'https://static.gosugamers.net/f2/3e/aa/d4a2995849e244c3d457056e91fc780f5653d1b8e261682fe24eff8847.png?w=128', 'https://static.gosugamers.net/12/30/b7/7da9ce1ad6788834c4fa20e4db529fcb2273cd85f0edcafa208878ad12.webp?w=128', 'Group A', 'FISSURE Universe: Episode 5', '2025-05-12 16:00:00', '2025-05-12 14:26:22', '2025-05-12 14:27:13'),
(27, 'dota 2', 'Apple City Gang', 'WW', 'https://static.gosugamers.net/79/87/f6/6b312dbc8e0cfafcf21cfc5378fa368ccf760d31e71704d0ef879b69a1.webp?w=96', 'https://static.gosugamers.net/games/128x128_9.webp?w=128', 'Group B', 'European Pro League Season 26', '2025-05-12 17:00:00', '2025-05-12 14:37:46', '2025-05-12 14:38:34'),
(28, 'Dota 2', 'OG', 'Edge', 'https://static.gosugamers.net/0d/62/f4/0dd204b772825a353123752a53ec1da840681749782c066ea8db310e5c.png?w=96', 'https://static.gosugamers.net/37/28/22/8f8bef711e8d7a704b9597520ba380d3de3d3aa810d993325501aa32ea.webp?w=96', 'Group A', 'FISSURE Universe: Episode 5', '2025-05-12 18:00:00', '2025-05-12 14:42:08', '2025-05-12 14:43:09'),
(29, 'Dota 2', '圆月弯刀', '森林狼', 'https://static.gosugamers.net/c4/4c/30/1fd1f3498cbda696953b0ef63eb8c1b53bace2e5784bf382ffe8b26172.webp?w=96', 'https://static.gosugamers.net/2b/44/7c/c10c76dd4c0e8ec83c1bdebee3c10b4cf277ee76f9ee74a12811fb9f37.webp?w=96', 'Group A', 'DOTA2 Immortal Cup Season 1', '2025-05-12 18:30:00', '2025-05-12 14:42:08', '2025-05-12 14:48:49'),
(30, 'Dota 2', 'WG', 'One Move', 'https://static.gosugamers.net/07/c0/6d/22a30da75ac81d4957413b979017bae89b4cf16eaee76ea8e27165268a.webp?w=96', 'https://static.gosugamers.net/b2/52/15/5f8838dad749cc9b865de79aa139b21ca5f650e9b9e344072667c3b402.png?w=96', 'Group B', 'FISSURE Universe: Episode 5', '2025-05-12 20:00:00', '2025-05-12 14:42:08', '2025-05-12 14:51:35'),
(31, 'Dota 2', '四带二', '老茶', 'https://static.gosugamers.net/46/e9/85/dac1f94fb32a241c5de735eea62df7f558af31a7b71088fd9b334d272d.webp?w=96', 'https://static.gosugamers.net/98/09/bc/9d9a16468d0d629d43294071da8532718a95de540fdb746b2cd2c610e9.webp?w=96', 'Group A', 'DOTA2 Immortal Cup Season 1', '2025-05-12 21:30:00', '2025-05-12 14:42:08', '2025-05-12 14:52:24'),
(32, 'Dota 2', 'L1GA', 'AVULUS', 'https://static.gosugamers.net/4a/76/7b/00fbcd97d605cb4a74f708a7efbb9db35dad3182d45f82893b6a8eb0fc.webp?w=96', 'https://static.gosugamers.net/a7/56/f7/579d3d1327abf91aa6f1feb5363eb8e00e36c09beb23fc164bf30e3f8a.webp?w=96', 'Group B', 'FISSURE Universe: Episode 5', '2025-05-12 22:00:00', '2025-05-12 14:42:08', '2025-05-12 14:53:06'),
(33, 'Dota 2', 'LVLUP', 'HYDRA', 'https://static.gosugamers.net/5f/9a/73/20929301c8c61b88a77866dc1165b626a6fcf99765da67221f4a39e236.png?w=96', 'https://static.gosugamers.net/fa/1f/8d/626de58b26e011ec01efea2af49f13cacb1008cb33d995e0dfc0938b21.png?w=96', 'Group B', 'European Pro League Season 26', '2025-05-12 23:00:00', '2025-05-12 14:42:08', '2025-05-12 14:53:47'),
(34, 'Dota 2', 'Runa', 'Edge', 'https://static.gosugamers.net/12/30/b7/7da9ce1ad6788834c4fa20e4db529fcb2273cd85f0edcafa208878ad12.webp?w=96', 'https://static.gosugamers.net/37/28/22/8f8bef711e8d7a704b9597520ba380d3de3d3aa810d993325501aa32ea.webp?w=96', 'Group A', 'FISSURE Universe: Episode 5', '2025-05-13 00:00:00', '2025-05-12 15:02:11', '2025-05-12 15:03:41'),
(35, 'Dota 2', '4Pirates', 'Passion UA', 'https://static.gosugamers.net/ec/dd/98/6ac701c56e0f2813932c4883d170f3a55bcba1449cc6d27c0fe6218c1c.webp?w=96', 'https://static.gosugamers.net/81/48/5d/caa9c91ffb10fda9ceab869951097fac82bd92f72038604d1ac6f43723.webp?w=96', 'Group A', 'European Pro League Season 26', '2025-05-13 02:00:00', '2025-05-12 15:02:11', '2025-05-12 15:04:57'),
(36, 'Dota 2', 'IAP', 'Lupine', 'https://static.gosugamers.net/38/0e/9b/9b230566345c7af7c8cbaf2cbd01c9fcdc6802c7f9a6bbbbc98e1510f6.webp?w=96', 'https://static.gosugamers.net/games/128x128_9.webp?w=96', 'Group Stage', 'Lunar Snake Trophy', '2025-05-13 14:00:00', '2025-05-12 15:02:11', '2025-05-12 15:05:42'),
(37, 'Dota 2', 'One Move', 'Shopify Rebellion', 'https://static.gosugamers.net/b2/52/15/5f8838dad749cc9b865de79aa139b21ca5f650e9b9e344072667c3b402.png?w=96', 'https://static.gosugamers.net/5f/d2/4e/0c2ea8ac47b540d048a70f6b8d9704a80151ce32d1fd59ffcc4d365628.webp?w=96', 'Group B', 'FISSURE Universe: Episode 5', '2025-05-13 16:00:00', '2025-05-12 15:02:11', '2025-05-12 15:06:54'),
(38, 'Dota 2', 'Quantum', 'Lynx', 'https://static.gosugamers.net/ad/c7/12/b14f105d67f0731f67d05690e61d37e67fe8d2fe43392414391a8ade92.webp?w=96', 'https://static.gosugamers.net/84/0e/6e/887282f0004dda4dd33583e520e84746ba9bf955b1b9d41c737c04b58b.webp?w=96', 'Group A', 'European Pro League Season 26', '2025-05-13 17:00:00', '2025-05-12 15:02:11', '2025-05-12 15:07:50'),
(39, 'Dota 2', 'Virtus.pro', 'Edge', 'https://static.gosugamers.net/f2/3e/aa/d4a2995849e244c3d457056e91fc780f5653d1b8e261682fe24eff8847.png?w=96', 'https://static.gosugamers.net/37/28/22/8f8bef711e8d7a704b9597520ba380d3de3d3aa810d993325501aa32ea.webp?w=96', 'Group A', 'FISSURE Universe: Episode 5', '2025-05-13 18:00:00', '2025-05-12 15:02:11', '2025-05-12 15:08:42'),
(40, 'Dota 2', '四神之一', '因月斩刃', 'https://static.gosugamers.net/46/e9/85/dac1f94fb32a241c5de735eea62df7f558af31a7b71088fd9b334d272d.webp?w=96', 'https://static.gosugamers.net/c4/4c/30/1fd1f3498cbda696953b0ef63eb8c1b53bace2e5784bf382ffe8b26172.webp?w=96', 'Group A', 'DOTA2 Immortal Cup Season 1(不朽杯S1)', '2025-05-13 18:30:00', '2025-05-12 15:02:11', '2025-05-12 15:09:40'),
(41, 'Dota 2', 'WW', 'Zero Tenacity', 'https://static.gosugamers.net/games/128x128_9.webp?w=96', 'https://static.gosugamers.net/42/2b/03/f51666c5fe8f5575ae17fc11f374f1f5ba2c577b2ebb098f2466e54fd9.webp?w=96', 'Group B', 'European Pro League Season 26', '2025-05-13 20:00:00', '2025-05-12 15:02:11', '2025-05-12 15:11:18'),
(42, 'Dota 2', 'OG', 'MOUZ', 'https://static.gosugamers.net/0d/62/f4/0dd204b772825a353123752a53ec1da840681749782c066ea8db310e5c.png?w=96', 'https://static.gosugamers.net/de/25/24/b7fd4b6518eee6da23671661b53fc33c0bf659b81131c88a3d79093121.webp?w=96', 'Group A', 'FISSURE Universe: Episode 5', '2025-05-13 20:00:00', '2025-05-12 15:02:11', '2025-05-12 15:12:10'),
(43, 'Dota 2', '森林狼', '老姜', 'https://static.gosugamers.net/2b/44/7c/c10c76dd4c0e8ec83c1bdebee3c10b4cf277ee76f9ee74a12811fb9f37.webp?w=96', 'https://static.gosugamers.net/98/09/bc/9d9a16468d0d629d43294071da8532718a95de540fdb746b2cd2c610e9.webp?w=96', 'Group A', 'DOTA2 Immortal Cup Season 1(不朽杯S1)', '2025-05-13 21:30:00', '2025-05-12 15:02:11', '2025-05-12 15:13:05');

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts`
--

CREATE TABLE `user_accounts` (
  `ign` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `rank` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_accounts`
--

INSERT INTO `user_accounts` (`ign`, `userName`, `password`, `rank`, `image`, `id`) VALUES
('a', 'a', 'a', 'Ascendant 1', '', 7),
('b', 'bd', 'sad', 'Ascendant 1', '/src/assets/reyna1.avif', 8),
('a', 'd', 'd', 'Diamond 2', '', 9),
('d', 's', 'a', 'Diamond 2', '', 10),
('ds', 'ds', 'ds', 'Platinum 3', '', 11),
('awd', 'awdawd', 'awd', 'Diamond 2', '', 25),
('AWD', 'AWD', 'AWD', 'Platinum 3', '', 26),
('awdad', 'awdas', 'awd', 'Gold 1', '', 27),
('awd', 'awd', 'wdawd', 'Diamond 2', '', 28),
('adaw', 'awd', 'awd', 'Platinum 3', '', 29),
('h', 'h', 'h', 'Diamond 3', '', 30),
('j', 'j', 'j', 'Diamond 1', '', 31);

-- --------------------------------------------------------

--
-- Table structure for table `valorant_article`
--

CREATE TABLE `valorant_article` (
  `type` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `article_url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `valorant_article`
--

INSERT INTO `valorant_article` (`type`, `title`, `description`, `date`, `author`, `image`, `id`, `article_url`, `created_at`, `updated_at`) VALUES
('news', 'Gen.G secures top-two finish as the PRX train heads for Toronto', '', 'May 9, 2025', 'jenopelle', 'https://static.invenglobal.com/upload/image/2025/04/28/i1745866064977891.jpeg', 1, 'https://www.vlr.gg/485919/gen-g-secures-top-two-finish-as-the-prx-train-heads-for-toronto', '2025-05-09 14:37:36', '2025-05-11 13:34:00'),
('news', 'BBL Esports, FNATIC dominate early in Stage 1 playoffs', 'BBL Esports and FNATIC both swept their first opponents in the VCT EMEA 2025 Stage 1 playoffs.', 'May 8, 2025', 'weivy', 'https://owcdn.net/img/681d0d93169d3.jpg', 2, 'https://www.vlr.gg/485795/bbl-esports-fnatic-dominate-early-in-stage-1-playoffs', '2025-05-09 14:37:36', '2025-05-11 13:34:10'),
('news', 'Vitality adds psych_chek and slk to coaching staff', '', 'May 7, 2025', 'jenopelle', 'https://esports-news.co.uk/wp-content/uploads/2025/05/ezgif-48189712ece2d4.jpg', 3, 'https://www.vlr.gg/485795/bbl-esports-fnatic-dominate-early-in-stage-1-playoffs', '2025-05-09 14:37:36', '2025-05-11 13:34:38'),
('news', 'Dragon Ranger Gaming signs Akeman', '', 'May 7, 2025', 'jenopelle', 'https://valo2asia.com/wp-content/uploads/2023/12/GCmttRSaQAAV1HD-1024x576.jpg', 4, 'https://www.vlr.gg/485513/dragon-ranger-gaming-signs-akeman', '2025-05-09 14:37:36', '2025-05-11 13:34:50'),
('news', 'Titan Esports Club promotes lucas for EWC qualifier', '', 'May 7, 2025', 'jenopelle', 'https://pbs.twimg.com/media/GqULDk5bAAEOgyg?format=jpg&name=4096x4096', 5, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'JDG Esports signs Link7 and riya', '', 'May 7, 2025', 'thothgow', '', 6, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'All Gamers aiming for Champions, signs Paris as head coach', '', 'May 6, 2025', 'jenopelle', '', 7, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'Americas Stage 2 groups drawn', '', 'May 5, 2025', 'jenopelle', '', 8, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'G2 takes Americas crown with 3-1 win', 'G2 Esports becomes first two time (and back-to-back) Americas champions after defeating Sentinels 3-1.', 'May 4, 2025', 'thothgow', '', 9, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'China Stage 2 groups drawn', 'The groups for China have been rearranged ahead of Stage 2.', 'May 4, 2025', 'raezeri', '', 10, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'Xi Lai Gaming climbs from Ascension to Stage 1 title in VCT China', 'Xi Lai Gaming defeated Bilibili Gaming 3-1 in the grand final of the VCT China 2025 Stage 1 playoffs.', 'May 4, 2025', 'weivy', '', 11, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'DRX, Paper Rex set up age-old matchup for last Toronto slot in Pacific', 'A timeless Pacific classic awaits with all sights set on Toronto.', 'May 4, 2025', 'raezeri', '', 12, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'G2 earns a grand final rematch against Sentinels', 'G2 sets up for the el classico grand final.', 'May 3, 2025', 'CongoBat', '', 13, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'Paper Rex and TALON stay alive in Stage 1 lower bracket', '', 'May 3, 2025', 'jenopelle', '', 14, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'Bilibili Gaming locks in grand final with 3-0 over Wolves Esports', 'Bilibili and Xi Lai will face off tomorrow for glory and Toronto seeding.', 'May 3, 2025', 'raezeri', '', 15, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'G2 shuts down EG\'s miracle run to make Toronto', 'G2 will be the final team from Americas attending Masters Toronto', '2025-05-02', 'CongoBat', '', 16, '', '2025-05-09 14:37:36', '2025-05-09 14:37:36'),
('news', 'Leviatán parts with Demon1 and Rossy', 'Changes are in order once again for Leviatán', 'May 2, 2025', 'CongoBat', '', 17, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'Liquid and Heretics take first seeds in EMEA\'s bizarre final week', 'Broken records and broken PCs defined EMEA this week', 'May 2, 2025', 'CongoBat', '', 18, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'NRG release Mikes ahead of Stage 2', 'After barely three months with the organization, NRG\'s former Head Coach has been released ahead of Stage 2.', 'May 2, 2025', 'ChickenJoe', '', 19, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'Bilibili eliminates EDward Gaming, secures final Toronto slot', 'Bilibili Gaming was able to finally beat EDward Gaming regionally, eliminating them from Masters Toronto while securing their slot.', 'May 2, 2025', 'weivy', '', 20, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'Mimi: \"We definitely hoped that Shopify would come for bit of a rematch\"', 'mimi and the rest of Gozen look to defend their crown at Instalock this year.', 'May 2, 2025', 'ChickenJoe', '', 21, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'Xi Lai continues undefeated run, reaches China Stage 1 grand final', 'China\'s newest team has reached the Stage 1 grand final without losing a map in playoffs.', 'May 2, 2025', '', '', 22, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'LOUD lets go of v1nny', 'LOUD are in need of a new IGL after falling flat in Stage 1.', 'April 30, 2025', 'CongoBat', '', 23, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'PxS and 2Game Esports part ways', '', 'April 29, 2025', 'jenopelle', '', 24, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'Apeks\' Governor to take health-related hiatus', '', 'April 29, 2025', 'jenopelle', '', 25, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'G2 Gozen enters post-Petra era with DrewSpark, Akita', '', 'April 29, 2025', 'jenopelle', '', 26, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'FunPlus Phoenix announces return of BerLIN, Shr1mp departure', '', 'April 28, 2025', 'jenopelle', '', 27, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'florescent steps back from VCT', 'You will be missed, flor.', 'April 28, 2025', 'CongoBat', '', 28, '', '2025-05-09 14:37:36', '2025-05-09 15:44:24'),
('news', 'Evil Geniuses, G2 Esports stay alive in lower bracket', 'Evil Geniuses and G2 Esports won their lower bracket matches in the VCT Americas 2025 Stage 1 playoffs, and will face each other to see who makes it to Masters Toronto.', 'April 27, 2025', 'weivy', '', 29, '', '2025-05-09 14:37:36', '2025-05-09 15:44:25'),
('news', 'Project Horizon is providing fan-made English streams for VCT China', 'A community-made English co-stream named Project Horizon is trying to do what Riot decided not to in 2025: make an English broadcast and community around VCT China.', 'April 27, 2025', 'weivy', '', 30, '', '2025-05-09 14:37:36', '2025-05-09 15:44:25'),
('news', 'NRG adds skuba, welcomes back bonkar for Stage 2', '', 'May 10, 2025', 'jenopelle', 'https://admin.esports.gg/wp-content/uploads/2025/02/NRG-bench-bonkar-and-verno.jpg', 31, 'https://www.vlr.gg/486413/nrg-adds-skuba-welcomes-back-bonkar-for-stage-2', '2025-05-10 01:45:35', '2025-05-11 13:33:13'),
('news', 'FNS retires', '', 'May 10, 2025', 'jenopelle', 'https://www.dexerto.com/cdn-image/wp-content/uploads/2023/09/20/52990983068_fb6ef595f3_k_1600x900.jpg?width=1200&quality=60&format=auto', 32, 'https://www.vlr.gg/486399/fns-retires', '2025-05-10 01:45:35', '2025-05-11 13:33:23'),
('news', 'NAVI, FUT survive first day of eliminations in EMEA', 'Karmine Corp and Vitality are sent home early.', 'May 10, 2025', 'raezeri', 'https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2021/3/22/vgytsyqh4ve0aexejqqn/futbolist-valorant', 33, 'https://www.vlr.gg/486376/navi-fut-survive-first-day-of-eliminations-in-emea', '2025-05-10 01:45:35', '2025-05-11 13:33:46'),
('news', 'Team Heretics, FNATIC earns Masters Toronto qualification', 'Team Heretics and FNATIC won their upper bracket semifinals against BBL Esports and Team Liquid to qualify for Masters Toronto.', 'May 11, 2025', 'weivy', 'https://owcdn.net/img/681fbccd39449.jpg', 34, 'https://www.vlr.gg/487057/team-heretics-fnatic-earns-masters-toronto-qualification', '2025-05-11 00:11:32', '2025-05-11 13:32:59'),
('news', 'RRQ goes for gold in Pacific playoffs, defeats Paper Rex 3-2', 'Rex Regum Qeon wins first VCT Bo5 to reach Pacific Stage 1 grand final', 'May 10, 2025', 'thothgow', 'https://cdn.ithethao.vn//uploads/2025/05/10/vct-pacific-stage-1-2025-rex-reum-qeon-vuot-qua-paper-rex_251777.jpg', 35, 'https://www.vlr.gg/486760/rrq-goes-for-gold-in-pacific-playoffs-defeats-paper-rex-3-2', '2025-05-11 00:13:27', '2025-05-11 13:32:46'),
('news', 'Rex Regum Qeon overcomes Gen.G, lifts first-ever VCT Trophy', '', 'May 11, 2025', 'jenopelle', 'https://cdn.thespike.gg/.KC%2FGen.G%20and%20Rex%20Regum%20Qeon%20Qualify%20for%20VALORANT%20Masters%20Toronto%20(1080p)_1745824031031.jpeg', 36, 'https://www.vlr.gg/487218/rex-regum-qeon-overcomes-gen-g-lifts-first-ever-vct-trophy', '2025-05-11 12:44:12', '2025-05-11 13:40:39'),
('news', 'Pacific Stage 2 groups drawn', 'The road to Tokyo!', 'May 11, 2025', 'jenopelle', 'https://owcdn.net/img/68209dd0a52ec.jpg', 37, '', '2025-05-11 13:37:17', '2025-05-11 13:40:31'),
('news', 'BBL, Liquid stand one game away from Masters', 'BBL and Liquid remain in contention for the coveted last Toronto spot.', 'May 12, 2025', 'raezeri', 'https://i.ytimg.com/vi/9nqgcso6JZ0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCb_aYbNfoJiOoGQIB67kRc9eRcUw', 38, 'https://www.vlr.gg/487602/bbl-liquid-stand-one-game-away-from-masters', '2025-05-12 00:20:13', '2025-05-12 00:21:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dota2_article`
--
ALTER TABLE `dota2_article`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_guides`
--
ALTER TABLE `game_guides`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `game_highlights`
--
ALTER TABLE `game_highlights`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `proplayers`
--
ALTER TABLE `proplayers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pubg_article`
--
ALTER TABLE `pubg_article`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pubg_schedule`
--
ALTER TABLE `pubg_schedule`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `upcoming_games`
--
ALTER TABLE `upcoming_games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_accounts`
--
ALTER TABLE `user_accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `valorant_article`
--
ALTER TABLE `valorant_article`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dota2_article`
--
ALTER TABLE `dota2_article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `game_guides`
--
ALTER TABLE `game_guides`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `game_highlights`
--
ALTER TABLE `game_highlights`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `proplayers`
--
ALTER TABLE `proplayers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT for table `pubg_article`
--
ALTER TABLE `pubg_article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `pubg_schedule`
--
ALTER TABLE `pubg_schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `upcoming_games`
--
ALTER TABLE `upcoming_games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `user_accounts`
--
ALTER TABLE `user_accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `valorant_article`
--
ALTER TABLE `valorant_article`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
