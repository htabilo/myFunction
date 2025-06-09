from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time

# Iniciar el navegador
driver = webdriver.Chrome()
driver.get("https://www.selenium.dev/selenium/web/locators_tests/locators.html")
element = driver.find_element(By.CSS_SELECTOR, "#fname")
print("pag encontrada", element)

time.sleep(4)
driver.quit()
