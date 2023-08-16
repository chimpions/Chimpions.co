# file = open("twittter_pfps.txt",'r', encoding='utf-8')
# lines = file.readlines()
# file.close()
#
# texte = ""
# for line in lines:
#     texte += line
#
# twitterHandles = texte.split('https://twitter.com/')
# for i in range (1,len(twitterHandles)):
#     twitterHandles[i] = twitterHandles[i].split('"')[0]
#
# print(twitterHandles[1:])


from PIL import Image
import random
factor = 20



##Functions
def change_colors(image, colors):
    # Change the color of each pixel
    for i in range(0, 44 * factor, factor):
        for j in range(0, 59 * factor, 20):
            if i == 0 or j == 59 * factor - factor or j == 0 or i == 44 * factor - factor:
                add_color(i, j, (255, 255, 255))
            elif (i == 4 * factor or i == 5 * factor) and (j>=7 * factor and j<=42 * factor):
                add_color(i, j, (255, 255, 255))
            elif (i == 38 * factor or i == 39 * factor) and (j >= 7 * factor and j<=42 * factor):
                add_color(i, j, (255, 255, 255))
            elif (j == 7 * factor or j==8 * factor) and (i>=4 * factor and i<=39 * factor):
                add_color(i, j, (255, 255, 255))
            elif (j == 41 * factor or j == 42 * factor) and (i >= 4 * factor and i <= 39 * factor):
                add_color(i, j, (255, 255, 255))
            else:
                add_color(i, j, colors[random.randint(0,7)])

def add_color(i, j, color):
    for x in range(i, i + 20):
        for y in range(j, j + 20):
            pixels[x, y] = color


colors = ["#dd5f5f", "#ff954f", "#f7da47", "#80d35d", "#5bb1ef", "#bc6de0", "#623c9f", "#49158a"]
j=0
for color in colors:
    color_hex = color.lstrip('#')
    color_dec = tuple(int(color_hex[i:i+2], 16) for i in (0, 2, 4))
    colors[j] = color_dec
    j+=1


image = Image.new("RGB", (44*factor, 59*factor), "white")
pixels = image.load()
color_name = "rainbow"
# colors = [(149, 235, 232), (173, 233, 205), (187, 232, 190), (206, 231, 170), (224, 229, 151), (237, 228, 136), (250, 223, 130), (240, 213, 118)]
change_colors(image, colors)
image.save("chimp-front-card-"+color_name+".png")