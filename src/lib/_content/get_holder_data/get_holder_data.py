import json

with open('./src/lib/_content/chimpions.json', 'r', encoding="utf-8") as f:
    chimpions = json.load(f)

with open('./src/lib/_content/discord-twitter_data.json', 'r', encoding="utf-8") as f:
    discord_twitter_data = json.load(f)

with open('./src/lib/_content/matrica_data.json', 'r', encoding="utf-8") as f:
    matrica_data = json.load(f)

file = open("./src/lib/_content/get_holder_data/notes.txt", 'r')
names = []
discord_ids = []
for line in file.readlines():
    if "holder_name" in line:
        names.append(line.split(': "')[1].split('"')[0])
    if "discord_id" in line:
        discord_ids.append(line.split(': "')[1].split('"')[0])
file.close()


def get_name(chimpion_to_find):
    chimpion_to_find = "".join(chimpion_to_find.split(" "))
    for chimpion in chimpions:
        if chimpion["name"] == chimpion_to_find:
            holder_name = chimpion["holder"]
            discord_id = discord_ids[names.index(holder_name)]
            return(holder_name, discord_id)


def get_pfp(chimpion_to_find):
    chimpion_to_find = "".join(chimpion_to_find.split(" "))
    for chimpion in chimpions:
        if chimpion["name"] == chimpion_to_find:
            return(chimpion["paths"]["png"])

holders = []

for matrica_id in matrica_data:
    holder = matrica_data[matrica_id]
    chimpion_to_find = holder["chimpions"][0]
    name, discord_id = get_name(chimpion_to_find)
    TWS = holder["TWS"]
    pfp = holder["pfp"]
    if pfp == "" or pfp == None:
        pfp = get_pfp(chimpion_to_find)
    try:
        twitter = discord_twitter_data[discord_id]["twitterHandle"]
    except:
        twitter = ""
    try:
        level = discord_twitter_data[discord_id]["level"]
    except:
        level = 1
    chimpions_held = holder["chimpions"]
    for i in range(len(chimpions_held)):
        chimpions_held[i] = "".join(chimpions_held[i].split(" "))
    holders.append({
        "name": name,
        "pfp": pfp,
        "twitter": twitter,
        "level": level,
        "chimpions": chimpions_held,
        "TWS": TWS
    })
holders = sorted(holders, key=lambda x: (-1)*len(x['chimpions']))


holders_final = {}
for holder in holders:
    name = holder.pop("name")
    holders_final[name] = holder



with open("./src/lib/_content/holders2.json", "w") as f:
    json.dump(holders_final, f, indent = 4)