import requests
from PIL import Image
import io
import json



def getImage(name, url):
    # Define the compression quality (0-100, 0 = maximum compression)
    compression_quality = 60

    if url != "" or url[:7] != "/images":
        response = requests.get(url)

        if response.status_code == 200:
            image_data = response.content

            image = Image.open(io.BytesIO(image_data))

            image.save('/images/compressed-pfps/'+name+'.png', format='png', quality=compression_quality)
            
            print(f"Image downloaded and compressed successfully to '" + name + ".png'")
        else:
            print(f"Failed to download the image. Status code: {response.status_code}")
    else:
        image = Image.open(url)

        image.save('/images/compressed-pfps/'+name+'.png', format='png', quality=compression_quality)
        
        print(f"Image downloaded and compressed successfully to '" + name + ".png'")




with open('./src/lib/_content/holders.json', 'r', encoding="utf-8") as f:
    holders = json.load(f)

for holderName in holders:
    pfp = holders[holderName]["pfp"]
    print(pfp[:7])
    getImage(holderName, pfp)

