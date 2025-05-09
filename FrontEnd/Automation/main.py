from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
# Esto descarga y gestiona el driver automáticamente
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("http://127.0.0.1:5500/FrontEnd/Automation/index.html")
time.sleep(2)
# Obtenemos texto de la primera fila de datos
valor = driver.find_element(By.XPATH, "//*[@id='main']/tbody/tr[2]/td[2]").text
print(valor)
rows=len(driver.find_elements(By.XPATH, "//*[@id='main']/tbody/tr")) #trae todas las filas de la tabla
print("Cantidad de filas(incluye encabezado):", rows)
col=len(driver.find_elements(By.XPATH, "//*[@id='main']/tbody/tr[1]/th"))#extrae todas las columnas
print("Cantidad de columnas:", col)
for n in range(2, rows+1):
    for b in range(1, col+1):
        dato=driver.find_element(By.XPATH, "//*[@id='main']/tbody/tr["+str(n)+"]/td["+str(b)+"]").text
        print(dato, end='                                            ')
        print()
driver.quit()