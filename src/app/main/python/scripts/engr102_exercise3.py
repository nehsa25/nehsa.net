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


def CheckInput(A, B, C, D, expected):
    """(¬A ∧ B ∧ C ∧ D) ∨ (A ∧ ¬B ∧ C ∧ D) ∨ (A ∧ B ∧ ¬C ∧ D) ∨ (A ∧ B ∧ C ∧ ¬D)"""
    subexpression1 = gate_and(gate_not(A), gate_and(B, gate_and(C, D)))
    subexpression2 = gate_and(gate_not(B), gate_and(A, gate_and(C, D)))
    subexpression3 = gate_and(gate_not(C), gate_and(A, gate_and(B, D)))
    subexpression4 = gate_and(gate_not(D), gate_and(A, gate_and(B, C)))
    result = gate_or(subexpression1, gate_or(subexpression2, gate_or(subexpression3, subexpression4)))
    return result == expected

print(CheckInput(0, 0, 0, 0, 0))
print(CheckInput(0, 0, 0, 1, 0))
print(CheckInput(0, 0, 1, 0, 0))
print(CheckInput(0, 0, 1, 1, 0))
print(CheckInput(0, 1, 0, 0, 0))
print(CheckInput(0, 1, 0, 1, 0))
print(CheckInput(0, 1, 1, 0, 0))
print(CheckInput(0, 1, 1, 1, 1))
print(CheckInput(1, 0, 0, 0, 0))
print(CheckInput(1, 0, 0, 1, 0))
print(CheckInput(1, 0, 1, 0, 0))
print(CheckInput(1, 0, 1, 1, 1))
print(CheckInput(1, 1, 0, 0, 0))
print(CheckInput(1, 1, 0, 1, 1))
print(CheckInput(1, 1, 1, 0, 1))
print(CheckInput(1, 1, 1, 1, 0))



