# 🎓 School Attendance Management System

## 1. Présentation du projet

**School Attendance Management System** est une application web destinée à digitaliser et simplifier la gestion des absences et des retards au sein d'un établissement scolaire ou universitaire.

L'application permet de centraliser les informations relatives à l'assiduité des étudiants, de faciliter le travail des enseignants et du service de scolarité, et de fournir un suivi précis de la présence des étudiants.

Elle propose différents espaces selon le rôle de l'utilisateur :

- Administrateur
- Enseignant
- Responsable pédagogique
- Étudiant

### Objectifs du projet

- Digitaliser la gestion des absences.
- Faciliter la saisie des présences par les enseignants.
- Permettre aux étudiants de consulter leur situation.
- Centraliser les données relatives à l'assiduité.
- Automatiser le suivi des absences et des retards.
- Générer des statistiques et des rapports.
- Améliorer la communication entre les étudiants, les enseignants et l'administration.

---

## 2. Acteurs du système

| Acteur | Responsabilités |
|---|---|
| Administrateur | Gestion globale de la plateforme |
| Enseignant | Gestion des présences et des absences |
| Responsable pédagogique | Suivi de l'assiduité et validation des justificatifs |
| Étudiant | Consultation de ses absences et soumission des justificatifs |

---

## 3. Fonctionnalités principales

### 3.1. Authentification et gestion des utilisateurs

- Connexion et déconnexion.
- Authentification sécurisée.
- Gestion des rôles et permissions.
- Modification du profil utilisateur.
- Réinitialisation du mot de passe.
- Protection des routes selon le rôle.

### 3.2. Gestion administrative

- Ajouter, modifier et supprimer des étudiants.
- Ajouter, modifier et supprimer des enseignants.
- Créer et gérer les groupes et les classes.
- Gérer les filières et les niveaux d'études.
- Gérer les années universitaires et les semestres.
- Gérer les modules et les matières.
- Affecter les enseignants aux groupes et aux modules.
- Consulter toutes les absences de l'établissement.

### 3.3. Gestion des présences et des absences

- Enregistrer les présences des étudiants.
- Enregistrer les absences.
- Enregistrer les retards.
- Associer chaque absence à une séance.
- Consulter l'historique des absences.
- Modifier une feuille de présence.
- Éviter les doublons d'enregistrement.
- Distinguer les absences justifiées et non justifiées.

### 3.4. Gestion des justificatifs

- Soumettre un justificatif d'absence.
- Joindre un document justificatif (PDF, JPG, PNG).
- Consulter les justificatifs.
- Accepter ou refuser une demande.
- Ajouter un commentaire à une décision.
- Suivre le statut d'une demande.

Statuts possibles :

- En attente
- Acceptée
- Refusée

### 3.5. Tableau de bord et statistiques

- Nombre total d'étudiants.
- Nombre total d'absences.
- Nombre de retards.
- Taux global d'assiduité.
- Statistiques par classe.
- Statistiques par module.
- Statistiques par enseignant.
- Statistiques par période.
- Identification des étudiants ayant dépassé le seuil d'absence autorisé.

### 3.6. Notifications

- Notification lorsqu'une absence est enregistrée.
- Notification lorsqu'un justificatif est accepté ou refusé.
- Alerte lorsqu'un étudiant dépasse le seuil d'absence.
- Notifications relatives aux changements de statut.

### 3.7. Exportation et rapports

- Génération des rapports d'absences en PDF.
- Exportation des données en Excel.
- Filtrage par étudiant, groupe, module et période.
- Génération des relevés individuels d'assiduité.

---

# 4. User Stories – Besoins fonctionnels

Les fonctionnalités de l'application sont définies sous forme de User Stories selon la méthodologie Agile Scrum.

Format utilisé :

**En tant que [acteur], je peux [action] afin de [objectif].**

## 4.1. User Stories – Administrateur

- **US01 :** En tant qu'administrateur, je peux me connecter à la plateforme afin d'accéder à mon espace de gestion.
- **US02 :** En tant qu'administrateur, je peux ajouter un étudiant afin de l'enregistrer dans le système.
- **US03 :** En tant qu'administrateur, je peux modifier les informations d'un étudiant afin de maintenir ses données à jour.
- **US04 :** En tant qu'administrateur, je peux supprimer un étudiant afin de gérer les inscriptions.
- **US05 :** En tant qu'administrateur, je peux ajouter et gérer les enseignants.
- **US06 :** En tant qu'administrateur, je peux créer et gérer les groupes et les classes.
- **US07 :** En tant qu'administrateur, je peux créer et gérer les filières et les niveaux d'études.
- **US08 :** En tant qu'administrateur, je peux créer et gérer les modules.
- **US09 :** En tant qu'administrateur, je peux affecter un enseignant à un module et à un groupe.
- **US10 :** En tant qu'administrateur, je peux consulter toutes les absences de l'établissement.
- **US11 :** En tant qu'administrateur, je peux modifier ou supprimer une absence en cas d'erreur.
- **US12 :** En tant qu'administrateur, je peux consulter les statistiques d'absences par étudiant, groupe, module et période.
- **US13 :** En tant qu'administrateur, je peux identifier les étudiants ayant dépassé le seuil d'absence autorisé.
- **US14 :** En tant qu'administrateur, je peux exporter les rapports d'absences au format PDF ou Excel.

