#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Jun 17 13:21:13 2019

@author: josuecarames
"""

s = "asdfagabljknfdv pikrgmspxzdio [ser"

numVowels = 0

for char in s:
    if char == "a" or char == "e" or char == "i" or char == "o" or char == "u":
        numVowels += 1
print ("Number of vowels: " + str(numVowels))