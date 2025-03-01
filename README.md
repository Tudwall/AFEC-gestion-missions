# Gestionnaire de missions et de candidatures

Ce projet est une application qui permet à des bénévoles de postuler à des missions postées par des associations.

[Schéma de base de données](https://drawsql.app/teams/localhost-12/diagrams/gestionmissions)

### Endpoints API

La documentation des endpoints de l'API est visible sur la route /api

### Mise en place des variables d'environnement

```
PORT = port utilisé par express

DB_HOST = hôte de la base de données
DB_PORT = port de la base de données
DB_USER = nom d'utilisateur
DB_PWD = mot de passe
DATABASE = nom de la base de données

NODE_ENV = "dev" ou "production" pour afficher ou cacher certaines informations

JWT_SECRET = clé secrète pour le jsonwebtoken
```

### Pour démarrer

- Utiliser la branche `main`
- `npm install` pour installer les dépendances
- `npm start` pour démarrer l'application

Les données fournies dans le jeu d'essai sont à titre indicatif et vous aurez besoin de créer un bénévole et une association pour pouvoir profiter des fonctionnalités des routes protégées.

#### Pourquoi SQL/MariaDB ?

J'ai choisi MariaDB car je n'ai pas prévu de changer mes modèles et les données relationnelles ainsi que l'intégrité des données sont des facteurs important pour les fonctionnalités mises en place dans ce projet.
