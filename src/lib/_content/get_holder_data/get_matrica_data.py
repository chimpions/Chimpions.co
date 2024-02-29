import requests
import json
from PIL import Image
import io


matrica_api_key = "70vpkCd209ykF8AbjqAxc"

collection_ids = {
    "12166093-97ad-44b5-9d74-a5cbabbeb8a6": "The Chimpions",
    "dd1c99b6-7abe-4f6d-9c6d-c8853ca42d1a": "Claynosaurz",
    "2658a0cc-1d6d-44fa-bde2-482b824e2e50": "SMB Gen3",
    "007c429c-50ec-4b9b-a57b-9687b4415fe5": "Galactic Gecko Space Garage",
    "42d90ce9-cca6-413a-a506-a73a585f3450": "SMB Gen2",
    "785864e9-7f38-48af-88fe-80d0ea677a4e": "Famous Fox Dens",
    "fe99399a-ce55-4c97-a92a-4dcf844e6575": "Transdimensional Fox Federation",
    "79ded0f9-31f6-4f8a-84d6-2a915c5f776e": "Famous Fox Federation",
    "5976cea5-6d8b-4ee5-bd13-eb32e01cc8ff": "Just Ape",
    "91f62ea6-26d0-4e91-b480-7ff1148fcdef": "Taiyo Pilots",
    "eb518a0c-0ac2-4fdd-b435-82c71de0c4c7": "Critters",
    "e3bb8482-36b7-44d0-afac-d2e819132d6e": "Helions ",
    "f98aaa45-460f-4c40-9311-b43927e4c702": "LILY",
    "9a07eb38-1621-42df-ba13-5d4e506497f0": "PRIMATES",
    "92b8b2b1-71fb-40ee-8968-6fa234d5d253": "The Bastards",
    "81cd15da-6a71-4a88-95f5-6de00b17bffe": "Glyphscapes",
    "28cf00f2-922f-48ee-b153-e692153c9258": "oogy",
    "9ee7307f-b3d6-4bfd-a995-9f0058dd3abb": "Degen Fat Cats",
    "bbf8d920-0391-4d09-a8c7-516544c9bf78": "Smyths",
    "0cec0ad8-8264-43ae-b1c5-68b383c59b85": "Okay Bears",
    "98eac594-4342-47d2-b3ee-f8fd5a498a5f": "Taiyo Robotics",
    "aedc98df-7d51-47f6-96db-308a96ab6987": "Galactic Gecko Concordians",
    "dbb0488a-aaf9-44c1-9228-2c27d3242c89": "Degenerate Ape Academy",
    "0aec7519-46c8-431d-b7ef-188eb5dfa948": "Claymakers",
    "b286f48e-0595-47eb-adb3-68a5f88b0a62": "Clay",
    "15ef2ab2-3678-44fd-8dbc-b2ec3a7f2dc8": "Vibe Knights ",
    "22a96562-0116-40de-aca9-968f12ad8c7b": "Pesky Penguins",
    "8ff7c4bb-26e1-467c-9c0c-937730fec6d8": "Monkey Baby Business",
    "098aaad1-e6cc-4469-993c-b2e6fb54b5e1": "Degen Trash Pandas",
    "5de32e68-e7c9-466f-8062-a428c38801c4": "The Catalina Whale Mixer",
    "467a137c-8e8c-4e81-894b-acd34ad68a9a": "Degenerate Drop Bears",
    "e232b323-8410-454a-92fd-a8604360afdb": "Mad Lads"
}

TWS_ids = {
    "d517bc89-dd67-4a23-9e4c-ea4278f93c5d": "Forest Fellowship",
    "faad94f8-2201-4885-8a04-00ad212bf84e": "Dusk Till Dawn",
    "3ada0089-aa54-4e1f-a1b5-9c3ca5ed647d": "The Fall of the Eradicator",
    "c3746924-e327-4aa9-89bd-d3403f57092f": "Last Bastion",
    "85e4107f-4b6f-4f9c-a22c-de748d5e53d3": "The Uprising",
    "00978207-d489-47b4-8fb8-22c593055fa7": "LaurenceAntonyXChimpions",
    "5dc7e944-c889-46e3-8ab2-963fbd367e99": "The Crystal of Unity",
    "c694b4ac-0832-44df-9103-75c358d17aff": "Grave Danger",
    "95355cf2-3b75-4b12-86ed-3c3f44804f70": "An Unlikely Friendship"
}

with open('C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/chimpions.json', 'r', encoding="utf-8") as f:
    chimpions = json.load(f)

file = open("../holders.txt")
holder_wallets = []
for holder_wallet in file.readlines():
    if holder_wallet[-1:] == "\n":
        holder_wallets.append(holder_wallet[:-1])
    else:
        holder_wallets.append(holder_wallet)



## API functions
def make_api_call(url):
    """
    return the nfts held by an address (25 by 25)
    """
    try:
        response = requests.get(url)
        if response.status_code == 200:
            json_data = response.json()
            return json_data
        elif response.status_code == 502:
            return "Error502"
        else:
            response.raise_for_status()
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None



