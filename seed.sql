USE gestionnaire;

INSERT INTO
    volunteer (name, surname, email, pwd)
VALUES
    (
        "John",
        "Doe",
        "john.doe@example.com",
        "$argon2d$v=19$m=65536,t=3,p=4$60xywZvuW3/U+HO0lsxUmA$oDorYOICkzJbQyHON5PAgrF4wCd5/JFJOgMX4w0UOTc"
    ), --mdp: john123
    (
        "Jane",
        "Doe",
        "jane.doe@example.com",
        "$argon2d$v=19$m=65536,t=3,p=4$Z/OGrnZlDxB8iVofHv0hjg$w9mXcJLMA3HMz9mvYQVyN5cNu2wwQ9Dv5yhPwM2GZcw"
    );

--mdp: jane123
INSERT INTO
    organization (name, email, pwd)
VALUES
    (
        "BlueBand",
        "blueband@example.com",
        "$argon2d$v=19$m=65536,t=3,p=4$70SyJ515pUFt67viGIDzXg$u3NU7M3MDCPjqet/dfTUK4z0FIVHalK5M0v5PzJtek8"
    ), --mdp: blueband123
    (
        "Croissantine",
        "contact@croissantine.com",
        "$argon2d$v=19$m=65536,t=3,p=4$n0Ndz2BTess2xLbB3TdJLA$4CB6S6WXRfa4zpNCEsUaReISOkAR0YWzsY7/5X4RUNw"
    );

--mdp: croissant123
INSERT INTO
    mission (title, missionDetails, missionDate, orgId)
VALUES
    (
        "Livraison de croissant",
        "Livraison de croissant aux précaires de viennoiseries",
        "2025-03-11",
        2
    );

INSERT INTO
    application (missionId, volunteerId)
VALUES
    (1, 2)