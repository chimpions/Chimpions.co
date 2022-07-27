import os
import shutil
import json

# required folders:
# ./nft - png files
# ./gifs - gif files
# ./staging - place to copy new gifs and metadata file into
# ./lore - md files

base_path = "./chimpions"
nfts = os.listdir(os.path.join(base_path, "nft"))

metadata = []
for nft in nfts:
  j = { 
    "index": len(metadata),
    "path": nft
  }
  short_name = nft.split("-")[0].replace('The', '').lower()
  old_gif_path = os.path.join(base_path, "gifs", f"{short_name}.gif")
  new_gif_path = os.path.exists(os.path.join(base_path, "gifs", staging_gif_file))

  staging_gif_file = nft.replace(".png", ".gif")
  staging_path = os.path.join(base_path, "staging", staging_gif_file)
  
  if os.path.exists(old_gif_path):
    shutil.copy(old_gif_path, staging_path)
    j["animationPath"] = staging_gif_file
  elif os.path.exists(new_gif_path):
    shutil.copy(new_gif_path, staging_path)
    j["animationPath"] = staging_gif_file

  lore_path = os.path.join(base_path, "lore", f'{nft.split("-")[0]}.md')
  if os.path.exists(lore_path):
    j["lore"] = True
  
  metadata.append(j)
        
metadata_path = os.path.join(base_path, "staging", "chimpions.json")
with open(metadata_path, "w") as f:
  json.dump(metadata, f, ensure_ascii=False, indent=2)
