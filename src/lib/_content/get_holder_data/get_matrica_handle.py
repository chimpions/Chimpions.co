import json
import re



with open('C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/matrica_data2.json', 'r', encoding = "utf-8") as f:
    matrica_data = json.load(f)

with open('C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/holders.json', 'r', encoding = "utf-8") as f:
    holders = json.load(f)



def get_matrica_id(holderName):
    chimpion = " ".join(re.findall('[a-z]+|[A-Z][a-z]*', holders[holderName]["chimpions"][0]))
    for matricaId in matrica_data:
        if chimpion in matrica_data[matricaId]["chimpions"]:
            return matricaId



for holderName in holders:
    try:
        matricaId = get_matrica_id(holderName)
        print(matricaId)
    except:
        matricaId = ""
    pfp = holders[holderName].pop("pfp")
    chimpions = holders[holderName].pop("chimpions")
    TWS = holders[holderName].pop("TWS")
    holders[holderName]["matricaId"] = matricaId



with open("C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/holders2.json", "w") as f:
    json.dump(holders, f, indent = 4)