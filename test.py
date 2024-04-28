from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
import os
import time


options = Options()
options.add_argument("--window-size=1920,1080")
driver = webdriver.Chrome(options=options)
driver.get("https://www.facebook.com/marketplace/montreal")

time.sleep(5)  # Attendre 5 secondes après le chargement de la page
#folder = driver.find_element_by_xpath("//a[@href='https://www.acquisition.com/training/offers2?hsLang=en']")
folder = driver.find_element(By.XPATH, "//i[@class='x1b0d499 x1d69dk1']")
folder.click()
time.sleep(5)  # Attendre 5 secondes après le chargement de la page