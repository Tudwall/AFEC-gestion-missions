USE gestionnaire;

INSERT INTO
    volunteer (name, surname, email, pwd)
VALUES
    ("John", "Doe", "john.doe@example.com", "john123"),
    ("Jane", "Doe", "jane.doe@example.com", "jane123");

INSERT INTO
    organization (name, email, pwd)
VALUES
    ("BlueBand", "blueband@example.com", "blueband123"),
    (
        "Croissantine",
        "contact@croissantine.com",
        "croissant123"
    );

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