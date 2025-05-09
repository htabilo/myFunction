from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Iniciar el navegador
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.selenium.dev/blog/")



time.sleep(2)
driver.quit()
