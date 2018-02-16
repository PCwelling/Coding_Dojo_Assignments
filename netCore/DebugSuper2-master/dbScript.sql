-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema superherodb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema superherodb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `superherodb` DEFAULT CHARACTER SET utf8 ;
USE `superherodb` ;

-- -----------------------------------------------------
-- Table `superherodb`.`teams`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superherodb`.`teams` (
  `TeamId` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NULL,
  PRIMARY KEY (`TeamId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `superherodb`.`heroes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `superherodb`.`heroes` (
  `HeroId` INT NOT NULL AUTO_INCREMENT,
  `RealName` VARCHAR(45) NULL,
  `SuperheroName` VARCHAR(45) NULL,
  `IsVillain` TINYINT NULL,
  `Power` VARCHAR(45) NULL,
  `TeamId` INT NOT NULL,
  PRIMARY KEY (`HeroId`),
  INDEX `fk_heroes_teams_idx` (`TeamId` ASC),
  CONSTRAINT `fk_heroes_teams`
    FOREIGN KEY (`TeamId`)
    REFERENCES `superherodb`.`teams` (`TeamId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
