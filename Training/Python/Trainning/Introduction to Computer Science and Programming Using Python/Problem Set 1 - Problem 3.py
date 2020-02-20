#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Mon Jun 17 13:38:21 2019

@author: josuecarames
"""

s = "azcbobobegghakl"

subSet = []
streak = ''
longest = ''

for char in range(len(s)):    
    streak = s[char]
    while char < len(s)-1 and s[char] <= s[char+1]:
        streak += s[char+1]
        char+=1
    char+=1
    subSet.append(streak)
for index in subSet:
    if len(index) > len(longest):
        longest = index
print('Longest substring in alphabetical order is: ' + str(longest))
