import pymongo

# open connection
client = pymongo.MongoClient("mongodb://192.168.68.105:8082/")

# list all databases
print(client.list_database_names())

# create database
db = client["cats"]

# collection
collection = db["poems"]

cat_poem = {
    "title": "Banshee's Nightlight", 
    "author": "Jesse Stone",
    "year": 2024, 
    "poem": "Banshee, a cat of eerie name,<br>Fearful of shadows, a whiskered flame.<br>Eyes wide in dusk, a frightened plight,<br>Seeks warmth and comfort through the night." 
}

# result = collection.insert_one(cat_poem)
# print(result.inserted_id)

result = collection.find_one({"title": "Banshee's Nightlight"})
print(result)