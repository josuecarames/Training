#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Jun 17 13:38:21 2019

@author: josuecarames
"""

s = "bobobasdfbobobobobasdfa;lknobob"

name = "bob"
total = 0
t = "Number of times bob occurs is: "

for n in range(len(s)):
    if str(s[n: n+3]) == name:
        total += 1
    else:
        str(s[n: n+3])
print(str(t) + str(total))