## 4.2. User Stories – Enseignant

- **US15 :** En tant qu'enseignant, je peux me connecter à mon espace personnel.
- **US16 :** En tant qu'enseignant, je peux consulter mon emploi du temps.
- **US17 :** En tant qu'enseignant, je peux consulter la liste des étudiants de mes groupes.
- **US18 :** En tant qu'enseignant, je peux sélectionner une séance afin de gérer les présences.
- **US19 :** En tant qu'enseignant, je peux enregistrer les absences des étudiants pendant un cours.
- **US20 :** En tant qu'enseignant, je peux signaler un retard pour un étudiant.
- **US21 :** En tant qu'enseignant, je peux modifier une feuille de présence en cas d'erreur.
- **US22 :** En tant qu'enseignant, je peux consulter l'historique des absences de mes groupes.
- **US23 :** En tant qu'enseignant, je peux consulter le nombre d'absences d'un étudiant.
- **US24 :** En tant qu'enseignant, je peux filtrer les absences par date, groupe et module.
- **US25 :** En tant qu'enseignant, je peux consulter le statut des justificatifs de mes étudiants.

## 4.3. User Stories – Étudiant

- **US26 :** En tant qu'étudiant, je peux me connecter à mon espace personnel.
- **US27 :** En tant qu'étudiant, je peux consulter mon profil et mes informations scolaires.
- **US28 :** En tant qu'étudiant, je peux consulter mon historique d'absences.
- **US29 :** En tant qu'étudiant, je peux consulter mes absences par module.
- **US30 :** En tant qu'étudiant, je peux distinguer mes absences justifiées et non justifiées.
- **US31 :** En tant qu'étudiant, je peux consulter mon nombre total d'heures d'absence.
- **US32 :** En tant qu'étudiant, je peux consulter mon taux d'assiduité.
- **US33 :** En tant qu'étudiant, je peux recevoir une notification lorsqu'une nouvelle absence est enregistrée.
- **US34 :** En tant qu'étudiant, je peux soumettre un justificatif afin de demander la régularisation de mon absence.
- **US35 :** En tant qu'étudiant, je peux consulter le statut de ma demande de justification.
- **US36 :** En tant qu'étudiant, je peux consulter les commentaires associés à une demande refusée.

## 4.4. User Stories – Responsable pédagogique / Service de scolarité

- **US37 :** En tant que responsable pédagogique, je peux consulter les absences de tous les groupes dont j'ai la responsabilité.
- **US38 :** En tant que responsable pédagogique, je peux suivre l'assiduité des étudiants par semestre.
- **US39 :** En tant que responsable pédagogique, je peux identifier les étudiants présentant un taux d'absence élevé.
- **US40 :** En tant que responsable pédagogique, je peux consulter les justificatifs déposés par les étudiants.
- **US41 :** En tant que responsable pédagogique, je peux accepter ou refuser une demande de justification.
- **US42 :** En tant que responsable pédagogique, je peux ajouter un commentaire à une décision.
- **US43 :** En tant que responsable pédagogique, je peux générer un rapport d'assiduité pour une classe ou une filière.
- **US44 :** En tant que responsable pédagogique, je peux consulter les statistiques globales de l'établissement.

---

# 5. Critères d'acceptation (Acceptance Criteria)

Chaque User Story doit être accompagnée de critères permettant de vérifier le bon fonctionnement de la fonctionnalité.

## Exemple 1 : Enregistrement d'une absence

**US19 : En tant qu'enseignant, je peux enregistrer l'absence d'un étudiant pendant une séance afin d'assurer le suivi de son assiduité.**

Critères d'acceptation :

1. L'enseignant doit être authentifié.
2. L'enseignant doit sélectionner un groupe et un module qui lui sont affectés.
3. Le système affiche la liste des étudiants concernés.
4. L'enseignant peut sélectionner un ou plusieurs étudiants absents.
5. Le système enregistre la date, le module, le groupe et la séance.
6. Le système empêche l'enregistrement de doublons pour une même séance.
7. L'absence apparaît dans l'historique de l'étudiant.
8. L'étudiant peut consulter cette absence depuis son espace personnel.

## Exemple 2 : Justification d'une absence

**US34 : En tant qu'étudiant, je peux soumettre un justificatif afin de demander la régularisation de mon absence.**

Critères d'acceptation :

