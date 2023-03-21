import requests
from bs4 import BeautifulSoup

url = 'https://fbref.com/en/squads/3148d79f/2000-2001/Bradford-City-Stats'
response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

# Find the table that contains the player data for the relevant years
table = soup.find('table', {'id': 'stats_standard_9'})

# Iterate through each row of the table and extract the player names
player_names = []
for row in table.find_all('tr')[2:]:
    cells = row.find_all('th')
    name = cells[0].get_text()
    player_names.append(name)

# Repeat the above steps for each year of interest (2000-2023)
# and store the player names in a list or a file for further analysis
print(player_names)