def get_username_and_pfp(wallet):
    """
    return username and pfp based on the address of the wallet holding the chimp
    """
    url = f"https://api.matrica.io/v1/wallet/{wallet}?apiKey={matrica_api_key}"
    data = make_api_call(url)
    if data:
        username = data["user"]["profile"]["name"]
        if len(username) == 0:
            username = data["user"]["username"]
        pfp = data["user"]["profile"]["pfp"]
        if pfp == "https://matricalabs.io/people/nakamoto.png":
            pfp = ""
        return(username, pfp)
    else:
        print("API call failed.")
        return None



def get_nfts(wallet):
    """
    return username and pfp based on the address of the wallet holding a chimp
    """
    count = 0
    url = f"https://api.matrica.io/v1/wallet/{wallet}/nfts?apiKey={matrica_api_key}&sortBy=id&skip={count}"
    data = make_api_call(url)
    count += len(data)
    dictionary = data
    while len(data) > 0:
        url = f"https://api.matrica.io/v1/wallet/{wallet}/nfts?apiKey={matrica_api_key}&sortBy=id&skip={count}"
        data = make_api_call(url)
        while data == "Error502":
            print("Error: Error502, Retrying...")
            data = make_api_call(url)
        count += len(data)
        dictionary += data
    return(dictionary)



def get_pfp(name, url):
    """
    return username and pfp based on the address of the wallet holding a chimp
    """
    print(name, url)

    if url[:7] != "/images" and url[:7] != "":
        response = requests.get(url)
        if response.status_code == 200:
            image_data = response.content
            image = Image.open(io.BytesIO(image_data))
        else:
            for chimpion in chimpions:
                if chimpion["name"] in holders[name]["chimpions"]:
                    image = Image.open("static" + chimpion["paths"]["png"])
                    break
    else:
        image = Image.open("static" + url)

    width, height = image.size
    while width > 200 and height > 200:
        width = round(0.8 * width)
        height = round(0.8 * height)

    resized_image = image.resize((width, height))
    resized_image.save('../../../../static/images/compressed-pfps/' + name + '.png', format = 'png', quality = 100)
    holders[name]["pfp"] = "/images/compressed-pfps/" + name + ".png"
    print(f"Image downloaded and compressed successfully to '" + name + ".png'")
    image.close()



def main():
    holders = {}
    collections = {}
    number_of_holders_fetched = -1
    for holder_wallet in holder_wallets:
        if len(holders) > 0:
            with open('C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/matrica_data2.json', 'r', encoding="utf-8") as f:
                holders = json.load(f)
        if number_of_holders_fetched < 0:
            break
        try:
            holder_name, pfp = get_username_and_pfp(holder_wallet)
        except:
            continue
        if holder_name not in holders.keys():
            holders[holder_name] = {
                "wallets": [],
                "chimpions": [],
                "pfp": pfp,
                "TWS": {
                    "Forest Fellowship": False,
                    "Dusk Till Dawn": False,
                    "The Fall of the Eradicator": False,
                    "Last Bastion": False,
                    "The Uprising": False,
                    "LaurenceAntonyXChimpions": False,
                    "The Crystal of Unity": False,
                    "Grave Danger": False,
                    "An Unlikely Friendship": False
                }
            }
        holders[holder_name]["wallets"].append(holder_wallet)

        nfts = get_nfts(holder_wallet)
        for nft in nfts:
            if nft["collection"] is not None:
                collection_id = nft["collectionId"]
                if collection_id in collection_ids.keys():
                    if collection_id not in collections.keys():
                        collections[collection_id] = {
                            "name": nft["collection"]["name"],
                            "count": 1
                        }
                    else:
                        collections[collection_id]["count"] += 1
                    if collection_id == "12166093-97ad-44b5-9d74-a5cbabbeb8a6":
                        holders[holder_name]["chimpions"].append("".join(nft["name"].split(" ")))
                        if holders[holder_name]["pfp"] == "" or holders[holder_name]["pfp"] == None:
                            for chimpion in chimpions:
                                if chimpion["name"] == holders[holder_name]["chimpions"][0]:
                                    holders[holder_name]["pfp"] = chimpion["paths"]["png"]
                                    break
                if collection_id in TWS_ids.keys():
                    holders[holder_name]["TWS"][TWS_ids[collection_id]] = True
        

        with open('C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/matrica_data2.json', 'w') as f:
            json.dump(holders, f, indent = 4)
        number_of_holders_fetched += 1
        print(f"Fetched data for {number_of_holders_fetched} holders")
    
    for holder_name in holders:
        get_pfp(holder_name, holders[holder_name]["pfp"])

    with open("../collections2.json", 'w') as f:
        json.dump(collections, f, indent = 4)

    with open("../matrica_data2.json", 'w') as f:
        json.dump(holders, f, indent = 4)

main()


