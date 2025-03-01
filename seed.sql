USE gestionnaire;

INSERT INTO
    volunteer (name, surname, email, pwd, createdOn)
VALUES
    ("John", "Doe", "john.doe@example.com", "john123", "2025-02-27"),
    ("Jane", "Doe", "jane.doe@example.com", "jane123", "2025-02-27");

INSERT INTO
    organization (name, email, pwd, createdOn)
VALUES
    ("BlueBand", "blueband@example.com", "blueband123", "2025-02-27"),
    (
        "Croissantine",
        "contact@croissantine.com",
        "croissant123", "2025-02-27"
    );

INSERT INTO
    mission (title, missionDetails, missionDate, orgId, createdOn)
VALUES
    (
        "Livraison de croissant",
        "Livraison de croissant aux précaires de viennoiseries",
        "2025-03-11",
        2,
        "2025-02-26"
    );

INSERT INTO
    application (missionId, volunteerId, createdOn)
VALUES
    (1, 2, "2025-02-26")