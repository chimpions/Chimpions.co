import requests
from PIL import Image
import io
import json



def getImage(name, url):
    # Define the compression quality (0-100, 0 = maximum compression)
    compression_quality = 100

    if url[:7] != "/images":
        response = requests.get(url)

        if response.status_code == 200:
            image_data = response.content

            image = Image.open(io.BytesIO(image_data))

            image.save('C:/Users/33607/Downloads/Chimpions.co/static/images/compressed-pfps/' + name + '.png', format = 'png', quality = compression_quality)
            
            print(f"Image downloaded and compressed successfully to '" + name + ".png'")
        else:
            print(f"Failed to download the image. Status code: {response.status_code}")
    else:
        image = Image.open('C:/Users/33607/Downloads/Chimpions.co/static' + url)

        image.save('C:/Users/33607/Downloads/Chimpions.co/static/images/compressed-pfps/' + name + '.png', format = 'png', quality = compression_quality)
        
        print(f"Image downloaded and compressed successfully to '" + name + ".png'")


def resize():
    image = Image.open("C:/Users/33607/Downloads/Chimpions.co/static/images/chimpions/TheAgitator/TheAgitator-Lahseminit.jpg")

    old_width, old_height = image.size
    width, height = image.size
    while width > 200 and height > 200:
        width = round(0.8 * width)
        height = round(0.8 * height)

    if height != old_height:
        resized_image = image.resize((width, height))
        resized_image.save("C:/Users/33607/Downloads/Chimpions.co/static/images/compressed-pfps/L4.png", format = 'png', quality = 100)

    image.close()


with open('C:/Users/33607/Downloads/Chimpions.co/src/lib/_content/matrica_data2.json', 'r', encoding="utf-8") as f:
    matrica_data = json.load(f)

# for holderName in matrica_data:
#     pfp = matrica_data[holderName]["pfp"]
#     pfp = "/images/chimpions/TheAgitator/TheAgitator-Lahseminit.jpg"
#     getImage(holderName, pfp)

resize()