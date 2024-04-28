from splinter import Browser
from bs4 import BeautifulSoup as soup
import re
import pandas as pd
import matplotlib.pyplot as plt
import time
from selenium.webdriver.common.by import By
import datetime
from pymongo import MongoClient 
#Set up Splinter
browser = Browser('chrome')

# Définition de l'URL de base
base_url = "https://www.facebook.com/marketplace/montreal/search?"

# Définition des paramètres de recherche pour les appartements
min_price = 500  # Prix minimum en dollars
max_price = 5000  # Prix maximum en dollars
min_bedrooms = 1  # Nombre minimum de chambres
min_bathrooms = 1  # Nombre minimum de salles de bains
min_sqft = 500  # Superficie minimum en pieds carrés
max_sqft = 2000  # Superficie maximum en pieds carrés
days_listed = 7  # Nombre de jours depuis la mise en ligne
pets_allowed = True  # Animaux autorisés
furnished = False  # Meublé ou non
neighborhood = "Montreal"  # Quartier souhaité
recherche = "appartment"

choixUrl = []

# Construction de l'URL complet
url = f"{base_url}minPrice={min_price}&maxPrice={max_price}&minBedrooms={1}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={neighborhood}&exact=false"
#&furnished={furnished}
#&petsAllowed={pets_allowed}



urls =[
#1bedroom
f"{base_url}minPrice={min_price}&maxPrice={1000}&minBedrooms={1}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"
f"{base_url}minPrice={min_price}&maxPrice={1500}&minBedrooms={1}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"
f"{base_url}minPrice={1500}&maxPrice={3000}&minBedrooms={1}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"
#2bedrooms
f"{base_url}minPrice={min_price}&maxPrice={1000}&minBedrooms={2}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"
f"{base_url}minPrice={min_price}&maxPrice={1500}&minBedrooms={2}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"
f"{base_url}minPrice={1500}&maxPrice={3000}&minBedrooms={2}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"

]




#1bedroom
url_moins_que_1000_1_bedroom = f"{base_url}minPrice={min_price}&maxPrice={1000}&minBedrooms={1}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"
url_moins_que_1500_1_bedroom = f"{base_url}minPrice={min_price}&maxPrice={1500}&minBedrooms={1}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"
url_plus_que_1500_1_bedroom = f"{base_url}minPrice={1500}&maxPrice={3000}&minBedrooms={1}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"
#2bedrooms
url_moins_que_1000_2_bedroom = f"{base_url}minPrice={min_price}&maxPrice={1000}&minBedrooms={2}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"
url_moins_que_1500_2_bedroom = f"{base_url}minPrice={min_price}&maxPrice={1500}&minBedrooms={2}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"
url_plus_que_1500_2_bedroom = f"{base_url}minPrice={1500}&maxPrice={3000}&minBedrooms={2}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"

#3bedrooms
url_moins_que_1000_3_bedroom = f"{base_url}minPrice={min_price}&maxPrice={1000}&minBedrooms={3}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"
url_moins_que_1500_3_bedroom = f"{base_url}minPrice={min_price}&maxPrice={1500}&minBedrooms={3}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"
url_plus_que_1500_3_bedroom = f"{base_url}minPrice={1500}&maxPrice={3000}&minBedrooms={3}&minBathrooms={min_bathrooms}&minSqft={min_sqft}&maxSqft={max_sqft}&daysSinceListed={days_listed}&query={min_bedrooms}+bedroom+{recherche}&exact=false"




browser.visit(url)

# Scroll down to load more results

#define the number of times to scroll the page
scroll_count = 4

#Define the delay (in seconds) between each scroll
scroll_delay = 2

#Loop to perform scrolling
for _ in range(scroll_count):
    #Execute Javascript to scroll to the bottom of the page 
    browser.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    time.sleep(scroll_delay)

    # Parse the HTML
html = browser.html
# Create a BeautifulSoup object from the scraped HTML
market_soup = soup(html, 'html.parser')
# Check if HTML was scraped correctly
#market_soup

# End the automated browsing session
browser.quit()

#merde  qui sont pas des appartements donc je les mets dans une liste pour supprimer plus tard
elements_a_supprimer = ['Filters', 'Categories']

#Extract all the necessary info and insert into lists
titles_div = market_soup.find_all('span', class_="x1lliihq x6ikm8r x10wlt62 x1n2onr6")

#for loop that goes everything inside titles div & stripping everything that not pure text
titles_list = [title.text.strip() for title in titles_div]

#Nouvelle liste cleans
titles_clean = [title for title in titles_list if title not in elements_a_supprimer]

prices_div = market_soup.find_all('span', class_="x193iq5w xeuugli x13faqbe x1vvkbs xlh3980 xvmahel x1n0sxbx x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x4zkp8e x3x7a5m x1lkfr7t x1lbecb7 x1s688f xzsf02u")
prices_list = [price.text.strip() for price in prices_div]

city_div = market_soup.find_all('span', class_="x193iq5w xeuugli x13faqbe x1vvkbs xlh3980 xvmahel x1n0sxbx x1lliihq x1s928wv xhkezso x1gmr53x x1cpjm7i x1fgarty x1943h6x x4zkp8e x676frb x1nxh6w3 x1sibtaa xo1l8bm xi81zsa")
city_list = [city.text.strip() for city in city_div]

urls_div = market_soup.find_all('a',class_="x1i10hfl xjbqb8w x1ejq31n xd10rxx x1sy0etr x17r0tee x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz x1heor9g x1lku1pv")
urls_list = [url.get('href') for url in urls_div]

img_div = market_soup.find_all('img', class_="xt7dq6l xl1xv1r x6ikm8r x10wlt62 xh8yej3")
img_list = [img.get('src') for img in img_div]



appartment_list = []

min_length = min(len(titles_list), len(prices_list), len(city_list), len(urls_list))

for i in range(min_length):
    room_dict = {}

    
    room_dict["title"] = titles_clean[i] 
    #Extract price (assuming it's a number with optional decimal point)
    room_dict["Price"] = int(re.sub(r'[^\d.]', '', prices_list[i]))
    #Add city and URL directly
    room_dict["City"] = city_list[i]
    room_dict["URL"] = urls_list[i]
    room_dict["Image"] = img_list[i]
    appartment_list.append(room_dict)

  
print(appartment_list)


appartment_list_df = pd.DataFrame(appartment_list)

appartment_list_df['URL'] = 'https://www.facebook.com/' + appartment_list_df['URL']

appartment_list_df