1. L'étudiant doit être authentifié.
2. L'étudiant sélectionne l'absence concernée.
3. L'étudiant joint un document justificatif.
4. Le système vérifie le format et la taille du document.
5. Le système enregistre la demande avec le statut « En attente ».
6. Le responsable pédagogique peut accepter ou refuser la demande.
7. L'étudiant reçoit une notification concernant la décision.

## Exemple 3 : Validation d'un justificatif

**US41 : En tant que responsable pédagogique, je peux accepter ou refuser une demande de justification.**

Critères d'acceptation :

1. Le responsable pédagogique doit être authentifié.
2. Il peut consulter les demandes en attente.
3. Il peut consulter le justificatif associé.
4. Il peut accepter ou refuser la demande.
5. Il peut ajouter un commentaire.
6. Le statut de la demande est mis à jour.
7. L'étudiant reçoit une notification.

---

# 6. Règles de gestion

Les règles suivantes définissent le fonctionnement métier de l'application.

- Chaque utilisateur possède un compte personnel.
- Chaque utilisateur possède un rôle déterminant ses permissions.
- Un enseignant ne peut enregistrer des présences que pour les groupes et modules qui lui sont affectés.
- Chaque séance est associée à un groupe, un module, un enseignant, une date et un horaire.
- Un étudiant ne peut avoir qu'un seul enregistrement de présence par séance.
- Chaque étudiant peut avoir l'un des statuts suivants pour une séance : Présent, Absent ou En retard.
- Une absence peut être justifiée ou non justifiée.
- Une demande de justification doit être associée à une absence existante.
- Seul un utilisateur autorisé peut valider ou refuser un justificatif.
- Un étudiant ne peut consulter que ses propres informations.
- Les statistiques doivent être calculées à partir des données enregistrées.
- Les données doivent être conservées par année universitaire.

---

# 7. Technologies utilisées

L'application repose sur l'architecture MERN Stack.

| Technologie | Utilisation |
|---|---|
| React.js avec Create React App | Développement de l'interface utilisateur |
| Node.js | Environnement d'exécution backend |
| Express.js | Création de l'API REST |
| MongoDB | Base de données NoSQL |
| Mongoose | Modélisation des données |
| JWT | Authentification |
| bcryptjs | Hachage des mots de passe |
| Axios | Communication frontend/backend |
| CSS | Mise en forme de l'interface |
| Git & GitHub | Gestion de versions et collaboration |
| Postman | Tests de l'API REST |

**Important :** le frontend doit être créé avec Create React App (CRA). L'utilisation de Vite n'est pas prévue dans ce projet.

---

# 8. Architecture du projet

L'application est organisée en deux parties principales : frontend et backend.

