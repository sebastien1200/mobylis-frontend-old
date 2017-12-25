#!/usr/bin/python
import os

os.system("python optimize/purify-css.py")
os.system("python optimize/uglify-js.py")
os.system("python optimize/remove-gzip.py")


