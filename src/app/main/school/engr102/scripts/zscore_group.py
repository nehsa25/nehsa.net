def gate_and(input1, input2):
    """ an AND gate (input1 ^ input2) """
    gate1 = input1 and input2
    return bool(gate1)
                

# Homework 3: Z-Score Python Script (Group Homework)

#################
#  SAMPLE DATA  #
#################
# First data set: a list of positive integers (not a normal distribution)
population1 = [14, 28, 96, 97, 21, 29, 29, 4, 58, 
               42, 25, 97, 49, 33, 75, 53, 14, 53, 
               45, 87, 75, 66, 62, 55, 57, 44, 44, 
               94, 19, 96, 12, 59, 86, 88, 61, 68, 
               37, 64, 19, 46, 68, 98, 19, 54, 65, 
               30, 1, 82, 76, 3]

# Second data set: a list of negative and positive integers (normal distribution)
population2 = [-16, 10, -15, -6, -5, -20, -11, 9, -9,
               -7, 5, -14, 6, -10, -22, -19, 21, 11, 
               -18, -13, -24, -21, 14, 19, 20, 13, 16, 
               8, 4, 3, 18, 22, 17, 7, -12, -3, 
               23, -8, 2, -2, -4, 1, 12, -25, -1,
               15, 0, -23, -17, 24]

# Third data set: a list of positive integers (normal distribution)
population3 = [125, 475, 275, 550, 350, 325, 575, 
               25, 225, 150, 425, 75, 175, 650, 
               600, 625, 675, 250, 100, 0, 375, 
               500, 400, 450, 300, 525, 50, 200]

#################
#  FUNCTIONS    #
#################

def mean(data_set):
    """
    This function will return the mean of the data_set(population)
    **Do not change this function**
    """
    return sum(data_set)/len(data_set)

def stdev(data_set, avg):
    """
    This function will return the standard deviation of the data_set(population), given the mean of the data_set (avg)
    **Do not change this function**
    """
    variance = sum([(integer - avg) ** 2 for integer in data_set])/len(data_set)
    # return the square root of the variance calculation 
    return variance ** .5
	
def least(data_set):
    """
    Returns the least value in the data_set(population)
    **Do not change this function**
    """
    return min(data_set)
	
def greatest(data_set):
    """
    Returns the greatest value in the data_set(population)
    **Do not change this function**
    """
    return max(data_set)

# Your grader will use this function to help them verify your code
def test_z_score_function():
    pop1_avg = mean(population1)
    pop1_sd = stdev(population1, pop1_avg)
    
    mean_z_score_p1 = z_score(pop1_avg, pop1_avg, pop1_sd)
    
    pop2_greatest = greatest(population2)
    pop2_avg = mean(population2)
    pop2_sd = stdev(population2, pop2_avg)
    
    greatest_z_score_p2 = z_score(pop2_greatest, pop2_avg, pop2_sd)
    
    print("The z-score of the mean of population1 is", mean_z_score_p1)
    print("The z-score of the greatest value of population2 is", greatest_z_score_p2)
  

#######################################################
# YOUR CODE GOES BELOW THIS BOX.                      #
#                                                     #
# Complete the following z_score function.            #
# You may call the functions above,	                  #
#   but do not define any others (except for testing) #
# You may use arithmetic operators                    #
#  (i.e., +, -, *, **, /) but not Python Boolean      #
#  (call the provided functions instead)              #
#                                                     #
# Be sure to include names of the group members that  #
# participated in the group assignment work           #
#######################################################

def z_score(x, mu, sigma):
    """
    x is the population item
    mu is the population mean
    sigma is the population standard deviation
    
    Returns the z-score of x
    """
    
    # Participating group member names go in this comment - Lucca Truitt & Jesse Stone
    
    # Your code goes between this comment and the return
    numerator = x - mu
    zscore = numerator / sigma
    return zscore

def lucca_test_z_score(): # This is the test function that Lucca made
    pop1_least = least(population1)
    pop1_avg = mean(population1)
    pop1_sd = stdev(population1, pop1_avg)
    least_z_score_p1 = z_score(pop1_least, pop1_avg, pop1_sd)

    pop2_avg = mean(population2)
    pop2_sd = stdev(population2, pop2_avg)
    mean_z_score_p2 = z_score(pop2_avg, pop2_avg, pop2_sd)
    
    pop3_greatest = greatest(population3)
    pop3_avg = mean(population3)
    pop3_sd = stdev(population3, pop3_avg)
    greatest_z_score_p3 = z_score(pop3_greatest, pop3_avg, pop3_sd)
    
    if mean_z_score_p2 == 0:
        print("Correct: The z-score of the mean of population2 is", mean_z_score_p2)
    else: 
        print("Incorrect: The z-score of the mean of population2 is", mean_z_score_p2)

    if greatest_z_score_p3 > 0:
        print("Correct: The z-score of the greatest value of population3 is", greatest_z_score_p3)
    else: 
        print("Incorrect: The z-score of the greatest value of population3 is", greatest_z_score_p3)

    if least_z_score_p1 < 0:
        print("Correct: The z-score of the least value of population1 is", least_z_score_p1)
    else: 
        print("Incorrect: The z-score of the least value of population1 is", least_z_score_p1)
    
lucca_test_z_score()

def jesse_verify_zscore_always_returns_number(population): # This is the test function that Jesse made
    """Prints a message to console if z_score function returns a non-integer value, or if the z-score function produces the wrong result.  No output == success"""     
    population_mean = mean(population)
    population_sigma = stdev(population, mean(population))    
    for pop_item in population:
        result = z_score(pop_item, population_mean, population_sigma)
        if not isinstance(result, float):
            print(f"The z-score function did not return a valid value for {pop_item}, we got: {result}")
jesse_verify_zscore_always_returns_number(population1)
jesse_verify_zscore_always_returns_number(population2)
jesse_verify_zscore_always_returns_number(population3)

normal_distributions = [population2, population3]
not_normal_distributions = [population1]
for distribution in normal_distributions:
    min_population = least(distribution)
    mean_population = mean(distribution)
    sigmaPop = stdev(distribution, mean_population)   
    maxPop = greatest(distribution)
    result_lowest_zscore = z_score(min_population, mean_population, sigmaPop)
    result_greatest_zscore = z_score(maxPop, mean_population, sigmaPop)
    result = result_lowest_zscore + result_greatest_zscore
    if result != 0:
        print(f"Test fail, expected 0, got: {result} - This distribution is not normal (and it should be!)")

for distribution in not_normal_distributions:
    min_population = least(distribution)
    mean_population = mean(distribution)
    sigmaPop = stdev(distribution, mean_population)   
    maxPop = greatest(distribution)
    result_lowest_zscore = z_score(min_population, mean_population, sigmaPop)
    result_greatest_zscore = z_score(maxPop, mean_population, sigmaPop)
    result = result_lowest_zscore + result_greatest_zscore
    if result == 0:
        print(f"Test fail, expected non-zero result, got: {result} - This distribution is normal (and it shouldn't be!)")

avg_pop = mean(population1)
if not z_score(avg_pop, avg_pop, sigmaPop) == 0.0:
    print("The average of the population did not equal zero!")