```text
school-attendance/
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── auth/
│   │   │   ├── admin/
│   │   │   ├── teacher/
│   │   │   ├── student/
│   │   │   └── academic-manager/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── routes/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   │   ├── User.js
│   │   ├── Academic.js
│   │   ├── Assignment.js
│   │   ├── Session.js
│   │   ├── Attendance.js
│   │   ├── Notification.js
│   │   └── AuditLog.js
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

### Organisation du frontend

- `components/` : composants réutilisables.
- `pages/` : pages de l'application selon les rôles.
- `layouts/` : structures communes des interfaces.
- `services/` : appels vers l'API avec Axios.
- `hooks/` : hooks React personnalisés.
- `context/` : gestion globale de l'authentification et des données.
- `routes/` : configuration des routes et des accès protégés.

### Organisation du backend

- `config/` : configuration de MongoDB.
- `controllers/` : traitement des requêtes HTTP.
- `middlewares/` : authentification, autorisations et validations.
- `models/` : modèles Mongoose.
- `routes/` : définition des endpoints.
- `services/` : logique métier.
- `utils/` : fonctions utilitaires.

---

# 9. Modélisation de la base de données

Pour limiter la complexité et éviter de multiplier inutilement les collections, le projet utilise **7 modèles principaux**.

| Modèle | Responsabilité |
|---|---|
| User | Comptes des administrateurs, enseignants, étudiants et responsables pédagogiques |
| Academic | Années universitaires, semestres, filières, groupes et modules |
| Assignment | Affectations des enseignants aux groupes et modules |
| Session | Séances de cours |
| Attendance | Présences, absences, retards et justificatifs |
| Notification | Notifications des utilisateurs |
| AuditLog | Historique des actions importantes |

## 9.1. User.js

Ce modèle centralise tous les comptes utilisateurs.

Champs principaux :

- `firstName`
- `lastName`
- `email`
- `password`
- `role`
- `phone`
- `isActive`
- `studentProfile`
- `teacherProfile`

Rôles possibles :

- `admin`
- `teacher`
- `student`
- `academic_manager`

Le profil étudiant peut contenir :

- Numéro étudiant.
- Groupe.
- Année d'inscription.
- Informations scolaires.

Le profil enseignant peut contenir :

- Numéro employé.
- Spécialité.
- Département.
- Date d'embauche.

Les mots de passe doivent être hachés avec bcryptjs avant leur enregistrement.

## 9.2. Academic.js

Ce modèle centralise l'organisation pédagogique de l'établissement.

Il contient des sous-documents pour :

- Années universitaires.
- Semestres.
- Filières.
- Niveaux d'études.
- Groupes et classes.
- Modules et matières.

L'objectif est de regrouper les informations pédagogiques dans un seul modèle plutôt que de créer une collection distincte pour chaque élément.

## 9.3. Assignment.js

Ce modèle représente les affectations pédagogiques.

Champs principaux :

- `teacher` : référence vers User.
- `moduleId` : identifiant du module.
- `groupId` : identifiant du groupe.
- `semesterId` : identifiant du semestre.
- `academicYearId` : identifiant de l'année universitaire.

Il permet de déterminer les groupes et les modules accessibles à chaque enseignant.

## 9.4. Session.js

Ce modèle représente une séance de cours.

Champs principaux :

- `assignment` : référence vers Assignment.
- `date`
- `startTime`
- `endTime`
- `room`
- `type`
- `status`

Chaque séance est liée à une affectation pédagogique.

## 9.5. Attendance.js

Ce modèle centralise les enregistrements d'assiduité.

Champs principaux :

- `student` : référence vers User.
- `session` : référence vers Session.
- `status` : Present, Absent ou Late.
- `justification` : sous-document contenant les informations du justificatif.
- `createdAt`
- `updatedAt`

Le sous-document `justification` peut contenir :

- `fileUrl`
- `submittedAt`
- `status` : Pending, Approved ou Rejected.
- `reviewedBy`
- `reviewedAt`
- `comment`

Le justificatif est donc intégré au modèle Attendance : il n'est pas nécessaire de créer une collection supplémentaire.

## 9.6. Notification.js

Ce modèle permet d'enregistrer les notifications destinées aux utilisateurs.

Champs principaux :

- `user`
- `title`
- `message`
- `type`
- `isRead`
- `createdAt`

## 9.7. AuditLog.js

Ce modèle conserve une trace des actions importantes réalisées sur la plateforme.

Champs principaux :

- `user`
- `action`
- `entity`
- `entityId`
- `details`
- `createdAt`

### Relations principales

- Un groupe contient plusieurs étudiants.
- Un enseignant peut être affecté à plusieurs modules.
- Un module peut être enseigné dans plusieurs groupes.
- Une affectation relie un enseignant, un module, un groupe et une période universitaire.
- Une séance appartient à une affectation.
- Une séance possède plusieurs enregistrements de présence.
- Un étudiant possède plusieurs enregistrements de présence.
- Une absence peut contenir un justificatif.
- Un utilisateur peut recevoir plusieurs notifications.

**Remarque technique :** les semestres, groupes et modules étant des sous-documents du modèle Academic, leurs informations doivent être recherchées dans le document Academic correspondant. Il ne faut pas prévoir de `populate()` direct sur ces sous-documents comme s'ils étaient des collections indépendantes.

---

# 10. API REST – Endpoints principaux

Les endpoints ci-dessous constituent la structure prévisionnelle de l'API.

## 10.1. Authentification

| Méthode | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/login` | Connexion |
| POST | `/api/auth/register` | Création d'un compte autorisé |
| GET | `/api/auth/me` | Informations de l'utilisateur connecté |
| POST | `/api/auth/logout` | Déconnexion |

## 10.2. Utilisateurs

Les étudiants et les enseignants sont gérés dans la collection User avec des rôles différents.

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/users` | Liste des utilisateurs |
| GET | `/api/users?role=student` | Liste des étudiants |
| GET | `/api/users?role=teacher` | Liste des enseignants |
| GET | `/api/users/:id` | Détails d'un utilisateur |
| POST | `/api/users` | Ajouter un utilisateur |
| PUT | `/api/users/:id` | Modifier un utilisateur |
| DELETE | `/api/users/:id` | Supprimer un utilisateur |

## 10.3. Organisation pédagogique

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/academics` | Consulter l'organisation pédagogique |
| GET | `/api/academics/:id` | Consulter une organisation |
| POST | `/api/academics` | Créer une organisation |
| PUT | `/api/academics/:id` | Modifier une organisation |
| DELETE | `/api/academics/:id` | Supprimer une organisation |

Les opérations sur les années, semestres, filières, groupes et modules sont réalisées dans le document Academic correspondant.

## 10.4. Affectations des enseignants

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/assignments` | Liste des affectations |
| GET | `/api/assignments/:id` | Détails d'une affectation |
| POST | `/api/assignments` | Créer une affectation |
| PUT | `/api/assignments/:id` | Modifier une affectation |
| DELETE | `/api/assignments/:id` | Supprimer une affectation |

## 10.5. Séances

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/sessions` | Consulter les séances |
| GET | `/api/sessions/:id` | Détails d'une séance |
| POST | `/api/sessions` | Créer une séance |
| PUT | `/api/sessions/:id` | Modifier une séance |
| DELETE | `/api/sessions/:id` | Supprimer une séance |

