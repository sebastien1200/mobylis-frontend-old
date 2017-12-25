#!/usr/bin/python
import os

vendorJS = [];

buildFolder = "./dist/"

for file in os.listdir(buildFolder):

  if file.endswith(".bundle.js") & file.startswith("vendor"):
    vendorJS.append(buildFolder + file)

os.system("uglifyjs " +
          "--compress " +
          "--mangle  " +
          "--output " +
          vendorJS[0] +
          " -- " +
          vendorJS[0])

