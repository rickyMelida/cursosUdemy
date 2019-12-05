nota = int(input("Dime tu nota: "))

if nota >= 1 and nota <= 4:
    print("Suspendido")
elif nota == 5:
    print("Suficiente")
elif nota == 6 or nota == 7:
    print("Aprobado")
elif nota == 8:
    print("Maravilloso")
elif nota == 9 or nota == 10:
    print("Excelente")
else:
    print("Eres un sonso que no sabe escribir una nota")

print("Terminado")