## 10.6. Présences et absences

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/attendance` | Consulter les enregistrements |
| GET | `/api/attendance/:id` | Détails d'un enregistrement |
| POST | `/api/attendance` | Enregistrer une présence ou une absence |
| PUT | `/api/attendance/:id` | Modifier un enregistrement |
| DELETE | `/api/attendance/:id` | Supprimer un enregistrement |

## 10.7. Justificatifs

Les justificatifs étant intégrés au modèle Attendance, les opérations sont effectuées à travers les endpoints de ce modèle.

| Méthode | Endpoint | Description |
|---|---|---|
| PATCH | `/api/attendance/:id/justification` | Déposer un justificatif |
| GET | `/api/attendance/:id/justification` | Consulter un justificatif |
| PATCH | `/api/attendance/:id/justification/review` | Accepter ou refuser un justificatif |

## 10.8. Notifications

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/notifications` | Consulter les notifications |
| PATCH | `/api/notifications/:id/read` | Marquer une notification comme lue |
| PATCH | `/api/notifications/read-all` | Marquer toutes les notifications comme lues |

## 10.9. Statistiques et rapports

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/reports/dashboard` | Statistiques globales |
| GET | `/api/reports/students/:id` | Rapport individuel |
| GET | `/api/reports/groups/:id` | Rapport par groupe |
| GET | `/api/reports/modules/:id` | Rapport par module |
| GET | `/api/reports/export` | Exporter les données |

---

# 11. Sécurité

La sécurité de l'application repose sur plusieurs mécanismes :

- Authentification avec JSON Web Token (JWT).
- Hachage des mots de passe avec bcryptjs.
- Middleware de vérification des tokens.
- Gestion des rôles et des permissions (RBAC).
- Protection des routes privées.
- Validation des données côté serveur.
- Vérification des fichiers téléchargés.
- Protection contre les accès non autorisés.
- Utilisation de variables d'environnement pour les informations sensibles.
- Vérification des droits avant chaque opération sensible.

---

# 12. Méthodologie Agile Scrum – Organisation des Sprints

Le développement est organisé selon la méthodologie Agile Scrum.

Le projet est divisé en 5 Sprints. Chaque Sprint contient des objectifs et des tâches à réaliser par l'équipe.

Les tâches peuvent être suivies sur GitHub Projects, Trello ou un autre outil de gestion Agile.

## Sprint 1 – Initialisation, authentification et gestion des utilisateurs

**Objectif :** mettre en place l'architecture technique et permettre aux utilisateurs de se connecter à la plateforme.

### Tâches Frontend

- [ ] Créer le projet React avec Create React App.
- [ ] Organiser les dossiers du frontend.
- [ ] Installer React Router DOM.
- [ ] Installer Axios.
- [ ] Créer la page de connexion.
- [ ] Créer les composants de formulaire.
- [ ] Mettre en place les routes de l'application.
- [ ] Créer les layouts principaux.
- [ ] Mettre en place la gestion de l'authentification.
- [ ] Créer la gestion des routes protégées.
- [ ] Adapter l'affichage selon le rôle de l'utilisateur.

### Tâches Backend

- [ ] Initialiser le projet Node.js.
- [ ] Installer Express.js et les dépendances nécessaires.
- [ ] Configurer le serveur Express.
- [ ] Configurer la connexion MongoDB.
- [ ] Créer le modèle User.js.
- [ ] Ajouter les rôles utilisateur.
- [ ] Mettre en place le hachage des mots de passe avec bcryptjs.
- [ ] Développer la route de connexion.
- [ ] Développer la route d'inscription autorisée.
- [ ] Mettre en place JWT.
- [ ] Créer le middleware d'authentification.
- [ ] Créer le middleware de vérification des rôles.
- [ ] Tester les routes d'authentification avec Postman.

### User Stories concernées

US01, US15 et US26.

### Livrable attendu

Une application fonctionnelle permettant aux utilisateurs de se connecter et d'accéder à leur espace selon leur rôle.

---

## Sprint 2 – Gestion administrative et organisation pédagogique

**Objectif :** permettre à l'administration de gérer les utilisateurs et l'organisation pédagogique.

### Tâches Frontend

- [ ] Créer le tableau de bord administrateur.
- [ ] Créer la page de gestion des étudiants.
- [ ] Créer le formulaire d'ajout d'un étudiant.
- [ ] Créer le formulaire de modification d'un étudiant.
- [ ] Ajouter la suppression d'un étudiant.
- [ ] Créer la page de gestion des enseignants.
- [ ] Créer les formulaires de gestion des enseignants.
- [ ] Créer la page de gestion des années universitaires.
- [ ] Créer la page de gestion des semestres.
- [ ] Créer la page de gestion des filières.
- [ ] Créer la page de gestion des groupes.
- [ ] Créer la page de gestion des modules.
- [ ] Créer la page d'affectation des enseignants.

### Tâches Backend

- [ ] Compléter les fonctionnalités du modèle User.js.
- [ ] Créer le modèle Academic.js.
- [ ] Ajouter les sous-documents des années universitaires.
- [ ] Ajouter les sous-documents des semestres.
- [ ] Ajouter les sous-documents des filières.
- [ ] Ajouter les sous-documents des groupes.
- [ ] Ajouter les sous-documents des modules.
- [ ] Créer le modèle Assignment.js.
- [ ] Développer les opérations CRUD des utilisateurs.
- [ ] Développer les opérations CRUD de l'organisation pédagogique.
- [ ] Développer les opérations CRUD des affectations.
- [ ] Vérifier la cohérence des références entre les modèles.
- [ ] Tester les endpoints avec Postman.

### User Stories concernées

US02, US03, US04, US05, US06, US07, US08 et US09.

### Livrable attendu

Une interface administrative permettant de gérer les utilisateurs, les groupes, les filières, les modules et les affectations pédagogiques.

---

## Sprint 3 – Gestion des séances, présences et absences

**Objectif :** permettre aux enseignants de gérer les séances et de saisir les présences des étudiants.

### Tâches Frontend

- [ ] Créer le tableau de bord enseignant.
- [ ] Créer la page de consultation de l'emploi du temps.
- [ ] Créer la page de consultation des groupes affectés.
- [ ] Créer la liste des étudiants d'un groupe.
- [ ] Créer la page de sélection d'une séance.
- [ ] Créer l'interface de saisie des présences.
- [ ] Ajouter le statut Présent.
- [ ] Ajouter le statut Absent.
- [ ] Ajouter le statut En retard.
- [ ] Permettre la modification d'une feuille de présence.
- [ ] Créer la page d'historique des absences.
- [ ] Ajouter les filtres par date, groupe et module.
- [ ] Créer la page de consultation des absences côté étudiant.

### Tâches Backend

- [ ] Créer le modèle Session.js.
- [ ] Développer la création des séances.
- [ ] Développer la modification et la suppression des séances.
- [ ] Créer le modèle Attendance.js.
- [ ] Développer l'enregistrement des présences.
- [ ] Développer l'enregistrement des absences.
- [ ] Développer l'enregistrement des retards.
- [ ] Empêcher les doublons pour un même étudiant et une même séance.
- [ ] Vérifier que l'enseignant est affecté au groupe et au module.
- [ ] Développer la consultation de l'historique.
- [ ] Développer les filtres des absences.
- [ ] Développer les calculs du nombre d'absences par étudiant.
- [ ] Tester les fonctionnalités avec Postman.

### User Stories concernées

US10, US11, US16, US17, US18, US19, US20, US21, US22, US23 et US24.

### Livrable attendu

Un système fonctionnel de gestion des séances et de saisie des présences, absences et retards.

---

## Sprint 4 – Justificatifs et notifications

**Objectif :** permettre aux étudiants de soumettre des justificatifs et aux responsables pédagogiques de traiter les demandes.

### Tâches Frontend

- [ ] Créer la page de dépôt d'un justificatif.
- [ ] Ajouter un formulaire de sélection de l'absence concernée.
- [ ] Ajouter le composant de téléchargement de fichier.
- [ ] Afficher le statut des justificatifs.
- [ ] Créer la page de suivi des demandes côté étudiant.
- [ ] Créer la page de gestion des justificatifs côté responsable pédagogique.
- [ ] Ajouter les boutons Accepter et Refuser.
- [ ] Ajouter un champ de commentaire pour la décision.
- [ ] Afficher les notifications.
- [ ] Ajouter l'indicateur de notifications non lues.

### Tâches Backend

- [ ] Ajouter le sous-document justification dans Attendance.js.
- [ ] Développer le dépôt des justificatifs.
- [ ] Mettre en place le téléchargement des fichiers.
- [ ] Vérifier les formats PDF, JPG et PNG.
- [ ] Vérifier la taille maximale des fichiers.
- [ ] Développer la consultation des justificatifs.
- [ ] Développer la validation des justificatifs.
- [ ] Développer le refus des justificatifs.
- [ ] Enregistrer les commentaires des responsables.
- [ ] Mettre à jour le statut de la justification.
- [ ] Créer le modèle Notification.js.
- [ ] Développer la création des notifications.
- [ ] Notifier l'étudiant lors de l'enregistrement d'une absence.
- [ ] Notifier l'étudiant après une décision sur son justificatif.
- [ ] Tester les autorisations et les fonctionnalités.

### User Stories concernées

US25, US30, US33, US34, US35, US36, US40, US41 et US42.

### Livrable attendu

Un système de dépôt, de consultation et de validation des justificatifs avec notifications destinées aux utilisateurs.

---

## Sprint 5 – Tableaux de bord, statistiques, rapports et finalisation

**Objectif :** fournir une vision globale de l'assiduité et finaliser l'application.

### Tâches Frontend

- [ ] Finaliser le tableau de bord administrateur.
- [ ] Finaliser le tableau de bord enseignant.
- [ ] Finaliser le tableau de bord étudiant.
- [ ] Créer le tableau de bord responsable pédagogique.
- [ ] Afficher le nombre total d'étudiants.
- [ ] Afficher le nombre total d'absences.
- [ ] Afficher le nombre de retards.
- [ ] Afficher le taux global d'assiduité.
- [ ] Créer les graphiques statistiques.
- [ ] Ajouter les filtres par période.
- [ ] Ajouter les filtres par groupe et module.
- [ ] Afficher les étudiants ayant dépassé le seuil d'absence.
- [ ] Créer les pages de rapports.
- [ ] Ajouter les fonctionnalités d'exportation PDF et Excel.
- [ ] Finaliser le responsive design.

### Tâches Backend

- [ ] Créer le modèle AuditLog.js.
- [ ] Enregistrer les actions importantes des utilisateurs.
- [ ] Développer les statistiques globales.
- [ ] Développer les statistiques par groupe.
- [ ] Développer les statistiques par module.
- [ ] Développer les statistiques par enseignant.
- [ ] Développer les statistiques par période.
- [ ] Calculer le taux d'assiduité.
- [ ] Identifier les étudiants dépassant le seuil d'absence.
- [ ] Développer la génération des rapports PDF.
- [ ] Développer l'exportation Excel.
- [ ] Vérifier les permissions d'accès aux rapports.
- [ ] Optimiser les requêtes MongoDB.
- [ ] Tester les endpoints de reporting.

### Tests et finalisation

- [ ] Tester la connexion pour chaque rôle.
- [ ] Tester les permissions des utilisateurs.
- [ ] Tester la gestion des étudiants et des enseignants.
- [ ] Tester la gestion des groupes et des modules.
- [ ] Tester la création des séances.
- [ ] Tester l'enregistrement des présences et absences.
- [ ] Tester la soumission des justificatifs.
- [ ] Tester l'acceptation et le refus des justificatifs.
- [ ] Tester les notifications.
- [ ] Tester les statistiques.
- [ ] Tester les exports PDF et Excel.
- [ ] Corriger les bugs identifiés.
- [ ] Vérifier la sécurité des routes.
- [ ] Vérifier le bon fonctionnement sur différents navigateurs.
- [ ] Préparer la version finale de l'application.

### User Stories concernées

US12, US13, US14, US27, US28, US29, US31, US32, US37, US38, US39, US43 et US44.

### Livrable attendu

Une application complète permettant le suivi de l'assiduité, la consultation des statistiques et la génération de rapports.

---

# 13. Backlog global du projet

Cette liste regroupe les grandes tâches techniques à réaliser pendant le développement.

| ID | Tâche | Priorité |
|---|---|---|
| T01 | Initialisation du projet MERN | Haute |
| T02 | Création du frontend avec CRA | Haute |
| T03 | Configuration du backend Express | Haute |
| T04 | Connexion à MongoDB | Haute |
| T05 | Création des modèles Mongoose | Haute |
| T06 | Authentification JWT | Haute |
| T07 | Gestion des rôles et permissions | Haute |
| T08 | Gestion des utilisateurs | Haute |
| T09 | Gestion de l'organisation pédagogique | Haute |
| T10 | Gestion des affectations | Haute |
| T11 | Gestion des séances | Haute |
| T12 | Gestion des présences et absences | Haute |
| T13 | Gestion des justificatifs | Haute |
| T14 | Gestion des notifications | Moyenne |
| T15 | Tableaux de bord | Moyenne |
| T16 | Calcul des statistiques | Moyenne |
| T17 | Génération des rapports PDF | Moyenne |
| T18 | Exportation Excel | Moyenne |
| T19 | Journalisation des actions | Moyenne |
| T20 | Tests fonctionnels et API | Haute |
| T21 | Tests de sécurité | Haute |
| T22 | Correction des anomalies | Haute |
| T23 | Finalisation de l'interface | Moyenne |
| T24 | Déploiement de l'application | Moyenne |

---

# 14. Installation et configuration

## 14.1. Prérequis

Avant de commencer, installer :

- Node.js (version LTS).
- npm.
- MongoDB local ou MongoDB Atlas.
- Git.
- Visual Studio Code (recommandé).
- Postman (pour tester l'API).

## 14.2. Cloner le projet

```bash
git clone https://github.com/username/school-attendance.git

