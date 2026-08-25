-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: extrovis
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `extrovis`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `extrovis` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `extrovis`;

--
-- Table structure for table `adminuser`
--

DROP TABLE IF EXISTS `adminuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adminuser` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `passwordHash` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `AdminUser_email_key` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adminuser`
--

LOCK TABLES `adminuser` WRITE;
/*!40000 ALTER TABLE `adminuser` DISABLE KEYS */;
INSERT INTO `adminuser` VALUES (1,'admin@extrovis.com','$2b$10$2pzWegOY7NcRd95VEOp/dud44UfHkFvOTmXSeHuPxssdM1GQA3nKC','Extrovis Admin','2026-08-19 11:02:38.587');
/*!40000 ALTER TABLE `adminuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `careerapplication`
--

DROP TABLE IF EXISTS `careerapplication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `careerapplication` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cvPath` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isRead` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `careerapplication`
--

LOCK TABLES `careerapplication` WRITE;
/*!40000 ALTER TABLE `careerapplication` DISABLE KEYS */;
/*!40000 ALTER TABLE `careerapplication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `careerbenefit`
--

DROP TABLE IF EXISTS `careerbenefit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `careerbenefit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cardClass` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sortOrder` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `careerbenefit`
--

LOCK TABLES `careerbenefit` WRITE;
/*!40000 ALTER TABLE `careerbenefit` DISABLE KEYS */;
INSERT INTO `careerbenefit` VALUES (4,'International\nOpportunity','/images/careers/international-opportunity.png','international-opportunity',0),(5,'Diverse\nWorkforce','/images/careers/diverse-workforce.png','diverse-workforce',1),(6,'Professional\nDevelopment','/images/careers/professional-development.png','professional-development',2);
/*!40000 ALTER TABLE `careerbenefit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contactsubmission`
--

DROP TABLE IF EXISTS `contactsubmission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contactsubmission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `source` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci,
  `isRead` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactsubmission`
--

LOCK TABLES `contactsubmission` WRITE;
/*!40000 ALTER TABLE `contactsubmission` DISABLE KEYS */;
/*!40000 ALTER TABLE `contactsubmission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `department` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `sortOrder` int NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` VALUES (1,'Open Application','Global','General','Submit a general application via the Work with Us form. Specific openings will be listed here.',1,0,'2026-08-19 11:02:38.773','2026-08-19 11:02:38.773');
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leadershipmember`
--

DROP TABLE IF EXISTS `leadershipmember`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leadershipmember` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortDesc` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullDesc` json NOT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `group` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sortOrder` int NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leadershipmember`
--

LOCK TABLES `leadershipmember` WRITE;
/*!40000 ALTER TABLE `leadershipmember` DISABLE KEYS */;
INSERT INTO `leadershipmember` VALUES (10,'HANS KAMMA','CHIEF EXECUTIVE OFFICER','Hanumantha Rao Kamma (Hans) combines a strong knowledge of industry trends and portfolio strategy with a vast professional network.','[\"Hanumanth Rao Kamma (Hans) has a master\'s degree in International Management from Pondicherry Central University, India. He combines a strong knowledge of industry trends and portfolio strategy with a vast professional network. Prior to his role at Extrovis Switzerland, Hanumantha held various managerial positions in the areas of strategic sourcing, portfolio management and strategic business development at Amneal, Ranbaxy and Dr. Reddy\'s.\"]','/images/leadership/hanumantha-rao-kamma.png','Hanumantha Rao Kamma','executiveBoard',0,'2026-08-19 11:05:17.305','2026-08-19 11:05:17.305'),(11,'P.V.Raghavendra Rao','Group Chief Financial Officer','Raghav is an accomplished chartered accountant and finance leader with about 25 years of comprehensive experience in financial management.','[\"Raghav is an accomplished chartered accountant and finance leader with about 25 years of comprehensive experience in financial management. His expertise spans across accounting, control, project evaluation, financial planning, budgeting, transfer pricing, taxation, costing, and treasury management—including cash flow management, hedging, and securing funds from banks—across diverse regions. Throughout his career, Raghav has assumed numerous leadership positions, where he has been instrumental in establishing and mentoring finance and business teams.\", \"Raghav has held prominent finance leadership positions such as the Chief Financial Officer at Sequent Scientific Limited, Macleods Pharmaceuticals Ltd, and most recently at Solara Active Pharma Sciences. He gained substantial business finance expertise through various roles at Dr. Reddy\'s Laboratories in Hyderabad.\", \"Raghav possesses a deep understanding of strategy development and implementation and has earned a Goldratt Master Executive Certificate in TOC Holistic Management. Over his extensive career, Raghav has contributed as an advisor and consultant, playing key roles on finance steering committees, business leadership councils, and joint steering committees for various business partnerships.\"]','/images/leadership/p-v-raghavendra-rao.png','P.V.Raghavendra Rao','executiveBoard',1,'2026-08-19 11:05:17.310','2026-08-19 11:05:17.310'),(12,'Dr. Janos Vaczi','HEAD CORPORATE DEVELOPMENT & SPECIAL PROJECTS','Janos brings decades of leadership experience from multinational corporations.','[\"Before joining Extrovis in Switzerland, Janos held various general management and P&L responsibilities at Amneal based in Switzerland, Alliance Healthcare (now part of Walgreens Boots Alliance), Ratiopharm (now part of the Teva Group) and Sanofi. Janos has a Summa Cum Laude degree from the Szent-Györgyi Albert Medical University in Szeged, Hungary.\"]','/images/leadership/dr-janos-vaczi.png','Dr. Janos Vaczi','executiveBoard',2,'2026-08-19 11:05:17.315','2026-08-19 11:05:17.315'),(13,'Krishna Yeachuri','Board Member Latina Pharma, Rome','Krishna brings over 35 years of experience in financial management, operations,','[\"Krishna brings over 35 years of experience in financial management, operations, and board governance across diverse industries. His extensive background in financial consulting and strategic oversight has helped guide organizations toward sustained growth, operational excellence, and long term profitability. With a deep understanding of corporate governance and sound financial stewardship, Krishna continues to play a pivotal role in enabling businesses to scale responsibly and build strong organizational foundations.\"]','/images/leadership/Krishna-yechuri.png','Krishna Yeachuri','executiveBoard',3,'2026-08-19 11:05:17.319','2026-08-19 11:05:17.319'),(14,'Srinivasan Pagadala','Chief Human Resource Officer','Srini comes with over 25 years of extensive experience in human resources management within the Pharma and Healthcare sectors. He specializes in Business HR, Change Leadership and Transformation, Talent Management, and Employee Relations.','[\"Srini comes with over 25 years of extensive experience in human resources management within the Pharma and Healthcare sectors. He specializes in Business HR, Change Leadership and Transformation, Talent Management, and Employee Relations. Throughout his career, he has held various HR senior and responsible positions in top pharmaceutical organizations such as Dr. Reddy\'s, Novartis, GVK Bio, and Biological E. Before his current role at Extrovis, Srini led the HR function at Solara Active Pharma.\"]','/images/leadership/srinivasan-pagadala.png','Srinivasan Pagadala','leadershipTeam',0,'2026-08-19 11:05:17.325','2026-08-19 11:05:17.325'),(15,'Mathijs Steegstra','GLOBAL HEAD OF SCIENTIFIC AFFAIRS','Mathijs Steegstra has worked in the pharmaceutical industry for more than 20 years, always in Quality and Regulatory roles covering USA, Europe and MENA.','[\"Mathijs Steegstra has worked in the pharmaceutical industry for more than 20 years, always in Quality and Regulatory roles covering USA, Europe and MENA. With experience in both innovator and generics, he has set up RA infrastructures for newly formed companies and optimized them for established companies.\", \"He obtained multiple Marketing Authorization approvals for various types of products ranging from NCE\'s to repurposed molecules to complex generics. He was responsible for the quality of multiple sites, including sterile production sites and has handled remediation projects for several sites. Originally from the Netherlands, he studied pharmacy at the University of Groningen and holds a pharmacist\'s degree, specializing in molecular pharmacology.\"]','/images/leadership/mathijs-steegstra.png','Mathijs Steegstra','leadershipTeam',1,'2026-08-19 11:05:17.331','2026-08-19 11:05:17.331'),(16,'Sudeep Kumar Agrawal','Chief Scientific Officer','In his role as CSO, Sudeep will Lead the R&D functions at Extrovis based out of Hyderabad. With over 30 years of experience in pharmaceutical R&D, Sudeep brings deep scientific, technical, and strategic expertise across parenteral, ophthalmic, oral, and complex injectable products.','[\"Sudeep has successfully led global, multi-disciplinary R&D teams for end-end development of products for regulated markets including the US, EU, Australia, and South Africa. His previous leadership roles include EVP–R&D at Shilpa Medicare, VP–R&D at Sun Pharma, and senior positions at Hospira, Orchid Pharma, Dr. Reddy\'s, and Zydus Cadila. He has been instrumental in several first-to-file, complex generics, and commercial product launches across categories.\", \"He holds advanced qualifications in Pharmaceutical Sciences, International Business, Project Management, Intellectual Property, and Executive Leadership.\"]','/images/leadership/Sudeep-Kumar-Agrawal.png','Sudeep Kumar Agrawal','leadershipTeam',2,'2026-08-19 11:05:17.337','2026-08-19 11:05:17.337'),(17,'Dr. Suryanarayana Regulagadda','GLOBAL HEAD OF ANALYTICAL SCIENCES AND TECHNOLOGY','Dr. Suryanarayana Regulagadda comes with more than two decades of experience in pharmaceutical industry in Analytical Research & Development.','[\"Dr. Suryanarayana Regulagadda comes with more than two decades of experience within the pharmaceutical industry in Analytical Research & Development. His expertise spans across a wide range of peptides and complex molecules, optimizing laboratory operations, ensuring robust method development and validation, and spearheading technology adoption within the regulatory framework catering to USFDA, MHRA, ENVISA developments in API and formulations. Surya is a postgraduate in chemistry – he worked with Eugia Pharma, Alembic, Dr. Reddy\'s and Concord Laboratories, Qualitest Pharmaceuticals in the US. At Extrovis, Surya leads the analytical development & services portfolio for the group.\"]','/images/leadership/dr-suryanarayana-regulagadda.png','Dr. Suryanarayana Regulagadda','leadershipTeam',3,'2026-08-19 11:05:17.348','2026-08-19 11:05:17.348'),(18,'Amit Tiwari','Head Business Development','Amit Tiwari is an accomplished business development leader with extensive global experience in pharmaceuticals and life sciences.','[\"He currently serves as the Head of Business Development at EXTROVIS, a role he has held since December 2023. Previously, he was the Director of Business Development at Develco Pharma Schweiz AG, overseeing global business development, licensing activities, and portfolio strategy.\", \"A significant part of Amit\'s career was spent at Amneal Pharmaceuticals, where he served as Associate Director of Global Business Development & Strategy for Europe, driving in licensing, out licensing, and alliance management initiatives. His professional background also includes participation in the Global Leadership Program at Ranbaxy, strategic sourcing and business development at Dr. Reddy\'s Laboratories, and process development work at Tata Consultancy Services.\", \"Amit holds an M&A and Corporate Strategy specialization from INSEAD, an MBA from the Indian Institute of Technology, Madras, and a BS in Manufacturing Engineering from Delhi University.\"]','/images/leadership/amit-tiwari.png','Amit Tiwari','leadershipTeam',4,'2026-08-19 11:05:17.354','2026-08-19 11:05:17.354');
/*!40000 ALTER TABLE `leadershipmember` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `office`
--

DROP TABLE IF EXISTS `office`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `office` (
  `id` int NOT NULL AUTO_INCREMENT,
  `officeKey` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mapImage` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lineImage` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` json NOT NULL,
  `defaultOpen` tinyint(1) NOT NULL DEFAULT '0',
  `sortOrder` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Office_officeKey_key` (`officeKey`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `office`
--

LOCK TABLES `office` WRITE;
/*!40000 ALTER TABLE `office` DISABLE KEYS */;
INSERT INTO `office` VALUES (4,'usa','Kavis Pharma LLC','USA','/images/map/usa-map.svg','/images/map/usa-line.svg','[\"Bahnhof-Park 4\", \"Baar 6340\", \"+41 41 740 1120\"]',0,0),(5,'switzerland','Extrovis AG','Switzerland','/images/map/switzerland-map.svg','/images/map/switzerland-line.svg','[]',1,1),(6,'hungary-1','Pharma Pack Ltd','Hungary','/images/map/hungary-map.svg','/images/map/hungary-line-1.svg','[\"Bahnhof-Park 4\", \"Baar 6340\", \"+41 41 740 1120\"]',0,2),(7,'hungary-2','Extrovis EU Ltd','Hungary','/images/map/hungary-map.svg','/images/map/hungary-line-2.svg','[\"Bahnhof-Park 4\", \"Baar 6340\", \"+41 41 740 1120\"]',0,3),(8,'italy','Latina Pharma SpA','Italy','/images/map/italy-map.svg','/images/map/italy-line.svg','[\"Bahnhof-Park 4\", \"Baar 6340\", \"+41 41 740 1120\"]',0,4),(9,'india-1','R & D Manufactureing','Pune','/images/map/india-map-2.svg','/images/map/india-line-1.svg','[\"Bahnhof-Park 4\", \"Baar 6340\", \"+41 41 740 1120\"]',0,5),(10,'india-2','R & D Drug Product & Drug Substances','Hyderabad','/images/map/india-map-2.svg','/images/map/india-line-2.svg','[\"Bahnhof-Park 4\", \"Baar 6340\", \"+41 41 740 1120\"]',0,6);
/*!40000 ALTER TABLE `office` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagecontent`
--

DROP TABLE IF EXISTS `pagecontent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagecontent` (
  `id` int NOT NULL AUTO_INCREMENT,
  `slug` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `data` json NOT NULL,
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `PageContent_slug_key` (`slug`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagecontent`
--

LOCK TABLES `pagecontent` WRITE;
/*!40000 ALTER TABLE `pagecontent` DISABLE KEYS */;
INSERT INTO `pagecontent` VALUES (1,'home','{\"hero\": {\"body\": \"We partner with the world\'s leading pharmaceutical companies to develop and manufacture complex therapeutics that improve patient outcomes worldwide.\", \"tagline\": \"Dedicated to Better\", \"headline\": \"Advancing the Future of Specialty Medicine\"}, \"ourWayCards\": [{\"title\": \"Healthcare-Centric Innovation\", \"bgImage\": \"/images/home/our-way-bg-2.png\", \"trapeze\": \"/images/home/our-way-trapeze-1.svg\", \"description\": \"We focus on creating solutions that improve treatment delivery and practical use for patients and healthcare providers.\"}, {\"title\": \"Partnership with Purpose\", \"bgImage\": \"/images/home/our-way-bg-4.png\", \"trapeze\": \"/images/home/our-way-trapeze-2.svg\", \"description\": \"We collaborate with global pharmaceutical companies through long-term, strategic alliances grounded in shared responsibility.\"}, {\"title\": \"Excellence in Specialty Manufacturing\", \"bgImage\": \"/images/home/our-way-bg-3.png\", \"trapeze\": \"/images/home/our-way-trapeze-3.svg\", \"description\": \"We are committed to high-value, high-precision therapeutic categories where quality and continuity are critical.\"}], \"contactIntro\": {\"title\": \"Get in touch\", \"paragraphs\": [\"Whether you would like to explore the future of medicine or learn more about our global network and innovative solutions, use this form to send us your name and e-mail address.\", \"Our customer service team will be in contact soon.\"]}, \"serviceCards\": [{\"title\": \"R&D Excellence\", \"blueIcon\": \"/images/home/what-we-offer-1-blue.svg\", \"lightIcon\": \"/images/home/what-we-offer-1-light.svg\", \"description\": \"Next-generation drug-device combinations, advanced delivery systems, peptides, sterile injectables, and platform technologies engineered to solve clinical and patient pain points.\"}, {\"title\": \"Global Manufacturing\", \"blueIcon\": \"/images/home/what-we-offer-2-blue.svg\", \"lightIcon\": \"/images/home/what-we-offer-2-light.svg\", \"description\": \"USFDA- and EU-GMP-approved facilities delivering high-containment manufacturing, sterile antibiotics, oncology formulations, and specialized dosage forms at global scale.\"}, {\"title\": \"Strategic Partnership\", \"blueIcon\": \"/images/home/what-we-offer-3-blue.svg\", \"lightIcon\": \"/images/home/what-we-offer-3-light.svg\", \"description\": \"Collaborative models built around speed, flexibility, and reliability — empowering our partners to accelerate development and global market access.\"}], \"leadershipCta\": {\"body\": \"Our leadership team brings decades of global experience across research, regulatory sciences, manufacturing, and commercialization — steering Extrovis with clarity, responsibility, and long-term vision.\", \"title\": \"Leadership with Purpose\", \"ctaHref\": \"/leadership/\", \"ctaLabel\": \"Meet our leadership team\"}, \"servicesIntro\": {\"title\": \"At the Heart of Evolving Therapies\", \"closing\": \"We enable safer, smarter, and more accessible medicines - from molecule to market.\", \"paragraphs\": [\"Extrovis is an Indo-Swiss global CRDMO committed to the successful delivery of innovative and complex therapeutics to patients worldwide. Our global team, of scientific and manufacturing experts brings decades of experience, supported by state-of-the-art manufacturing infrastructure across India, Europe, and the United States.\", \"Extrovis partners with customers to meet the evolving expectations of regulatory and government agencies, while effectively navigating supply-chain complexities in global markets.\", \"Our capabilities span sterile antibiotics (APIs and dosage forms), cytotoxic formulations (OSDs, injectables, and topicals), and female hormone products, serving regulated markets across the globe.\"]}, \"advancingMedicine\": {\"title\": \"Advancing Medicine\", \"pillars\": [{\"image\": \"/images/home/extrovis-group-1.png\", \"title\": \"Research\", \"description\": \"Our research centres operate at the heart of new and differentiated FDFs, APIs and Intermediates, with strategy and development teams in India, the EU and US.\"}, {\"image\": \"/images/home/extrovis-group-2.png\", \"title\": \"Manufacturing\", \"description\": \"Extrovis Group operates a worldwide network of state-of-the-art manufacturing facilities that comply with the highest international quality standards and accreditations from all major global regulatory bodies.\"}, {\"image\": \"/images/home/extrovis-group-3.png\", \"title\": \"Commercial\", \"description\": \"A global supply chain with an international customer care hub and local capabilities for key activities guarantees that we can deliver innovative solutions improving compliance and convenience.\"}], \"subtitle\": \"Innovating to improve lives\"}}','2026-08-19 11:13:36.527'),(2,'who-we-are','{\"usps\": [{\"delay\": \"\", \"image\": \"/images/our-company/innovative-products.svg\", \"title\": \"Innovative Products\"}, {\"delay\": \" delay-200\", \"image\": \"/images/our-company/quality-assurance.svg\", \"title\": \"Quality assurance\"}, {\"delay\": \" delay-400\", \"image\": \"/images/our-company/worldwide-supply-chain.svg\", \"title\": \"Worldwide supply chain\"}, {\"delay\": \" delay-600\", \"image\": \"/images/our-company/ethical-operations.svg\", \"title\": \"Ethical operations\"}], \"teamStats\": [{\"count\": 250, \"delay\": \"\", \"label\": \"Research & development\"}, {\"count\": 450, \"delay\": \" delay-200\", \"label\": \"MANUFACTURING AND QUALITY\"}, {\"count\": 50, \"delay\": \" delay-400\", \"label\": \"REGULATORY, CLINICAL & PRODUCT DELIVERY\"}, {\"count\": 750, \"delay\": \" delay-400\", \"label\": \"Total FTEs\"}]}','2026-08-19 11:05:17.267'),(3,'what-we-offer','{\"intro\": {\"image\": \"/images/our-company/reliable-supply-chain.png\", \"title\": \"Integrated Expertise | Global Execution | Reliable Outcomes\", \"imageAlt\": \"Reliable supply chain\", \"paragraphs\": [\"Extrovis integrates scientific depth, manufacturing expertise, and global execution to advance complex dosage forms—from oncology solids and parenterals to liquids and topicals—efficiently and compliantly.\", \"Backed by decades of experience in sterile antibiotics and highly potent products, and supported by US FDA, EU GMP, and PMDA-accredited facilities, we deliver consistent quality from clinical development through commercial scale.\", \"Our streamlined supply chain, disciplined project management and regulatory pathway ensure reliable market access across 50+ countries.\"]}, \"offerings\": [{\"href\": \"/research-development/\", \"delay\": \"\", \"title\": \"R & D\", \"cardClass\": \"therapeutically-relevant-molecules\", \"description\": \"We develop novel and differentiated dosage forms in an increasingly complex environment, driven by advanced delivery technologies in a dynamic global regulatory landscape.\"}, {\"href\": \"/manufacturing/\", \"delay\": \" delay-200\", \"title\": \"Manufacturing\", \"cardClass\": \"intensive-characterisation\", \"description\": \"Our robust technology transfer processes enable rapid program initiation, while advanced process analytical technologies enhance operational efficiency and cost effectiveness\"}, {\"href\": \"/supply-chain/\", \"delay\": \" delay-400\", \"title\": \"Supply Chain… Truly Global\", \"cardClass\": \"therapeutically-relevant-molecules\", \"description\": \"As a pharmaceutical CDMO, Extrovis is uniquely positioned to support clients worldwide, delivering reliable and compliant solutions across more than 50 markets.\"}]}','2026-08-19 11:05:17.277'),(4,'work-with-us','{\"intro\": {\"image\": \"/images/careers/unique-opportunity.png\", \"title\": \"Unique opportunity\", \"imageAlt\": \"Unique opportunity\", \"paragraphs\": [\"We aim to create a working environment where you are given professional opportunities to employ your skill set and evolve into other areas of proficiency.\", \"Your gender, your religion or political orientation and your skin colour are of no consequence to us. You earn merits based on your enthusiasm, open-mindedness, and engagement.\", \"We are based out of Switzerland with offices at multiple locations globally. We are looking to hire progressive employees who are passionate about their work wherever they are.\"]}, \"hrEmail\": \"hr@extrovis.com\", \"applyBody\": \"Please submit your CV and application below, or send an e-mail to hr@extrovis.com.\", \"applyTitle\": \"Apply Now\"}','2026-08-19 11:05:17.283'),(5,'get-in-touch','{\"corporate\": {\"email\": \"info@extrovis.com\", \"lines\": [\"Bahnhof-Park 4\", \"Baar 6340\", \"Switzerland\"], \"phone\": \"+41 41 740 1120\"}, \"brandTitle\": \"Extrovis\", \"corporateLabel\": \"Global Corporate Office\"}','2026-08-19 11:05:17.288'),(6,'leadership','{\"intro\": \"Our leadership team brings decades of global experience across research, regulatory sciences, manufacturing, and commercialization.\", \"title\": \"Leadership\"}','2026-08-19 11:05:17.294');
/*!40000 ALTER TABLE `pagecontent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'extrovis'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-08-25 11:13:01
