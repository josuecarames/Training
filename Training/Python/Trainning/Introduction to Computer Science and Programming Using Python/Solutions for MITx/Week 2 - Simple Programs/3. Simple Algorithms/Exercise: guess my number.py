x = input(int)
low = 0
high = 100
ans = (high + low)/2






    print("Please think of a number between 0 and 100!")



input()







x = 25
epsilon = 0.01
numGuesses = 0


while abs(ans**2 - x) >= epsilon:
    print('low = ' + str(low) + ' high = ' + str(high) + ' ans = ' + str(ans))
    numGuesses += 1
    if ans**2 < x:
        low = ans
    else:
        high = ans
    ans = (high + low)/2.0
print('numGuesses = ' + str(numGuesses))
print(str(ans) + ' is close to square root of ' + str(x))
