import json


with open('C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/discord-twitter_data.json', 'r', encoding="utf-8") as f:
    discord_twitter_data = json.load(f)

with open('C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/holders.json', 'r', encoding="utf-8") as f:
    holders = json.load(f)

file = open("C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/get_holder_data/notes.txt", 'r')
names = []
discord_ids = []
for line in file.readlines():
    if "holder_name" in line:
        names.append(line.split(': "')[1].split('"')[0])
    if "discord_id" in line:
        discord_ids.append(line.split(': "')[1].split('"')[0])
file.close()


def get_discord_id(holderName):
    index = names.index(holderName)
    return discord_ids[index]

for holderName in holders:
    twitter = holders[holderName].pop("twitter")
    discord = holders[holderName].pop("discord")
    level = holders[holderName].pop("level")
    chimpions = holders[holderName].pop("chimpions")
    TWS = holders[holderName].pop("TWS")
    
    try:
        discordId = get_discord_id(holderName)
    except:
        discord = ""

    holders[holderName]["discordId"] = discordId
    holders[holderName]["chimpions"] = chimpions
    holders[holderName]["TWS"] = TWS







with open("C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/holders2.json", "w") as f:
    json.dump(holders, f, indent = 4)