cd school-attendance
```

## 14.3. Créer le frontend avec Create React App

À la racine du projet :

```bash
npx create-react-app frontend
```

Installer les dépendances frontend :

```bash
cd frontend

npm install react-router-dom axios
```

Le frontend utilise Create React App. Il ne faut pas installer Vite ni créer de fichier `vite.config.js`.

Dans `frontend/package.json`, ajouter la propriété suivante à la racine de l'objet JSON :

```json
{
  "proxy": "http://localhost:5000"
}
```

Cette configuration permet au frontend d'envoyer les requêtes API vers le backend pendant le développement.

## 14.4. Créer le backend

Depuis la racine du projet :

```bash
mkdir backend

cd backend

npm init -y
```

Installer les dépendances :

```bash
npm install express mongoose bcryptjs jsonwebtoken dotenv cors
```

Installer Nodemon pour le développement :

```bash
npm install --save-dev nodemon
```

Dans `backend/package.json`, configurer les scripts :

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

## 14.5. Configurer les variables d'environnement

Créer un fichier `.env` dans le dossier `backend` :

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/school_attendance
JWT_SECRET=your_secret_key
NODE_ENV=development
```

Ne jamais publier le fichier `.env` sur GitHub.

## 14.6. Démarrer le backend

Dans un terminal :

