#!/usr/bin/python
import os

fileGZIP = []

buildFolder = "./dist/"

for file in os.listdir(buildFolder):

  if file.endswith(".gz"):
    os.remove(buildFolder + file)



