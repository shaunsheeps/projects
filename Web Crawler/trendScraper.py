from pytrends.request import TrendReq
import pandas as pd

# Initialize pytrends
pytrends = TrendReq(hl='en-US', tz=360)

# Set up a list of keywords you want to track
keywords = ['Python', 'Data Science', 'Machine Learning']

# Get Google Trends data for the keywords
pytrends.build_payload(keywords, cat=0, timeframe='today 12-m', geo='', gprop='')

# Get the interest over time
interest_over_time_df = pytrends.interest_over_time()

# Print the dataframe with the data
print(interest_over_time_df)

# Optionally, save the data to a CSV file
interest_over_time_df.to_csv('google_trends_data.csv')
