# L_xp_next_lvl = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000, 26000, 27000, 28000, 29000, 30000, 31000, 32000, 33000, 34000, 35000, 36000, 37000, 38000, 39000, 40000, 41000, 42000, 43000, 44000, 45000, 46000, 47000, 48000, 49000, 50000, 51000, 52000, 53000, 54000, 55000, 56000, 57000, 58000, 59000, 60000, 61000, 62000, 63000, 64000, 65000, 66000, 67000, 68000, 69000, 70000, 71000, 72000, 73000, 74000, 75000, 76000, 77000, 78000, 79000, 80000, 81000, 82000, 83000, 84000, 85000, 86000, 87000, 88000, 89000, 90000, 91000, 92000, 93000, 94000, 95000, 96000, 97000, 98000, 99000]
#
# L_sum_xp_required_lvl = [0, 1000, 3000, 6000, 10000, 15000, 21000, 28000, 36000, 45000, 55000, 66000, 78000, 91000, 105000, 120000, 136000, 153000, 171000, 190000, 210000, 231000, 253000, 276000, 300000, 325000, 351000, 378000, 406000, 435000, 465000, 496000, 528000, 561000, 595000, 630000, 666000, 703000, 741000, 780000, 820000, 861000, 903000, 946000, 990000, 1035000, 1081000, 1128000, 1176000, 1225000, 1275000, 1326000, 1378000, 1431000, 1485000, 1540000, 1596000, 1653000, 1711000, 1770000, 1830000, 1891000, 1953000, 2016000, 2080000, 2145000, 2211000, 2278000, 2346000, 2415000, 2485000, 2556000, 2628000, 2701000, 2775000, 2850000, 2926000, 3003000, 3081000, 3160000, 3240000, 3321000, 3403000, 3486000, 3570000, 3655000, 3741000, 3828000, 3916000, 4005000, 4095000, 4186000, 4278000, 4371000, 4465000, 4560000, 4656000, 4753000, 4851000, 4950000]
#
# current_level = 1
# # experience_for_next_level = current_level * 1000
#
# experience = 43762
#
# def get_level(experience = 0):
#     print(experience)
#     for level in range (100):
#         if experience < L_sum_xp_required_lvl[level]:
#             print(level)
#             return(level)
#
# print(get_level(experience))


from PIL import Image
import random
factor = 20



##Functions
def get_colors(color):
    L =  [color]
    r, g, b = color

    # Lighter color
    for percentage in range(4, 20, 4):
        new_r = round((1 - percentage/100) * r)
        new_g = round((1 - percentage/100) * g)
        new_b = round((1 - percentage/100) * b)
        tuple = (new_r, new_g, new_b)
        L.append(tuple)

    # Darker color
    for percentage in range(4, 20, 4):
        new_r = round((255 - r) * percentage/100 + r)
        new_g = round((255 - g) * percentage/100 + g)
        new_b = round((255 - b) * percentage/100 + b)
        tuple = (new_r, new_g, new_b)
        L.append(tuple)
    return(L)

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
                add_color(i, j, colors[random.randint(0,8)])

def add_color(i, j, color):
    for x in range(i, i + 20):
        for y in range(j, j + 20):
            pixels[x, y] = color



##
# achromatic: #ededff #1756a3
# ado: #ff8200 #dae0ea
# agi: #695d95 #8c7fb0
# amal: #e500d9 #fff200
# ancient: #43837b #d4ffd0
# angsty: #3a9aff #c6dcf4
# anti: #555c6a #ae3535
# apolo: #3a9aff #6ab2ff
# ancestral: #73d7a5
# twilight: #452f66 #583071
#gold: #ffcc4a #ffd90f
#radiation: #38a98e #ffa600
#acid: #caf532 #5c4fa3


# colors = [
# {"name":"dark", "code":"#0f061d"},
# {"name":"blue", "code":"#1756a3"},
# {"name":"orange", "code":"#ff8200"},
# {"name":"purple", "code":"#695d95"},
# {"name":"pink", "code":"#e500d9"},
# {"name":"darkgreen", "code":"#43837b"},
# {"name":"darkgrey", "code":"#555c6a"},
# {"name":"skyblue", "code":"#3a9aff"},
# {"name":"lightgrey", "code":"#b6b6b6"},
# {"name":"lightgreen", "code":"#73d7a5"},
# {"name":"gold", "code":"#43837b"},
# {"name":"radiation", "code":"#38a98e"},
# {"name":"acid", "code":"#caf532"},
# {"name":"grey", "code":"#888888"},
# {"name":"green", "code":"#43837b"},
# {"name":"seagreen", "code":"#518088"},
# {"name":"mediumpurple", "code":"#7451da"},
# {"name":"darkcyan", "code":"#002626"},
# {"name":"spaceblue", "code":"#0c3057"},
# {"name":"oceanblue", "code":"#577cda"},
# {"name":"nightcity", "code":"#0055af"},
# {"name":"lightbrown", "code":"#e3c7b3"},
# {"name":"lightred", "code":"#f87878"},
# {"name":"purpleblue", "code":"#4f38a9"},
# {"name":"gold", "code":"#ffd90f"},
# {"name":"bdxred", "code":"#7c0232"},
# {"name":"white", "code":"#ffffff"},
# {"name":"turquoise", "code":"#44d6c9"},
# {"name":"perfectgreen", "code":"#369c40"},
# {"name":"bluegrey", "code":"#96aaba"},
# {"name":"darkgrey", "code":"#1f1f1f"},
# {"name":"red", "code":"#ec2d11"},
# {"name":"heroic", "code":"#c43b22"},
# {"name":"leafgreen", "code":"#548832"},
# {"name":"candy", "code":"#c222d4"},
# {"name":"whiteorange", "code":"#f5eee9"},
# {"name":"main", "code":"#6f9b8a"},
# {"name":"original", "code":"#99c786"},
# {"name":"perfectpurple", "code":"#7a3fbe"},
# {"name":"lime", "code":"#a3f142"},
# {"name":"skin", "code":"#8f563b"},
# {"name":"acid2", "code":"#5c4fa3"}]

colors = [{"name":"acid2", "code":"#5c4fa3"}]

for color in colors:
    image = Image.new("RGB", (44*factor, 59*factor), "white")
    pixels = image.load()
    color_name = color["name"]
    color_hex = color["code"].lstrip('#')
    color_dec = tuple(int(color_hex[i:i+2], 16) for i in (0, 2, 4))
    colors = get_colors(color_dec)
    change_colors(image, colors)
    image.save("chimp-front-card-"+color_name+".png")


# image = Image.new("RGB", (44*factor, 59*factor), "white")
# pixels = image.load()
# color_name = "mellow"
# colors = [(149, 235, 232), (173, 233, 205), (187, 232, 190), (206, 231, 170), (206, 231, 170), (224, 229, 151), (237, 228, 136), (250, 223, 130), (240, 213, 118)]
# change_colors(image, colors)
# image.save("chimp-front-card-"+color_name+".png")



# colors = ["#2d235e", "#452f66", "#583071", "#7d2d83", "#943b75", "#d04c8c", "#f24f95", "#cc2c71"]
# j=0
# for color in colors:
#     color_hex = color.lstrip('#')
#     color_dec = tuple(int(color_hex[i:i+2], 16) for i in (0, 2, 4))
#     colors[j] = color_dec
#     j+=1
# print(colors)