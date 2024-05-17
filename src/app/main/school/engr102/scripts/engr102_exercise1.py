# def CheckInput(input1, input2, input3):
#     """Output Q is False when exactly 2 of the 3 inputs are True (and True otherwise.)"""
#     num_true = 0
#     if input1:
#         num_true += 1
#     if input2:
#         num_true += 1
#     if input3:
#         num_true += 1

#     print(num_true)
#     print(num_true == 2)
#     return not (num_true == 2)


# CheckInput(True, True, True)
# CheckInput(False, False, False)
# CheckInput(True, False, True)
# CheckInput(False, False, True)


def gate_and(input1, input2):
    """ an AND gate (input1 ^ input2) """  
    gate1 = input1 and input2
    return bool(gate1)

                
def gate_or(input1, input2):
    """ an OR gate (input1 v input2) """
    gate1 = input1 or input2
    return bool(gate1)                          


def gate_xor(input1, input2):
    """ an XOR gate ( (input1 ^ -input2) v (-input1 ^ input2)) """
    gate1 = input1 and not input2
    gate2 = input2 and not input1
    return bool(gate1 or gate2)                     


def gate_nand(input1, input2):
    """ a NAND gate (-(input1 ^ input2)) """
    gate1 = not(input1 and input2)
    return bool(gate1)

                                    
def gate_nor(input1, input2):
    """ a NOR gate (-(input1 v input2)) """
    gate1 = not(input1 or input2)
    return bool(gate1)

                                    
def gate_not(input1):
    """ a NOT gate (-input1) """
    return bool(not input1)


def CheckInput(A, B, C):
    """~((A ^ B ^ ~C) v (A ^ C ^ ~B) v (B ^ C ^ ~A))"""
    gate1 = gate_and(gate_and(A, B), gate_not(C))
    gate2 = gate_and(gate_and(A, C), gate_not(B))
    gate3 = gate_and(gate_and(B, C), gate_not(A))
    gate4 = gate_or(gate1, gate_or(gate2, gate3))
    gate5 = gate_not(gate4)

    return gate5

print(CheckInput(True, True, True))
print(CheckInput(False, False, False))
print(CheckInput(True, False, True))
print(CheckInput(True, True, False))
print(CheckInput(False, True, True))



