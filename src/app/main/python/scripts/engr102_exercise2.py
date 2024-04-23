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
    """A ∧ ¬(B ∧ C)"""
    return gate_and(A, gate_not(gate_and(B, C)))

print(CheckInput(1, 1, 1))
print(CheckInput(0, 0, 0))
print(CheckInput(1, 1, 0))
print(CheckInput(1, 0, 1))
print(CheckInput(0, 1, 1))
print(CheckInput(1, 0, 0))
print(CheckInput(0, 0, 1))
print(CheckInput(0, 1, 0))