```bash
cd backend

npm run dev
```

Le backend sera accessible sur :

`http://localhost:5000`

## 14.7. Démarrer le frontend

Dans un deuxième terminal :

```bash
cd frontend

npm start
```

L'application sera accessible sur :

`http://localhost:3000`

---

# 15. Tests

Les tests doivent couvrir les principales fonctionnalités de l'application.

## Tests fonctionnels

- Vérifier la connexion selon chaque rôle.
- Vérifier les permissions des utilisateurs.
- Vérifier la création et la modification des étudiants.
- Vérifier la gestion des enseignants.
- Vérifier la gestion des groupes et des modules.
- Vérifier l'enregistrement des présences et absences.
- Vérifier la soumission des justificatifs.
- Vérifier la validation des justificatifs.
- Vérifier les notifications.
- Vérifier les statistiques et les rapports.

## Tests API

Les endpoints REST seront testés avec Postman.

Les tests doivent notamment vérifier :

- Les réponses HTTP.
- La validation des données.
- Les cas d'erreur.
- L'authentification.
- Les autorisations selon les rôles.
- La cohérence des données enregistrées dans MongoDB.

## Tests de sécurité

- Vérifier l'accès aux routes protégées.
- Vérifier les autorisations selon les rôles.
- Vérifier la validation des données.
- Vérifier la protection des informations personnelles.
- Vérifier la sécurité des fichiers téléchargés.
- Vérifier que les mots de passe ne sont jamais stockés en clair.

