# Gestionnaire de missions et de candidatures

[Schéma de base de données](https://drawsql.app/teams/localhost-12/diagrams/gestionmissions)

### Endpoints API

La documentation des endpoints de l'API est visible sur http://localhost:{PORT}/api

### Mise en place du .env

```
PORT = port utilisé par express
DB_HOST = hôte de la base de données
DB_PORT = port de la base de données
DB_USER = nom d'utilisateur
DB_PWD = mot de passe
DATABASE = nom de la base de données
```

#### Pourquoi SQL/MariaDB ?

J'ai choisi MariaDB car je n'ai pas prévu de changer mes modèles et les données relationnelles ainsi que l'intégrité des données sont des facteurs important pour les fonctionnalités mises en place dans ce projet.
