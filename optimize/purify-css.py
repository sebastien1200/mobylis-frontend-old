#!/usr/bin/python
import os

listJS = [];
listCSS = [];

totalJS= '';


buildFolder = "./dist/"

for file in os.listdir(buildFolder):

  # Retrieve all js files
  if file.endswith(".js") :
    listJS.append(buildFolder + file)

  # Retrieve all css file
  if file.endswith(".bundle.css"):
    listCSS.append(buildFolder + file)

# Concat all js file
for i, jsFile in enumerate(listJS):
  totalJS = totalJS + " " + jsFile

os.system("purifycss" + " " +
          listCSS[0] + " " +
          totalJS + " " +
          "--min --info " +
          "--out " + listCSS[0])