---

# 16. Gestion de versions et collaboration Git

Le projet doit être développé en équipe avec Git et GitHub.

### Organisation recommandée

- `main` : version stable du projet.
- `develop` : branche principale de développement.
- `feature/authentication` : développement de l'authentification.
- `feature/users-management` : gestion des utilisateurs.
- `feature/academic-management` : gestion pédagogique.
- `feature/attendance` : gestion des présences et absences.
- `feature/justifications` : gestion des justificatifs.
- `feature/reports` : statistiques et rapports.

### Workflow de développement

1. Récupérer les dernières modifications de `develop`.
2. Créer une branche pour la fonctionnalité à développer.
3. Réaliser les modifications.
4. Tester le code.
5. Effectuer un commit avec un message explicite.
6. Envoyer la branche sur GitHub.
7. Créer une Pull Request vers `develop`.
8. Faire vérifier et valider le code avant la fusion.

Exemples de commandes :

```bash
git checkout develop

git pull origin develop

git checkout -b feature/attendance

git add .

git commit -m "feat: implement attendance management"

git push origin feature/attendance
```

---

# 17. Améliorations futures

Plusieurs évolutions pourront être intégrées :

- Application mobile Android et iOS.
- Notifications par e-mail.
- Intégration avec l'emploi du temps de l'établissement.
- Génération automatique des rapports mensuels.
- Signature électronique des feuilles de présence.
- Système de QR Code pour enregistrer les présences.
- Tableau de bord analytique avancé.
- Intégration avec le système de gestion scolaire existant.

---

# 18. Objectif final

L'objectif final est de développer une plateforme centralisée permettant à un établissement scolaire ou universitaire de gérer efficacement l'assiduité de ses étudiants.

L'application doit être intuitive, sécurisée, évolutive et adaptée aux besoins des différents acteurs de l'établissement.

Elle doit permettre de simplifier le travail administratif, de faciliter le suivi des étudiants et de fournir des données fiables sur l'assiduité.

---

## Informations du projet

- **Projet :** School Attendance Management System
- **Architecture :** MERN Stack
- **Frontend :** React.js avec Create React App
- **Backend :** Node.js et Express.js
- **Base de données :** MongoDB
- **Méthodologie :** Agile Scrum
- **Nombre de User Stories :** 44
- **Nombre de modèles principaux :** 7
- **Version :** 1.0.0
- **Statut :** En cours de développement
