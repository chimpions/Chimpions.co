import json


with open('C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/discord_data.json', 'r', encoding="utf-8") as f:
    discord_data = json.load(f)
with open('C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/discord_data_old.json', 'r', encoding="utf-8") as f:
    discord_data_old = json.load(f)

names = []


for discord_id in discord_data:
    name = discord_data[discord_id]["discordHandle"]
    points = discord_data[discord_id]["points"]
    if points > 5000:
        try:
            old_points = discord_data_old[discord_id]["points"]
        except:
            old_points = 0
        new_points = points - old_points
        names.append({"name": name, "points": new_points})
sorted_names = sorted(names, key=lambda d: d['points'], reverse = True)

for i in range (len(sorted_names)):
    print(sorted_names[i]["name"])