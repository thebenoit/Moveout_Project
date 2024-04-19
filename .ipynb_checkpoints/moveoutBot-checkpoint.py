from splinter import Browser
from bs4 import BeautifulSoup as soup
import re
import pandas as pd
import matplotlib.pyplot as plt
import time

#Set up Splinter
browser = Browser('chrome')

#set base url
base_url = "https://www.facebook.com/marketplace/montreal"

# set up search parameters
min_price = 1000
max_price = 30000
days_listed = 7
min_mileage = 50000
max_mileage = 2000000
min_year = 2000
max_year = 2020
transmission = "automatic"
make = "Honda"
model = "Civic"

#set up full Url
url =f"{base_url}minPrice={min_price}&maxPrice={max_price}&daySinceListed={days_listed}&maxMileage={max_mileage}&maxYear={max_year}&minMileage={min_mileage}&minYear={min_year}"

browser.visit(url)
