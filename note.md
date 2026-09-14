bd
-> not only sql

- bd  oriente document = ajoute des propriete au doc + operation complexes possible + flexibilite du schema
- bson -> binary json 
- imbriquer 
site vente en ligne = mango

- colonne large 
- oriente graphe -> plusieurs relations comme ami a user a comments a like a user follow + noeuds et arètes + moteur de recommendation


- choix du framework/pk dans la documentation 
- choix bd base sur les besoins
- pas de jointure avec une des bd


- mongo db
# grande quantite de donnee
# libre de schema = flexible
# data definition language = nope alors il faut lui dire ce quon accepte ou pas pk on specifie pas le type
# mongo stocker sous forme de document
# document = unite de données -> bson ou json
# table = collection de documents
# row = document
# column = field
# join = embedded document (document imbriqué)
# foreign key = reference
# partition = shard

- scalabilité horizontale 

# jointure couteuse !!!!!!!!! !!!!!!!
# lecture et ecriture quick¸
# denormaliser = pas dupliquer on sen fout
# bitdata ? on d.normalise
# on va pas avoir la commande dans une table non on va toute comment dirais- je répéter les lignes on va tout avoir une ligne qui se repete son nom va se répéter dans tous les lignes, alors ça c'est un avantage.
# l'utilisation intensif de la mémoire , alors si je dois stocker et duplique et dans une application si le stockage n'est plus un problème .
# maintenant on a des capacités de stockage comme dans le cloud 
# resume la diff
#  mongo db est type de document = collection et documents schema flexible alors que relationnel non il est scalable horizontalement elevéeet les transactions pour mongo db sont assez robustes et les framworks d'agrégatiuon SELECT FROM etc ...
# la performance est optimiser pour la lecture et ecriture rapide 
# plus lent pour les gros volume, pas de jointure complexe.
# requees multitables complexes selon le cas d'usage .
#        elle est puissante et rapide grâce a son modele de document et sa scalabilité, alors il faut comprendre ses limites pour s'assurer de deaddddddd !!!!!!!! lolllllll
-----------------------------
14-09-2026

# interface graphique = compass

- commandes
# mongosh -u "saintfirminell" -p "6309487" --authenticationDatabase "dev_saintfirminell" mongodb://10.10.0.100:27017/dev_saintfirminell
# show dbs = montrer les db dispos
# cls = clear
# db.createCollection()
# db.utilisateurs.insertOne({

# })
# .insertMany([
# {"":""}, {}
# ])

# .find({"age": {"$gt:25"}})
# { "$set": {"age" : 2788}}
# .updateMany({}, {"$inc": {"age" : 10}})
# createIndex  = amélioration perf
# .aggregate([])

--
# npm i joi
# npm i @nestjs/config
# npm i @nestjs/mongoose

# joi pour les validations

# gotta put database ip address because we tryna connect to it not me  -> .env
# double validation not null (bd) & require (class validator) 
# enregistrer le schema dans les modules = buildingschema