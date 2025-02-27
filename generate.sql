DROP DATABASE IF EXISTS gestionnaire;

CREATE DATABASE IF NOT EXISTS gestionnaire;

USE gestionnaire;

CREATE TABLE
    volunteer (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        surname VARCHAR(100),
        email VARCHAR(100) UNIQUE NOT NULL,
        pwd VARCHAR(100) NOT NULL,
        isDeleted BOOLEAN NOT NULL DEFAULT FALSE
    );

CREATE TABLE
    organization (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        pwd VARCHAR(100) NOT NULL,
        isDeleted BOOLEAN NOT NULL DEFAULT FALSE
    );

CREATE TABLE
    mission (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(250) NOT NULL,
        missionDetails VARCHAR(2000) NOT NULL,
        missionDate DATETIME NOT NULL,
        orgId INT NOT NULL,
        createdOn DATETIME NOT NULL,
        updatedOn DATETIME,
        isDeleted BOOLEAN NOT NULL DEFAULT FALSE,
        CONSTRAINT fk_orgId FOREIGN KEY (orgId) REFERENCES organization (id)
    );

CREATE TABLE
    application (
        id INT PRIMARY KEY AUTO_INCREMENT,
        status VARCHAR(10) NOT NULL DEFAULT "En attente",
        missionId INT NOT NULL,
        volunteerId INT NOT NULL,
        createdOn DATETIME NOT NULL,
        updatedOn DATETIME,
        isDeleted BOOLEAN NOT NULL DEFAULT FALSE,
        CONSTRAINT chk_status CHECK (status IN ("Acceptée", "Refusée", "En attente")),
        CONSTRAINT fk_missionId FOREIGN KEY (missionId) REFERENCES mission (id),
        CONSTRAINT fk_volunteerId FOREIGN KEY (volunteerId) REFERENCES volunteer (id)
    );